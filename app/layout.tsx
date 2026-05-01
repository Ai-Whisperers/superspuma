import type { Metadata } from "next"
import { Playfair_Display, Open_Sans } from "next/font/google"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
})

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-opensans",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://superspuma.paragu-ai.com"),
  title: "Superspuma — Colchones y Sommiers en Paraguay | Fábrica desde 1976",
  description: "Fabricantes paraguayos de colchones, sommiers y accesorios de descanso. 19 modelos, 5 tiendas en Asunción y Central, envío a todo el país.",
  alternates: { canonical: "https://superspuma.paragu-ai.com" },
  openGraph: {
    title: "Superspuma — Colchones y Sommiers en Paraguay",
    description: "Fabricantes paraguayos de colchones desde 1976. 19 modelos, envío a todo el país, hasta 18 cuotas sin interés.",
    url: "https://superspuma.paragu-ai.com",
    siteName: "Superspuma",
    locale: "es_PY",
    type: "website",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${playfair.variable} ${openSans.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
