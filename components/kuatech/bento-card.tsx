import { cn } from '@/lib/utils'

type BentoCardProps = {
  children: React.ReactNode
  className?: string
  accent: 'orange' | 'green'
}

export function BentoCard({ children, className, accent }: BentoCardProps) {
  return (
    <article
      className={cn(
        'group relative flex flex-col overflow-hidden rounded-2xl border border-white/[0.07] bg-surface/80 p-6 backdrop-blur-xl transition-all duration-500 sm:p-8',
        accent === 'orange'
          ? 'hover:border-brand-orange/40 hover:shadow-[0_0_40px_-12px_rgba(255,107,0,0.45)]'
          : 'hover:border-brand-green/40 hover:shadow-[0_0_40px_-12px_rgba(16,185,129,0.45)]',
        className,
      )}
    >
      <div
        aria-hidden="true"
        className={cn(
          'pointer-events-none absolute -top-24 -right-24 size-56 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100',
          accent === 'orange' ? 'bg-brand-orange/15' : 'bg-brand-green/15',
        )}
      />
      <div className="relative flex flex-1 flex-col">{children}</div>
    </article>
  )
}
