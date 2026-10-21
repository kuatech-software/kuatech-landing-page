const steps = [
  { label: 'Publicado en tu nube', done: true },
  { label: 'Dominio propio y conexión segura (HTTPS)', done: true },
  { label: 'Copias de seguridad configuradas', done: true },
  { label: 'Documentación y accesos entregados', done: true },
  { label: 'Plan de soporte mensual', done: false },
]

/** Panel ilustrativo de una puesta en marcha, en lenguaje que entiende el cliente. */
export function LaunchChecklist() {
  return (
    <div className="rounded-xl border border-white/5 bg-background/80 p-5 font-mono text-sm">
      <div className="flex items-center justify-between text-xs text-muted-foreground">
        <span>tu-sistema.com.ar</span>
        <span className="flex items-center gap-1.5 text-brand-green">
          <span className="animate-pulse-dot size-1.5 rounded-full bg-brand-green shadow-[0_0_8px_rgba(16,185,129,0.9)]" />
          en línea
        </span>
      </div>

      <ul className="mt-5 space-y-3">
        {steps.map((s) => (
          <li key={s.label} className="flex items-center gap-3">
            {s.done ? (
              <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-brand-green/15 text-xs text-brand-green">
                ✓
              </span>
            ) : (
              <span className="flex size-5 shrink-0 items-center justify-center rounded-full border border-dashed border-brand-orange/50 text-xs text-brand-orange">
                +
              </span>
            )}
            <span className={s.done ? 'text-white' : 'text-muted-foreground'}>{s.label}</span>
            {!s.done && (
              <span className="ml-auto rounded-full border border-brand-orange/30 px-2 py-0.5 text-[10px] text-brand-orange">
                opcional
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}
