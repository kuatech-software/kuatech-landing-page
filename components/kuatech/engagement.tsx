import { RefreshCw, Rocket, Wrench } from 'lucide-react'
import { BentoCard } from './bento-card'
import { SectionHeading } from './section-heading'

const models = [
  {
    title: 'Proyecto nuevo',
    text: 'Un sistema desde cero, pensado para tu negocio. Definimos alcance, plazos y entregables antes de arrancar.',
    icon: <Rocket className="size-5" aria-hidden="true" />,
    accent: 'orange' as const,
  },
  {
    title: 'Modernización',
    text: 'Le damos una segunda vida a tu sistema actual: lo llevamos a tecnología moderna sin frenar tu operación.',
    icon: <RefreshCw className="size-5" aria-hidden="true" />,
    accent: 'green' as const,
  },
  {
    title: 'Mantenimiento y soporte',
    text: 'Para sistemas que ya funcionan: correcciones, mejoras y actualizaciones con un plan mensual de alcance definido.',
    icon: <Wrench className="size-5" aria-hidden="true" />,
    accent: 'orange' as const,
  },
]

export function Engagement() {
  return (
    <section id="modelos" className="scroll-mt-20 border-t border-white/5 py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="propuestas"
          accent="orange"
          title="¿En qué etapa está tu proyecto?"
          description="Cada caso arranca distinto. Contanos el tuyo y armamos una propuesta a medida."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {models.map((m) => (
            <BentoCard key={m.title} accent={m.accent}>
              <span
                className={
                  m.accent === 'orange'
                    ? 'flex size-10 items-center justify-center rounded-lg border border-brand-orange/25 bg-brand-orange/10 text-brand-orange'
                    : 'flex size-10 items-center justify-center rounded-lg border border-brand-green/25 bg-brand-green/10 text-brand-green'
                }
              >
                {m.icon}
              </span>
              <h3 className="mt-6 text-xl font-semibold text-white">{m.title}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{m.text}</p>
            </BentoCard>
          ))}
        </div>
      </div>
    </section>
  )
}
