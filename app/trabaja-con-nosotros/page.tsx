import Image from "next/image";
import Link from "next/link";
import { MapPin, Clock, Briefcase, Heart, Users, TrendingUp, Award, Coffee, Send } from "lucide-react";

export const metadata = {
  title: "Trabajá con Nosotros | Superspuma Paraguay",
  description: "Unite al equipo de Superspuma. Oportunidades laborales en ventas, producción y administración. Empresa líder desde 1976.",
};

const benefits = [
  { icon: TrendingUp, title: "Crecimiento profesional", desc: "Plan de carrera y capacitación continua en una empresa en expansión regional." },
  { icon: Heart, title: "Salud y bienestar", desc: "Cobertura médica, chequeos anuales y beneficios de bienestar para vos y tu familia." },
  { icon: Award, title: "Capacitación constante", desc: "Formación técnica en productos, ventas y atención al cliente con certificaciones." },
  { icon: Users, title: "Equipo colaborativo", desc: "Ambiente de trabajo familiar con más de 300 colaboradores en 15 sucursales." },
  { icon: Coffee, title: "Beneficios exclusivos", desc: "Descuentos en productos, bonos por rendimiento y eventos de integración." },
];

const positions = [
  {
    title: "Vendedor/a de Showroom",
    location: "Asunción, Lambaré, Luque",
    type: "Tiempo completo",
    desc: "Atención al cliente en showroom, asesoramiento en productos y cierre de ventas. Experiencia en ventas preferible.",
  },
  {
    title: "Supervisor/a de Tienda",
    location: "Ciudad del Este, Encarnación",
    type: "Tiempo completo",
    desc: "Gestión de equipo, control de stock, atención de clientes VIP y reportes de ventas. Experiencia en retail.",
  },
  {
    title: "Operario/a de Planta",
    location: "Villeta, Central",
    type: "Tiempo completo",
    desc: "Producción de colchones y componentes. Trabajo en línea de ensamblaje. Capacitación interna provista.",
  },
  {
    title: "Chofer de Distribución",
    location: "Asunción y área metropolitana",
    type: "Tiempo completo",
    desc: "Reparto de productos a clientes y sucursales. Licencia de conducir vigente requerida.",
  },
];

export default function TrabajaPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative bg-[#0F1624] text-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Trabajá con Nosotros</h1>
            <p className="text-lg text-gray-300 mb-6">
              Desde 1976 construimos el bienestar de millones de familias. Ahora queremos que seas parte de nuestro equipo.
              Con más de 300 colaboradores y presencia en todo Paraguay, ofrecemos un entorno donde podés crecer profesionalmente.
            </p>
            <div className="flex gap-8 text-sm">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-blue-400" />
                <span>300+ colaboradores</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span>15 sucursales</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-blue-400" />
                <span>48+ años de trayectoria</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-[#EFF2F7]">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#0F1624] text-center mb-12">¿Por qué elegir Superspuma?</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {benefits.map((b) => (
              <div key={b.title} className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-[#0F1624] rounded-lg flex items-center justify-center mx-auto mb-4">
                  <b.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-[#0F1624] mb-2">{b.title}</h3>
                <p className="text-sm text-gray-600">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#0F1624] text-center mb-4">Posiciones Abiertas</h2>
          <p className="text-gray-600 text-center mb-12">Encontrá la oportunidad que se ajuste a tu perfil</p>
          <div className="space-y-4">
            {positions.map((pos) => (
              <div key={pos.title} className="border border-gray-200 rounded-xl p-6 hover:border-[#3A4A5D] transition-colors">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-[#0F1624] mb-2">{pos.title}</h3>
                    <p className="text-gray-600 text-sm mb-3">{pos.desc}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1"><MapPin className="w-4 h-4" />{pos.location}</span>
                      <span className="flex items-center gap-1"><Clock className="w-4 h-4" />{pos.type}</span>
                    </div>
                  </div>
                  <a
                    href="https://wa.me/595974202025?text=Hola,%20me%20interesa%20la%20posición%20de%20Vendedor/a%20de%20Showroom"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-[#0F1624] text-white px-6 py-3 rounded-lg hover:bg-[#3A4A5D] transition-colors whitespace-nowrap"
                  >
                    <Send className="w-4 h-4" />
                    Aplicar vía WhatsApp
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#0F1624] text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">¿No encontrás lo que buscás?</h2>
          <p className="text-gray-300 mb-8">
            Envianos tu CV y te contactaremos cuando tengamos una posición que se ajuste a tu perfil.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:rrhh@superspuma.com.py"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#0F1624] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Enviar CV por Email
            </a>
            <a
              href="https://wa.me/595974202025?text=Hola,%20quiero%20enviar%20mi%20CV%20para%20futuras%20oportunidades"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              WhatsApp RRHH
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
