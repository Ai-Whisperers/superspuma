import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0F1624] text-white">
      <div className="text-center p-8">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-xl text-blue-200 mb-8">Página no encontrada</p>
        <Link href="/" className="inline-flex items-center gap-2 bg-white text-[#0F1624] px-6 py-3 rounded-lg font-semibold hover:bg-blue-100 transition">
          <ArrowLeft className="w-4 h-4" /> Volver al inicio
        </Link>
      </div>
    </div>
  )
}
