import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { MobileCta } from "@/components/mobile-cta"
import raw from "@/content/es.json"
import Image from "next/image"
import { Factory, Users, Truck, Store, Package, Calendar, MapPin, Award } from "lucide-react"

const content = raw as any
const ns = content.nosotros || {}

const STAT_ICONS: Record<string, any> = { Factory, Users, Truck, Store, Package, Calendar }

export default function NosotrosPage() {
  return (
    <>
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden" style={{ background: "linear-gradient(135deg, #0F1624 0%, #1a2744 50%, #3A4A5D 100%)" }}>
        <div className="mx-auto max-w-5xl px-4 py-20 text-center">
          <h1 className="text-4xl font-extrabold text-white md:text-5xl">{ns.title || "Sobre Superspuma"}</h1>
          <p className="mt-4 text-xl text-blue-200">{ns.subtitle || "Más de 48 años fabricando el descanso de Paraguay"}</p>
        </div>
      </section>

      {/* History */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-5xl px-4">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-[#0F1624]">Nuestra Historia</h2>
              <p className="mt-4 text-gray-600 leading-relaxed">{ns.history}</p>
              <p className="mt-4 text-gray-600 leading-relaxed">{ns.mission}</p>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              {ns.image ? (
                <Image src={ns.image} alt="Planta industrial Superspuma" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
              ) : (
                <div className="flex h-full items-center justify-center bg-gray-100 text-gray-400">
                  <Factory className="w-20 h-20" />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#EFF2F7] py-16">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="mb-10 text-center text-3xl font-extrabold text-[#0F1624]">Superspuma en Números</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {(ns.stats || []).map((s: any, i: number) => {
              const icons = [Factory, Users, Truck, Store, Package, Calendar]
              const Icon = icons[i % icons.length]
              return (
                <div key={i} className="rounded-2xl bg-white p-6 text-center shadow-sm">
                  <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-[#0F1624]/5">
                    <Icon className="w-7 h-7 text-[#0F1624]" />
                  </div>
                  <p className="text-3xl font-extrabold text-[#0F1624]">{s.number}</p>
                  <p className="mt-1 text-sm text-gray-500">{s.label}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Argentina filial */}
      {ns.filialArgentina && (
        <section className="bg-white py-16">
          <div className="mx-auto max-w-5xl px-4">
            <div className="rounded-2xl border border-gray-200 p-8">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-6 h-6 text-[#0F1624]" />
                <h3 className="text-2xl font-bold text-[#0F1624]">Filial Argentina</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">{ns.filialArgentina}</p>
            </div>
          </div>
        </section>
      )}

      {/* Fundación Don Cabral */}
      {ns.fundacion && (
        <section className="bg-[#EFF2F7] py-16">
          <div className="mx-auto max-w-5xl px-4">
            <div className="rounded-2xl border border-gray-200 bg-white p-8">
              <div className="flex items-center gap-3 mb-4">
                <Award className="w-6 h-6 text-[#0F1624]" />
                <h3 className="text-2xl font-bold text-[#0F1624]">Compromiso con la Excelencia</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">{ns.fundacion}</p>
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16" style={{ background: "linear-gradient(135deg, #0F1624 0%, #3A4A5D 100%)" }}>
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-3xl font-extrabold text-white">Conocé nuestros productos</h2>
          <p className="mt-3 text-blue-200">48 años de experiencia respaldan cada colchón que fabricamos</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href="/tienda" className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-4 font-bold text-[#0F1624] hover:scale-105 transition-all">
              Ver Catálogo
            </a>
            <a href="https://wa.me/595974202025" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border-2 border-white/30 px-8 py-4 font-bold text-white hover:bg-white/10 transition-all">
              Contactanos
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
