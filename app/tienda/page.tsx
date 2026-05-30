import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { MobileCta } from "@/components/mobile-cta"
import raw from "@/content/es.json"
import Image from "next/image"
import Link from "next/link"
import { Bed, Search, SlidersHorizontal, ChevronRight, X } from "lucide-react"

const content = raw as any
const catalog = content.home?.productCatalog || {}
const allProducts = catalog.products || []
const categories = catalog.categories || []

export default function TiendaPage({ searchParams }: { searchParams: { cat?: string; q?: string } }) {
  const activeCat = searchParams.cat || ""
  const query = (searchParams.q || "").toLowerCase()

  let filtered = activeCat ? allProducts.filter((p: any) => p.category === activeCat) : allProducts
  if (query) {
    filtered = filtered.filter((p: any) =>
      p.name?.toLowerCase().includes(query) || p.description?.toLowerCase().includes(query)
    )
  }

  const grouped = categories.reduce((acc: any, cat: string) => {
    const items = filtered.filter((p: any) => p.category === cat)
    if (items.length > 0) acc[cat] = items
    return acc
  }, {} as Record<string, any[]>)

  return (
    <>
      <Header />

      {/* Hero */}
      <section className="bg-[#0F1624] py-16">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h1 className="text-4xl font-extrabold text-white md:text-5xl">{catalog.title || "Tienda Superspuma"}</h1>
          <p className="mt-3 text-blue-200">{catalog.subtitle || "Encontrá el colchón perfecto para vos"}</p>
          {/* Search */}
          <form className="mt-8 mx-auto max-w-lg flex" action="/tienda">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input type="text" name="q" defaultValue={searchParams.q} placeholder="Buscar productos..."
                className="w-full rounded-l-lg border-0 py-3 pl-12 pr-4 text-gray-900 focus:outline-none focus:ring-2 focus:ring-white/50" />
            </div>
            <button type="submit" className="rounded-r-lg bg-white px-6 py-3 font-semibold text-[#0F1624] hover:bg-gray-100">
              Buscar
            </button>
          </form>
        </div>
      </section>

      {/* Category filters */}
      <section className="border-b bg-white sticky top-[60px] z-30">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex gap-2 overflow-x-auto py-3">
            <Link href="/tienda"
              className={`shrink-0 rounded-full px-5 py-2 text-sm font-semibold transition ${!activeCat ? "bg-[#0F1624] text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}>
              Todos ({allProducts.length})
            </Link>
            {categories.map((cat: string) => {
              const count = allProducts.filter((p: any) => p.category === cat).length
              return (
                <Link key={cat} href={`/tienda?cat=${encodeURIComponent(cat)}`}
                  className={`shrink-0 rounded-full px-5 py-2 text-sm font-semibold transition ${activeCat === cat ? "bg-[#0F1624] text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}>
                  {cat} ({count})
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Results count */}
      <section className="bg-[#EFF2F7] py-2 border-b">
        <div className="mx-auto max-w-7xl px-4 flex items-center justify-between">
          <p className="text-sm text-gray-500">
            {filtered.length} producto{filtered.length !== 1 ? "s" : ""}
            {activeCat ? ` en ${activeCat}` : ""}
            {query ? ` para "${query}"` : ""}
          </p>
          {(activeCat || query) && (
            <Link href="/tienda" className="text-sm text-[#3A4A5D] hover:text-[#0F1624] flex items-center gap-1">
              <X className="w-3 h-3" /> Limpiar filtros
            </Link>
          )}
        </div>
      </section>

      {/* Products grid */}
      <section className="bg-[#EFF2F7] py-10">
        <div className="mx-auto max-w-7xl px-4">
          {Object.keys(grouped).length === 0 ? (
            <div className="py-20 text-center">
              <Bed className="mx-auto w-16 h-16 text-gray-300" />
              <p className="mt-4 text-gray-500">No se encontraron productos</p>
            </div>
          ) : (
            Object.entries(grouped).map(([cat, products]) => (
              <div key={cat} className="mb-12">
                <h2 className="mb-6 text-2xl font-bold text-[#0F1624] flex items-center gap-2">
                  <Bed className="w-6 h-6" /> {cat}
                </h2>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {(products as any[]).map((product: any) => (
                    <a key={product.slug} href={`/producto/${product.slug}`}
                      className="group overflow-hidden rounded-2xl bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl">
                      <div className="relative aspect-square bg-gray-50 overflow-hidden">
                        {product.image ? (
                          <Image src={product.image} alt={product.name} fill
                            className="object-contain p-4 transition-transform group-hover:scale-105"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" />
                        ) : (
                          <div className="flex h-full items-center justify-center text-gray-300">
                            <Bed className="w-16 h-16" />
                          </div>
                        )}
                        {product.specs?.garantia && (
                          <span className="absolute top-3 right-3 rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                            {product.specs.garantia} garantía
                          </span>
                        )}
                      </div>
                      <div className="p-5">
                        <span className="text-xs font-semibold uppercase tracking-wider text-[#3A4A5D]">{cat}</span>
                        <h3 className="mt-1 text-lg font-bold text-[#0F1624]">{product.name}</h3>
                        <p className="mt-1 text-sm text-gray-500 line-clamp-2">{product.description}</p>
                        {product.specs && (
                          <div className="mt-2 flex flex-wrap gap-1">
                            {product.specs.tecnologia && (
                              <span className="rounded bg-gray-100 px-2 py-0.5 text-xs text-gray-600">{product.specs.tecnologia}</span>
                            )}
                            {product.specs.soporte && (
                              <span className="rounded bg-gray-100 px-2 py-0.5 text-xs text-gray-600">{product.specs.soporte}</span>
                            )}
                          </div>
                        )}
                        <div className="mt-3 flex items-center justify-between">
                          <span className="text-lg font-extrabold text-[#0F1624]">{product.price}</span>
                          <span className="inline-flex items-center gap-1 text-sm font-semibold text-[#3A4A5D]">
                            Ver más <ChevronRight className="w-4 h-4" />
                          </span>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      </section>

      <Footer businessName="Superspuma" />
      <WhatsAppFloat phone="595974202025" />
      <MobileCta />
    </>
  )
}
