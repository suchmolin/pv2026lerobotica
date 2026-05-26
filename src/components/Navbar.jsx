import { useState } from 'react'

const navLinks = [
  { label: 'INICIO', href: '#inicio', color: 'text-lero-sky' },
  { label: 'PROGRAMAS', href: '#programas', color: 'text-lero-orange' },
  { label: 'FECHAS', href: '#fechas', color: 'text-lero-lavender' },
  { label: 'RUTA', href: '#ruta', color: 'text-lero-pink' },
  { label: 'CONTACTO', href: '#contacto', color: 'text-lero-green' },
]

function Logo() {
  return (
    <a href="#inicio" className="flex shrink-0 items-center no-underline">
      <img
        src="/Logo-Lerobotica-horizontal-RGB.png"
        alt="Lerobotica"
        className="h-12 w-auto sm:h-20"
      />
    </a>
  )
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-gray-50/95 backdrop-blur-sm z-10">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8"
        aria-label="Principal"
      >
        <Logo />

        <ul className="hidden items-center gap-8 lg:flex xl:gap-12">
          {navLinks.map(({ label, href, color }) => (
            <li key={href}>
              <a
                href={href}
                className={`font-display text-xl font-bold tracking-wide transition-opacity hover:opacity-80 xl:text-xl ${color}`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-lero-navy lg:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="sr-only">Abrir menú</span>
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {menuOpen && (
        <div id="mobile-menu" className="border-t border-gray-200 bg-gray-50 px-4 pb-4 lg:hidden">
          <ul className="flex flex-col gap-3 pt-3">
            {navLinks.map(({ label, href, color }) => (
              <li key={href}>
                <a
                  href={href}
                  className={`block font-display text-base font-bold ${color}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
