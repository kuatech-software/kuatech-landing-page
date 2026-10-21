import { Braces, Cloud, Code2, Layers, Network, Smartphone, Server, GitBranch } from 'lucide-react'
import { BentoCard } from './bento-card'
import { NodeGraph } from './node-graph'
import { LaunchChecklist } from './launch-checklist'

const examples = [
  'Sistemas de gestión y stock',
  'Portales para tus clientes',
  'Turnos, reservas y pedidos',
  'Tableros con tus números al día',
]

export function Services() {
  return (
    <section id="services" className="scroll-mt-20 py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="font-mono text-sm text-brand-green">{'// nuestros servicios'}</p>
          <h2 className="mt-3 text-4xl font-bold tracking-tight text-balance text-white sm:text-5xl">
            De la idea al sistema funcionando.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Diseñamos, construimos y ponemos en marcha tu sistema. Un único responsable de punta a
            punta, sin pasarte de un proveedor a otro.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
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
            <h3 className="mt-6 text-2xl font-semibold text-white">Sistemas web a medida</h3>
            <p className="mt-3 mb-8 max-w-lg leading-relaxed text-muted-foreground">
              Desde el sistema de gestión de tu empresa hasta la plataforma que usan tus clientes.
              Funciona en la compu, la tablet y el celular, y está preparado para crecer junto a tu
              negocio.
            </p>

            <ul className="mb-8 grid gap-x-6 gap-y-2 font-mono text-sm text-muted-foreground sm:grid-cols-2">
              {examples.map((e) => (
                <li key={e} className="flex gap-2">
                  <span aria-hidden="true" className="text-brand-orange">
                    &gt;
                  </span>
                  {e}
                </li>
              ))}
            </ul>

            <div
              aria-hidden="true"
              className="mt-auto overflow-hidden rounded-xl border border-white/5 bg-background/80 p-4 font-mono text-xs leading-relaxed sm:text-sm"
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
            <h3 className="mt-6 text-2xl font-semibold text-white">Integramos tus sistemas</h3>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Conectamos tu sistema con lo que ya usás: facturación electrónica de ARCA, Mercado Pago,
              tu tienda online o tu sistema de gestión. Los datos pasan solos y nadie tiene que
              cargarlos dos veces.
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
                <h3 className="mt-6 text-2xl font-semibold text-white">Puesta en marcha y soporte</h3>
                <p className="mt-3 max-w-md leading-relaxed text-muted-foreground">
                  Dejamos tu sistema funcionando en tu propia nube, documentado y con copias de
                  seguridad. Si querés, sumás un plan de soporte mensual con un alcance claro.
                </p>
              </div>
              <LaunchChecklist />
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
