import { useState, useEffect } from 'react'

const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services & Solutions' },
  { id: 'industries', label: 'Industries' },
  { id: 'contact', label: 'Contact' },
]

export default function Nav({ currentPage, onNavigate }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const isHeroPage = currentPage === 'home'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
    if (currentPage !== 'home') setScrolled(true)
    else setScrolled(window.scrollY > 80)
  }, [currentPage])

  const transparent = isHeroPage && !scrolled && !menuOpen

  return (
    <header
      role="banner"
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        transparent
          ? 'bg-transparent'
          : 'bg-white/97 backdrop-blur-md border-b border-hairline shadow-sm'
      }`}
    >
      <div className="max-w-[1320px] mx-auto px-5 lg:px-10">
        <div className="flex items-center justify-between h-[72px]">

          {/* Logo */}
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-3 shrink-0 group"
            aria-label="Go to homepage"
          >
            <div className={`w-9 h-9 flex items-center justify-center rounded-sm transition-colors ${
              transparent ? 'bg-white/15' : 'bg-navy'
            }`}>
              <svg viewBox="0 0 20 20" className="w-5 h-5" fill="none" aria-hidden="true">
                <circle cx="10" cy="10" r="8.5" stroke="white" strokeWidth="1.2" />
                <path d="M10 2L11.8 9L10 11L8.2 9Z" fill="white" opacity="0.95" />
                <path d="M10 18L8.2 11L10 9L11.8 11Z" fill="white" opacity="0.4" />
                <path d="M2 10L9 8.2L11 10L9 11.8Z" fill="white" opacity="0.4" />
                <path d="M18 10L11 11.8L9 10L11 8.2Z" fill="white" opacity="0.95" />
              </svg>
            </div>
            <div className="text-left">
              <span className={`block text-sm font-semibold tracking-wide font-display transition-colors leading-tight ${
                transparent ? 'text-white' : 'text-navy'
              }`}>
                [COMPANY NAME]
              </span>
              <span className={`block text-[10px] tracking-[0.14em] uppercase font-body transition-colors ${
                transparent ? 'text-white/55' : 'text-dim'
              }`}>
                Logistics & Trading
              </span>
            </div>
          </button>

          {/* Desktop nav */}
          <nav aria-label="Main navigation" className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => onNavigate(link.id)}
                className={`relative px-4 py-2.5 text-sm font-medium font-body rounded-sm transition-colors ${
                  currentPage === link.id
                    ? transparent ? 'text-white' : 'text-navy'
                    : transparent
                      ? 'text-white/75 hover:text-white'
                      : 'text-dim hover:text-navy'
                }`}
              >
                {link.label}
                {currentPage === link.id && (
                  <span className="absolute bottom-0 left-4 right-4 h-[2px] bg-gold rounded-full" />
                )}
              </button>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <a
              href="tel:[PHONE_NUMBER]"
              className={`hidden xl:flex items-center gap-1.5 text-sm font-body transition-colors ${
                transparent ? 'text-white/65 hover:text-white' : 'text-dim hover:text-navy'
              }`}
            >
              <svg viewBox="0 0 16 16" className="w-3.5 h-3.5 fill-current" aria-hidden="true">
                <path d="M3.654 1.328a.678.678 0 00-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 004.168 6.608 17.569 17.569 0 006.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 00-.063-1.015l-2.307-1.794a.678.678 0 00-.58-.122l-2.19.547a1.745 1.745 0 01-1.657-.459L5.482 8.062a1.745 1.745 0 01-.46-1.657l.548-2.19a.678.678 0 00-.122-.58L3.654 1.328z" />
              </svg>
              [PHONE NUMBER]
            </a>

            <button
              onClick={() => onNavigate('quote')}
              className={`hidden sm:flex items-center px-5 py-2.5 text-sm font-semibold font-display rounded-sm transition-all ${
                transparent
                  ? 'bg-gold text-white hover:bg-gold-light shadow-md'
                  : 'bg-navy text-white hover:bg-navy-mid'
              }`}
            >
              Request a Quote
            </button>

            <button
              className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-[5px] rounded-sm"
              onClick={() => setMenuOpen((m) => !m)}
              aria-expanded={menuOpen}
              aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              <span className={`block w-5 h-[1.5px] rounded-full transition-all origin-center ${
                transparent ? 'bg-white' : 'bg-navy'
              } ${menuOpen ? 'rotate-45 translate-y-[6.5px]' : ''}`} />
              <span className={`block w-5 h-[1.5px] rounded-full transition-all ${
                transparent ? 'bg-white' : 'bg-navy'
              } ${menuOpen ? 'opacity-0 scale-x-0' : ''}`} />
              <span className={`block w-5 h-[1.5px] rounded-full transition-all origin-center ${
                transparent ? 'bg-white' : 'bg-navy'
              } ${menuOpen ? '-rotate-45 -translate-y-[6.5px]' : ''}`} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-hairline">
          <div className="max-w-[1320px] mx-auto px-5 py-4">
            <nav className="space-y-0.5" aria-label="Mobile navigation">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => { onNavigate(link.id); setMenuOpen(false) }}
                  className={`flex w-full items-center px-4 py-3 text-sm font-medium font-body rounded-sm transition-colors ${
                    currentPage === link.id
                      ? 'text-navy bg-linen font-semibold'
                      : 'text-dim hover:text-navy hover:bg-linen/50'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </nav>
            <div className="mt-4 pt-4 border-t border-hairline space-y-2">
              <button
                onClick={() => { onNavigate('quote'); setMenuOpen(false) }}
                className="flex w-full justify-center py-3 bg-navy text-white text-sm font-semibold font-display rounded-sm hover:bg-navy-mid transition-colors"
              >
                Request a Quote
              </button>
              <a
                href="tel:[PHONE_NUMBER]"
                className="flex w-full justify-center py-3 border border-hairline text-navy text-sm font-medium font-body rounded-sm hover:bg-linen transition-colors"
              >
                [PHONE NUMBER]
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
