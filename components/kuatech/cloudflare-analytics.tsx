import Script from 'next/script'

// Cloudflare Web Analytics: gratis, sin cookies y sin banner de consentimiento.
// El token no es secreto (queda visible en el HTML). Si falta, no se carga nada.
export function CloudflareAnalytics() {
  const token = process.env.NEXT_PUBLIC_CF_BEACON_TOKEN
  if (!token || process.env.NODE_ENV !== 'production') return null

  return (
    <Script
      src="https://static.cloudflareinsights.com/beacon.min.js"
      strategy="afterInteractive"
      data-cf-beacon={JSON.stringify({ token })}
    />
  )
}
