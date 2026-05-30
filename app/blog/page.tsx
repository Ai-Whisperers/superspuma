import Link from "next/link";
import { BookOpen, Clock, ArrowRight, BedDouble, Ruler, Shield, Sparkles, Thermometer, Heart } from "lucide-react";

export const metadata = {
  title: "Blog y Guías de Compra | Superspuma Paraguay",
  description: "Guías expertas para elegir el colchón perfecto. Consejos de descanso, comparativas y tips de cuidado. Todo lo que necesitás saber antes de comprar.",
};

const guides = [
  {
    slug: "como-elegir-colchon",
    icon: BedDouble,
    category: "Guía de Compra",
    title: "Cómo Elegir el Colchón Perfecto para Vos",
    desc: "Todo lo que necesitás saber sobre tipos de colchón, nivel de firmeza y tamaño adecuado para tu cuerpo y hábitos de sueño.",
    readTime: "8 min",
    color: "bg-blue-50",
  },
  {
    slug: "resorte-vs-espuma",
    icon: Sparkles,
    category: "Comparativa",
    title: "Colchón de Resorte vs Espuma: ¿Cuál Elegir?",
    desc: "Ventajas y desventajas de cada tecnología. Cuándo conviene uno u otro según tu peso, postura y preferencia de confort.",
    readTime: "6 min",
    color: "bg-purple-50",
  },
  {
    slug: "medidas-colchon",
    icon: Ruler,
    category: "Guía Práctica",
    title: "Guía de Medidas: Encontrá el Tamaño Correcto",
    desc: "1 plaza, 1½ plaza, 2 plazas, queen, king. Tabla completa de medidas para que no te equivoques al comprar.",
    readTime: "5 min",
    color: "bg-green-50",
  },
  {
    slug: "cuidar-colchon",
    icon: Shield,
    category: "Cuidado",
    title: "7 Tips para Cuidar tu Colchón y Duplicar su Vida Útil",
    desc: "Rotación, ventilación, limpieza y protección. Consejos prácticos para que tu inversión dure más de 10 años.",
    readTime: "4 min",
    color: "bg-amber-50",
  },
  {
    slug: "almohada-correcta",
    icon: Heart,
    category: "Guía de Compra",
    title: "Cómo Elegir la Almohada Según tu Postura al Dormir",
    desc: "Dormís de lado, boca arriba o boca abajo? Cada postura necesita una almohada diferente. Descubrí la ideal para vos.",
    readTime: "5 min",
    color: "bg-rose-50",
  },
  {
    slug: "temperatura-descanso",
    icon: Thermometer,
    category: "Bienestar",
    title: "Temperatura y Descanso: El Secreto de un Buen Sueño",
    desc: "La temperatura ambiente y del colchón afectan directamente la calidad de tu sueño. Aprendé a optimizar tu entorno.",
    readTime: "6 min",
    color: "bg-teal-50",
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-[#0F1624] text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-blue-400 mb-4">
              <BookOpen className="w-5 h-5" />
              <span className="text-sm font-medium uppercase tracking-wider">Blog & Guías</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Tu Guía de Descanso</h1>
            <p className="text-lg text-gray-300">
              Artículos escritos por expertos en descanso. Aprendé a elegir, cuidar y sacar el máximo provecho a tu colchón.
            </p>
          </div>
        </div>
      </section>

      {/* Guides Grid */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {guides.map((g) => (
              <Link
                key={g.slug}
                href={`/blog/${g.slug}`}
                className="group block border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`${g.color} p-8 flex items-center justify-center h-40`}>
                  <g.icon className="w-16 h-16 text-[#0F1624] opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                    <span className="bg-gray-100 px-2 py-1 rounded font-medium">{g.category}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{g.readTime}</span>
                  </div>
                  <h2 className="text-lg font-semibold text-[#0F1624] mb-2 group-hover:text-[#3A4A5D] transition-colors">
                    {g.title}
                  </h2>
                  <p className="text-sm text-gray-600 mb-4">{g.desc}</p>
                  <span className="text-sm font-medium text-[#0F1624] flex items-center gap-1 group-hover:gap-2 transition-all">
                    Leer más <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#EFF2F7]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#0F1624] mb-4">¿Necesitás asesoramiento personalizado?</h2>
          <p className="text-gray-600 mb-8">Nuestros expertos en descanso te ayudan a elegir el colchón ideal para vos.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/tienda"
              className="inline-flex items-center justify-center gap-2 bg-[#0F1624] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#3A4A5D] transition-colors"
            >
              Ver Catálogo
            </Link>
            <a
              href="https://wa.me/595974202025?text=Hola,%20necesito%20asesoramiento%20para%20elegir%20un%20colchón"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              Asesoría por WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
