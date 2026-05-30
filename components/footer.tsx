import Link from "next/link"
import Image from "next/image"

export function Footer({ businessName }: { businessName?: string }) {
  return (
    <footer className="bg-[#0F1624] py-12 text-white">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <Image
              src="/images/brand/superspumalogo.svg"
              alt="Superspuma"
              width={140}
              height={36}
              className="mb-4 h-9 w-auto brightness-0 invert"
            />
            <p className="text-sm text-blue-200">Fabricantes de colchones desde 1976</p>
            <p className="text-sm text-blue-200">Villeta, Paraguay</p>
            <p className="mt-2 text-xs text-blue-300">550+ colchones/día · 15 tiendas · 48 años de experiencia</p>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-blue-300">Productos</h4>
            <div className="flex flex-col gap-2 text-sm">
              <Link href="/tienda?cat=Resorte" className="text-white/80 hover:text-white">Línea Resorte</Link>
              <Link href="/tienda?cat=Espuma" className="text-white/80 hover:text-white">Línea Espuma</Link>
              <Link href="/maestre" className="text-white/80 hover:text-white">Línea Maestre ✦</Link>
              <Link href="/tienda?cat=Accesorios" className="text-white/80 hover:text-white">Accesorios</Link>
              <Link href="/promociones" className="text-white/80 hover:text-white">Promociones</Link>
              <Link href="/tienda" className="text-white/80 hover:text-white">Ver Todo</Link>
            </div>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-blue-300">Información</h4>
            <div className="flex flex-col gap-2 text-sm">
              <Link href="/nosotros" className="text-white/80 hover:text-white">Nosotros</Link>
              <Link href="/tiendas" className="text-white/80 hover:text-white">Tiendas</Link>
              <Link href="/blog" className="text-white/80 hover:text-white">Blog y Guías</Link>
              <Link href="/garantia" className="text-white/80 hover:text-white">Garantía</Link>
              <Link href="/faq" className="text-white/80 hover:text-white">Preguntas Frecuentes</Link>
              <Link href="/trabaja-con-nosotros" className="text-white/80 hover:text-white">Trabajá con Nosotros</Link>
              <Link href="/privacidad" className="text-white/80 hover:text-white">Privacidad</Link>
              <Link href="/terminos" className="text-white/80 hover:text-white">Términos</Link>
            </div>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-blue-300">Contacto</h4>
            <div className="flex flex-col gap-2 text-sm">
              <a href="https://wa.me/595974202025" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white flex items-center gap-2">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.611.611l4.458-1.495A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.387 0-4.595-.836-6.333-2.233l-.444-.35-3.311 1.111 1.111-3.311-.35-.444A9.96 9.96 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z"/></svg>
                WhatsApp
              </a>
              <a href="mailto:info@superspuma.com.py" className="text-white/80 hover:text-white flex items-center gap-2">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                info@superspuma.com.py
              </a>
              <span className="text-white/60 flex items-center gap-2">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                +595 974 202 025
              </span>
            </div>
            <div className="mt-4 flex gap-3">
              <a href="https://instagram.com/superspumapy" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="rounded-full bg-white/10 p-2 text-white/80 hover:bg-white/20 hover:text-white">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a href="https://facebook.com/superspuma" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="rounded-full bg-white/10 p-2 text-white/80 hover:bg-white/20 hover:text-white">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="https://linkedin.com/company/superspuma-del-paraguay-saeca" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="rounded-full bg-white/10 p-2 text-white/80 hover:bg-white/20 hover:text-white">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-white/20 pt-6 text-center text-xs text-white/50">
          &copy; {new Date().getFullYear()} {businessName || "Superspuma"}. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  )
}
