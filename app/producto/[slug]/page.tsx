"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { MobileCta } from "@/components/mobile-cta"
import raw from "@/content/es.json"
import {
  MessageCircle, ChevronRight, ShieldCheck, Truck, CreditCard,
  Check, ArrowRight, Bed, Ruler, Phone,
} from "lucide-react"
import { notFound, useParams } from "next/navigation"

const content = raw as any

function slugify(name: string) {
  return name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
}

const allProducts = (content?.home?.productCatalog?.products ?? []).map((p: any) => ({
  ...p,
  slug: p.slug ?? slugify(p.name ?? "producto"),
  line: p.line ?? "Superspuma",
}))

const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&w=1200&q=80",
]

export default function ProductoPage() {
  const params = useParams()
  const slugParam = params?.slug
  const slug = Array.isArray(slugParam) ? slugParam[0] : slugParam
  if (!slug) notFound()

  const product = allProducts.find((p: any) => p.slug === slug)
  if (!product) notFound()

  const imgSrc = HERO_IMAGES[Math.abs(slug.charCodeAt(0)) % HERO_IMAGES.length]
  const waText = `Hola! Quiero info del colchón ${product.name} (${product.price})`
  const waLink = `https://wa.me/595974202025?text=${encodeURIComponent(waText)}`

  // Find related products (same category, excluding current)
  const related = allProducts
    .filter((p: any) => p.category === product.category && p.slug !== product.slug)
    .slice(0, 4)

  return (
    <>
      <Header />

      {/* ── Breadcrumb ── */}
      <div className="bg-[#F8F9FA] border-b border-gray-200">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center gap-2 text-sm text-gray-500">
          <a href="/" className="hover:text-[#0F1624]">Inicio</a>
          <ChevronRight className="w-3 h-3" />
          <a href="/tienda" className="hover:text-[#0F1624]">Tienda</a>
          <ChevronRight className="w-3 h-3" />
          <span className="text-[#0F1624] font-medium">{product.name}</span>
        </div>
      </div>

      {/* ── Product Detail ── */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <div className="grid md:grid-cols-2 gap-10">
            {/* Image */}
            <div className="relative rounded-2xl overflow-hidden bg-[#F8F9FA] aspect-square">
              <img src={imgSrc} alt={product.name} className="w-full h-full object-cover" />
              <div className="absolute top-4 left-4 flex gap-2">
                <span className="bg-[#0F1624] text-white text-xs font-bold px-3 py-1.5 rounded-full">{product.category}</span>
              </div>
            </div>

            {/* Info */}
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-bold bg-[#EFF2F7] text-[#0F1624] px-3 py-1.5 rounded-full">{product.category}</span>
                <span className="text-xs font-bold bg-[#0F1624] text-white px-3 py-1.5 rounded-full">Línea {product.line}</span>
              </div>

              <h1 className="text-4xl font-extrabold text-[#0F1624]">{product.name}</h1>
              <p className="mt-4 text-gray-600 text-lg leading-relaxed">{product.description}</p>

              <div className="mt-8 p-6 bg-[#F8F9FA] rounded-xl">
                <div className="text-3xl font-extrabold text-[#0F1624]">{product.price}</div>
                <p className="text-sm text-gray-500 mt-1">Precio desde. Consultá medidas disponibles.</p>
                <div className="mt-3 flex items-center gap-2 text-sm text-green-700 font-medium">
                  <CreditCard className="w-4 h-4" /> Hasta 18 cuotas sin interés
                </div>
              </div>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a href={waLink} target="_blank" rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-[#0F1624] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#3A4A5D] transition-all hover:scale-[1.02]">
                  <MessageCircle className="w-5 h-5" /> Consultar por WhatsApp
                </a>
                <a href="/tiendas"
                  className="inline-flex items-center justify-center gap-2 border-2 border-[#0F1624] text-[#0F1624] px-8 py-4 rounded-xl font-semibold hover:bg-[#0F1624] hover:text-white transition-all">
                  <Bed className="w-5 h-5" /> Ver en tienda
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Trust Row ── */}
      <section className="bg-[#F8F9FA] border-y border-gray-200">
        <div className="mx-auto max-w-5xl px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Truck, text: "Envío a todo el país", sub: "Gratis desde Gs. 1M" },
              { icon: ShieldCheck, text: "Garantía de fábrica", sub: "2 a 6 años" },
              { icon: CreditCard, text: "18 cuotas sin interés", sub: "Todas las tarjetas" },
              { icon: Phone, text: "Servicio técnico", sub: "0981 111 222" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#0F1624]">
                  <item.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#0F1624]">{item.text}</div>
                  <div className="text-xs text-gray-500">{item.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Related Products ── */}
      {related.length > 0 && (
        <section className="bg-white">
          <div className="mx-auto max-w-6xl px-4 py-12">
            <h2 className="text-2xl font-bold text-[#0F1624]">Otros colchones de {product.category}</h2>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {related.map((p: any) => (
                <a key={p.slug} href={`/producto/${p.slug}`}
                  className="group bg-[#F8F9FA] rounded-xl p-5 border border-gray-100 hover:shadow-lg transition-all">
                  <h3 className="font-bold text-[#0F1624] group-hover:text-[#3A4A5D]">{p.name}</h3>
                  <p className="text-sm text-gray-500 mt-2 line-clamp-2">{p.description}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="font-bold text-[#0F1624]">{p.price}</span>
                    <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-[#0F1624] transition" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Final CTA ── */}
      <section style={{ background: "linear-gradient(135deg, #0F1624 0%, #3A4A5D 100%)" }}>
        <div className="mx-auto max-w-3xl px-4 py-16 text-center">
          <h2 className="text-2xl font-bold text-white">¿Te interesa el {product.name}?</h2>
          <p className="mt-3 text-blue-200">Escribinos y te confirmamos stock, precio final y cuotas.</p>
          <a href={waLink} target="_blank" rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 bg-white text-[#0F1624] px-8 py-4 rounded-xl font-bold hover:scale-105 transition-all">
            <MessageCircle className="w-5 h-5" /> Consultar ahora
          </a>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat phone={content.whatsapp} message={waText} />
      <MobileCta />
    </>
  )
}
