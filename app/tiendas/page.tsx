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
const stores = content.stores

export default function TiendasPage() {
  return (
    <>
      <Header />
      <div className="max-w-5xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-2">Nuestras tiendas</h1>
        <p className="text-gray-600 mb-10">7 tiendas propias + 6 centros de distribución en todo el Paraguay. También tenemos presencia en Resistencia, Chaco (Argentina).</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {stores.map((s: any, i: number) => (
            <div key={i} className="border border-gray-200 rounded-xl p-5 flex items-start gap-4">
              <Store className="w-6 h-6 text-[#3A4A5D] shrink-0 mt-1" />
              <div>
                <h3 className="font-bold">{s.name}</h3>
                {s.type && <span className="text-xs bg-[#EFF2F7] px-2 py-0.5 rounded-full inline-block mt-1">{s.type}</span>}
                {s.address && <p className="text-sm text-gray-500 mt-1">{s.address}</p>}
                {s.phone && <p className="text-sm text-gray-500">{s.phone}</p>}
                {s.hours && <p className="text-sm text-gray-500 mt-1">{s.hours}</p>}
                {s.lat && s.lng && (
                  <a href={`https://www.google.com/maps?q=${s.lat},${s.lng}`} target="_blank" rel="noopener noreferrer"
                    className="text-xs text-[#3A4A5D] hover:underline mt-1 inline-block">Ver en Google Maps →</a>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="bg-[#EFF2F7] rounded-xl p-6 mt-8">
          <h2 className="font-bold text-lg mb-2">📍 Filial Argentina</h2>
          <p className="text-sm text-gray-600">Superspuma tiene presencia en Resistencia, Chaco, Argentina desde hace 21 años, con 30 colaboradores y producción de 4.000 sommiers por mes.</p>
        </div>
      </div>
      <CtaBanner title="¿Dudas? Escribinos" description="Te respondemos en el día por WhatsApp" ctaLabel="Consultar" ctaHref="https://wa.me/595974202025" />
      <Footer />
      <WhatsAppFloat phone={content.whatsapp} message="Hola! Quiero saber la dirección de una tienda" />
      <MobileCta />
    </>
  )
}
