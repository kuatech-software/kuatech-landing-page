export const SITE_URL = 'https://kuatech.com.ar'

export const SITE = {
  email: 'hola@kuatech.com.ar',
  whatsappNumber: '5493765021769',
  whatsappMessage: 'Hola Kuatech, quiero conversar sobre un proyecto.',
}

export const EMAIL_HREF = `mailto:${SITE.email}`
export const WHATSAPP_HREF = `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(SITE.whatsappMessage)}`
