import Image from 'next/image'
import Link from 'next/link'

export function Logo() {
  return (
    <Link href="/" className="group flex items-center gap-2.5" aria-label="Kuatech, inicio">
      <span
        aria-hidden="true"
        className="relative size-10 shrink-0 rounded-full shadow-[0_0_16px_-4px_rgba(255,107,0,0.6)] transition-shadow group-hover:shadow-[0_0_22px_-2px_rgba(255,107,0,0.75)]"
      >
        <Image src="/images/kuati-avatar.webp" alt="" fill sizes="40px" className="object-contain" />
      </span>
      <span className="flex flex-col leading-none">
        <span className="text-lg font-bold tracking-tight text-brand-orange">Kuatech</span>
        <span className="mt-0.5 font-mono text-[10px] tracking-wide text-muted-foreground">
          software &amp; saas
        </span>
      </span>
    </Link>
  )
}
