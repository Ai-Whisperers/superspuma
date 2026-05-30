import Link from "next/link"
import Image from "next/image"

interface NavItem {
  label: string
  href: string
}

export function Header({ logo }: { logo?: string }) {
  const navItems: NavItem[] = [
    { label: "Inicio", href: "/" },
    { label: "Tienda", href: "/tienda" },
    { label: "Maestre", href: "/maestre" },
    { label: "Promos", href: "/promociones" },
    { label: "Blog", href: "/blog" },
    { label: "Nosotros", href: "/nosotros" },
    { label: "Tiendas", href: "/tiendas" },
    { label: "Contacto", href: "/contacto" },
  ]

  return (
    <header className="sticky top-0 z-40 border-b border-gray-200 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2" aria-label="Superspuma — Ir al inicio">
          <Image
            src="/images/brand/superspumalogo.svg"
            alt="Superspuma"
            width={160}
            height={40}
            className="h-10 w-auto"
            priority
          />
        </Link>
        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex" aria-label="Navegación principal">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100">
              {item.label}
            </Link>
          ))}
          <a href="https://wa.me/595974202025" target="_blank" rel="noopener noreferrer" aria-label="Contactar por WhatsApp"
            className="ml-3 rounded-md bg-[#0F1624] px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-[#3A4A5D]">
            WhatsApp
          </a>
        </nav>
        {/* Mobile menu toggle */}
        <MobileMenu navItems={navItems} />
      </div>
    </header>
  )
}

function MobileMenu({ navItems }: { navItems: NavItem[] }) {
  return (
    <details className="relative md:hidden">
      <summary className="cursor-pointer rounded-md p-2 text-gray-700 hover:bg-gray-100 list-none">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </summary>
      <div className="absolute right-0 top-full mt-2 w-56 rounded-xl border border-gray-200 bg-white p-3 shadow-xl z-50">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href}
            className="block rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100">
            {item.label}
          </Link>
        ))}
        <a href="https://wa.me/595974202025" target="_blank" rel="noopener noreferrer"
          className="mt-2 block rounded-md bg-[#0F1624] px-4 py-2 text-center text-sm font-semibold text-white">
          WhatsApp
        </a>
      </div>
    </details>
  )
}
