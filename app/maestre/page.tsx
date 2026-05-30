import Image from "next/image";
import Link from "next/link";
import { Crown, Award, Star, Gem, Sparkles, ArrowRight, Shield, Truck, CreditCard } from "lucide-react";
import { WhatsAppFloat } from "@/components/whatsapp-float";

export const metadata = {
  title: "Línea Maestre | Superspuma Premium",
  description: "La línea premium de Superspuma. Colchones Maestre con los mejores materiales y acabados. Lujo y confort para un descanso excepcional.",
};

const maestreFeatures = [
  { icon: Crown, title: "Resortes Premium", desc: "Sistema de resortes ensacados individuales de acero templado, cada uno en su propia bolsa de tela para movimiento independiente." },
  { icon: Gem, title: "Tela Jacquard Europea", desc: "Tapa de tela Jacquard importada con tratamiento antiácaros e hipoalergénico. Suave al tacto, resistente al uso." },
  { icon: Sparkles, title: "Acolchado Multizona", desc: "Capas de confort con espuma de alta densidad + viscoelástica en zonas diferenciadas para soporte lumbar mejorado." },
  { icon: Award, title: "Borde Reforzado", desc: "Sistema de borde perimetral con espuma de alta densidad que evita hundimiento lateral y amplía la superficie útil." },
  { icon: Star, title: "Garantía Extendida", desc: "12 años de garantía de fábrica — la más larga de Superspuma. Respaldada por 48 años de trayectoria." },
  { icon: Shield, title: "Certificado de Calidad", desc: "Cumple con normas internacionales de seguridad y calidad. Libre de sustancias tóxicas (CertiPUR)." },
];

export default function MaestrePage() {
  return (
    <main className="min-h-screen bg-white">
      <WhatsAppFloat phone="595974202025" />

      {/* Hero */}
      <section className="relative bg-[#0a0a0a] text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black/80" />
        <div className="max-w-6xl mx-auto px-4 relative">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-amber-400 mb-6">
              <Crown className="w-6 h-6" />
              <span className="font-semibold uppercase tracking-widest text-sm">Línea Premium</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Maestre
            </h1>
            <p className="text-xl text-gray-300 mb-4 max-w-2xl">
              La excelencia en descanso. Diseñado para quienes no aceptan compromisos. Materiales premium, ingeniería de precisión, confort extraordinario.
            </p>
            <p className="text-gray-400 mb-8">
              La línea más exclusiva de Superspuma, fabricada con los mejores materiales importados y la tecnología más avanzada en descanso.
            </p>
            <div className="flex flex-wrap gap-8 text-sm">
              <div className="flex items-center gap-2"><Shield className="w-5 h-5 text-amber-400" /><span>12 años de garantía</span></div>
              <div className="flex items-center gap-2"><Truck className="w-5 h-5 text-amber-400" /><span>Entrega e instalación gratis</span></div>
              <div className="flex items-center gap-2"><CreditCard className="w-5 h-5 text-amber-400" /><span>Financiación hasta 18 cuotas</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#0F1624] text-center mb-4">Tecnología de Excelencia</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Cada componente del Maestre fue seleccionado para ofrecer el máximo confort, durabilidad y soporte ergonómico.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {maestreFeatures.map((f) => (
              <div key={f.title} className="border border-gray-200 rounded-xl p-6 hover:border-amber-300 hover:shadow-lg transition-all duration-300 group">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <f.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-[#0F1624] mb-2">{f.title}</h3>
                <p className="text-sm text-gray-600">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Construction */}
      <section className="py-20 bg-[#0a0a0a] text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Construcción por Capas</h2>
              <div className="space-y-4">
                {[
                  { layer: "Tapa Superior", desc: "Tela Jacquard europea con acolchado hipersoft", pct: "100%" },
                  { layer: "Comfort Layer", desc: "Espuma viscoelástica de 40mm para alivio de presión", pct: "85%" },
                  { layer: "Soporte Intermedio", desc: "Espuma de alta densidad (D30) para transición suave", pct: "70%" },
                  { layer: "Núcleo de Resortes", desc: "Resortes ensacados individuales, 480 resortes en Queen", pct: "100%" },
                  { layer: "Base de Estabilización", desc: "Fieltro de alta densidad + borde de espuma perimetral", pct: "95%" },
                  { layer: "Tapa Inferior", desc: "Tela antideslizante con tratamiento antibacterial", pct: "100%" },
                ].map((item) => (
                  <div key={item.layer} className="border border-gray-700 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-medium text-amber-400">{item.layer}</span>
                    </div>
                    <p className="text-sm text-gray-400">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-b from-amber-900/30 to-transparent rounded-2xl p-12">
                <Crown className="w-24 h-24 text-amber-400 mx-auto mb-6" />
                <h3 className="text-4xl font-bold mb-2">Maestre</h3>
                <p className="text-gray-400 mb-6">La experiencia definitiva en descanso</p>
                <a
                  href="https://wa.me/595974202025?text=Hola,%20me%20interesa%20la%20línea%20Maestre%20premium"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 text-black px-8 py-4 rounded-lg font-bold hover:from-amber-400 hover:to-amber-500 transition-all"
                >
                  <Crown className="w-5 h-5" />Solicitar Cotización
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-16 bg-[#EFF2F7]">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { val: "12", label: "Años de garantía" },
              { val: "48", label: "Años de trayectoria" },
              { val: "550", label: "Colchones/día" },
              { val: "7ha", label: "Planta Villeta" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-4xl font-bold text-[#0F1624] mb-1">{s.val}</div>
                <div className="text-sm text-gray-600">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#0F1624] mb-4">Experimentá el Maestre</h2>
          <p className="text-gray-600 mb-8">Visitá nuestro showroom principal en Asunción y descubrí la diferencia Maestre. Asesoramiento personalizado sin compromiso.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/tiendas" className="inline-flex items-center justify-center gap-2 bg-[#0F1624] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#3A4A5D] transition-colors">
              Encontrá tu Tienda <ArrowRight className="w-4 h-4" />
            </Link>
            <a href="https://wa.me/595974202025?text=Hola,%20quiero%20visitar%20el%20showroom%20para%20ver%20la%20línea%20Maestre" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
              Agendar Visita
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
