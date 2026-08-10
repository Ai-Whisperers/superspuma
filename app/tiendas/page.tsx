import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { MessagingFloat } from "@/components/messaging-float"
import { MobileCta } from "@/components/mobile-cta"
import raw from "@/content/es.json"
import { MapPin, Clock, Phone } from "lucide-react"

const content = raw as any
const ts = content.tiendas || {}
const locations = ts.locations || []

export default function TiendasPage() {
  return (
    <>
      <Header />

      {/* Hero */}
      <section className="bg-[#0F1624] py-16">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <h1 className="text-4xl font-extrabold text-white md:text-5xl">{ts.title || "Nuestras Tiendas"}</h1>
          <p className="mt-3 text-blue-200">{ts.subtitle || "Visitanos en cualquiera de nuestras sucursales"}</p>
        </div>
      </section>

      {/* Locations */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-5xl px-4">
          <div className="grid gap-8 md:grid-cols-2">
            {locations.map((loc: any, i: number) => (
              <div key={i} className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                {/* Map embed */}
                <div className="aspect-video bg-gray-100">
                  <iframe
                    src={loc.mapsUrl ? `https://maps.google.com/maps?q=${encodeURIComponent(loc.name + " Superspuma")}&output=embed` : ""}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Mapa - ${loc.name}`}
                    className="w-full h-full"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#0F1624] flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-[#3A4A5D]" /> {loc.name}
                  </h3>
                  <p className="mt-2 text-gray-500">{loc.address}</p>
                  <div className="mt-3 space-y-2">
                    {loc.hours && (
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Clock className="w-4 h-4 text-gray-400" />
                        {loc.hours}
                      </div>
                    )}
                    {loc.phone && (
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Phone className="w-4 h-4 text-gray-400" />
                        <a href={`tel:${loc.phone.replace(/\s/g, "")}`} className="hover:text-[#0F1624]">{loc.phone}</a>
                      </div>
                    )}
                  </div>
                  <a href={loc.mapsUrl} target="_blank" rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 rounded-lg bg-[#0F1624] px-4 py-2 text-sm font-semibold text-white hover:bg-[#3A4A5D] transition-all">
                    <MapPin className="w-4 h-4" /> Cómo llegar
                  </a>
                </div>
              </div>
            ))}
          </div>

          {locations.length === 0 && (
            <div className="py-20 text-center">
              <MapPin className="mx-auto w-16 h-16 text-gray-300" />
              <p className="mt-4 text-gray-500">Próximamente información de tiendas</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#EFF2F7] py-12">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <p className="text-gray-600">¿No encontrás una tienda cercana? Contactanos y te ayudamos.</p>
          <a href="tel:+595974202025" target="_blank" rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 rounded-lg bg-green-600 px-6 py-3 font-bold text-white hover:bg-green-700 transition-all">
            Messaging
          </a>
        </div>
      </section>

      <Footer businessName="Superspuma" />
      <MessagingFloat phone="595974202025" />
      <MobileCta />
    </>
  )
}
