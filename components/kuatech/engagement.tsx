import { Handshake, Users, Wrench } from 'lucide-react'
import { BentoCard } from './bento-card'
import { SectionHeading } from './section-heading'

const models = [
  {
    title: 'Proyecto cerrado',
    text: 'Alcance, plazo y entregables definidos desde el inicio. Ideal para un MVP o un producto con requisitos claros.',
    icon: <Handshake className="size-5" aria-hidden="true" />,
    accent: 'orange' as const,
  },
  {
    title: 'Equipo dedicado',
    text: 'Desarrolladores que se suman a tu equipo y trabajan con tus prioridades, con flexibilidad para crecer o reducir.',
    icon: <Users className="size-5" aria-hidden="true" />,
    accent: 'green' as const,
  },
  {
    title: 'Soporte y evolución',
    text: 'Mantenimiento mensual, monitoreo y mejoras continuas para un sistema que ya está en producción.',
    icon: <Wrench className="size-5" aria-hidden="true" />,
    accent: 'orange' as const,
  },
]

export function Engagement() {
  return (
    <section id="modelos" className="scroll-mt-20 border-t border-white/5 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="modelos de trabajo"
          accent="orange"
          title="Elegí cómo trabajamos juntos."
          description="Tres formatos pensados para distintas etapas. Contanos tu caso y armamos la propuesta."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
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
