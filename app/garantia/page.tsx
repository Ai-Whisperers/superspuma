import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { MessagingFloat } from "@/components/messaging-float"
import { MobileCta } from "@/components/mobile-cta"
import { CtaBanner } from "@/components/cta-banner"
import type { Content } from "@/types/content"
import raw from "@/content/es.json"
import { ShieldCheck } from "lucide-react"

const c = raw as any

export default function GarantiaPage() {
  const warranties = [
    { line: "Esencial", models: "Luna Soft, Pop Kids, Renovate, Essential Top, Super Kids", duration: "2 años" },
    { line: "Confort", models: "Harmony, Serrat, Delta Soft, Golden, Serena, Pop Plus, Pop Teen, Superteen, Impulse", duration: "3 años" },
    { line: "Premium", models: "Titanium", duration: "5 años" },
    { line: "Ortopédico", models: "Ortopédico", duration: "6 años" },
  ]

  return (
    <>
      <Header />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6">Garantía</h1>
        <p className="text-lg text-gray-700 mb-8">Todos nuestros colchones incluyen certificado de garantía de fábrica. La cobertura varía según la línea.</p>
        <div className="bg-[#F8F9FA] rounded-xl overflow-hidden mb-8">
          <table className="w-full">
            <thead><tr className="bg-[#0F1624] text-white"><th className="p-3 text-left">Línea</th><th className="p-3 text-left">Modelos</th><th className="p-3 text-left">Garantía</th></tr></thead>
            <tbody>{warranties.map((w,i) => (<tr key={i} className="border-b border-gray-200"><td className="p-3 font-medium">{w.line}</td><td className="p-3 text-sm text-gray-600">{w.models}</td><td className="p-3 font-bold">{w.duration}</td></tr>))}</tbody>
          </table>
        </div>
        <div className="bg-[#F8F9FA] rounded-xl p-8">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2"><ShieldCheck className="w-5 h-5" /> ¿Qué cubre la garantía?</h2>
          <p className="text-gray-700 mb-4">Cubre defectos de fábrica: hundimientos prematuros (mayores a 2 cm), fallas en resortes, costuras abiertas, deformaciones anormales.</p>
          <h3 className="font-bold mb-2">No cubre:</h3>
          <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
            <li>Manchas, roturas por mal uso (saltar, cortes)</li>
            <li>Exposición a humedad excesiva</li>
            <li>Uso con sommier inadecuado</li>
            <li>Hundimientos normales menores a 2 cm después del primer año</li>
          </ul>
          <p className="text-sm text-gray-600 mt-4">Para mantener la garantía, rotá el colchón cada 3 meses el primer año y usá un protector impermeable.</p>
        </div>
      </div>
      <CtaBanner title="¿Tenés un problema con tu colchón?" description="Comunicate con nuestro servicio técnico" ctaLabel="Llamar al 0981 111 222" ctaHref="tel:+595981111222" />
      <Footer />
      <MessagingFloat phone={c.messaging} message="Hola! Tengo una consulta sobre garantía" />
      <MobileCta />
    </>
  )
}
