const regions = [
  { name: 'eastus', cpu: 42, latency: '18ms' },
  { name: 'brazilsouth', cpu: 67, latency: '24ms' },
  { name: 'westeurope', cpu: 31, latency: '41ms' },
]

const bars = [28, 45, 38, 60, 52, 70, 48, 64, 58, 76, 62, 84, 70, 66, 80, 72]

export function ServerMetrics() {
  return (
    <div className="rounded-xl border border-white/5 bg-background/80 p-4 font-mono text-xs">
      <div className="flex items-center justify-between text-muted-foreground">
        <span>cluster://ejemplo</span>
        <span className="flex items-center gap-1.5 text-brand-green">
          <span className="animate-pulse-dot size-1.5 rounded-full bg-brand-green shadow-[0_0_8px_rgba(16,185,129,0.9)]" />
          saludable
        </span>
      </div>

      <div className="mt-4 flex h-20 items-end gap-1" aria-hidden="true">
        {bars.map((h, i) => (
          <span
            key={i}
            className="flex-1 rounded-sm bg-gradient-to-t from-brand-green/30 to-brand-green/80 transition-all duration-500 group-hover:from-brand-orange/30 group-hover:to-brand-orange/80"
            style={{ height: `${h}%`, transitionDelay: `${i * 20}ms` }}
          />
        ))}
      </div>

      <table className="mt-4 w-full text-left">
        <caption className="sr-only">Métricas ilustrativas por región de servidor</caption>
        <thead className="text-muted-foreground">
          <tr>
            <th scope="col" className="pb-2 font-normal">region</th>
            <th scope="col" className="pb-2 font-normal">cpu</th>
            <th scope="col" className="pb-2 text-right font-normal">p95</th>
          </tr>
        </thead>
        <tbody>
          {regions.map((r) => (
            <tr key={r.name} className="border-t border-white/5">
              <td className="py-2 text-white">{r.name}</td>
              <td className="py-2">
                <div className="flex items-center gap-2">
                  <div className="h-1 w-16 overflow-hidden rounded-full bg-white/10">
                    <div className="h-full rounded-full bg-brand-orange" style={{ width: `${r.cpu}%` }} />
                  </div>
                  <span className="text-muted-foreground">{r.cpu}%</span>
                </div>
              </td>
              <td className="py-2 text-right text-brand-green">{r.latency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
