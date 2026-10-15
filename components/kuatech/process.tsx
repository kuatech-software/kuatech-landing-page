import { SectionHeading } from './section-heading'

const steps = [
  { title: 'Descubrimiento', text: 'Entendemos el problema, a los usuarios y qué significa el éxito para tu negocio.' },
  { title: 'Diseño', text: 'Definimos arquitectura, alcance y un prototipo para validar antes de construir.' },
  { title: 'Desarrollo', text: 'Trabajamos en ciclos cortos con demos frecuentes y código testeado.' },
  { title: 'Entrega', text: 'Puesta en producción con pipelines automatizados y documentación.' },
  { title: 'Evolución', text: 'Soporte, monitoreo y mejoras continuas a medida que tu producto crece.' },
]

export function Process() {
  return (
    <section id="proceso" className="scroll-mt-20 border-t border-white/5 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="proceso"
          accent="orange"
          title="De la idea a producción, sin sorpresas."
          description="Un camino claro en cinco pasos, con visibilidad en cada etapa."
        />

        <ol className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
          {steps.map((step, i) => (
            <li
              key={step.title}
              className="rounded-2xl border border-white/[0.07] bg-surface/60 p-6 backdrop-blur transition-colors hover:border-brand-orange/30"
            >
              <span className="font-mono text-sm text-brand-orange">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="mt-3 text-xl font-semibold text-white">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
