import { SiteHeader } from '@/components/kuatech/site-header'
import { Hero } from '@/components/kuatech/hero'
import { Services } from '@/components/kuatech/services'
import { Technologies } from '@/components/kuatech/technologies'
import { Process } from '@/components/kuatech/process'
import { Lab } from '@/components/kuatech/lab'
import { Engagement } from '@/components/kuatech/engagement'
import { Manifesto } from '@/components/kuatech/manifesto'
import { Faq } from '@/components/kuatech/faq'
import { Contact } from '@/components/kuatech/contact'
import { SiteFooter } from '@/components/kuatech/site-footer'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main id="contenido">
        <Hero />
        <Services />
        <Technologies />
        <Process />
        <Lab />
        <Engagement />
        <Manifesto />
        <Faq />
        <Contact />
      </main>
      <SiteFooter />
    </>
  )
}
