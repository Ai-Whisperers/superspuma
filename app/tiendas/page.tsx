import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { MobileCta } from "@/components/mobile-cta"
import { CtaBanner } from "@/components/cta-banner"
import type { Content } from "@/types/content"
import raw from "@/content/es.json"
import { Store } from "lucide-react"

const content = raw as any
const nav = content.navigation
const stores = content?.tiendas?.stores?.tiers ?? []

export default function TiendasPage() {
  return (
    <>
      <Header />
      <div className="max-w-5xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-2">Nuestras tiendas</h1>
        <p className="text-gray-600 mb-10">13 puntos de venta en todo el Paraguay. Encontranos en shoppings, centros logísticos y nuestra planta industrial en Villeta.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {stores.map((s: any, i: number) => (
            <div key={i} className="border border-gray-200 rounded-xl p-5 flex items-start gap-4">
              <Store className="w-6 h-6 text-[#3A4A5D] shrink-0 mt-1" />
              <div>
                <h3 className="font-bold">{s.name}</h3>
                {s.address && <p className="text-sm text-gray-500">{s.address}</p>}
                {s.phone && <p className="text-sm text-gray-500">{s.phone}</p>}
                {s.hours && <p className="text-sm text-gray-500">{s.hours}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
      <CtaBanner title="¿Dudas? Escribinos" description="Te respondemos en el día por WhatsApp" ctaLabel="Consultar" ctaHref="https://wa.me/595974202025" />
      <Footer />
      <WhatsAppFloat phone={content.whatsapp} message="Hola! Quiero saber la dirección de una tienda" />
      <MobileCta />
    </>
  )
}
