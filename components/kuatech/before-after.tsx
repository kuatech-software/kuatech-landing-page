import { Check, X } from 'lucide-react'
import { BentoCard } from './bento-card'
import { SectionHeading } from './section-heading'

const without = [
  'Sistemas legacy que nadie se anima a tocar.',
  'Entregas que se atrasan y presupuestos que se estiran.',
  'Deploys manuales y miedo en cada release.',
  'Código sin tests ni documentación.',
  'Un proveedor distinto para cada capa del sistema.',
]

const withKuatech = [
  'Arquitectura limpia y migraciones planificadas, sin frenar la operación.',
  'Ciclos cortos, demos frecuentes y visibilidad real del avance.',
  'CI/CD: cada release automatizado, repetible y reversible.',
  'Código testeado, documentado y que es tuyo.',
  'Un solo equipo, desde la interfaz hasta la infraestructura.',
]

export function BeforeAfter() {
  return (
    <section id="por-que" className="scroll-mt-20 border-t border-white/5 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="por qué kuatech"
          accent="orange"
          title="Software que deja de ser un dolor de cabeza."
          description="Lo que cambia cuando el mismo equipo se hace cargo del sistema de punta a punta."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <BentoCard accent="orange" className="bg-surface/40">
            <p className="font-mono text-sm text-muted-foreground">{'sin_kuatech'}</p>
            <ul className="mt-6 space-y-4">
              {without.map((item) => (
                <li key={item} className="flex gap-3 text-muted-foreground">
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-white/5">
                    <X className="size-3 text-red-400/80" aria-hidden="true" />
                  </span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </BentoCard>

          <BentoCard
            accent="green"
            className="border-brand-green/30 bg-brand-green/[0.04] shadow-[0_0_48px_-16px_rgba(16,185,129,0.45)] hover:border-brand-green/60 hover:shadow-[0_0_64px_-12px_rgba(16,185,129,0.6)]"
          >
            <p className="font-mono text-sm text-brand-green">{'con_kuatech'}</p>
            <ul className="mt-6 space-y-4">
              {withKuatech.map((item) => (
                <li key={item} className="flex gap-3 text-white">
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-brand-green/15">
                    <Check className="size-3 text-brand-green" aria-hidden="true" />
                  </span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </BentoCard>
        </div>
      </div>
    </section>
  )
}
