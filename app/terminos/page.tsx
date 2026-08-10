import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { MessagingFloat } from "@/components/messaging-float"
import { MobileCta } from "@/components/mobile-cta"
import type { Content } from "@/types/content"
import raw from "@/content/es.json"

const c = raw as any

export default function TerminosPage() {
  return (
    <>
      <Header />
      <div className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6">Términos y condiciones</h1>
        <div className="prose prose-gray max-w-none space-y-4 text-gray-700">
          <p>Al comprar productos Superspuma aceptás los siguientes términos y condiciones.</p>
          <h2 className="text-xl font-bold text-[#0F1624]">Precios y pagos</h2>
          <p>Todos los precios están expresados en guaraníes (PYG) e incluyen IVA. Los precios pueden variar sin previo aviso. Las cuotas sin interés están sujetas a las condiciones de cada banco emisor.</p>
          <h2 className="text-xl font-bold text-[#0F1624]">Envíos y entregas</h2>
          <p>Los plazos de entrega son estimados y pueden verse afectados por factores externos. El envío es gratuito en compras superiores a Gs. 1.000.000 para zonas urbanas de Asunción y Central.</p>
          <h2 className="text-xl font-bold text-[#0F1624]">Garantía</h2>
          <p>Todos nuestros productos incluyen garantía de fábrica según la línea del producto. Ver la página de Garantía para más detalles.</p>
          <h2 className="text-xl font-bold text-[#0F1624]">Devoluciones</h2>
          <p>Aceptamos cambios por defectos de fabricación dentro del período de garantía. No aceptamos devoluciones por cambio de opinión una vez entregado el producto.</p>
          <p className="text-sm text-gray-500 mt-8">Última actualización: mayo 2026</p>
        </div>
      </div>
      <Footer />
      <MessagingFloat phone={c.messaging} message="Hola! Tengo una consulta sobre términos" />
      <MobileCta />
    </>
  )
}
