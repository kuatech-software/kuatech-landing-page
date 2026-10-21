import { SectionHeading } from './section-heading'

const faqs = [
  {
    q: '¿Cómo empiezo un proyecto con Kuatech?',
    a: 'Escribinos por el formulario o por WhatsApp contando tu idea. Agendamos una conversación sin costo para entender el problema y proponerte un camino.',
  },
  {
    q: '¿Trabajan con startups y emprendedores?',
    a: 'Sí. Ayudamos a validar ideas y construir MVPs, cuidando que la base técnica pueda escalar cuando el producto crezca.',
  },
  {
    q: '¿De quién es el código?',
    a: 'Se define en el acuerdo de cada proyecto. Lo habitual es que el código desarrollado a medida sea tuyo, con documentación y acceso al repositorio.',
  },
  {
    q: '¿Dan soporte después de la entrega?',
    a: 'Sí, si lo necesitás. Acordamos un plan mensual con un alcance definido; los cambios grandes se cotizan aparte.',
  },
  {
    q: '¿Hacen apps para celular?',
    a: 'Desarrollamos sistemas web pensados primero para el celular: se ven y funcionan bien en cualquier dispositivo, sin que tus usuarios tengan que instalar nada.',
  },
  {
    q: '¿Trabajan con clientes de otras provincias o países?',
    a: 'Sí. Trabajamos de forma remota, con reuniones periódicas y visibilidad del avance en todo momento.',
  },
]

export function Faq() {
  return (
    <section id="faq" className="scroll-mt-20 border-t border-white/5 py-16 lg:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="faq" title="Preguntas frecuentes." />

        <div className="mt-10 divide-y divide-white/5 rounded-2xl border border-white/[0.07] bg-surface/60 backdrop-blur">
          {faqs.map((item) => (
            <details key={item.q} className="group p-5 sm:p-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-md font-semibold text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-green [&::-webkit-details-marker]:hidden">
                {item.q}
                <span
                  aria-hidden="true"
                  className="font-mono text-brand-green transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mt-3 leading-relaxed text-muted-foreground">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
