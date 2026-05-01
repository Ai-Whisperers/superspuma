import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { CtaBanner } from "@/components/cta-banner"
import { ProcessSection } from "@/components/process-section"
import { MobileCta } from "@/components/mobile-cta"
import type { Content } from "@/types/content"
import raw from "@/content/es.json"
import {
  Factory, Truck, CreditCard, ShieldCheck, Store, Wrench,
  Award, Users, Package, MapPin, Star, ChevronRight, Search,
  MessageCircle, Moon, Check, Bed, ShoppingBag,
} from "lucide-react"

const content = raw as any
const h = content.home
const hero = h.hero
const stats = h.stats.items
const trustBadges = h.trustBadges
const features = h.features
const products = h.products
const comparisonItems = h.comparison.items
const processSteps = h.process.steps
const testimonials = h.testimonials.items
const faqItems = h.faq.items

const iconMap: Record<string, React.ReactNode> = {
  Factory: <Factory className="w-8 h-8" />,
  Truck: <Truck className="w-8 h-8" />,
  CreditCard: <CreditCard className="w-8 h-8" />,
  ShieldCheck: <ShieldCheck className="w-8 h-8" />,
  Store: <Store className="w-8 h-8" />,
  Wrench: <Wrench className="w-8 h-8" />,
  Award: <Award className="w-8 h-8" />,
  Users: <Users className="w-8 h-8" />,
  Package: <Package className="w-8 h-8" />,
  MapPin: <MapPin className="w-8 h-8" />,
  Search: <Search className="w-8 h-8" />,
  MessageCircle: <MessageCircle className="w-8 h-8" />,
  Moon: <Moon className="w-8 h-8" />,
  Bed: <Bed className="w-8 h-8" />,
  ShoppingBag: <ShoppingBag className="w-8 h-8" />,
}

