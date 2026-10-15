import { Braces, Cloud, Code2, Layers, Network, Smartphone, Server, GitBranch } from 'lucide-react'
import { BentoCard } from './bento-card'
import { NodeGraph } from './node-graph'
import { ServerMetrics } from './server-metrics'

const stackTags = ['Next.js', 'React Native', 'TypeScript', 'Node.js', 'PostgreSQL', 'Flutter']

export function Services() {
  return (
    <section id="services" className="scroll-mt-20 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="font-mono text-sm text-brand-green">{'// nuestros servicios'}</p>
          <h2 className="mt-3 text-4xl font-bold tracking-tight text-balance text-white sm:text-5xl">
            Ingeniería en todo el stack.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Un solo equipo, responsable desde la interfaz hasta la infraestructura. Sin traspasos,
            sin huecos.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          <BentoCard className="md:col-span-2" accent="orange">
            <div className="flex items-center gap-3">
              <IconBadge accent="orange">
                <Code2 className="size-5" aria-hidden="true" />
              </IconBadge>
              <IconBadge accent="orange">
                <Smartphone className="size-5" aria-hidden="true" />
              </IconBadge>
              <IconBadge accent="orange">
                <Layers className="size-5" aria-hidden="true" />
              </IconBadge>
            </div>
            <h3 className="mt-6 text-2xl font-semibold text-white">Desarrollo Full-Stack y Apps Móviles</h3>
            <p className="mt-3 max-w-lg leading-relaxed text-muted-foreground">
              Plataformas web impecables y apps móviles con experiencia nativa, construidas sobre
              código tipado, testeado y documentado, pensado para crecer junto a tu producto.
            </p>

            <ul className="mt-6 flex flex-wrap gap-2" aria-label="Tecnologías">
              {stackTags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 font-mono text-xs text-muted-foreground transition-colors group-hover:border-brand-orange/30"
                >
                  {tag}
                </li>
              ))}
            </ul>

            <div
              aria-hidden="true"
              className="mt-8 overflow-hidden rounded-xl border border-white/5 bg-background/80 p-4 font-mono text-xs leading-relaxed sm:text-sm"
            >
              <div className="text-muted-foreground">
                <span className="text-brand-orange">export</span>{' '}
                <span className="text-brand-orange">async function</span>{' '}
                <span className="text-white">ship</span>(
                <span className="text-brand-green">product</span>: Requirements) {'{'}
              </div>
              <div className="pl-4 text-muted-foreground">
                <span className="text-brand-orange">const</span> architecture ={' '}
                <span className="text-brand-orange">await</span> design(product)
              </div>
              <div className="pl-4 text-muted-foreground">
                <span className="text-brand-orange">return</span> deploy(architecture, {'{'}{' '}
                <span className="text-brand-green">tests</span>: <span className="text-white">true</span> {'}'})
              </div>
              <div className="text-muted-foreground">{'}'}</div>
            </div>
          </BentoCard>

          <BentoCard accent="green">
            <div className="flex items-center gap-3">
              <IconBadge accent="green">
                <Network className="size-5" aria-hidden="true" />
              </IconBadge>
              <IconBadge accent="green">
                <Braces className="size-5" aria-hidden="true" />
              </IconBadge>
            </div>
            <h3 className="mt-6 text-2xl font-semibold text-white">Arquitectura de APIs y Microservicios</h3>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              APIs resilientes y bien versionadas, y servicios orientados a eventos con contratos
              claros y límites observables.
            </p>
            <NodeGraph />
          </BentoCard>

          <BentoCard className="md:col-span-3" accent="green">
            <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
              <div>
                <div className="flex items-center gap-3">
                  <IconBadge accent="green">
                    <Cloud className="size-5" aria-hidden="true" />
                  </IconBadge>
                  <IconBadge accent="orange">
                    <Server className="size-5" aria-hidden="true" />
                  </IconBadge>
                  <IconBadge accent="green">
                    <GitBranch className="size-5" aria-hidden="true" />
                  </IconBadge>
                </div>
                <h3 className="mt-6 text-2xl font-semibold text-white">DevOps e Infraestructura Cloud</h3>
                <p className="mt-3 max-w-md leading-relaxed text-muted-foreground">
                  Infraestructura como código, pipelines CI/CD automatizados y observabilidad en
                  producción, para que cada release sea aburrido en el mejor sentido.
                </p>
              </div>
              <ServerMetrics />
            </div>
          </BentoCard>
        </div>
      </div>
    </section>
  )
}

function IconBadge({ children, accent }: { children: React.ReactNode; accent: 'orange' | 'green' }) {
  return (
    <span
      className={
        accent === 'orange'
          ? 'flex size-10 items-center justify-center rounded-lg border border-brand-orange/25 bg-brand-orange/10 text-brand-orange'
          : 'flex size-10 items-center justify-center rounded-lg border border-brand-green/25 bg-brand-green/10 text-brand-green'
      }
    >
      {children}
    </span>
  )
}
