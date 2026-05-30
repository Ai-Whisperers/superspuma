import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { MobileCta } from "@/components/mobile-cta"
import type { Content } from "@/types/content"
import raw from "@/content/es.json"

const c = raw as any

export default function PrivacidadPage() {
  return (
    <>
      <Header />
      <div className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6">Política de privacidad</h1>
        <div className="prose prose-gray max-w-none space-y-4 text-gray-700">
          <p>En Superspuma del Paraguay S.A.E.C.A. nos comprometemos a proteger tu privacidad. Esta política describe cómo recopilamos, usamos y protegemos tu información personal.</p>
          <h2 className="text-xl font-bold text-[#0F1624]">Información que recopilamos</h2>
          <p>Recopilamos la información que nos proporcionás voluntariamente: nombre, correo electrónico, número de teléfono, dirección de entrega y datos de facturación necesarios para procesar tu pedido.</p>
          <h2 className="text-xl font-bold text-[#0F1624]">Uso de la información</h2>
          <p>Usamos tu información para: procesar y entregar tus pedidos, comunicarnos sobre tu compra, enviar información promocional (con tu consentimiento) y mejorar nuestros servicios.</p>
          <h2 className="text-xl font-bold text-[#0F1624]">Protección de datos</h2>
          <p>Implementamos medidas de seguridad técnicas y organizativas para proteger tu información contra acceso no autorizado, pérdida o alteración.</p>
          <h2 className="text-xl font-bold text-[#0F1624]">Tus derechos</h2>
          <p>Podés solicitar acceso, corrección o eliminación de tus datos personales en cualquier momento contactándonos por WhatsApp o email.</p>
          <p className="text-sm text-gray-500 mt-8">Última actualización: mayo 2026</p>
        </div>
      </div>
      <Footer />
      <WhatsAppFloat phone={c.whatsapp} message="Hola! Tengo una consulta sobre privacidad" />
      <MobileCta />
    </>
  )
}
