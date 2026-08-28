// src/components/Nav.jsx
import { useState, useEffect } from 'react'

const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services & Solutions' },
  { id: 'industries', label: 'Industries' },
  { id: 'contact', label: 'Contact' },
]

// Pages that open with a full-width dark hero image — nav should start transparent on these.
// Add/remove page ids here as you build out Services / Industries / Contact heroes.
const darkHeroPages = ['home', 'about', 'services', 'industries', 'contact']

function WhatsAppIcon({ className = 'w-5 h-5' }) {
  return (
    <svg viewBox="0 0 24 24" className={`fill-current ${className}`} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

export default function Nav({ currentPage, onNavigate }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const isHeroPage = darkHeroPages.includes(currentPage)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
    // Reset scroll-based state whenever the page changes so a fresh
    // page load at scrollY 0 always starts transparent (if it's a hero page).
    setScrolled(window.scrollY > 80)
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
        <div className="flex items-center justify-between h-[72px] gap-6">

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
            <div className="text-left leading-none">
              <span className={`block text-[13px] font-bold tracking-wide font-display transition-colors ${
                transparent ? 'text-white' : 'text-navy'
              }`}>
                [COMPANY NAME]
              </span>
              <span className={`block text-[9px] tracking-[0.16em] uppercase font-body mt-0.5 transition-colors ${
                transparent ? 'text-white/50' : 'text-dim'
              }`}>
                Logistics &amp; Trading
              </span>
            </div>
          </button>

          {/* Desktop nav links */}
          <nav aria-label="Main navigation" className="hidden lg:flex items-center gap-0.5 flex-1 justify-center">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => onNavigate(link.id)}
                className={`relative px-4 py-2.5 text-sm font-medium font-body rounded-sm transition-colors whitespace-nowrap ${
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

          {/* Right actions */}
          <div className="flex items-center gap-2 shrink-0">

            {/* WhatsApp button */}
            <a
              href="https://wa.me/[WHATSAPP_NUMBER]"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Start WhatsApp Chat"
              className={`hidden lg:flex items-center gap-2 px-4 py-2 rounded-sm text-sm font-semibold font-display transition-all ${
                transparent
                  ? 'bg-white/15 text-white hover:bg-white/25 border border-white/20'
                  : 'bg-[#25D366] text-white hover:bg-[#1ebe5d] shadow-sm'
              }`}
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span className="hidden xl:inline">Start WhatsApp Chat</span>
              <span className="xl:hidden">WhatsApp</span>
            </a>

            {/* Request a Quote — always gold, never flips dark */}
            <button
              onClick={() => onNavigate('quote')}
              className="hidden sm:flex items-center px-5 py-2.5 text-sm font-semibold font-display rounded-sm transition-all whitespace-nowrap text-white shadow-md hover:shadow-lg"
              style={{ backgroundColor: '#C9922A' }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#b8821f' }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#C9922A' }}
            >
              Request a Quote
            </button>

            {/* Mobile hamburger */}
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

      {/* Mobile menu drawer */}
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
                className="flex w-full justify-center py-3 text-white text-sm font-semibold font-display rounded-sm transition-all"
                style={{ backgroundColor: '#C9922A' }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#b8821f' }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#C9922A' }}
              >
                Request a Quote
              </button>
              <a
                href="https://wa.me/[WHATSAPP_NUMBER]"
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 py-3 rounded-sm text-sm font-semibold font-display text-white transition-colors"
                style={{ backgroundColor: '#25D366' }}
              >
                <WhatsAppIcon className="w-4 h-4" />
                Start WhatsApp Chat
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}