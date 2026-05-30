import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { MobileCta } from "@/components/mobile-cta"
import { CtaBanner } from "@/components/cta-banner"
import type { Content } from "@/types/content"
import raw from "@/content/es.json"
import { MessageCircle, Mail, MapPin, Clock } from "lucide-react"

const content = raw as any
const nav = content.navigation

export default function ContactoPage() {
  return (
    <>
      <Header />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-2">Contacto</h1>
        <p className="text-gray-600 mb-10">Escribinos y te respondemos en el día.</p>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <MessageCircle className="w-6 h-6 text-[#3A4A5D] shrink-0 mt-1" />
              <div>
                <h3 className="font-bold">WhatsApp</h3>
                <a href="https://wa.me/595974202025" className="text-[#3A4A5D] hover:underline">+595 974 202 025</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="w-6 h-6 text-[#3A4A5D] shrink-0 mt-1" />
              <div>
                <h3 className="font-bold">Email</h3>
                <a href="mailto:info@superspuma.com.py" className="text-[#3A4A5D] hover:underline">info@superspuma.com.py</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-[#3A4A5D] shrink-0 mt-1" />
              <div>
                <h3 className="font-bold">Dirección</h3>
                <p className="text-gray-600">Ruta Ypané - Villeta y Arroyo Avay<br/>Villeta - Central, Paraguay</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Clock className="w-6 h-6 text-[#3A4A5D] shrink-0 mt-1" />
              <div>
                <h3 className="font-bold">Horarios</h3>
                <p className="text-gray-600">Lun-Vie 07:30-17:00<br/>Sáb 07:30-12:00<br/>Domingo: Cerrado<br/>Tiendas en shoppings: Lun-Sáb 09:00-21:00</p>
              </div>
            </div>
          </div>
          <div className="bg-[#F8F9FA] rounded-xl p-8">
            <h3 className="font-bold text-lg mb-4">Escribinos por WhatsApp</h3>
            <p className="text-gray-600 mb-6">Es la forma más rápida de contactarnos. Te respondemos en el día.</p>
            <a href="https://wa.me/595974202025" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#0F1624] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#3A4A5D] transition">
              <MessageCircle className="w-5 h-5" /> Abrir WhatsApp
            </a>
          </div>
        </div>
      </div>
      <Footer />
      <WhatsAppFloat phone={content.whatsapp} message="Hola! Quiero contactarme con Superspuma" />
      <MobileCta />
    </>
  )
}
