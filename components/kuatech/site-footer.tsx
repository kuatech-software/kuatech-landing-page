import Image from 'next/image'
import { EMAIL_HREF, SITE, WHATSAPP_HREF } from '@/lib/site'
import { Logo } from './logo'
import { navLinks } from './nav-links'

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-white/5">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40 opacity-60 [mask-image:linear-gradient(to_top,black_40%,transparent)] sm:h-52"
      >
        <Image src="/images/selva-misionera-footer.webp" alt="" fill sizes="100vw" className="object-cover object-bottom" />
      </div>
      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Software factory de Misiones, Argentina. Ingeniería de punta a punta.
          </p>
        </div>

        <nav aria-label="Pie de página">
          <p className="font-mono text-xs text-brand-green">{'// secciones'}</p>
          <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-muted-foreground transition-colors hover:text-white">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="font-mono text-xs text-brand-green">{'// contacto'}</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a href={EMAIL_HREF} className="text-muted-foreground transition-colors hover:text-white">
                {SITE.email}
              </a>
            </li>
            <li>
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-white"
              >
                WhatsApp
              </a>
            </li>
            <li className="text-muted-foreground">Misiones, Argentina</li>
          </ul>
        </div>
      </div>

      <div className="relative border-t border-white/5">
        <p className="mx-auto max-w-7xl px-4 py-6 font-mono text-xs text-muted-foreground sm:px-6 lg:px-8">
          {'© '}
          {new Date().getFullYear()} Kuatech — Hecho en Misiones, Argentina.
        </p>
      </div>
    </footer>
  )
}
