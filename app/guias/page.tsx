import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { MobileCta } from "@/components/mobile-cta"
import { CtaBanner } from "@/components/cta-banner"
import type { Content } from "@/types/content"
import raw from "@/content/es.json"
import { ChevronRight } from "lucide-react"

const content = raw as any
const nav = content.navigation

export default function GuiasPage() {
  return (
    <>
      <Header />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6">Guía de compra</h1>
        <p className="text-lg text-gray-700 mb-10">Todo lo que necesitás saber antes de elegir tu colchón Superspuma.</p>

        <div className="space-y-8">
          <div className="bg-[#F8F9FA] rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-4">1. ¿Resorte o espuma?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-5">
                <h3 className="font-bold text-lg">Resorte</h3>
                <p className="text-sm text-gray-600 mt-2">Mayor soporte, ventilación y sensación tradicional. Ideal para quienes duermen caliente o pesan más de 70 kg.</p>
                <p className="text-xs text-gray-500 mt-2">Modelos: Titanium, Imperial, Harmony, Serrat, Delta Soft, Essential Top, Renovate, Impulse, Pop, Superteen</p>
              </div>
              <div className="bg-white rounded-lg p-5">
                <h3 className="font-bold text-lg">Espuma</h3>
                <p className="text-sm text-gray-600 mt-2">Mejor adaptación al cuerpo. Más económico en gamas básicas. Viscoelástica alivia puntos de presión.</p>
                <p className="text-xs text-gray-500 mt-2">Modelos: Ortopédico, Duo Confort, Serena, Golden, Luna Soft, Super Kids</p>
              </div>
            </div>
          </div>

          <div className="bg-[#F8F9FA] rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-4">2. Elegí la firmeza correcta</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3"><ChevronRight className="w-5 h-5 text-[#3A4A5D] shrink-0 mt-0.5" /><div><strong>Menos de 70 kg:</strong> Firmeza media o suave. Modelos como Harmony, Luna Soft.</div></li>
              <li className="flex items-start gap-3"><ChevronRight className="w-5 h-5 text-[#3A4A5D] shrink-0 mt-0.5" /><div><strong>70-100 kg:</strong> Media-firme. Modelos como Imperial, Serrat, Serena.</div></li>
              <li className="flex items-start gap-3"><ChevronRight className="w-5 h-5 text-[#3A4A5D] shrink-0 mt-0.5" /><div><strong>Más de 100 kg o problemas de columna:</strong> Firme o extra firme. Ortopédico (hasta 140 kg).</div></li>
              <li className="flex items-start gap-3"><ChevronRight className="w-5 h-5 text-[#3A4A5D] shrink-0 mt-0.5" /><div><strong>Dormís de costado:</strong> Buscá algo adaptable. Duo Confort (viscoelástica).</div></li>
            </ul>
          </div>

          <div className="bg-[#F8F9FA] rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-4">3. ¿Qué medida necesitás?</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {[{m:"1 plaza",d:"80x190 cm"},{m:"1 plaza+",d:"100x190 cm"},{m:"2 plazas",d:"140x190 cm"},{m:"Queen",d:"160x200 cm"},{m:"King",d:"180x200 cm"},{m:"Super King",d:"200x200 cm"}].map((s,i) => (
                <div key={i} className="bg-white rounded-lg p-4 text-center border border-gray-100">
                  <div className="font-bold">{s.m}</div>
                  <div className="text-sm text-gray-500">{s.d}</div>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-600 mt-4">Medidas especiales a pedido (5-10 días hábiles). Consultanos por WhatsApp.</p>
          </div>

          <div className="bg-[#F8F9FA] rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-4">4. ¿Cuánto dura un colchón?</h2>
            <p className="text-gray-700">Un colchón de calidad dura entre 7 y 10 años. Señales de reemplazo: hundimiento visible, resortes que se sienten, dolor al levantarte, o más de 10 años de uso.</p>
          </div>
        </div>
      </div>
      <CtaBanner title="¿Todavía con dudas?" description="Escribinos y te ayudamos a elegir" ctaLabel="Consultar por WhatsApp" ctaHref="https://wa.me/595974202025?text=Hola!%20Necesito%20ayuda%20para%20elegir%20un%20colch%C3%B3n" />
      <Footer />
      <WhatsAppFloat phone={content.whatsapp} message="Hola! Quiero la guía de compra" />
      <MobileCta />
    </>
  )
}
