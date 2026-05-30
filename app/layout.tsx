import CookieConsent from "@/components/CookieConsent"
import WhatsAppButton from "@/components/WhatsAppButton"
import JsonLd from "@/components/JsonLd"
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'superspuma',
  description: 'Fabricantes paraguayos de colchones, sommiers y accesorios de descanso desde 1976.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="scroll-smooth">
      <body>
        {children}
        <JsonLd />
        <WhatsAppButton phone="+595974202025" />
              <CookieConsent />
      </body>
    </html>
  )
}
