import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

export function CtaBand() {
  return (
    <section aria-labelledby="cta-band-title" className="relative py-4 lg:py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-brand-orange/[0.12] via-surface/80 to-brand-green/[0.12] px-6 py-10 sm:px-10 lg:py-0">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-20 -left-20 size-72 rounded-full bg-brand-orange/20 blur-3xl"
          />
          <div className="relative grid items-center gap-8 lg:grid-cols-[minmax(0,280px)_1fr]">
            {/* El Kuati señala hacia el mensaje y el botón */}
            <div className="mx-auto w-40 sm:w-52 lg:w-full lg:self-end">
              <Image
                src="/images/kuati-pointing.webp"
                alt="Kuati señalando hacia el botón de contacto"
                width={976}
                height={1094}
                sizes="(min-width: 1024px) 280px, 208px"
                className="h-auto w-full drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)] lg:-mb-2 lg:pt-8"
              />
            </div>

            <div className="text-center lg:py-14 lg:text-left">
              <h2 id="cta-band-title" className="text-3xl font-bold tracking-tight text-balance text-white sm:text-4xl">
                ¿Tenés un sistema que necesita una segunda vida?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-muted-foreground lg:mx-0">
                Legacy, un MVP que creció de golpe o una idea en servilleta: contanos tu caso y te
                proponemos un camino concreto, sin compromiso.
              </p>
              <a
                href="#contacto"
                className="group mt-8 inline-flex items-center justify-center gap-2 rounded-lg bg-brand-orange px-6 py-3 text-base font-semibold text-background transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_32px_-2px_rgba(255,107,0,0.75)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange"
              >
                Hablemos de tu proyecto
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
