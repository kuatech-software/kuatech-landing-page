import { Bus, FileCheck2, Hammer, Wheat } from 'lucide-react'
import { BentoCard } from './bento-card'
import { SectionHeading } from './section-heading'

type Product = {
  name: string
  status: string
  tagline: string
  features: string[]
  accent: 'orange' | 'green'
  icon: React.ReactNode
}

const products: Product[] = [
  {
    name: 'Emití',
    status: 'En desarrollo',
    tagline: 'Facturación electrónica con ARCA, lista para integrar como API.',
    features: ['Emisión de comprobantes y CAE', 'Homologación y producción separadas', 'Auditoría y trazabilidad', 'Manejo seguro de credenciales'],
    accent: 'orange',
    icon: <FileCheck2 className="size-5" aria-hidden="true" />,
  },
  {
    name: 'Convoy',
    status: 'En diseño',
    tagline: 'Eficiencia operativa para flotas de transporte, complementando tu GPS.',
    features: ['Combustible y consumo por km', 'Mantenimiento y vencimientos', 'Costo por vehículo y por viaje', 'Alertas e indicadores de rentabilidad'],
    accent: 'green',
    icon: <Bus className="size-5" aria-hidden="true" />,
  },
  {
    name: 'MasaMadre',
    status: 'En exploración',
    tagline: 'Producción y distribución para cadenas de panaderías.',
    features: ['Producción y recetas con costos', 'Stock por sucursal', 'Control de merma', 'Predicción de demanda'],
    accent: 'green',
    icon: <Wheat className="size-5" aria-hidden="true" />,
  },
  {
    name: 'Pañol',
    status: 'En exploración',
    tagline: 'Gestión simple para ferreterías, sin la complejidad de un ERP.',
    features: ['Stock, compras y proveedores', 'Ventas, caja y reportes', 'Facturación electrónica ARCA', 'Operación local con sincronización'],
    accent: 'orange',
    icon: <Hammer className="size-5" aria-hidden="true" />,
  },
]

export function Lab() {
  return (
    <section id="laboratorio" className="scroll-mt-20 border-t border-white/5 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="laboratorio"
          title="Productos que estamos construyendo."
          description="Además de desarrollar para terceros, creamos nuestros propios productos. Estos son los que están en marcha, con su estado real."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {products.map((p) => (
            <BentoCard key={p.name} accent={p.accent}>
              <div className="flex items-center justify-between gap-3">
                <span
                  className={
                    p.accent === 'orange'
                      ? 'flex size-10 items-center justify-center rounded-lg border border-brand-orange/25 bg-brand-orange/10 text-brand-orange'
                      : 'flex size-10 items-center justify-center rounded-lg border border-brand-green/25 bg-brand-green/10 text-brand-green'
                  }
                >
                  {p.icon}
                </span>
                <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 font-mono text-xs text-muted-foreground">
                  {p.status}
                </span>
              </div>
              <h3 className="mt-6 text-2xl font-semibold text-white">
                {p.name} <span className="font-mono text-sm font-normal text-muted-foreground">by Kuatech</span>
              </h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{p.tagline}</p>
              <ul className="mt-6 space-y-2 font-mono text-xs text-muted-foreground">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-2">
                    <span aria-hidden="true" className={p.accent === 'orange' ? 'text-brand-orange' : 'text-brand-green'}>
                      &gt;
                    </span>
                    {f}
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
