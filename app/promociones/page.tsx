import Image from "next/image";
import Link from "next/link";
import { Gift, Clock, Heart, Percent, Star, ShoppingBag, ArrowRight } from "lucide-react";
import WhatsAppFloat from "@/components/whatsapp-float";

export const metadata = {
  title: "Promo Mamá y Papá | Superspuma Paraguay",
  description: "Promociones especiales para mamá y papá. Colchones y almohadas con descuentos exclusivos. ¡Aprovechá nuestras ofertas por tiempo limitado!",
};

const promos = [
  {
    title: "Kit Descanso para Mamá",
    desc: "Colchón Serena + Almohada Viscoelástica de regalo",
    originalPrice: "Gs. 2.800.000",
    promoPrice: "Gs. 2.390.000",
    savings: "Gs. 410.000",
    badge: "Más vendido",
    features: ["Colchón espuma Serena 1½ plaza", "Almohada viscoelástica GRATIS", "Cubrecolchón protector incluido", "Entrega gratis en Asunción"],
  },
  {
    title: "Kit Descanso para Papá",
    desc: "Colchón Titanium + Almohada Silicon de regalo",
    originalPrice: "Gs. 4.500.000",
    promoPrice: "Gs. 3.790.000",
    savings: "Gs. 710.000",
    badge: "Premium",
    features: ["Colchón resorte Titanium 2 plazas", "Almohada Silicon GRATIS", "Garantía extendida 10 años", "Instalación incluida"],
  },
  {
    title: "Combo Pareja Soñadora",
    desc: "Colchón Imperial Queen + 2 Almohadas Hipersoft",
    originalPrice: "Gs. 5.200.000",
    promoPrice: "Gs. 4.290.000",
    savings: "Gs. 910.000",
    badge: "Mayor ahorro",
    features: ["Colchón resorte Imperial Queen", "2 Almohadas Hipersoft GRATIS", "Base box a precio especial", "Financiación hasta 12 cuotas"],
  },
  {
    title: "Renová tu Dormitorio",
    desc: "Cualquier colchón + Base Box Baúl con 25% OFF",
    originalPrice: "Desde Gs. 3.000.000",
    promoPrice: "Desde Gs. 2.250.000",
    savings: "25% OFF en base",
    badge: "Popular",
    features: ["Válido para cualquier colchón", "Base box baúl con descuento", "Espacio de almacenamiento extra", "Disponible en todas las medidas"],
  },
];

const conditions = [
  "Válido hasta agotar stock o fin de temporada",
  "No acumulable con otras promociones",
  "Financiación sujeta a aprobación crediticia",
  "Entrega gratis en Asunción y área metropolitana",
  "Garantía estándar de fábrica aplica",
];

export default function PromocionesPage() {
  return (
    <main className="min-h-screen bg-white">
      <WhatsAppFloat phone="595974202025" />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#0F1624] via-[#1a2744] to-[#0F1624] text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-40 h-40 bg-pink-500 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-60 h-60 bg-blue-500 rounded-full blur-3xl" />
        </div>
        <div className="max-w-6xl mx-auto px-4 relative">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-pink-400 mb-4">
              <Gift className="w-6 h-6" />
              <span className="font-semibold uppercase tracking-wider text-sm">Promo Mamá y Papá</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              El mejor regalo<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">es un buen descanso</span>
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              Promociones especiales con hasta Gs. 910.000 de ahorro. Colchones + accesorios de regalo.
            </p>
            <div className="flex items-center gap-2 text-sm text-pink-300">
              <Clock className="w-4 h-4" />
              <span>Ofertas por tiempo limitado — ¡no te quedes fuera!</span>
            </div>
          </div>
        </div>
      </section>

      {/* Promo Cards */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {promos.map((promo) => (
              <div key={promo.title} className="border-2 border-gray-200 rounded-2xl overflow-hidden hover:border-[#3A4A5D] transition-all duration-300 hover:shadow-xl group">
                {/* Badge */}
                <div className="bg-[#0F1624] text-white px-4 py-2 flex items-center justify-between">
                  <span className="flex items-center gap-2 text-sm font-medium">
                    <Star className="w-4 h-4 text-yellow-400" />{promo.badge}
                  </span>
                  <span className="text-xs text-green-400 font-medium flex items-center gap-1">
                    <Percent className="w-3 h-3" />Ahorro: {promo.savings}
                  </span>
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-[#0F1624] mb-2">{promo.title}</h2>
                  <p className="text-gray-600 mb-4">{promo.desc}</p>
                  <div className="mb-6">
                    <span className="text-gray-400 line-through text-sm">{promo.originalPrice}</span>
                    <div className="text-3xl font-bold text-[#0F1624]">{promo.promoPrice}</div>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {promo.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-gray-700">
                        <ShoppingBag className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={`https://wa.me/595974202025?text=Hola,%20me%20interesa%20la%20promo%20${encodeURIComponent(promo.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                  >
                    <Heart className="w-4 h-4" />Quiero esta promo
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conditions */}
      <section className="py-12 bg-[#EFF2F7]">
        <div className="max-w-3xl mx-auto px-4">
          <h3 className="text-lg font-semibold text-[#0F1624] mb-4">Condiciones</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            {conditions.map((c) => (
              <li key={c} className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-[#3A4A5D] rounded-full mt-1.5 shrink-0" />
                {c}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#0F1624] text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">¿No sabés cuál elegir?</h2>
          <p className="text-gray-300 mb-8">Nuestros asesores te ayudan a encontrar la promo perfecta según tus necesidades.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/tienda" className="inline-flex items-center justify-center gap-2 bg-white text-[#0F1624] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Ver Catálogo Completo <ArrowRight className="w-4 h-4" />
            </Link>
            <a href="https://wa.me/595974202025?text=Hola,%20quiero%20asesoramiento%20sobre%20las%20promos" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
              Asesoría WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