export default function Home() {
  const nav = content.navigation

  return (
    <>
      <Header />

      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center" style={{ background: `linear-gradient(135deg, #0F1624 0%, #1a2744 50%, #0F1624 100%)` }}>
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url(${hero.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }} />
        <div className="relative max-w-6xl mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">{hero.headline}</h1>
          <p className="text-lg md:text-xl text-blue-200 max-w-2xl mx-auto mb-10">{hero.subheadline}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={hero.ctaPrimaryHref} className="inline-flex items-center gap-2 bg-white text-[#0F1624] px-8 py-4 rounded-lg font-semibold hover:bg-blue-100 transition">
              <ShoppingBag className="w-5 h-5" /> {hero.ctaPrimaryText}
            </a>
            <a href={hero.ctaSecondaryHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition">
              <MessageCircle className="w-5 h-5" /> {hero.ctaSecondaryText}
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-[#EFF2F7]">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s: any, i: number) => (
            <div key={i} className="text-center">
              <div className="text-[#0F1624] mb-2 flex justify-center">{iconMap[s.icon]}</div>
              <div className="text-3xl font-bold text-[#0F1624]">{s.value}</div>
              <div className="text-sm text-gray-600 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">{trustBadges.title}</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {trustBadges.items.map((b: any, i: number) => (
              <div key={i} className="text-center p-6 bg-[#F8F9FA] rounded-xl">
                <div className="text-[#3A4A5D] mb-3 flex justify-center">{iconMap[b.icon]}</div>
                <h3 className="font-semibold text-[#0F1624]">{b.text}</h3>
                <p className="text-sm text-gray-500 mt-1">{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Catalog */}
      <section id="catalogo" className="py-16 bg-[#F8F9FA]">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Nuestro catálogo</h2>
          <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">19 modelos entre espuma y resorte para cada necesidad y presupuesto.</p>

          {["Resorte", "Espuma", "Accesorios"].map(cat => (
            <div key={cat} className="mb-12">
              <h3 className="text-xl font-bold text-[#0F1624] mb-4 border-b border-gray-200 pb-2">{cat}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {products.filter((p: any) => p.category === cat).map((p: any) => (
                  <a key={p.slug} href={`/producto/${p.slug}`} className="bg-white rounded-xl p-5 border border-gray-100 hover:shadow-md transition group">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-bold text-[#0F1624] group-hover:text-[#3A4A5D]">{p.name}</h4>
                        <span className="text-xs text-gray-500 uppercase tracking-wide">{p.line}</span>
                      </div>
                      <span className="text-xs bg-[#EFF2F7] px-2 py-1 rounded">{p.category}</span>
                    </div>
                    <p className="text-sm text-gray-600 mt-2">{p.description}</p>
                    <div className="flex justify-between items-center mt-4">
                      <span className="font-bold text-[#0F1624]">{p.price}</span>
                      <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-[#0F1624]" />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-2">{h.comparison.title}</h2>
          <p className="text-center text-gray-600 mb-10">{h.comparison.subtitle}</p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {comparisonItems.map((item: any, i: number) => (
              <div key={i} className={`rounded-xl p-6 border ${item.highlighted ? 'border-[#3A4A5D] ring-2 ring-[#B3C7E3] bg-[#F8F9FA]' : 'border-gray-200 bg-white'}`}>
                {item.badge && <span className="text-xs font-bold bg-[#0F1624] text-white px-3 py-1 rounded-full mb-3 inline-block">{item.badge}</span>}
                <h3 className="text-xl font-bold">{item.name}</h3>
                <p className="text-2xl font-bold text-[#0F1624] mt-2">{item.price}</p>
                <ul className="mt-4 space-y-2">
                  {item.features.map((f: any, j: number) => (
                    <li key={j} className="flex items-start gap-2 text-sm"><Check className="w-4 h-4 text-green-600 mt-0.5 shrink-0" /> {f}</li>
                  ))}
                </ul>
                <a href={item.whatsapp} target="_blank" rel="noopener noreferrer" className="mt-4 block text-center bg-[#0F1624] text-white py-2 rounded-lg text-sm font-medium hover:bg-[#3A4A5D] transition">
                  Consultar
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <ProcessSection title={h.process.title} subtitle={h.process.subtitle} steps={processSteps.map((s: any) => ({ step: String(s.number), title: s.title, description: s.description }))} />

      {/* Testimonials */}
      <section className="py-16 bg-[#F8F9FA]">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">{testimonials.length > 0 ? "Clientes que duermen mejor" : ""}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.slice(0, 6).map((t: any, i: number) => (
              <div key={i} className="bg-white rounded-xl p-6 border border-gray-100">
                <div className="flex gap-1 mb-3">{Array.from({ length: t.rating }).map((_, j) => <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}</div>
                <p className="text-gray-700 text-sm italic">"{t.quote}"</p>
                <div className="mt-4">
                  <p className="font-semibold text-sm">{t.author}</p>
                  <p className="text-xs text-gray-500">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">{h.faq.title}</h2>
          <div className="space-y-3">
            {faqItems.map((item: any, i: number) => (
              <details key={i} className="group border border-gray-200 rounded-xl overflow-hidden">
                <summary className="flex justify-between items-center p-4 cursor-pointer font-medium hover:bg-[#F8F9FA]">
                  <span className="text-sm">{item.question}</span>
                  <ChevronRight className="w-4 h-4 group-open:rotate-90 transition" />
                </summary>
                <div className="px-4 pb-4 text-sm text-gray-600">{item.answer}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CtaBanner
        title="¿No sabés cuál elegir?"
        description="Escribinos por WhatsApp y te ayudamos a encontrar el colchón ideal para vos."
        ctaLabel="Consultar ahora"
        ctaHref="https://wa.me/595974202025?text=Hola!%20Necesito%20ayuda%20para%20elegir%20un%20colch%C3%B3n"
      />

      {/* About / Features */}
      <section className="py-16 bg-[#0F1624] text-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-10">{features.title}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {features.items.map((f: any, i: number) => (
              <div key={i}>
                <h3 className="font-bold text-[#B3C7E3] mb-2">{f.title}</h3>
                <p className="text-sm text-blue-200">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer businessName={content.businessName} />
      <WhatsAppFloat phone={content.whatsapp} message="Hola! Quiero información sobre colchones Superspuma" />
      <MobileCta />
    </>
  )
}
