import { SectionHeading } from './section-heading'

const groups = [
  { name: 'Frontend', accent: 'orange', items: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'] },
  { name: 'Mobile', accent: 'green', items: ['React Native', 'Flutter'] },
  { name: 'Backend', accent: 'orange', items: ['.NET', 'Node.js', 'PostgreSQL', 'APIs REST'] },
  { name: 'Cloud y DevOps', accent: 'green', items: ['AWS', 'Docker', 'CI/CD', 'Infraestructura como código'] },
] as const

export function Technologies() {
  return (
    <section id="tecnologias" className="scroll-mt-20 border-t border-white/5 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="tecnologías"
          title="Un stack moderno, elegido con criterio."
          description="Usamos herramientas probadas y mantenibles, y elegimos la que mejor encaja con tu producto, no la que está de moda."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {groups.map((group) => (
            <div key={group.name} className="rounded-2xl border border-white/[0.07] bg-surface/60 p-6 backdrop-blur">
              <h3
                className={`font-mono text-sm ${group.accent === 'orange' ? 'text-brand-orange' : 'text-brand-green'}`}
              >
                {group.name}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 font-mono text-xs text-muted-foreground"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
