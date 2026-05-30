import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { MobileCta } from "@/components/mobile-cta"
import raw from "@/content/es.json"
import Image from "next/image"
import {
  Factory, Truck, CreditCard, ShieldCheck, Store, Wrench,
  Award, Users, Package, MapPin, Search, MessageCircle, Moon,
  Star, Bed, ChevronRight, ArrowRight, Check, Quote,
  ChevronLeft,
} from "lucide-react"

const content = raw as any
const home = content.home || {}
const hero = home.hero || {}
const trustBadges = home.trustBadges || {}
const productCatalog = home.productCatalog || {}
const comparison = home.programsComparison || {}
const process = home.process || {}
const gallery = home.gallery || {}
const testimonials = home.testimonials || {}
const stats = home.stats || {}

const ICON_MAP: Record<string, any> = {
  Factory, Truck, CreditCard, ShieldCheck, Store, Wrench,
  Award, Users, Package, MapPin, Search, MessageCircle, Moon, Bed,
}

function Icon({ name, className }: { name: string; className?: string }) {
  const Comp = ICON_MAP[name]
  if (!Comp) return null
  return <Comp className={className || "w-6 h-6"} />
}

/* ── HERO BANNER CAROUSEL ── */
const BANNERS = [
  { src: "/images/banners/slide-20off.webp", alt: "20% OFF en toda la línea" },
  { src: "/images/banners/conti.webp", alt: "Línea Conti" },
  { src: "/images/banners/maestre-banner.webp", alt: "Línea Maestre" },
  { src: "/images/banners/kids-banner.webp", alt: "Colchones para niños" },
]

