"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { MessagingFloat } from "@/components/messaging-float"
import { MobileCta } from "@/components/mobile-cta"
import { CtaBanner } from "@/components/cta-banner"
import type { Content } from "@/types/content"
import raw from "@/content/es.json"
import { ChevronRight } from "lucide-react"

const content = raw as any
const nav = content.navigation
const faqItems = content?.faq?.items ?? []

export default function FaqPage() {
  return (
    <>
      <Header />
      <div className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-2">Preguntas frecuentes</h1>
        <p className="text-gray-600 mb-10">Todo lo que querés saber antes de elegir tu colchón Superspuma.</p>
        <div className="space-y-3">
          {faqItems.map((item: any, i: number) => (
            <details key={i} className="group border border-gray-200 rounded-xl overflow-hidden">
              <summary className="flex justify-between items-center p-4 cursor-pointer font-medium hover:bg-[#F8F9FA]">
                <span>{item.question}</span>
                <ChevronRight className="w-4 h-4 group-open:rotate-90 transition shrink-0" />
              </summary>
              <div className="px-4 pb-4 text-sm text-gray-600">{item.answer}</div>
            </details>
          ))}
        </div>
      </div>
      <CtaBanner title="¿No encontraste tu respuesta?" description="Escribinos por Messaging y te respondemos en el día" ctaLabel="Consultar" ctaHref="tel:+595974202025" />
      <Footer />
      <MessagingFloat phone={content.messaging} message="Hola! Tengo una consulta" />
      <MobileCta />
    </>
  )
}
