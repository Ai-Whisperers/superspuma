"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { MobileCta } from "@/components/mobile-cta"
import type { Content } from "@/types/content"
import raw from "@/content/es.json"
import { MessageCircle, ChevronRight } from "lucide-react"
import { notFound } from "next/navigation"
import { useParams } from "next/navigation"

const content = raw as any
const nav = content.navigation
const allProducts = content.home.products

export default function ProductoPage() {
  const params = useParams()
  const slug = params.slug as string
  const product = allProducts.find((p: any) => p.slug === slug)
  if (!product) notFound()

  const imgSrc = product.image || '/superspuma/images/products/titanium.png'

  return (
    <>
      <Header />
      <div className="max-w-5xl mx-auto px-4 py-12">
        <a href="/tienda" className="text-sm text-gray-500 hover:text-[#0F1624] flex items-center gap-1 mb-6">
          <ChevronRight className="w-3 h-3 rotate-180" /> Volver a tienda
        </a>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-[#F8F9FA] rounded-xl overflow-hidden">
            <img src={imgSrc} alt={product.name} className="w-full h-80 object-cover" />
          </div>
          <div>
            <span className="text-xs font-bold bg-[#EFF2F7] px-3 py-1 rounded-full">{product.category}</span>
            <span className="text-xs font-bold bg-[#0F1624] text-white px-3 py-1 rounded-full ml-2">{product.line}</span>
            <h1 className="text-3xl font-bold mt-4">{product.name}</h1>
            <p className="text-gray-600 mt-2">{product.description}</p>
            <p className="text-3xl font-bold text-[#0F1624] mt-6">{product.price}</p>
            <p className="text-sm text-gray-500 mt-1">Precio desde. Consultá medidas disponibles.</p>
            <p className="text-sm text-green-700 font-medium mt-2">Hasta 18 cuotas sin interés</p>
            <a
              href={`https://wa.me/595974202025?text=Hola!%20Quiero%20info%20del%20colch%C3%B3n%20${product.name}%20(${product.price})`}
              target="_blank" rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 bg-[#0F1624] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#3A4A5D] transition"
            >
              <MessageCircle className="w-5 h-5" /> Consultar por WhatsApp
            </a>
          </div>
        </div>
      </div>
      <Footer />
      <WhatsAppFloat phone={content.whatsapp} message={`Hola! Quiero info del colchón ${product.name}`} />
      <MobileCta />
    </>
  )
}
