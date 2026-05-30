import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { MobileCta } from "@/components/mobile-cta"
import raw from "@/content/es.json"
import Image from "next/image"
import Link from "next/link"
import { Bed, ChevronRight, ShieldCheck, Truck, CreditCard, MessageCircle, Check, Star, ArrowLeft } from "lucide-react"

const content = raw as any
const products = content.home?.productCatalog?.products || []

export function generateStaticParams() {
  return products.map((p: any) => ({ slug: p.slug }))
}

export default function ProductoPage({ params }: { params: { slug: string } }) {
  const product = products.find((p: any) => p.slug === params.slug)

  if (!product) {
    return (
      <>
        <Header />
        <div className="flex min-h-[60vh] items-center justify-center">
          <div className="text-center">
            <Bed className="mx-auto w-20 h-20 text-gray-300" />
            <h1 className="mt-4 text-2xl font-bold text-gray-900">Producto no encontrado</h1>
            <Link href="/tienda" className="mt-4 inline-flex items-center gap-2 text-[#3A4A5D] hover:text-[#0F1624]">
              <ArrowLeft className="w-4 h-4" /> Volver a la tienda
            </Link>
          </div>
        </div>
        <Footer />
      </>
    )
  }

  const related = products
    .filter((p: any) => p.category === product.category && p.slug !== product.slug)
    .slice(0, 4)

  const specs = product.specs || {}

  return (
    <>
      <Header />

      {/* Hero */}
      <section className="bg-[#0F1624] py-12">
        <div className="mx-auto max-w-7xl px-4">
          <nav className="mb-6 flex items-center gap-2 text-sm text-blue-200">
            <Link href="/" className="hover:text-white">Inicio</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/tienda" className="hover:text-white">Tienda</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href={`/tienda?cat=${encodeURIComponent(product.category)}`} className="hover:text-white">{product.category}</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">{product.name}</span>
          </nav>
        </div>
      </section>

      {/* Product detail */}
      <section className="bg-white py-12">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Image */}
            <div className="relative aspect-square overflow-hidden rounded-2xl bg-gray-50">
              {product.image ? (
                <Image src={product.image} alt={product.name} fill className="object-contain p-8" sizes="(max-width: 1024px) 100vw, 50vw" priority />
              ) : (
                <div className="flex h-full items-center justify-center text-gray-300">
                  <Bed className="w-32 h-32" />
                </div>
              )}
            </div>

            {/* Info */}
            <div>
              <span className="inline-block rounded-full bg-[#0F1624]/5 px-4 py-1 text-sm font-semibold text-[#0F1624]">{product.category}</span>
              <h1 className="mt-4 text-3xl font-extrabold text-[#0F1624] md:text-4xl">{product.name}</h1>
              <p className="mt-3 text-3xl font-extrabold text-[#0F1624]">{product.price}</p>
              <p className="mt-4 text-gray-600 leading-relaxed">{product.description}</p>

              {/* Specs table */}
              {Object.keys(specs).length > 0 && (
                <div className="mt-8 overflow-hidden rounded-xl border border-gray-200">
                  <div className="bg-[#0F1624] px-5 py-3">
                    <h3 className="text-sm font-bold text-white">Ficha Técnica</h3>
                  </div>
                  <div className="divide-y divide-gray-100">
                    {Object.entries(specs).map(([key, val]) => {
                      const labels: Record<string, string> = {
                        diseno: "Diseño", tecnologia: "Tecnología", soporte: "Soporte",
                        altura: "Altura", garantia: "Garantía", colores: "Colores",
                        tipo: "Tipo", material: "Material", relleno: "Relleno",
                        almacenamiento: "Almacenamiento"
                      }
                      return (
                        <div key={key} className="flex justify-between px-5 py-3">
                          <span className="text-sm font-medium text-gray-500">{labels[key] || key}</span>
                          <span className="text-sm font-semibold text-[#0F1624]">{val as string}</span>
                        </div>
                      )
                    })}
                  </div>
                </div>
              )}

              {/* Trust row */}
              <div className="mt-6 grid grid-cols-3 gap-3">
                <div className="flex flex-col items-center rounded-xl bg-green-50 p-3">
                  <ShieldCheck className="w-6 h-6 text-green-600" />
                  <span className="mt-1 text-xs font-semibold text-green-700">{specs.garantia || "Garantía"}</span>
                </div>
                <div className="flex flex-col items-center rounded-xl bg-blue-50 p-3">
                  <Truck className="w-6 h-6 text-blue-600" />
                  <span className="mt-1 text-xs font-semibold text-blue-700">Envío gratis</span>
                </div>
                <div className="flex flex-col items-center rounded-xl bg-purple-50 p-3">
                  <CreditCard className="w-6 h-6 text-purple-600" />
                  <span className="mt-1 text-xs font-semibold text-purple-700">Cuotas sin interés</span>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-8 flex flex-wrap gap-4">
                <a href={`https://wa.me/595974202025?text=${encodeURIComponent(`Hola! Me interesa el colchón ${product.name}. ¿Podrían asesorarme?`)}`}
                  target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-green-600 px-8 py-4 font-bold text-white transition-all hover:bg-green-700 hover:scale-105">
                  <MessageCircle className="w-5 h-5" /> Consultar por WhatsApp
                </a>
                <a href="/tiendas"
                  className="inline-flex items-center gap-2 rounded-lg border-2 border-[#0F1624] px-8 py-4 font-bold text-[#0F1624] hover:bg-[#0F1624] hover:text-white transition-all">
                  Visitar Tienda
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related products */}
      {related.length > 0 && (
        <section className="bg-[#EFF2F7] py-16">
          <div className="mx-auto max-w-7xl px-4">
            <h2 className="mb-8 text-2xl font-bold text-[#0F1624]">Productos relacionados</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((p: any) => (
                <a key={p.slug} href={`/producto/${p.slug}`}
                  className="group overflow-hidden rounded-2xl bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl">
                  <div className="relative aspect-square bg-gray-50 overflow-hidden">
                    {p.image ? (
                      <Image src={p.image} alt={p.name} fill className="object-contain p-4 group-hover:scale-105 transition-transform"
                        sizes="(max-width: 640px) 100vw, 25vw" />
                    ) : (
                      <div className="flex h-full items-center justify-center text-gray-300"><Bed className="w-12 h-12" /></div>
                    )}
                  </div>
                  <div className="p-4">
                    <h4 className="font-bold text-[#0F1624]">{p.name}</h4>
                    <p className="mt-1 text-sm font-semibold text-[#3A4A5D]">{p.price}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer businessName="Superspuma" />
      <WhatsAppFloat phone="595974202025" />
      <MobileCta />
    </>
  )
}
