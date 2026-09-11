// src/pages/Industries.jsx
import { useState, useEffect } from 'react'
import { waLink } from '../constants'

function HeroLabel({ children }) {
  return (
    <span className="block text-gold text-base sm:text-lg font-bold font-display tracking-[0.12em] uppercase mb-4">
      {children}
    </span>
  )
}

function SectionTag({ children, className = 'mb-3' }) {
  return (
    <span className={`block text-gold text-sm sm:text-base font-bold font-display tracking-[0.12em] uppercase ${className}`}>
      {children}
    </span>
  )
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 16 16" className="w-4 h-4 fill-current" aria-hidden="true">
      <path d="M1 8a.5.5 0 01.5-.5h11.793l-3.147-3.146a.5.5 0 01.708-.708l4 4a.5.5 0 010 .708l-4 4a.5.5 0 01-.708-.708L13.293 8.5H1.5A.5.5 0 011 8z" />
    </svg>
  )
}

function WhatsAppIcon({ className = 'w-4 h-4' }) {
  return (
    <svg viewBox="0 0 24 24" className={`fill-current ${className}`} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

function QuoteButton({ onClick, size = 'md', className = '' }) {
  const padding = size === 'lg' ? 'px-8 py-3.5' : 'px-7 py-3.5'
  return (
    <button
      onClick={onClick}
      className={`${padding} text-navy text-sm font-bold font-display rounded-sm transition-all shadow-md hover:shadow-lg ${className}`}
      style={{ backgroundColor: '#eed484' }}
      onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#dfbd51' }}
      onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#eed484' }}
    >
      Request a Quote
    </button>
  )
}

const industries = [
  {
    id: 'healthcare',
    label: 'Healthcare',
    headline: 'Reliable Logistics for Healthcare Supply Chains',
    image: 'https://images.unsplash.com/photo-1628372095387-017d1099fc19?w=1200&h=600&fit=crop&auto=format',
    alt: 'Healthcare facility representing supply chain support for health organisations',
    context: 'Healthcare supply chains demand strict reliability, accountability, and operational continuity for essential goods and facility deliveries.',
    considerations: [
      'Time-sensitive supply requirements',
      'Reliable and accountable delivery',
      'Careful handling of sensitive goods',
      'Warehouse & distribution support',
    ],
    services: ['Critical Deliveries', 'Transportation', 'Warehousing', 'Distribution'],
  },
  {
    id: 'arts-film-studios',
    label: 'Arts & Film Studios',
    headline: 'Specialist Logistics for Film, TV & Creative Production Studios',
    image: 'https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=1200&h=600&fit=crop&auto=format',
    alt: 'Film studio soundstage, lighting rigs and production set equipment',
    context: 'Film and TV production studios operate on strict schedules where delays cost thousands per hour. We provide high-care transport and storage tailored to call sheets.',
    considerations: [
      'Direct shoot location & soundstage deliveries',
      'High-care handling for cameras & lighting',
      'Rapid turnaround around call sheets',
      'Out-of-hours & weekend production support',
    ],
    services: ['Critical Deliveries', 'Transportation', 'Warehousing', 'Distribution'],
  },
  {
    id: 'public-sector',
    label: 'Public Sector',
    headline: 'Accountable Logistics for Public-Sector Organisations',
    image: 'https://images.unsplash.com/photo-1494412519320-aa613dfb7738?w=1200&h=600&fit=crop&auto=format',
    alt: 'Organised cargo logistics representing public sector supply chain support',
    context: 'Public-sector supply chains require accountability, transparent reporting, and compliant processes for structured delivery management.',
    considerations: [
      'Structured and documented operations',
      'Accountable service delivery',
      'Transparent reporting & compliance',
      'Scalable procurement scheduling',
    ],
    services: ['Transportation', 'Warehousing', 'Distribution'],
  },
  {
    id: 'defence-related',
    label: 'Defence-Related',
    headline: 'Disciplined Logistics for Defence-Related Supply Chains',
    image: 'https://images.unsplash.com/photo-1763887487478-dba734cd204c?w=1200&h=600&fit=crop&auto=format',
    alt: 'Industrial port operations representing defence-related logistics support',
    context: 'Defence-related supply chains require operational discipline, strict schedule adherence, and clear accountability at every stage.',
    considerations: [
      'Operational reliability and discipline',
      'Strict schedule adherence',
      'End-to-end accountability',
      'Secure and controlled operations',
    ],
    services: ['Critical Deliveries', 'Transportation', 'Warehousing', 'Distribution'],
  },
  {
    id: 'commercial-industrial',
    label: 'Commercial & Industrial',
    headline: 'Flexible Logistics for Commercial and Industrial Operations',
    image: 'https://images.unsplash.com/photo-1494412651409-8963ce7935a7?w=1200&h=600&fit=crop&auto=format',
    alt: 'Commercial cargo and industrial logistics operations',
    context: 'Commercial and industrial businesses require flexible logistics partners adaptable to fluctuating volumes and multi-site distribution.',
    considerations: [
      'Scalable logistics capacity',
      'Flexible warehousing & storage',
      'Multi-site distribution',
      'Import and freight coordination',
    ],
    services: ['Transportation', 'Imports', 'Warehousing', 'Distribution'],
  },
]

export default function Industries({ onNavigate }) {
  const [activeTab, setActiveTab] = useState(industries[0].id)

  // Scroll Spy: Tracks active section and updates tab underline automatically
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0,
    }

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveTab(entry.target.id)
        }
      })
    }

    const observer = new IntersectionObserver(handleIntersect, observerOptions)

    industries.forEach((ind) => {
      const el = document.getElementById(ind.id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const handleTabClick = (e, id) => {
    e.preventDefault()
    setActiveTab(id)
    const targetElement = document.getElementById(id)
    if (targetElement) {
      const stickyBar = e.currentTarget.closest('.sticky')
      const stickyHeight = stickyBar ? stickyBar.offsetHeight : 50
      const totalHeaderOffset = -20 + stickyHeight // -20px main navbar + sticky tab bar height
      const y = targetElement.getBoundingClientRect().top + window.pageYOffset - totalHeaderOffset
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  return (
    <div>

      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden bg-navy"
        style={{ height: '74vh', minHeight: 580, maxHeight: 800 }}
      >
        <img
          src="https://images.unsplash.com/photo-1724364552281-dbed323c4633?w=1920&h=1080&fit=crop&auto=format"
          alt="International cargo operations representing industries we support"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, rgba(12,37,69,0.65) 0%, rgba(12,37,69,0.45) 50%, rgba(12,37,69,0.28) 100%)' }}
        />

        <div className="relative z-20 h-full flex flex-col">
          <div className="h-[72px] shrink-0" />

          <div className="flex-1 flex flex-col justify-center">
            <div className="max-w-[1320px] mx-auto px-5 lg:px-10 w-full">
              <div className="max-w-full sm:max-w-[82%] lg:max-w-[65%] xl:max-w-[60%]">
                <HeroLabel>Industries</HeroLabel>
                <h1 className="text-white text-2xl sm:text-3xl lg:text-4xl xl:text-[44px] font-bold font-display leading-[1.2] mb-4">
                  Supporting Critical Supply Chains
                </h1>
                <p className="text-white/90 text-base sm:text-lg font-body leading-relaxed max-w-2xl">
                  Reliable, accountable logistics for critical sectors.
                </p>
              </div>
            </div>
          </div>

          <div className="shrink-0 pb-7 pt-2" aria-hidden="true">
            <div className="max-w-[1320px] mx-auto px-5 lg:px-10">
              <div className="flex justify-center">
                <div className="h-2.5 w-2.5 opacity-0" />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* ── INDUSTRY STICKY NAV TABS WITH SCROLL SPY ────────────────── */}
      <div className="bg-white border-b border-hairline sticky top-[72px] z-30 shadow-xs">
        <div className="max-w-[1320px] mx-auto px-5 lg:px-10">
          <div className="flex overflow-x-auto gap-2 sm:gap-4 scrollbar-hide" style={{ scrollbarWidth: 'none' }}>
            {industries.map((ind) => (
              <a
                key={ind.id}
                href={`#${ind.id}`}
                onClick={(e) => handleTabClick(e, ind.id)}
                className={`py-3.5 px-3 text-sm font-display tracking-wide uppercase transition-colors shrink-0 border-b-2 ${
                  activeTab === ind.id
                    ? 'border-gold text-navy font-bold'
                    : 'border-transparent text-dim font-medium hover:text-navy hover:border-gold/40'
                }`}
              >
                {ind.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ── INDUSTRY SECTIONS ─────────────────────────────────────────── */}
      {industries.map((ind, idx) => (
        <section
          key={ind.id}
          id={ind.id}
          className={idx % 2 === 0 ? 'bg-white py-20 lg:py-28 border-b border-hairline scroll-mt-[122px]' : 'bg-linen py-20 lg:py-28 border-b border-hairline scroll-mt-[122px]'}
        >
          <div className="max-w-[1320px] mx-auto px-5 lg:px-10">
            
            {/* Grid: Image and Content pair together with matching top & bottom edges */}
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-stretch ${idx % 2 === 1 ? 'lg:[direction:rtl]' : ''}`}>

              {/* Image Column: Expands from top of SectionTag down to bottom of action button */}
              <div className="lg:[direction:ltr] relative rounded-sm overflow-hidden bg-navy/5 shadow-sm border border-hairline w-full h-[360px] sm:h-[420px] lg:h-full min-h-0">
                <img
                  src={ind.image}
                  alt={ind.alt}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-[1.02]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-navy/8" />
                <div className="absolute bottom-5 left-5">
                  <span className="inline-block bg-navy/95 text-gold-light text-xs sm:text-sm font-bold tracking-[0.12em] uppercase font-display px-4 py-2 rounded-sm backdrop-blur-sm border border-white/10 shadow-md">
                    {ind.label}
                  </span>
                </div>
              </div>

              {/* Content Column: Starts at SectionTag (heading label) and ends at bottom line of buttons */}
              <div className="lg:[direction:ltr] flex flex-col justify-between">
                <div>
                  <SectionTag className="mb-3">{ind.label}</SectionTag>
                  <h2 className="text-navy text-2.5xl sm:text-3xl lg:text-4xl font-bold font-display mb-4 leading-tight">
                    {ind.headline}
                  </h2>
                  <p className="text-dim text-base lg:text-lg font-body leading-relaxed mb-6">
                    {ind.context}
                  </p>
                </div>

                <div>
                  {/* Key Considerations & Relevant Services cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mb-6">
                    {/* Considerations Card */}
                    <div className="p-5 sm:p-6 bg-white rounded-sm border border-hairline hover:border-navy/20 transition-colors shadow-xs">
                      <h3 className="text-navy text-base sm:text-lg font-bold font-display mb-3 flex items-center gap-2">
                        <span className="w-4 h-px bg-gold shrink-0" />
                        Key Considerations
                      </h3>
                      <ul className="space-y-2">
                        {ind.considerations.map((c) => (
                          <li key={c} className="flex items-start gap-2.5 text-dim text-sm font-body leading-snug">
                            <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0 mt-1.5" />
                            <span>{c}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Services Card */}
                    <div className="p-5 sm:p-6 bg-white rounded-sm border border-hairline hover:border-navy/20 transition-colors shadow-xs">
                      <h3 className="text-navy text-base sm:text-lg font-bold font-display mb-3 flex items-center gap-2">
                        <span className="w-4 h-px bg-gold shrink-0" />
                        Relevant Services
                      </h3>
                      <ul className="space-y-2">
                        {ind.services.map((s) => (
                          <li key={s} className="flex items-start gap-2.5 text-dim text-sm font-body leading-snug">
                            <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0 mt-1.5" />
                            <span>{s}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Action Button Row: Inside Content Column so image height extends to button bottom line */}
                  <div className="flex flex-wrap gap-3">
                    <button
                      onClick={() => onNavigate('services')}
                      className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-navy text-navy text-sm font-semibold font-display rounded-sm hover:bg-navy hover:text-white transition-all duration-200 shadow-sm"
                    >
                      Explore Services &amp; Solutions
                      <ArrowIcon />
                    </button>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </section>
      ))}

      {/* ── FINAL CTA ─────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-navy py-20 lg:py-24">
        <img
          src="https://images.unsplash.com/photo-1641176716788-d4816a66dc6d?w=1920&h=700&fit=crop&auto=format"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover opacity-15"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(105deg, rgba(12,37,69,0.98) 0%, rgba(12,37,69,0.90) 60%, rgba(12,37,69,0.75) 100%)' }}
        />
        <div className="max-w-[1320px] mx-auto px-5 lg:px-10 relative text-center">
          <div className="flex justify-center">
            <SectionTag>Get in Touch</SectionTag>
          </div>
          <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold font-display mb-4 leading-tight max-w-2xl mx-auto">
            Ready to Discuss Your Requirements?
          </h2>
          <p className="text-white/80 text-base sm:text-lg font-body mb-9 max-w-xl mx-auto leading-relaxed">
            Tell us about your organisation and supply-chain requirements and our team will respond promptly.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <QuoteButton onClick={() => onNavigate('quote')} size="lg" />
            <button
              onClick={() => onNavigate('contact')}
              className="px-7 py-3.5 border border-white/28 bg-white/10 text-white text-sm font-medium font-body rounded-sm hover:bg-white/20 transition-colors"
            >
              Contact Us
            </button>
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 flex items-center gap-2 text-white text-sm font-semibold font-display rounded-sm transition-all hover:brightness-110 shadow-md"
              style={{ backgroundColor: '#25D366' }}
            >
              <WhatsAppIcon className="w-4 h-4" />
              Start WhatsApp Chat
            </a>
          </div>
        </div>
      </section>

    </div>
  )
}