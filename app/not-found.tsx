import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <p className="font-mono text-sm text-brand-orange">{'// error 404'}</p>
      <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">Página no encontrada</h1>
      <p className="mt-4 max-w-md text-lg text-muted-foreground">
        La página que buscás no existe o fue movida.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-lg bg-brand-orange px-6 py-3 font-semibold text-background transition-all hover:-translate-y-0.5 hover:shadow-[0_0_32px_-2px_rgba(255,107,0,0.75)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange"
      >
        Volver al inicio
      </Link>
    </main>
  )
}
