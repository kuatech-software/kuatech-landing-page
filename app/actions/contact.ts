'use server'

import { headers } from 'next/headers'
import { Resend } from 'resend'
import { contactSchema, type ContactField, type ContactState } from '@/lib/contact-schema'

const TURNSTILE_VERIFY_URL = 'https://challenges.cloudflare.com/turnstile/v0/siteverify'

async function verifyTurnstile(token: string | null, ip: string | null): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY
  // Sin clave: en desarrollo dejamos pasar, en producción rechazamos.
  if (!secret) return process.env.NODE_ENV !== 'production'
  if (!token) return false

  const body = new URLSearchParams({ secret, response: token })
  if (ip) body.append('remoteip', ip)

  try {
    const res = await fetch(TURNSTILE_VERIFY_URL, { method: 'POST', body })
    const data = (await res.json()) as { success: boolean }
    return data.success
  } catch {
    return false
  }
}

export async function sendContact(_prev: ContactState, formData: FormData): Promise<ContactState> {
  // Honeypot: un bot completa el campo oculto; respondemos OK sin enviar nada.
  if (formData.get('website')) return { status: 'success' }

  const raw = {
    name: String(formData.get('name') ?? ''),
    email: String(formData.get('email') ?? ''),
    company: String(formData.get('company') ?? ''),
    message: String(formData.get('message') ?? ''),
  }

  const parsed = contactSchema.safeParse(raw)
  if (!parsed.success) {
    const fieldErrors: Partial<Record<ContactField, string>> = {}
    for (const issue of parsed.error.issues) {
      const field = issue.path[0] as ContactField
      fieldErrors[field] ??= issue.message
    }
    return { status: 'error', message: 'Revisá los campos marcados.', fieldErrors, values: raw }
  }

  const h = await headers()
  const ip = h.get('x-forwarded-for')?.split(',')[0]?.trim() ?? null
  const token = formData.get('cf-turnstile-response')
  const human = await verifyTurnstile(typeof token === 'string' ? token : null, ip)
  if (!human) {
    return { status: 'error', message: 'No pudimos verificar que no sos un robot. Probá de nuevo.', values: raw }
  }

  const apiKey = process.env.RESEND_API_KEY
  const to = process.env.CONTACT_TO_EMAIL
  console.log('kuatech ApiKey', apiKey)
  console.log('kuatech To', to)
  if (!apiKey || !to) {
    console.error('[contact] Faltan RESEND_API_KEY o CONTACT_TO_EMAIL')
    return { status: 'error', message: 'El formulario no está disponible ahora. Escribinos por WhatsApp.', values: raw }
  }

  const { name, email, company, message } = parsed.data
  const resend = new Resend(apiKey)
  const { error } = await resend.emails.send({
    from: process.env.CONTACT_FROM_EMAIL ?? 'Kuatech Web <onboarding@resend.dev>',
    to,
    replyTo: email,
    subject: `Nuevo contacto web: ${name}${company ? ` (${company})` : ''}`,
    text: [`Nombre: ${name}`, `Email: ${email}`, `Empresa: ${company || '-'}`, '', message].join('\n'),
  })

  if (error) {
    console.error('[contact] Resend error', error)
    return { status: 'error', message: 'No pudimos enviar el mensaje. Probá de nuevo o escribinos por WhatsApp.', values: raw }
  }

  return { status: 'success' }
}
