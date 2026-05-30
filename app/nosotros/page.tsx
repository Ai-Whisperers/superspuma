import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { MobileCta } from "@/components/mobile-cta"
import { CtaBanner } from "@/components/cta-banner"
import type { Content } from "@/types/content"
import raw from "@/content/es.json"

const content = raw as any
const nav = content.navigation

export default function NosotrosPage() {
  return (
    <>
      <Header />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6">49 años haciendo dormir al Paraguay</h1>
        <p className="text-lg text-gray-700 mb-8">
          Superspuma del Paraguay S.A.E.C.A. es una empresa familiar fundada el 24 de julio de 1976.
          Hoy somos más de 200 colaboradores y líderes regionales en innovación para el bienestar.
        </p>

        <div className="bg-[#F8F9FA] rounded-xl p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">Nuestra historia</h2>
          <div className="space-y-4 text-gray-700">
            <p>En 1976, una familia paraguaya apostó por fabricar colchones de calidad en un mercado dominado por la importación. Empezamos con un taller pequeño en Villeta con la convicción de que Paraguay podía competir en calidad con cualquier marca regional.</p>
            <p>Casi cinco décadas después seguimos fabricando acá, sobre la Ruta Ypané y Arroyo Avay. Nuestra planta abastece las 5 tiendas propias y una red de revendedores oficiales en todo el país (Bristol, Electroban, Misionera, Artaza Hermanos, Universo, Inverfin, Big Center, ContiMarket, entre otros).</p>
            <p>En estos años fabricamos más de un millón de colchones. Nuestros clientes nos vuelven a elegir para el cuarto de los hijos, para el traslado, para el abuelo. Eso es lo que nos mantiene — saber que cuando alguien piensa en descansar bien, piensa en Superspuma.</p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
{[{v:"+49",l:"Años"},{v:"+200",l:"Colaboradores"},{v:"19",l:"Modelos"},{v:"13",l:"Puntos de venta"}].map((s: any, i: number) => (
            <div key={i} className="bg-[#0F1624] text-white rounded-xl p-6 text-center">
              <div className="text-3xl font-bold">{s.v}</div>
              <div className="text-sm text-blue-200 mt-1">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
      <CtaBanner title="Conocé nuestros colchones" description="Visitá nuestra tienda online o escribinos por WhatsApp" ctaLabel="Ver tienda" ctaHref="/tienda" />
      <Footer />
      <WhatsAppFloat phone={content.whatsapp} message="Hola! Quiero conocer más sobre Superspuma" />
      <MobileCta />
    </>
  )
}
