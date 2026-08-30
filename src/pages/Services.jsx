// src/pages/Services.jsx
import { useState, useEffect } from 'react'
import { waLink } from '../constants'

function HeroLabel({ children }) {
  return (
    <span className="block text-gold text-sm sm:text-base font-bold font-display tracking-[0.12em] uppercase mb-4">
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

const serviceList = [
  {
    id: 'transport',
    label: 'Transportation',
    fullTitle: 'Transportation & Inland Logistics',
    image: 'https://images.unsplash.com/photo-1551471698-c7787ff6b7ca?w=900&h=600&fit=crop&auto=format',
    alt: 'Logistics truck on bridge representing inland transportation',
    overview: 'Our transportation and inland logistics service supports the movement of goods between ports, warehouses, facilities and final destinations across the UK. We operate with a focus on reliability, schedule adherence and direct communication throughout every movement.',
    capabilities: [
      'Port and terminal collections',
      'Warehouse-to-warehouse transfers',
      'Multi-stop and consolidated routes',
      'Scheduled and ad-hoc movements',
      'Full-load and part-load options',
      'Temperature-sensitive and specialist cargo support (discuss requirements)',
    ],
    benefits: [
      'Reliable, schedule-focused delivery',
      'Direct communication throughout',
      'Flexible routing and load options',
      'Integrated with warehousing and distribution',
    ],
  },
  {
    id: 'imports',
    label: 'Imports',
    fullTitle: 'Imports & Freight',
    image: 'https://images.unsplash.com/photo-1724364552281-dbed323c4633?w=900&h=600&fit=crop&auto=format',
    alt: 'Cargo vessel representing import and freight operations',
    overview: 'We coordinate import and freight requirements across relevant routes and partners, supporting the movement of cargo from origin through to UK port or onward destination. Our import coordination service is designed around the specific requirements of each customer and cargo type.',
    capabilities: [
      'Import freight coordination',
      'Port and terminal liaison',
      'Container and bulk cargo support',
      'Freight documentation support',
      'Partner carrier coordination',
      'Multi-modal freight solutions',
    ],
    benefits: [
      'Coordinated end-to-end import management',
      'Experienced freight team',
      'Flexible cargo support',
      'Connected with UK inland logistics',
    ],
  },
  {
    id: 'warehousing',
    label: 'Warehousing',
    fullTitle: 'Warehousing & Storage',
    image: 'https://images.unsplash.com/photo-1782948603191-065fb15e2e8e?w=900&h=600&fit=crop&auto=format',
    alt: 'Warehouse shelving representing warehousing and storage capability',
    overview: 'Our warehousing and storage service provides flexible, managed storage solutions designed to support operational continuity across the supply chain. From short-term storage to longer-duration inventory management, our warehousing capability is structured around customer requirements.',
    capabilities: [
      'Short-term and long-duration storage',
      'Inventory management support',
      'Goods-in and goods-out handling',
      'Palletised and loose cargo storage',
      'Order fulfilment support',
      'Stock reporting and visibility',
    ],
    benefits: [
      'Flexible storage terms',
      'Integrated with distribution operations',
      'Inventory visibility and reporting',
      'Operational continuity focused',
    ],
  },
  {
    id: 'distribution',
    label: 'Distribution',
    fullTitle: 'Distribution & Delivery',
    image: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=900&h=600&fit=crop&auto=format',
    alt: 'Distribution trucks representing delivery operations',
    overview: 'Our distribution and delivery service coordinates the movement of goods from warehouse or collection point to required destinations, supporting regular, scheduled or ad-hoc delivery requirements. Distribution is directly integrated with our warehousing operations for seamless stock-to-delivery management.',
    capabilities: [
      'Multi-drop and single destination delivery',
      'Scheduled and recurring delivery routes',
      'Same-day and next-day options (discuss requirements)',
      'Proof of delivery management',
      'Returns and reverse logistics support',
      'Integrated warehouse-to-delivery workflow',
    ],
    benefits: [
      'Integrated with warehousing operations',
      'Flexible delivery scheduling',
      'Proof of delivery and reporting',
      'Scalable to volume requirements',
    ],
  },
]

export default function Services({ onNavigate }) {
  const [activeService, setActiveService] = useState(serviceList[0].id)

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
          setActiveService(entry.target.id)
        }
      })
    }

    const observer = new IntersectionObserver(handleIntersect, observerOptions)

    serviceList.forEach((s) => {
      const el = document.getElementById(s.id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const handleTabClick = (e, id) => {
    e.preventDefault()
    setActiveService(id)
    const targetElement = document.getElementById(id)
    if (targetElement) {
      const yOffset = -135 // Accounts for fixed navigation and sticky tab bar height
      const y = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  return (
    <div>

      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden bg-navy"
        style={{ height: '65vh', minHeight: 500, maxHeight: 720 }}
      >
        <img
          src="https://images.unsplash.com/photo-1494412519320-aa613dfb7738?w=1920&h=700&fit=crop&auto=format"
          alt="Aerial view of container port representing our services"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, rgba(12,37,69,0.90) 0%, rgba(12,37,69,0.55) 55%, rgba(12,37,69,0.28) 100%)' }}
        />

        <div className="relative z-20 h-full flex flex-col">
          <div className="h-[72px] shrink-0" />

          <div className="flex-1 min-h-0 flex flex-col justify-center overflow-hidden">
            <div className="max-w-[1320px] mx-auto px-5 lg:px-10 w-full">
              <div className="max-w-full sm:max-w-[82%] lg:max-w-[65%] xl:max-w-[60%]">
                <HeroLabel>Services &amp; Solutions</HeroLabel>
                <h1 className="text-white text-xl sm:text-2xl lg:text-[30px] xl:text-[34px] font-bold font-display leading-tight mb-4 lg:whitespace-nowrap lg:overflow-hidden lg:text-ellipsis">
                  Our Services &amp; Solutions
                </h1>
                <p className="text-white/72 text-sm sm:text-base font-body leading-relaxed lg:whitespace-nowrap lg:overflow-hidden lg:text-ellipsis">
                  Movement, storage and distribution, connected.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICE NAV TABS WITH SCROLL SPY ──────────────────────────── */}
      <div className="bg-white border-b border-hairline sticky top-[72px] z-30 shadow-xs">
        <div className="max-w-[1320px] mx-auto px-5 lg:px-10">
          <div className="flex overflow-x-auto gap-2 sm:gap-4 scrollbar-hide" style={{ scrollbarWidth: 'none' }}>
            {serviceList.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                onClick={(e) => handleTabClick(e, s.id)}
                className={`px-5 py-4 text-sm font-display tracking-wide whitespace-nowrap border-b-2 transition-all duration-200 shrink-0 ${
                  activeService === s.id
                    ? 'border-gold text-navy font-bold'
                    : 'border-transparent text-dim font-medium hover:text-navy hover:border-gold/40'
                }`}
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ── SERVICE SECTIONS ──────────────────────────────────────────── */}
      {serviceList.map((svc, idx) => (
        <section
          key={svc.id}
          id={svc.id}
          className={idx % 2 === 0 ? 'bg-white py-20 lg:py-28 border-b border-hairline' : 'bg-linen py-20 lg:py-28 border-b border-hairline'}
        >
          <div className="max-w-[1320px] mx-auto px-5 lg:px-10">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${idx % 2 === 1 ? 'lg:[direction:rtl]' : ''}`}>

              {/* Image Column */}
              <div className="lg:[direction:ltr] relative rounded-sm overflow-hidden bg-linen shadow-sm border border-hairline w-full" style={{ aspectRatio: '16/10' }}>
                <img
                  src={svc.image}
                  alt={svc.alt}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.02]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-navy/8" />
              </div>

              {/* Content Column */}
              <div className="lg:[direction:ltr]">
                <SectionTag>{svc.label}</SectionTag>
                <h2 className="text-navy text-3xl lg:text-4xl font-bold font-display mb-6 leading-tight">
                  {svc.fullTitle}
                </h2>
                <p className="text-dim text-base lg:text-lg font-body leading-relaxed mb-10">
                  {svc.overview}
                </p>

                {/* Capabilities & Key Benefits cards with intact dash lines */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
                  <div className="p-6 bg-white/70 sm:bg-white rounded-sm border border-hairline hover:border-navy/20 transition-colors shadow-xs">
                    <h3 className="text-navy text-base font-semibold font-display mb-3.5 flex items-center gap-2">
                      <span className="w-4 h-px bg-gold shrink-0" />
                      Capabilities
                    </h3>
                    <ul className="space-y-2.5">
                      {svc.capabilities.map((cap) => (
                        <li key={cap} className="flex items-start gap-2.5 text-dim text-sm font-body leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0 mt-1.5" />
                          <span>{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-6 bg-white/70 sm:bg-white rounded-sm border border-hairline hover:border-navy/20 transition-colors shadow-xs">
                    <h3 className="text-navy text-base font-semibold font-display mb-3.5 flex items-center gap-2">
                      <span className="w-4 h-px bg-gold shrink-0" />
                      Key Benefits
                    </h3>
                    <ul className="space-y-2.5">
                      {svc.benefits.map((b) => (
                        <li key={b} className="flex items-start gap-2.5 text-dim text-sm font-body leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0 mt-1.5" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <QuoteButton onClick={() => onNavigate('quote')} />
                  <button
                    onClick={() => onNavigate('contact')}
                    className="px-6 py-3 bg-white border border-hairline text-navy text-sm font-medium font-body rounded-sm hover:bg-linen transition-colors shadow-xs"
                  >
                    Speak to Our Team
                  </button>
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
          <h2 className="text-white text-2xl lg:text-3xl xl:text-4xl font-bold font-display mb-4 leading-tight">
            Ready to Discuss Your Requirements?
          </h2>
          <p className="text-white/65 text-base font-body mb-9 max-w-lg mx-auto leading-relaxed">
            Tell us what you need to move, store or distribute and our team will review your requirements and respond promptly.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <QuoteButton onClick={() => onNavigate('quote')} size="lg" />
            <button
              onClick={() => onNavigate('contact')}
              className="px-7 py-3.5 border border-white/28 text-white text-sm font-medium font-body rounded-sm hover:bg-white/10 transition-colors"
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