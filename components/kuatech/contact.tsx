import { ArrowRight, Mail, MessageCircle } from 'lucide-react'
import { EMAIL_HREF, SITE, WHATSAPP_HREF } from '@/lib/site'

export function Contact() {
  return (
    <section id="contacto" className="relative scroll-mt-20 overflow-hidden border-t border-white/5 py-24 lg:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 h-72 w-[40rem] max-w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-brand-green/10 to-brand-orange/10 blur-3xl"
      />
      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
        <p className="font-mono text-sm text-brand-orange">{'// contacto'}</p>
        <h2 className="mt-4 text-4xl font-bold tracking-tight text-balance text-white sm:text-5xl">
          ¿Tenés una idea? Hablemos.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-muted-foreground">
          Contanos qué querés construir. Te respondemos rápido y sin compromiso.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2 rounded-lg bg-brand-orange px-6 py-3 text-base font-semibold text-background transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_32px_-2px_rgba(255,107,0,0.75)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange"
          >
            <MessageCircle className="size-4" aria-hidden="true" />
            Escribinos por WhatsApp
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
          </a>
          <a
            href={EMAIL_HREF}
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-brand-green/40 px-6 py-3 text-base font-medium text-brand-green transition-colors hover:bg-brand-green/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-green"
          >
            <Mail className="size-4" aria-hidden="true" />
            {SITE.email}
          </a>
        </div>
      </div>
    </section>
  )
}
