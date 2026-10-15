import Image from 'next/image'
import Link from 'next/link'

export function Logo() {
  return (
    <Link href="/" className="group flex items-center gap-2.5" aria-label="Kuatech, inicio">
      <span
        aria-hidden="true"
        className="relative size-9 overflow-hidden rounded-lg border border-brand-orange/40 bg-[#7a2e12] shadow-[0_0_16px_-4px_rgba(255,107,0,0.6)] transition-shadow group-hover:shadow-[0_0_22px_-2px_rgba(255,107,0,0.7)]"
      >
        <Image
          src="/images/kuatech-brand.jpg"
          alt=""
          fill
          sizes="96px"
          className="origin-[39%_38%] scale-[2.6] object-cover"
        />
      </span>
      <span className="flex flex-col leading-none">
        <span className="text-lg font-bold tracking-tight text-brand-orange">Kuatech</span>
        <span className="mt-0.5 font-mono text-[10px] tracking-wide text-muted-foreground">
          software factory
        </span>
      </span>
    </Link>
  )
}
