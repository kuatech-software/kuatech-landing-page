import Image from 'next/image'
import { ArrowRight, Terminal } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Selva misionera de noche: tenue y fundida hacia arriba con el fondo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-55 [mask-image:linear-gradient(to_top,black_40%,transparent_95%)]"
      >
        <Image src="/images/selva-misionera.webp" alt="" fill sizes="100vw" className="object-cover object-center" />
      </div>
      <div
        aria-hidden="true"
        className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]"
      />
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 pt-10 pb-24 sm:px-6 md:pt-24 lg:grid-cols-2 lg:gap-10 lg:px-8 lg:pt-28 lg:pb-32">
        <div className="flex flex-col items-start">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-green/30 bg-brand-green/5 px-3 py-1 font-mono text-xs text-brand-green backdrop-blur">
            <span className="animate-pulse-dot size-1.5 rounded-full bg-brand-green shadow-[0_0_8px_rgba(16,185,129,0.9)]" />
            software_factory.status = &quot;entregando&quot;
          </div>

          <h1 className="text-5xl leading-[1.05] font-extrabold tracking-tight text-balance text-white sm:text-6xl lg:text-7xl">
            Tecnología que{' '}
            <span className="bg-gradient-to-r from-brand-green to-brand-orange bg-clip-text text-transparent">
              impulsa tu negocio
            </span>
          </h1>

          <p className="mt-6 text-xl font-semibold text-white sm:text-2xl">
            Ingeniería de software de punta a punta.
          </p>

          <p className="mt-4 max-w-xl text-lg leading-relaxed text-pretty text-muted-foreground">
            Diseñamos y desarrollamos software a medida: desde la idea hasta producción, con
            arquitectura preparada para crecer.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="#contacto"
              className="group inline-flex items-center justify-center gap-2 rounded-lg bg-brand-orange px-6 py-3 text-base font-semibold text-background transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_32px_-2px_rgba(255,107,0,0.75)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange"
            >
              Hablemos de tu proyecto
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

          <dl className="mt-14 grid w-full max-w-lg grid-cols-3 gap-4 border-t border-white/5 pt-8 sm:gap-6">
            {[
              { value: 'Full-stack', label: 'Un solo equipo' },
              { value: 'CI/CD', label: 'Entregas automatizadas' },
              { value: 'Misiones', label: 'Hecho en Argentina' },
            ].map((stat) => (
              <div key={stat.label}>
                <dt className="font-mono text-xs text-muted-foreground">{stat.label}</dt>
                <dd className="mt-1 text-lg font-bold whitespace-nowrap text-white sm:text-2xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* En mobile el Kuati va primero (y más chico) para que se vea sin scrollear */}
        <div className="relative order-first mx-auto w-full max-w-[200px] sm:max-w-xs lg:order-none lg:max-w-sm">
          {/* Glows: naranja detrás de la cola, verde del lado de la laptop */}
          <div
            aria-hidden="true"
            className="absolute top-[5%] -left-[15%] size-[70%] rounded-full bg-brand-orange/30 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="absolute top-[30%] -right-[15%] size-[65%] rounded-full bg-brand-green/20 blur-3xl"
          />

          <div className="relative">
            <Image
              src="/images/kuati-mate.webp"
              alt="Kuati, la mascota de Kuatech: un coatí 3D con lentes de realidad aumentada y cola rayada luminosa, tomando mate frente a su laptop Kuatech"
              width={1024}
              height={1047}
              priority
              sizes="(min-width: 1024px) 384px, (min-width: 640px) 320px, 200px"
              className="animate-float relative h-auto w-full object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
            />
            {/* Sombra de piso que acompaña la flotación */}
            <div
              aria-hidden="true"
              className="animate-float-shadow mx-auto -mt-4 h-5 w-3/5 rounded-[50%] bg-black/60 blur-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
