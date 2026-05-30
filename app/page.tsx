import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { MobileCta } from "@/components/mobile-cta"
import raw from "@/content/es.json"
import {
  Factory, Truck, CreditCard, ShieldCheck, Store, Wrench,
  Award, Users, Package, MapPin, Search, MessageCircle, Moon,
  Star, Bed, ChevronRight, ArrowRight, Check, Quote,
} from "lucide-react"

const content = raw as any
const home = content.home || {}
const hero = home.hero || {}
const trustBadges = home.trustBadges || {}
const trustSignals = home.trustSignals || {}
const productCatalog = home.productCatalog || {}
const comparison = home.programsComparison || {}
const process = home.process || {}
const gallery = home.gallery || {}
const testimonials = home.testimonials || {}
const stats = home.stats || {}
const promoBanner = home.promoBanner || {}

const ICON_MAP: Record<string, any> = {
  Factory, Truck, CreditCard, ShieldCheck, Store, Wrench,
  Award, Users, Package, MapPin, Search, MessageCircle, Moon, Bed,
}

function Icon({ name, className }: { name: string; className?: string }) {
  const Comp = ICON_MAP[name]
  if (!Comp) return null
  return <Comp className={className || "w-6 h-6"} />
}

export default function HomePage() {
  return (
    <>
      <Header />

      {/* ── HERO ── */}
      <section className="relative overflow-hidden" style={{ background: "linear-gradient(135deg, #0F1624 0%, #1a2744 50%, #3A4A5D 100%)" }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-20 w-96 h-96 bg-blue-400 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 mx-auto max-w-6xl px-4 py-20 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-extrabold text-white md:text-6xl leading-tight">
              {hero.headline || "Dormir mejor empieza por un Superspuma"}
            </h1>
            <p className="mt-6 text-lg text-blue-100 md:text-xl leading-relaxed max-w-2xl">
              {hero.subheadline}
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              {hero.ctaPrimaryText && (
                <a href={hero.ctaPrimaryHref || "#catalogo"} className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-4 font-bold text-[#0F1624] transition-all hover:scale-105 hover:shadow-xl">
                  {hero.ctaPrimaryText} <ArrowRight className="w-5 h-5" />
                </a>
              )}
              {hero.ctaSecondaryText && (
                <a href={hero.ctaSecondaryHref || "#"} target={hero.ctaSecondaryHref?.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border-2 border-white/30 px-8 py-4 font-semibold text-white transition-all hover:bg-white/10">
                  <MessageCircle className="w-5 h-5" /> {hero.ctaSecondaryText}
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST BADGES ── */}
      {trustBadges.items?.length > 0 && (
        <section className="bg-white border-b border-gray-100">
          <div className="mx-auto max-w-6xl px-4 py-14">
            {trustBadges.title && (
              <h2 className="text-center text-2xl font-bold text-[#0F1624] mb-10">{trustBadges.title}</h2>
            )}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {trustBadges.items.map((item: any, i: number) => (
                <div key={i} className="flex flex-col items-center text-center p-4 rounded-xl hover:bg-gray-50 transition">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#EFF2F7] mb-3">
                    <Icon name={item.icon} className="w-6 h-6 text-[#0F1624]" />
                  </div>
                  <span className="font-semibold text-sm text-[#0F1624]">{item.text}</span>
                  <span className="text-xs text-gray-500 mt-1">{item.description}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── PRODUCT CATALOG ── */}
      {productCatalog.products?.length > 0 && (
        <section id="catalogo" className="bg-[#F8F9FA]">
          <div className="mx-auto max-w-6xl px-4 py-16">
            <h2 className="text-3xl font-bold text-[#0F1624] text-center">
              {productCatalog.title || "Nuestros Colchones"}
            </h2>
            {productCatalog.subtitle && (
              <p className="mt-3 text-center text-gray-600 max-w-2xl mx-auto">{productCatalog.subtitle}</p>
            )}
            {productCatalog.categories?.map((cat: string) => (
              <div key={cat} className="mt-12">
                <h3 className="text-xl font-bold text-[#0F1624] mb-6 border-b-2 border-[#0F1624]/10 pb-2">{cat}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {productCatalog.products
                    .filter((p: any) => p.category === cat)
                    .map((p: any) => {
                      const slug = p.slug || p.name?.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-")
                      return (
                        <a key={slug} href={`/producto/${slug}`}
                          className="group bg-white rounded-xl p-5 border border-gray-100 hover:shadow-lg hover:border-gray-200 transition-all">
                          <div className="flex items-start justify-between mb-2">
                            <h4 className="font-bold text-[#0F1624] group-hover:text-[#3A4A5D]">{p.name}</h4>
                            <span className="text-[10px] bg-[#EFF2F7] text-gray-600 px-2 py-0.5 rounded-full whitespace-nowrap ml-2">{p.line}</span>
                          </div>
                          <p className="text-sm text-gray-500 line-clamp-2 min-h-[40px]">{p.description}</p>
                          <div className="mt-4 flex items-center justify-between">
                            <span className="text-lg font-bold text-[#0F1624]">{p.price}</span>
                            <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-[#0F1624] transition" />
                          </div>
                        </a>
                      )
                    })}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── COMPARISON ── */}
      {comparison.tiers?.length > 0 && (
        <section className="bg-white">
          <div className="mx-auto max-w-6xl px-4 py-16">
            {comparison.eyebrow && (
              <p className="text-center text-sm font-semibold text-[#3A4A5D] uppercase tracking-wider mb-2">{comparison.eyebrow}</p>
            )}
            <h2 className="text-3xl font-bold text-[#0F1624] text-center">{comparison.title}</h2>
            {comparison.subtitle && (
              <p className="mt-3 text-center text-gray-600 max-w-2xl mx-auto">{comparison.subtitle}</p>
            )}
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {comparison.tiers.map((tier: any) => (
                <div key={tier.id} className={`rounded-2xl p-6 border-2 transition-all hover:shadow-lg ${
                  tier.highlighted
                    ? "border-[#0F1624] bg-[#0F1624] text-white shadow-xl scale-[1.02]"
                    : "border-gray-200 bg-white"
                }`}>
                  {tier.badge && (
                    <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full mb-3 ${
                      tier.highlighted ? "bg-white text-[#0F1624]" : "bg-[#EFF2F7] text-[#0F1624]"
                    }`}>{tier.badge}</span>
                  )}
                  <h3 className="text-xl font-bold">{tier.name}</h3>
                  <p className={`text-sm mt-2 ${tier.highlighted ? "text-blue-200" : "text-gray-500"}`}>{tier.description}</p>
                  <div className="mt-4 mb-4">
                    <span className="text-2xl font-extrabold">{tier.price}</span>
                    <span className={`block text-xs ${tier.highlighted ? "text-blue-200" : "text-gray-400"}`}>{tier.priceNote}</span>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {tier.included?.map((feat: string, fi: number) => (
                      <li key={fi} className="flex items-start gap-2 text-sm">
                        <Check className={`w-4 h-4 shrink-0 mt-0.5 ${tier.highlighted ? "text-green-300" : "text-green-500"}`} />
                        <span className={tier.highlighted ? "text-blue-100" : "text-gray-600"}>{feat}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={tier.ctaHref} target="_blank" rel="noopener noreferrer"
                    className={`block text-center rounded-lg py-3 font-semibold transition-all hover:scale-105 ${
                      tier.highlighted
                        ? "bg-white text-[#0F1624]"
                        : "bg-[#0F1624] text-white hover:bg-[#3A4A5D]"
                    }`}>
                    {tier.ctaLabel}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── TRUST SIGNALS / STATS ── */}
      {trustSignals.items?.length > 0 && (
        <section className="relative overflow-hidden" style={{ background: "linear-gradient(135deg, #0F1624 0%, #16213e 100%)" }}>
          <div className="relative z-10 mx-auto max-w-6xl px-4 py-16">
            {trustSignals.eyebrow && (
              <p className="text-center text-sm font-semibold text-blue-300 uppercase tracking-wider mb-2">{trustSignals.eyebrow}</p>
            )}
            <h2 className="text-3xl font-bold text-white text-center">{trustSignals.title}</h2>
            {trustSignals.subtitle && (
              <p className="mt-3 text-center text-blue-200 max-w-2xl mx-auto">{trustSignals.subtitle}</p>
            )}
            <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6">
              {trustSignals.items.map((item: any, i: number) => (
                <div key={i} className="text-center bg-white/5 rounded-xl p-6 border border-white/10">
                  <div className="flex justify-center mb-3">
                    <Icon name={item.icon} className="w-8 h-8 text-blue-300" />
                  </div>
                  <div className="text-4xl font-extrabold text-white">{item.value}</div>
                  <div className="text-sm font-semibold text-blue-200 mt-1">{item.title}</div>
                  <div className="text-xs text-blue-300/70 mt-1">{item.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── PROCESS ── */}
      {process.steps?.length > 0 && (
        <section className="bg-white">
          <div className="mx-auto max-w-5xl px-4 py-16">
            {process.eyebrow && (
              <p className="text-center text-sm font-semibold text-[#3A4A5D] uppercase tracking-wider mb-2">{process.eyebrow}</p>
            )}
            <h2 className="text-3xl font-bold text-[#0F1624] text-center">{process.title}</h2>
            {process.subtitle && (
              <p className="mt-3 text-center text-gray-600 max-w-xl mx-auto">{process.subtitle}</p>
            )}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.steps.map((step: any, i: number) => (
                <div key={i} className="text-center">
                  <div className="relative mx-auto mb-4">
                    <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-[#EFF2F7] mx-auto">
                      <Icon name={step.icon} className="w-8 h-8 text-[#0F1624]" />
                    </div>
                    <span className="absolute -top-2 -right-2 flex h-7 w-7 items-center justify-center rounded-full bg-[#0F1624] text-xs font-bold text-white">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-[#0F1624]">{step.title}</h3>
                  <p className="text-sm text-gray-500 mt-2">{step.description}</p>
                  {step.duration && (
                    <span className="inline-block mt-2 text-xs bg-[#EFF2F7] text-[#3A4A5D] px-3 py-1 rounded-full">{step.duration}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── GALLERY ── */}
      {gallery.images?.length > 0 && (
        <section className="bg-[#F8F9FA]">
          <div className="mx-auto max-w-6xl px-4 py-16">
            <h2 className="text-3xl font-bold text-[#0F1624] text-center">{gallery.title}</h2>
            {gallery.subtitle && (
              <p className="mt-3 text-center text-gray-600 max-w-2xl mx-auto">{gallery.subtitle}</p>
            )}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {gallery.images.map((img: any, i: number) => (
                <div key={i} className="group relative overflow-hidden rounded-xl aspect-[4/3]">
                  <img src={img.src} alt={img.alt} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <span className="text-xs text-blue-200 font-medium uppercase tracking-wider">{img.category}</span>
                      <p className="text-sm text-white font-medium mt-1">{img.alt}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── TESTIMONIALS ── */}
      {testimonials.testimonials?.length > 0 && (
        <section className="bg-white">
          <div className="mx-auto max-w-6xl px-4 py-16">
            <h2 className="text-3xl font-bold text-[#0F1624] text-center">{testimonials.title}</h2>
            {testimonials.subtitle && (
              <p className="mt-3 text-center text-gray-600 max-w-xl mx-auto">{testimonials.subtitle}</p>
            )}
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.testimonials.map((t: any, i: number) => (
                <div key={i} className="bg-[#F8F9FA] rounded-xl p-6 border border-gray-100">
                  <Quote className="w-8 h-8 text-[#0F1624]/20 mb-3" />
                  <p className="text-gray-700 text-sm leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
                  <div className="mt-4 flex items-center gap-3 pt-4 border-t border-gray-200">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0F1624] text-white text-sm font-bold">
                      {t.author?.charAt(0)}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-[#0F1624]">{t.author}</div>
                      <div className="text-xs text-gray-500">{t.role}</div>
                    </div>
                    {t.rating && (
                      <div className="ml-auto flex gap-0.5">
                        {Array.from({ length: t.rating }).map((_, si) => (
                          <Star key={si} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── STATS BAR ── */}
      {stats.items?.length > 0 && (
        <section className="bg-[#EFF2F7]">
          <div className="mx-auto max-w-5xl px-4 py-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {stats.items.map((s: any, i: number) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#0F1624]">
                    <Icon name={s.icon} className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-extrabold text-[#0F1624]">{s.value}</div>
                    <div className="text-sm text-gray-600">{s.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── PROMO BANNER ── */}
      {promoBanner.items?.length > 0 && (
        <section className="bg-white">
          <div className="mx-auto max-w-6xl px-4 py-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {promoBanner.items.map((promo: any, i: number) => (
                <div key={i} className="rounded-xl border border-gray-200 bg-[#F8F9FA] p-6 hover:shadow-md transition">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#0F1624] mb-4">
                    <Icon name={promo.icon} className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-bold text-[#0F1624]">{promo.title}</h3>
                  <p className="text-sm text-gray-600 mt-2">{promo.description}</p>
                  {promo.ctaLabel && promo.ctaHref && (
                    <a href={promo.ctaHref} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 mt-4 text-sm font-semibold text-[#0F1624] hover:text-[#3A4A5D]">
                      {promo.ctaLabel} <ArrowRight className="w-4 h-4" />
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── FINAL CTA ── */}
      <section className="relative overflow-hidden" style={{ background: "linear-gradient(135deg, #0F1624 0%, #3A4A5D 100%)" }}>
        <div className="relative z-10 mx-auto max-w-3xl px-4 py-20 text-center">
          <h2 className="text-3xl font-bold text-white md:text-4xl">¿Listo para dormir mejor?</h2>
          <p className="mt-4 text-lg text-blue-200">Escribinos y te asesoramos gratis. Respondemos en el día.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href="/tienda"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-4 font-bold text-[#0F1624] transition-all hover:scale-105">
              Ver tienda <ArrowRight className="w-5 h-5" />
            </a>
            <a href="https://wa.me/595974202025?text=Hola!%20Quiero%20asesoramiento%20para%20elegir%20un%20colch%C3%B3n" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border-2 border-white/30 px-8 py-4 font-semibold text-white transition-all hover:bg-white/10">
              <MessageCircle className="w-5 h-5" /> WhatsApp
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat phone={content.whatsapp} message="Hola! Quiero información sobre colchones Superspuma" />
      <MobileCta />
    </>
  )
}
