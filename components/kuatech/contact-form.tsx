'use client'

import Script from 'next/script'
import { useActionState, useEffect } from 'react'
import { CheckCircle2, Loader2, Send } from 'lucide-react'
import { sendContact } from '@/app/actions/contact'
import type { ContactField, ContactState } from '@/lib/contact-schema'
import { cn } from '@/lib/utils'

declare global {
  interface Window {
    turnstile?: { reset: (widget?: string) => void }
  }
}

const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY

const initialState: ContactState = { status: 'idle' }

const inputClass =
  'w-full rounded-lg border border-white/10 bg-surface/80 px-4 py-3 text-base text-white placeholder:text-muted-foreground/60 transition-colors outline-none focus:border-brand-orange/60 focus:ring-2 focus:ring-brand-orange/20 aria-invalid:border-red-500/60'

export function ContactForm() {
  const [state, formAction, pending] = useActionState(sendContact, initialState)

  // El token de Turnstile es de un solo uso: tras un error hay que pedir otro.
  useEffect(() => {
    if (state.status === 'error') window.turnstile?.reset()
  }, [state])

  if (state.status === 'success') {
    return (
      <div role="status" className="flex flex-col items-center gap-3 rounded-2xl border border-brand-green/30 bg-brand-green/5 px-6 py-10 text-center">
        <CheckCircle2 className="size-10 text-brand-green" aria-hidden="true" />
        <p className="text-xl font-semibold text-white">¡Mensaje enviado!</p>
        <p className="text-muted-foreground">Te respondemos a la brevedad.</p>
      </div>
    )
  }

  const errors = state.status === 'error' ? state.fieldErrors : undefined
  const values = state.status === 'error' ? state.values : undefined

  return (
    <form action={formAction} noValidate className="space-y-5 rounded-2xl border border-white/10 bg-surface/50 p-6 text-left backdrop-blur sm:p-8">
      {TURNSTILE_SITE_KEY && (
        <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js" strategy="afterInteractive" />
      )}

      {/* Honeypot: invisible para humanos */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label>
          No completar
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="name" label="Nombre" error={errors?.name}>
          <input id="name" name="name" autoComplete="name" required defaultValue={values?.name} aria-invalid={!!errors?.name} aria-describedby={errors?.name ? 'name-error' : undefined} className={inputClass} />
        </Field>
        <Field id="email" label="Email" error={errors?.email}>
          <input id="email" name="email" type="email" autoComplete="email" required defaultValue={values?.email} aria-invalid={!!errors?.email} aria-describedby={errors?.email ? 'email-error' : undefined} className={inputClass} />
        </Field>
      </div>

      <Field id="company" label="Empresa" optional error={errors?.company}>
        <input id="company" name="company" autoComplete="organization" defaultValue={values?.company} aria-invalid={!!errors?.company} className={inputClass} />
      </Field>

      <Field id="message" label="¿Qué querés construir?" error={errors?.message}>
        <textarea id="message" name="message" rows={5} required defaultValue={values?.message} aria-invalid={!!errors?.message} aria-describedby={errors?.message ? 'message-error' : undefined} placeholder="Contanos el problema, el contexto y, si lo tenés, un plazo estimado." className={cn(inputClass, 'resize-y')} />
      </Field>

      {TURNSTILE_SITE_KEY && (
        <div className="cf-turnstile" data-sitekey={TURNSTILE_SITE_KEY} data-theme="dark" data-language="es" />
      )}

      {state.status === 'error' && (
        <p role="alert" className="text-sm text-red-400">{state.message}</p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="group inline-flex w-full items-center justify-center gap-2 rounded-lg bg-brand-orange px-6 py-3 text-base font-semibold text-background transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_32px_-2px_rgba(255,107,0,0.75)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange disabled:pointer-events-none disabled:opacity-60 sm:w-auto"
      >
        {pending ? <Loader2 className="size-4 animate-spin" aria-hidden="true" /> : <Send className="size-4" aria-hidden="true" />}
        {pending ? 'Enviando…' : 'Enviar mensaje'}
      </button>
    </form>
  )
}

function Field({
  id,
  label,
  optional,
  error,
  children,
}: {
  id: ContactField
  label: string
  optional?: boolean
  error?: string
  children: React.ReactNode
}) {
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="block text-sm font-medium text-white">
        {label}
        {optional && <span className="ml-1.5 font-mono text-xs text-muted-foreground">opcional</span>}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="text-sm text-red-400">{error}</p>
      )}
    </div>
  )
}
