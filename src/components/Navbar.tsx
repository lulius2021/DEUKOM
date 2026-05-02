import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'Intro', href: '#hero' },
  { label: 'Features', href: '#features' },
  { label: 'Product', href: '#product' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-bg/90 backdrop-blur-md border-b border-border' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
        <a href="#hero" className="text-sm font-semibold tracking-[0.2em] uppercase text-text">
          ORYZO AI
        </a>

        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs text-text-secondary hover:text-text transition-colors tracking-wide uppercase"
            >
              {link.label}
            </a>
          ))}
        </div>

        <button
          className="md:hidden text-text p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
            {menuOpen ? (
              <path d="M5 5l10 10M5 15L15 5" />
            ) : (
              <path d="M3 6h14M3 14h14" />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-bg/95 backdrop-blur-md border-b border-border px-6 pb-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block py-3 text-sm text-text-secondary hover:text-text tracking-wide uppercase"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
