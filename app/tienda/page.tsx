import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { MobileCta } from "@/components/mobile-cta"
import raw from "@/content/es.json"
import { MessageCircle } from "lucide-react"

const content = raw as any

function slugify(name: string) {
  return name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
}

const products = (content?.home?.productCatalog?.products ?? []).map((p: any) => ({
  ...p,
  slug: p.slug ?? slugify(p.name ?? "producto"),
  line: p.line ?? "Superspuma",
}))

const categories = Array.from(new Set(products.map((p: any) => String(p.category || "")).filter(Boolean))) as string[]

export default function TiendaPage() {
  return (
    <>
      <Header />
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-2">Tienda</h1>
        <p className="text-gray-600 mb-10">Todos nuestros modelos. Consultá disponibilidad y precios por WhatsApp.</p>

        {categories.map((cat) => (
          <div key={cat} className="mb-12">
            <h2 className="text-2xl font-bold text-[#0F1624] mb-6 border-b border-gray-200 pb-2">{cat}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {products.filter((p: any) => p.category === cat).map((p: any) => (
                <a key={p.slug} href={`/producto/${p.slug}`} className="block bg-white rounded-xl p-5 border border-gray-100 hover:shadow-md transition group">
                  <div>
                    <h3 className="font-bold text-[#0F1624] group-hover:text-[#3A4A5D]">{p.name}</h3>
                    <span className="text-xs text-gray-500 uppercase tracking-wide">{p.line}</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">{p.description}</p>
                  <div className="flex items-center justify-between mt-4">
                    <span className="font-bold text-[#0F1624]">{p.price}</span>
                    <span className="text-xs bg-[#EFF2F7] px-2 py-1 rounded">{p.category}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        ))}

        <div className="bg-[#EFF2F7] rounded-xl p-8 text-center mt-8">
          <h2 className="text-2xl font-bold mb-4">¿No encontrás lo que buscás?</h2>
          <p className="text-gray-600 mb-6">Escribinos y te asesoramos sobre el modelo ideal para vos.</p>
          <a
            href="https://wa.me/595974202025?text=Hola!%20Quiero%20asesoramiento%20para%20elegir%20un%20colch%C3%B3n"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#0F1624] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#3A4A5D] transition"
          >
            <MessageCircle className="w-5 h-5" /> Consultar por WhatsApp
          </a>
        </div>
      </div>
      <Footer />
      <WhatsAppFloat phone={content.whatsapp} message="Hola! Quiero ver colchones disponibles" />
      <MobileCta />
    </>
  )
}