function HeroCarousel() {
  return (
    <section className="relative overflow-hidden" style={{ background: "linear-gradient(135deg, #0F1624 0%, #1a2744 50%, #3A4A5D 100%)" }}>
      {/* Decorative blobs */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-20 w-96 h-96 bg-blue-400 rounded-full blur-3xl" />
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 md:py-24">
        <div className="grid gap-12 md:grid-cols-2 items-center">
          {/* Text side */}
          <div>
            <h1 className="text-4xl font-extrabold text-white md:text-5xl lg:text-6xl leading-tight">
              {hero.headline || "Dormir mejor empieza por un Superspuma"}
            </h1>
            <p className="mt-6 text-lg text-blue-100 md:text-xl leading-relaxed">
              {hero.subheadline || "Más de 48 años fabricando el descanso de Paraguay. Calidad, garantía y precio directo de fábrica."}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#catalogo" className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-4 font-bold text-[#0F1624] transition-all hover:scale-105 hover:shadow-xl">
                Ver Catálogo <ArrowRight className="w-5 h-5" />
              </a>
              <a href="https://wa.me/595974202025" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border-2 border-white/30 px-8 py-4 font-bold text-white transition-all hover:bg-white/10">
                <MessageCircle className="w-5 h-5" /> WhatsApp
              </a>
            </div>
          </div>
          {/* Banner side */}
          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl shadow-2xl">
            <Image
              src={BANNERS[0].src}
              alt={BANNERS[0].alt}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            <div className="absolute bottom-4 left-4 flex gap-2">
              {BANNERS.map((b, i) => (
                <span key={i} className={`h-2 rounded-full ${i === 0 ? "w-8 bg-white" : "w-2 bg-white/50"}`} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function HomePage() {
  const products = productCatalog.products || []
  const categories = productCatalog.categories || []
  const prodsByCategory = categories.reduce((acc: any, cat: string) => {
    acc[cat] = products.filter((p: any) => p.category === cat)
    return acc
  }, {} as Record<string, any[]>)

  return (
    <>
      <Header />

      {/* ── HERO CAROUSEL ── */}
      <HeroCarousel />

      {/* ── TRUST BADGES ── */}
      <section className="border-b bg-white py-8">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 md:grid-cols-4">
          {(trustBadges.items || []).slice(0, 4).map((badge: any, i: number) => (
            <div key={i} className="flex flex-col items-center gap-2 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0F1624]/5">
                <Icon name={badge.icon} className="w-6 h-6 text-[#0F1624]" />
              </div>
              <div>
                <p className="font-bold text-[#0F1624] text-sm">{badge.title}</p>
                <p className="text-xs text-gray-500">{badge.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── PRODUCT CATALOG ── */}
      <section id="catalogo" className="bg-[#EFF2F7] py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-extrabold text-[#0F1624] md:text-4xl">
              {productCatalog.title || "Nuestros Productos"}
            </h2>
            <p className="mt-3 text-gray-500">{productCatalog.subtitle || "Calidad y confort para cada necesidad"}</p>
          </div>

          {categories.map((cat: string) => (
            <div key={cat} className="mb-14">
              <h3 className="mb-6 text-2xl font-bold text-[#0F1624] flex items-center gap-2">
                <Bed className="w-6 h-6" /> {cat}
              </h3>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {(prodsByCategory[cat] || []).slice(0, cat === "Resorte" ? 4 : 3).map((product: any) => (
                  <a key={product.slug} href={`/producto/${product.slug}`}
                    className="group overflow-hidden rounded-2xl bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl">
                    {/* Product image */}
                    <div className="relative aspect-square bg-gray-50 overflow-hidden">
                      {product.image ? (
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-contain p-4 transition-transform group-hover:scale-105"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        />
                      ) : (
                        <div className="flex h-full items-center justify-center text-gray-300">
                          <Bed className="w-16 h-16" />
                        </div>
                      )}
                    </div>
                    <div className="p-5">
                      <span className="text-xs font-semibold uppercase tracking-wider text-[#3A4A5D]">{cat}</span>
                      <h4 className="mt-1 text-lg font-bold text-[#0F1624]">{product.name}</h4>
                      <p className="mt-1 text-sm text-gray-500 line-clamp-2">{product.description}</p>
                      <div className="mt-3 flex items-center justify-between">
                        <span className="text-lg font-extrabold text-[#0F1624]">{product.price}</span>
                        <span className="inline-flex items-center gap-1 text-sm font-semibold text-[#3A4A5D] group-hover:text-[#0F1624]">
                          Ver más <ChevronRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
              {(prodsByCategory[cat] || []).length > (cat === "Resorte" ? 4 : 3) && (
                <div className="mt-6 text-center">
                  <a href={`/tienda?cat=${encodeURIComponent(cat)}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#3A4A5D] hover:text-[#0F1624]">
                    Ver todos los {cat} <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              )}
            </div>
          ))}

          <div className="mt-8 text-center">
            <a href="/tienda"
              className="inline-flex items-center gap-2 rounded-lg bg-[#0F1624] px-8 py-4 font-bold text-white transition-all hover:bg-[#3A4A5D] hover:scale-105">
              Ver Catálogo Completo <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* ── COMPARISON TABLE ── */}
      {comparison.products && comparison.products.length > 0 && (
        <section className="bg-white py-20">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="mb-10 text-center text-3xl font-extrabold text-[#0F1624]">
              {comparison.title || "Compará nuestros productos"}
            </h2>
            <div className="overflow-x-auto rounded-2xl border border-gray-200">
              <table className="w-full text-left text-sm">
                <thead className="bg-[#0F1624] text-white">
                  <tr>
                    <th className="px-6 py-4 font-semibold">Característica</th>
                    {(comparison.products || []).map((p: any, i: number) => (
                      <th key={i} className="px-6 py-4 font-semibold">{p.name}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {(comparison.features || []).map((feat: any, i: number) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="px-6 py-3 font-medium text-[#0F1624]">{feat.name}</td>
                      {(comparison.products || []).map((p: any, j: number) => (
                        <td key={j} className="px-6 py-3">
                          {feat.values?.[j] ? (
                            <Check className="h-5 w-5 text-green-500" />
                          ) : (
                            <span className="text-gray-300">—</span>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* ── PROCESS ── */}
      <section className="bg-[#EFF2F7] py-20">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="mb-12 text-center text-3xl font-extrabold text-[#0F1624]">
            {process.title || "¿Cómo comprás tu Superspuma?"}
          </h2>
          <div className="grid gap-8 md:grid-cols-4">
            {(process.steps || []).map((step: any, i: number) => (
              <div key={i} className="text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#0F1624] text-xl font-bold text-white">
                  {i + 1}
                </div>
                <h4 className="font-bold text-[#0F1624]">{step.title}</h4>
                <p className="mt-1 text-sm text-gray-500">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GALLERY ── */}
      {gallery.images && gallery.images.length > 0 && (
        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-4">
            <h2 className="mb-10 text-center text-3xl font-extrabold text-[#0F1624]">
              {gallery.title || "Galería"}
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {(gallery.images || []).slice(0, 6).map((img: any, i: number) => (
                <div key={i} className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                  <Image src={img.src || img} alt={img.alt || ""} fill className="object-cover" sizes="(max-width: 640px) 100vw, 33vw" />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── TESTIMONIALS ── */}
      {testimonials.items && testimonials.items.length > 0 && (
        <section className="bg-[#EFF2F7] py-20">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="mb-10 text-center text-3xl font-extrabold text-[#0F1624]">
              {testimonials.title || "Lo que dicen nuestros clientes"}
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              {(testimonials.items || []).slice(0, 3).map((t: any, i: number) => (
                <div key={i} className="rounded-2xl bg-white p-6 shadow-sm">
                  <div className="mb-3 flex gap-1">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className={`w-4 h-4 ${j < (t.rating || 5) ? "text-yellow-400 fill-yellow-400" : "text-gray-200"}`} />
                    ))}
                  </div>
                  <p className="text-gray-600 italic">&ldquo;{t.text}&rdquo;</p>
                  <p className="mt-4 font-semibold text-[#0F1624]">{t.name}</p>
                  <p className="text-sm text-gray-400">{t.city || ""}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── STATS ── */}
      <section className="py-16" style={{ background: "linear-gradient(135deg, #0F1624 0%, #3A4A5D 100%)" }}>
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 px-4 md:grid-cols-4">
          {(stats.items || []).slice(0, 4).map((s: any, i: number) => (
            <div key={i} className="text-center">
              <p className="text-3xl font-extrabold text-white md:text-4xl">{s.number}</p>
              <p className="mt-1 text-sm text-blue-200">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-3xl font-extrabold text-[#0F1624]">¿Listo para dormir mejor?</h2>
          <p className="mt-4 text-gray-500">Contactanos por WhatsApp y te asesoramos en la elección del colchón perfecto para vos.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href="https://wa.me/595974202025" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-green-600 px-8 py-4 font-bold text-white transition-all hover:bg-green-700 hover:scale-105">
              <MessageCircle className="w-5 h-5" /> Hablar por WhatsApp
            </a>
            <a href="/tiendas"
              className="inline-flex items-center gap-2 rounded-lg border-2 border-[#0F1624] px-8 py-4 font-bold text-[#0F1624] transition-all hover:bg-[#0F1624] hover:text-white">
              <MapPin className="w-5 h-5" /> Visitar Tienda
            </a>
          </div>
        </div>
      </section>

      <Footer businessName="Superspuma" />
      <WhatsAppFloat phone="595974202025" />
      <MobileCta />
    </>
  )
}
