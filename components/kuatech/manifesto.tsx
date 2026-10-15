const values = [
  { key: 'curiosidad', text: 'Investigamos hasta entender el problema real.' },
  { key: 'agilidad', text: 'Nos movemos rápido sin dejar deuda técnica atrás.' },
  { key: 'equipo', text: 'Entregamos en manada, nunca solos.' },
]

export function Manifesto() {
  return (
    <section id="manifesto" className="relative scroll-mt-20 overflow-hidden border-t border-white/5 py-28 lg:py-40">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 h-72 w-[40rem] max-w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-brand-green/10 to-brand-orange/10 blur-3xl"
      />
      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
        <p className="font-mono text-sm text-brand-orange">{'// manifiesto'}</p>
        <h2 className="mt-4 text-4xl font-bold tracking-tight text-balance text-white sm:text-5xl">
          Inspirados en el Kuatí.
        </h2>

        <div className="mt-10 space-y-6 text-lg leading-relaxed text-pretty text-muted-foreground sm:text-xl">
          <p>
            En las selvas subtropicales de Misiones, el{' '}
            <span className="font-semibold text-white">Kuatí</span> prospera gracias a una
            curiosidad incansable, un movimiento ágil y veloz, y un extraordinario sentido de
            comunidad. Nunca explora solo.
          </p>
          <p>
            Así construimos software. Cuestionamos cada supuesto, nos adaptamos rápido al cambio y
            trabajamos como un equipo unido, convirtiendo ideas ambiciosas en{' '}
            <span className="bg-gradient-to-r from-brand-green to-brand-orange bg-clip-text font-semibold text-transparent">
              ingeniería de primer nivel
            </span>
            .
          </p>
        </div>

        <ul className="mt-16 grid gap-4 text-left sm:grid-cols-3">
          {values.map((v) => (
            <li
              key={v.key}
              className="rounded-xl border border-white/[0.07] bg-surface/60 p-5 backdrop-blur transition-colors hover:border-brand-green/30"
            >
              <p className="font-mono text-sm text-brand-green">.{v.key}()</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
