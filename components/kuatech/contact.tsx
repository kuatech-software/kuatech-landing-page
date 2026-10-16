import Image from 'next/image'
import { ArrowRight, MessageCircle } from 'lucide-react'
import { WHATSAPP_HREF } from '@/lib/site'
import { ContactForm } from './contact-form'

export function Contact() {
  return (
    <section id="contacto" className="relative scroll-mt-20 overflow-hidden border-t border-white/5 py-24 lg:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 h-72 w-[40rem] max-w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-brand-green/10 to-brand-orange/10 blur-3xl"
      />
      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
        <Image
          src="/images/kuati-waving.webp"
          alt="Kuati saludando con un celular en la mano"
          width={992}
          height={1088}
          sizes="(min-width: 640px) 176px, 144px"
          className="mx-auto mb-6 h-auto w-36 drop-shadow-[0_16px_32px_rgba(0,0,0,0.5)] sm:w-44"
        />
        <p className="font-mono text-sm text-brand-orange">{'// contacto'}</p>
        <h2 className="mt-4 text-4xl font-bold tracking-tight text-balance text-white sm:text-5xl">
          ¿Tenés una idea? Hablemos.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-muted-foreground">
          Contanos qué querés construir. Te respondemos rápido y sin compromiso.
        </p>

        <div className="mt-10">
          <ContactForm />
        </div>

        <p className="mt-8 text-sm text-muted-foreground">¿Preferís algo más directo?</p>
        <a
          href={WHATSAPP_HREF}
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-3 inline-flex items-center justify-center gap-2 rounded-lg border border-brand-green/40 px-6 py-3 text-base font-medium text-brand-green transition-colors hover:bg-brand-green/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-green"
        >
          <MessageCircle className="size-4" aria-hidden="true" />
          Escribinos por WhatsApp
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
        </a>
      </div>
    </section>
  )
}
