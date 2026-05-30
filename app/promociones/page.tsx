import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { MobileCta } from "@/components/mobile-cta"
import { CtaBanner } from "@/components/cta-banner"
import type { Content } from "@/types/content"
import raw from "@/content/es.json"
import { Gift } from "lucide-react"

const c = raw as any

export default function PromocionesPage() {
  return (
    <>
      <Header />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6">Promociones</h1>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-[#F8F9FA] rounded-xl p-8 border border-gray-200">
            <Gift className="w-10 h-10 text-[#3A4A5D] mb-4" />
            <h2 className="text-xl font-bold mb-2">Hasta 18 cuotas sin interés</h2>
            <p className="text-gray-600">Con Visa, Mastercard, Credicard, Cabal y Pánal. Consultá las cuotas disponibles para tu banco.</p>
            <a href="https://wa.me/595974202025?text=Hola!%20Quiero%20consultar%20cuotas" target="_blank" rel="noopener noreferrer" className="mt-4 inline-block bg-[#0F1624] text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-[#3A4A5D]">Consultar</a>
          </div>
          <div className="bg-[#F8F9FA] rounded-xl p-8 border border-gray-200">
            <Gift className="w-10 h-10 text-[#3A4A5D] mb-4" />
            <h2 className="text-xl font-bold mb-2">Envío gratis</h2>
            <p className="text-gray-600">En compras desde Gs. 1.000.000 para Asunción y área metropolitana.</p>
          </div>
          <div className="bg-[#F8F9FA] rounded-xl p-8 border border-gray-200">
            <Gift className="w-10 h-10 text-[#3A4A5D] mb-4" />
            <h2 className="text-xl font-bold mb-2">Promo Cartagena 2026</h2>
            <p className="text-gray-600">Participá por un viaje a Cartagena para 2 personas + 5 sommiers Harmony. Cargá tu factura de compra.</p>
            <a href="https://wa.me/595974202025?text=Hola!%20Quiero%20participar%20en%20la%20Promo%20Cartagena" target="_blank" rel="noopener noreferrer" className="mt-4 inline-block bg-[#0F1624] text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-[#3A4A5D]">Participar</a>
          </div>
          <div className="bg-[#F8F9FA] rounded-xl p-8 border border-gray-200">
            <Gift className="w-10 h-10 text-[#3A4A5D] mb-4" />
            <h2 className="text-xl font-bold mb-2">Retiro de colchón viejo</h2>
            <p className="text-gray-600">Sin costo al comprar un colchón nuevo. Nos llevamos el viejo el mismo día de la entrega.</p>
          </div>
        </div>
      </div>
      <CtaBanner title="Aprovechá las promos" description="Consultá por WhatsApp y asegurá tu mejor precio" ctaLabel="Consultar ahora" ctaHref="https://wa.me/595974202025" />
      <Footer />
      <WhatsAppFloat phone={c.whatsapp} message="Hola! Quiero info sobre promociones" />
      <MobileCta />
    </>
  )
}
