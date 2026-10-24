import type { Metadata, Viewport } from 'next'
import { Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google'
import { CloudflareAnalytics } from '@/components/kuatech/cloudflare-analytics'
import { SITE, SITE_URL } from '@/lib/site'
import './globals.css'

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
})

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
})

const title = 'Kuatech — Software & SaaS'
const description =
  'Kuatech es una software factory de Misiones, Argentina. Desarrollamos sistemas web a medida, integraciones y modernización de sistemas, de la idea a la puesta en marcha.'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    url: '/',
    siteName: 'Kuatech',
    title,
    description,
    images: [{ url: '/images/kuatech-logo.webp', width: 1376, height: 768, alt: 'Kuatech software factory' }],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/images/kuatech-logo.webp'],
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0B0F19',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`dark ${jakarta.variable} ${jetbrains.variable}`}>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ProfessionalService',
              name: 'Kuatech',
              url: SITE_URL,
              description,
              email: SITE.email,
              areaServed: 'AR',
              address: { '@type': 'PostalAddress', addressRegion: 'Misiones', addressCountry: 'AR' },
            }),
          }}
        />
        {children}
        <CloudflareAnalytics />
      </body>
    </html>
  )
}
