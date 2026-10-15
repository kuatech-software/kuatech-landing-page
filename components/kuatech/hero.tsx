import Image from 'next/image'
import { ArrowRight, Terminal } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]"
      />
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 pt-16 pb-24 sm:px-6 md:pt-24 lg:grid-cols-2 lg:gap-10 lg:px-8 lg:pt-28 lg:pb-32">
        <div className="flex flex-col items-start">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-green/30 bg-brand-green/5 px-3 py-1 font-mono text-xs text-brand-green backdrop-blur">
            <span className="animate-pulse-dot size-1.5 rounded-full bg-brand-green shadow-[0_0_8px_rgba(16,185,129,0.9)]" />
            software_factory.status = &quot;entregando&quot;
          </div>

          <h1 className="text-5xl leading-[1.05] font-extrabold tracking-tight text-balance text-white sm:text-6xl lg:text-7xl">
            Ingeniería de software{' '}
            <span className="bg-gradient-to-r from-brand-green to-brand-orange bg-clip-text text-transparent">
              de punta a punta
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-pretty text-muted-foreground">
            Convertimos requerimientos complejos en arquitectura limpia y escalable: desde el
            primer boceto hasta sistemas en producción que tu equipo disfrutará mantener.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="#contacto"
              className="group inline-flex items-center justify-center gap-2 rounded-lg bg-brand-orange px-6 py-3 text-base font-semibold text-background transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_32px_-2px_rgba(255,107,0,0.75)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange"
            >
              Contactanos
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 px-2 py-3 font-mono text-sm text-muted-foreground transition-colors hover:text-white"
            >
              <Terminal className="size-4 text-brand-green" aria-hidden="true" />
              ver --servicios
            </a>
          </div>

          <dl className="mt-14 grid w-full max-w-lg grid-cols-3 gap-6 border-t border-white/5 pt-8">
            {[
              { value: 'Full-stack', label: 'Un solo equipo' },
              { value: 'CI/CD', label: 'Entregas automatizadas' },
              { value: 'Misiones', label: 'Hecho en Argentina' },
            ].map((stat) => (
              <div key={stat.label}>
                <dt className="font-mono text-xs text-muted-foreground">{stat.label}</dt>
                <dd className="mt-1 text-2xl font-bold text-white">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative mx-auto w-full max-w-2xl">
          <div
            aria-hidden="true"
            className="absolute inset-6 rounded-full bg-brand-orange/30 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-6 -left-6 size-40 rounded-full bg-brand-green/20 blur-3xl"
          />
          <div className="animate-float relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-3 shadow-2xl backdrop-blur-xl">
            <div className="flex items-center gap-1.5 px-2 pb-3">
              <span className="size-2.5 rounded-full bg-white/15" />
              <span className="size-2.5 rounded-full bg-white/15" />
              <span className="size-2.5 rounded-full bg-white/15" />
              <span className="ml-3 font-mono text-xs text-muted-foreground">kuatech.brand</span>
            </div>
            <div className="relative aspect-[1408/768] overflow-hidden rounded-2xl border border-white/5 bg-background">
              <Image
                src="/images/kuatech-brand.jpg"
                alt="Kuatech software factory: un coatí 3D con lentes de realidad aumentada y cola rayada luminosa, programando en una laptop sobre un chip de circuito"
                fill
                priority
                sizes="(min-width: 1024px) 672px, 90vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
