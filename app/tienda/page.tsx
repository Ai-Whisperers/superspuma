import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { MobileCta } from "@/components/mobile-cta"
import raw from "@/content/es.json"
import { MessageCircle, Search, ChevronRight, SlidersHorizontal, ArrowRight } from "lucide-react"

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

const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=1400&q=80",
]

export default function TiendaPage() {
  return (
    <>
      <Header />

      {/* ── Hero Banner ── */}
      <section className="relative overflow-hidden" style={{ background: "linear-gradient(135deg, #0F1624 0%, #1a2744 100%)" }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-72 h-72 bg-white rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 mx-auto max-w-6xl px-4 py-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">Nuestra Tienda</h1>
          <p className="mt-4 text-lg text-blue-200 max-w-xl">{products.length} modelos de colchones, sommiers y accesorios. Encontrá tu descanso ideal.</p>
        </div>
      </section>

      {/* ── Product Catalog ── */}
      <section className="bg-[#F8F9FA]">
        <div className="mx-auto max-w-6xl px-4 py-12">
          {categories.map((cat) => {
            const catProducts = products.filter((p: any) => p.category === cat)
            return (
              <div key={cat} className="mb-14">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0F1624]">
                    <SlidersHorizontal className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-[#0F1624]">{cat}</h2>
                    <p className="text-sm text-gray-500">{catProducts.length} modelos</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {catProducts.map((p: any) => (
                    <a key={p.slug} href={`/producto/${p.slug}`}
                      className="group bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg hover:border-gray-200 transition-all hover:scale-[1.01]">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="font-bold text-[#0F1624] group-hover:text-[#3A4A5D] text-lg">{p.name}</h3>
                        <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-[#0F1624] transition mt-1" />
                      </div>
                      <p className="text-sm text-gray-500 line-clamp-2 min-h-[40px]">{p.description}</p>
                      <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-between">
                        <span className="text-lg font-bold text-[#0F1624]">{p.price}</span>
                        <span className="text-[10px] bg-[#EFF2F7] text-gray-600 px-2 py-0.5 rounded-full">{p.line}</span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            )
          })}

          {/* ── Help CTA ── */}
          <div className="rounded-2xl p-10 text-center" style={{ background: "linear-gradient(135deg, #0F1624 0%, #3A4A5D 100%)" }}>
            <h2 className="text-2xl font-bold text-white">¿No encontrás lo que buscás?</h2>
            <p className="mt-3 text-blue-200">Escribinos y te asesoramos sobre el modelo ideal para vos.</p>
            <a href="https://wa.me/595974202025?text=Hola!%20Quiero%20asesoramiento%20para%20elegir%20un%20colch%C3%B3n"
              target="_blank" rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 bg-white text-[#0F1624] px-8 py-4 rounded-xl font-bold hover:scale-105 transition-all">
              <MessageCircle className="w-5 h-5" /> Consultar por WhatsApp
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat phone={content.whatsapp} message="Hola! Quiero ver colchones disponibles" />
      <MobileCta />
    </>
  )
}
