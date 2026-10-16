import { BentoCard } from './bento-card'
import { SectionHeading } from './section-heading'

const groups = [
  { name: 'Backend', accent: 'orange', items: ['.NET', 'C#', 'APIs REST', 'Microservicios'] },
  {
    name: 'Frontend y Mobile',
    accent: 'green',
    items: ['Angular', 'React', 'Next.js', 'TypeScript', 'Apps multiplataforma'],
  },
  { name: 'Datos', accent: 'orange', items: ['SQL Server', 'PostgreSQL', 'Entity Framework', 'Dapper'] },
  { name: 'Cloud y DevOps', accent: 'green', items: ['Azure', 'Docker', 'CI/CD', 'GitHub Actions'] },
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
            <BentoCard key={group.name} accent={group.accent} className="sm:p-6">
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
            </BentoCard>
          ))}
        </div>
      </div>
    </section>
  )
}
