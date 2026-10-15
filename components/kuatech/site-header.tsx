import { Menu } from 'lucide-react'
import { Logo } from './logo'
import { navLinks } from './nav-links'

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-background/60 backdrop-blur-xl">
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:rounded-md focus:bg-brand-orange focus:px-3 focus:py-2 focus:text-sm focus:font-semibold focus:text-background"
      >
        Saltar al contenido
      </a>
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Logo />

        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex items-center gap-1 font-mono text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="rounded-md px-3 py-1.5 text-muted-foreground transition-colors hover:bg-white/5 hover:text-brand-green focus-visible:outline-2 focus-visible:outline-brand-green"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#contacto"
            className="rounded-lg border border-brand-orange/60 px-4 py-1.5 text-sm font-medium text-brand-orange transition-all hover:border-brand-orange hover:bg-brand-orange/10 hover:shadow-[0_0_20px_-4px_rgba(255,107,0,0.6)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange"
          >
            Contacto
          </a>

          <details className="group relative lg:hidden">
            <summary
              aria-label="Abrir menú"
              className="flex size-9 cursor-pointer list-none items-center justify-center rounded-lg border border-white/10 text-muted-foreground transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-brand-green [&::-webkit-details-marker]:hidden"
            >
              <Menu className="size-4" aria-hidden="true" />
            </summary>
            <nav
              aria-label="Móvil"
              className="absolute right-0 mt-2 w-56 rounded-xl border border-white/10 bg-surface/95 p-2 shadow-2xl backdrop-blur-xl"
            >
              <ul className="font-mono text-sm">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="block rounded-md px-3 py-2 text-muted-foreground transition-colors hover:bg-white/5 hover:text-brand-green"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </details>
        </div>
      </div>
    </header>
  )
}
