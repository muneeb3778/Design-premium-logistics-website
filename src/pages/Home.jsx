// src/pages/Home.jsx
import { useState, useEffect } from 'react'
import { waLink } from '../constants'

/*
  Hero slideshow data
*/
const heroSlides = [
  {
    tag: 'Global Operations',
    headline: 'Moving Goods. Supporting Supply Chains.',
    subtext: 'Transportation, warehousing and import logistics — connected.',
    image: 'https://images.unsplash.com/photo-1724364552281-dbed323c4633?w=1920&h=1080&fit=crop&auto=format',
    alt: 'Aerial view of a large cargo vessel at sea',
  },
  {
    tag: 'Transportation',
    headline: 'Reliable Transportation Across the UK.',
    subtext: 'Dependable goods movement, nationwide.',
    image: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=1920&h=1080&fit=crop&auto=format',
    alt: 'Fleet of logistics trucks prepared for transportation',
  },
  {
    tag: 'Warehousing',
    headline: 'Storage That Keeps Operations Moving.',
    subtext: 'Flexible warehousing for supply chain continuity.',
    image: 'https://images.unsplash.com/photo-1766021736631-d2f15082aa59?w=1920&h=1080&fit=crop&auto=format',
    alt: 'Spacious modern industrial warehouse interior',
  },
  {
    tag: 'Imports & Freight',
    headline: 'Seamless Import Logistics, Simplified.',
    subtext: 'Coordinated freight handling, port to delivery.',
    image: 'https://images.unsplash.com/photo-1494412651409-8963ce7935a7?w=1920&h=1080&fit=crop&auto=format',
    alt: 'International shipyard with cranes and vessels at port',
  },
]

const services = [
  {
    title: 'Transportation',
    desc: 'Movement between ports, warehouses, facilities and destinations across the UK supply chain.',
    image: 'https://images.unsplash.com/photo-1551471698-c7787ff6b7ca?w=800&h=600&fit=crop&auto=format',
    alt: 'Logistics truck at speed on a bridge',
  },
  {
    title: 'Critical & Last-Minute Deliveries',
    desc: 'Rapid-response, dedicated urgent freight and time-critical transport when schedules are non-negotiable.',
    image: 'https://images.unsplash.com/photo-1616401784845-180882ba9ba8?w=800&h=600&fit=crop&auto=format',
    alt: 'Dedicated priority courier vehicle on rapid delivery route',
  },
  {
    title: 'Imports',
    desc: 'Import and freight coordination across relevant routes and partners for your cargo requirements.',
    image: 'https://images.unsplash.com/photo-1724364552281-dbed323c4633?w=800&h=600&fit=crop&auto=format&q=65',
    alt: 'Cargo vessel underway at sea',
  },
  {
    title: 'Warehousing',
    desc: 'Flexible storage and inventory-support capabilities designed around operational continuity.',
    image: 'https://images.unsplash.com/photo-1782948603191-065fb15e2e8e?w=800&h=600&fit=crop&auto=format',
    alt: 'Warehouse aisle with tall shelving and stored goods',
  },
  {
    title: 'Distribution',
    desc: 'Coordinated delivery to required destinations, integrated with warehousing and logistics operations.',
    image: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&h=600&fit=crop&auto=format&q=65',
    alt: 'Distribution fleet of trucks at depot',
  },
]

const valueProps = [
  { title: 'Reliable Operations', desc: 'Clear processes designed to support dependable movement across every stage of the supply chain.' },
  { title: 'Responsive Communication', desc: 'Direct, timely communication from initial enquiry through to operational execution and delivery.' },
  { title: 'Flexible Solutions', desc: 'Services adapted to your transportation, storage and distribution requirements — not a fixed template.' },
  { title: 'Connected Supply Chain', desc: 'One connected view across transport, warehousing and delivery, reducing complexity and risk.' },
  { title: 'Accountable Service', desc: 'Clear ownership and named contacts from enquiry through to completion, with measurable commitments.' },
]

const industries = [
  {
    label: 'Healthcare',
    desc: 'Reliable logistics, transportation, storage and distribution support for healthcare supply chains.',
    image: 'https://images.unsplash.com/photo-1628372095387-017d1099fc19?w=800&h=560&fit=crop&auto=format',
    alt: 'Healthcare facility and supply chain support',
  },
  {
    label: 'Arts & Film Studios',
    desc: 'Dedicated transport and high-care handling for production sets, studio soundstages, props and media assets.',
    image: 'https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=800&h=560&fit=crop&auto=format',
    alt: 'Film studio production stage and lighting equipment',
  },
  {
    label: 'Public Sector',
    desc: 'Structured, accountable logistics support for public-sector procurement and distribution requirements.',
    image: 'https://images.unsplash.com/photo-1494412519320-aa613dfb7738?w=800&h=560&fit=crop&auto=format&q=65',
    alt: 'Organised cargo logistics for public sector operations',
  },
  {
    label: 'Defence-Related',
    desc: 'Transportation and logistics support where operational discipline, reliability and accountability matter.',
    image: 'https://images.unsplash.com/photo-1763887487478-dba734cd204c?w=800&h=560&fit=crop&auto=format&q=65',
    alt: 'Industrial port logistics and transportation operations',
  },
  {
    label: 'Commercial & Industrial',
    desc: 'Flexible logistics and supply-chain support for commercial businesses and industrial operations.',
    image: 'https://images.unsplash.com/photo-1494412651409-8963ce7935a7?w=800&h=560&fit=crop&auto=format',
    alt: 'Aerial view of commercial cargo and logistics operations',
  },
]

/*
  Clients & Enterprise Partners Data (Bold, prominent, fills the card cleanly)
*/
const clients = [
  {
    id: 'f1',
    name: 'Formula 1®',
    sector: 'Motorsport Logistics',
    renderLogo: () => (
      <div className="flex items-center gap-3">
        <span className="text-4xl sm:text-[42px] font-black italic tracking-tighter text-[#E10600] leading-none">F1</span>
        <div className="border-l-2 border-slate-300 pl-3 text-left">
          <span className="block text-base sm:text-lg font-black tracking-wider text-navy uppercase leading-none">FORMULA 1</span>
          <span className="block text-xs text-dim tracking-widest uppercase font-semibold mt-1">Global Racing</span>
        </div>
      </div>
    ),
  },
  {
    id: 'alpine',
    name: 'Alpine UK',
    sector: 'Motorsport Division',
    renderLogo: () => (
      <div className="flex items-center gap-3.5">
        <div className="w-12 h-12 rounded-full bg-[#00428C] flex items-center justify-center text-white font-black text-xl italic shadow-xs shrink-0">
          A
        </div>
        <div className="text-left">
          <span className="block text-xl sm:text-2xl font-black tracking-[0.16em] text-navy uppercase leading-none">ALPINE</span>
          <span className="block text-xs text-[#0090FF] font-bold tracking-wider uppercase mt-1">Motorsport UK</span>
        </div>
      </div>
    ),
  },
  {
    id: 'mod',
    name: 'MOD UK',
    sector: 'Ministry of Defence',
    renderLogo: () => (
      <div className="flex items-center gap-3">
        <svg viewBox="0 0 24 24" className="w-10 h-10 fill-navy shrink-0" aria-hidden="true">
          <path d="M12 2l2.4 4.8 5.3.8-3.8 3.7.9 5.3-4.8-2.5-4.8 2.5.9-5.3-3.8-3.7 5.3-.8L12 2z" />
        </svg>
        <div className="text-left">
          <span className="block text-sm sm:text-base font-black tracking-wider text-navy uppercase leading-tight">MINISTRY OF DEFENCE</span>
          <span className="block text-xs text-dim tracking-wider uppercase font-medium mt-0.5">United Kingdom</span>
        </div>
      </div>
    ),
  },
  {
    id: 'atomic',
    name: 'Atomic Energy UK',
    sector: 'Energy & Research',
    renderLogo: () => (
      <div className="flex items-center gap-3">
        <svg viewBox="0 0 24 24" className="w-10 h-10 stroke-navy fill-none stroke-2 shrink-0" aria-hidden="true">
          <circle cx="12" cy="12" r="3.5" fill="#dfbd51" stroke="none" />
          <ellipse cx="12" cy="12" rx="9.5" ry="4" transform="rotate(30 12 12)" />
          <ellipse cx="12" cy="12" rx="9.5" ry="4" transform="rotate(-30 12 12)" />
        </svg>
        <div className="text-left">
          <span className="block text-sm sm:text-base font-black tracking-tight text-navy uppercase leading-tight">UK ATOMIC ENERGY</span>
          <span className="block text-xs text-dim tracking-widest uppercase font-medium mt-0.5">Research &amp; Power</span>
        </div>
      </div>
    ),
  },
  {
    id: 'nhs',
    name: 'NHS',
    sector: 'National Health Trust',
    renderLogo: () => (
      <div className="flex items-center gap-3.5">
        <div className="bg-[#005EB8] px-3.5 py-1.5 rounded-sm shadow-xs shrink-0">
          <span className="text-2xl sm:text-3xl font-black italic tracking-tight text-white leading-none">NHS</span>
        </div>
        <div className="text-left">
          <span className="block text-sm sm:text-base font-black text-navy leading-tight">National Health Trust</span>
          <span className="block text-xs text-dim tracking-wide uppercase font-semibold mt-0.5">Medical Logistics</span>
        </div>
      </div>
    ),
  },
  {
    id: 'boeing',
    name: 'Boeing',
    sector: 'Aerospace & Defence',
    renderLogo: () => (
      <div className="flex items-center gap-3">
        <svg viewBox="0 0 24 24" className="w-10 h-10 fill-[#0039A6] shrink-0" aria-hidden="true">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v-.07zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.4z" />
        </svg>
        <div className="text-left">
          <span className="block text-2xl sm:text-[26px] font-black tracking-widest text-[#0039A6] uppercase leading-none font-sans">BOEING</span>
          <span className="block text-xs text-dim tracking-widest uppercase font-semibold mt-1">Aerospace Logistics</span>
        </div>
      </div>
    ),
  },
  {
    id: 'airports',
    name: 'Heathrow & Gatwick',
    sector: 'Airport Operations',
    renderLogo: () => (
      <div className="flex items-center gap-3">
        <svg viewBox="0 0 24 24" className="w-9 h-9 fill-navy shrink-0" aria-hidden="true">
          <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
        </svg>
        <div className="text-left">
          <span className="block text-sm sm:text-base font-black text-navy uppercase leading-tight">GATWICK &amp; HEATHROW</span>
          <span className="block text-xs text-dim tracking-widest uppercase font-medium mt-0.5">UK Airport Hubs</span>
        </div>
      </div>
    ),
  },
  {
    id: 'hsbc',
    name: 'HSBC',
    sector: 'Banking & Financial',
    renderLogo: () => (
      <div className="flex items-center gap-3">
        <div className="relative w-8 h-8 shrink-0">
          <div className="absolute inset-0 bg-[#DB0011]" style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }} />
        </div>
        <div className="text-left">
          <span className="block text-2xl sm:text-3xl font-black tracking-wider text-navy leading-none">HSBC</span>
          <span className="block text-xs text-dim tracking-wider uppercase font-medium mt-1">Global Banking</span>
        </div>
      </div>
    ),
  },
  {
    id: 'fedex',
    name: 'FedEx',
    sector: 'Global Logistics',
    renderLogo: () => (
      <div className="text-left">
        <div className="flex items-baseline text-3xl sm:text-[34px] font-black leading-none tracking-tight">
          <span className="text-[#4D148C]">Fed</span>
          <span className="text-[#FF6600]">Ex</span>
        </div>
        <span className="block text-xs text-dim tracking-widest uppercase font-semibold mt-1">Express Freight</span>
      </div>
    ),
  },
  {
    id: 'studios',
    name: 'Warner Bros & Shinfield',
    sector: 'Film & Media Studios',
    renderLogo: () => (
      <div className="flex items-center gap-3">
        <div className="w-10 h-11 bg-[#003B7B] rounded-b-lg flex items-center justify-center text-white text-sm font-black tracking-tighter shrink-0 shadow-xs">
          WB
        </div>
        <div className="text-left">
          <span className="block text-sm sm:text-base font-black text-navy uppercase leading-tight">WARNER BROS.</span>
          <span className="block text-xs text-dim tracking-wider uppercase font-medium mt-0.5">Shinfield Studios</span>
        </div>
      </div>
    ),
  },
  {
    id: 'kodak',
    name: 'Kodak Studios',
    sector: 'Media & Production',
    renderLogo: () => (
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-[#E31837] flex items-center justify-center rounded-sm text-[#FFC72C] font-black text-xl shrink-0 shadow-xs">
          K
        </div>
        <div className="text-left">
          <span className="block text-xl sm:text-2xl font-black tracking-wider text-[#E31837] leading-none uppercase">Kodak</span>
          <span className="block text-xs text-dim tracking-wider uppercase font-medium mt-1">Studios Logistics</span>
        </div>
      </div>
    ),
  },
  {
    id: 'datacentres',
    name: 'Data Centres UK',
    sector: 'Critical Infrastructure',
    renderLogo: () => (
      <div className="flex items-center gap-3">
        <svg viewBox="0 0 24 24" className="w-9 h-9 fill-navy shrink-0" aria-hidden="true">
          <path d="M4 1h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2zm0 8h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2zm0 8h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2zM6 5h2V3H6v2zm0 8h2v-2H6v2zm0 8h2v-2H6v2z" />
        </svg>
        <div className="text-left">
          <span className="block text-sm sm:text-base font-black text-navy uppercase leading-tight">DATA CENTRES</span>
          <span className="block text-xs text-dim tracking-widest uppercase font-medium mt-0.5">Critical Infrastructure</span>
        </div>
      </div>
    ),
  },
  {
    id: 'companieshouse',
    name: 'Companies House UK',
    sector: 'Government Agency',
    renderLogo: () => (
      <div className="flex items-center gap-3">
        <svg viewBox="0 0 24 24" className="w-9 h-9 fill-navy shrink-0" aria-hidden="true">
          <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-1 6h2v2h-2V7zm0 4h2v6h-2v-6z" />
        </svg>
        <div className="text-left">
          <span className="block text-sm sm:text-base font-black text-navy uppercase leading-tight">COMPANIES HOUSE</span>
          <span className="block text-xs text-dim tracking-widest uppercase font-medium mt-0.5">UK Executive Agency</span>
        </div>
      </div>
    ),
  },
  {
    id: 'mitie',
    name: 'Mitie UK',
    sector: 'Facilities & Security',
    renderLogo: () => (
      <div className="flex items-center gap-2.5">
        <span className="text-3xl sm:text-4xl font-black tracking-tight text-navy lowercase font-sans leading-none">mitie</span>
        <div className="w-3 h-3 rounded-full bg-[#E40046] mb-2.5 shrink-0" />
        <span className="block text-xs text-dim tracking-widest uppercase font-medium ml-1">UK Facilities</span>
      </div>
    ),
  },
]

const faqs = [
  {
    q: 'What services do you provide?',
    a: 'We provide a connected range of services including nationwide transportation, critical and last-minute deliveries, import and freight coordination, warehousing, and scheduled distribution.',
  },
  {
    q: 'Do you offer same-day or time-critical deliveries?',
    a: 'Yes. Our critical and last-minute delivery service provides dedicated express dispatch across the UK for emergency freight, aerospace components, medical consignments, and tight production timelines.',
  },
  {
    q: 'Do you provide inland transportation?',
    a: 'Yes. We provide inland transportation services connecting ports, terminals, warehouses, facilities and delivery destinations across the UK supply chain.',
  },
  {
    q: 'Do you provide warehousing?',
    a: 'Yes. We offer flexible warehousing and storage solutions for short-term and longer-duration requirements, designed around operational continuity.',
  },
  {
    q: 'Can you support imported goods?',
    a: 'Yes. We coordinate import logistics with freight and shipping partners to move goods seamlessly through UK ports and terminals onward to final destinations.',
  },
  {
    q: 'How do I request a quote?',
    a: 'Use our Request a Quote form to describe your requirements. Our team reviews submissions promptly, or you can reach us immediately via WhatsApp or phone.',
  },
]

function HeroLabel({ children }) {
  return (
    <span className="block text-gold text-base sm:text-lg font-bold font-display tracking-[0.12em] uppercase mb-4">
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
  const padding = size === 'lg' ? 'px-8 py-3.5' : 'px-6 py-3'
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

export default function Home({ onNavigate }) {
  const [slide, setSlide] = useState(0)
  const [openFaq, setOpenFaq] = useState(null)

  // Automatic hero slider
  useEffect(() => {
    const timer = setInterval(() => {
      setSlide((s) => (s + 1) % heroSlides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  // Clients carousel state & continuous 3-second cycle
  const [clientIndex, setClientIndex] = useState(0)
  const [visibleCount, setVisibleCount] = useState(4)

  useEffect(() => {
    const updateVisible = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1.3)
      } else if (window.innerWidth < 768) {
        setVisibleCount(2.2)
      } else if (window.innerWidth < 1024) {
        setVisibleCount(3.2)
      } else {
        setVisibleCount(4.5)
      }
    }
    updateVisible()
    window.addEventListener('resize', updateVisible)
    return () => window.removeEventListener('resize', updateVisible)
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setClientIndex((prev) => (prev + 1) % clients.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div>

      {/* ── HERO ────────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden"
        style={{ height: '66vh', minHeight: 540, maxHeight: 760 }}
        aria-label="Homepage feature slideshow"
      >
        {heroSlides.map((s, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-1000 ${i === slide ? 'opacity-100 z-0' : 'opacity-0 z-0'}`}
            aria-hidden={i !== slide}
          >
            <img
              src={s.image}
              alt={s.alt}
              className="absolute inset-0 w-full h-full object-cover"
              loading={i === 0 ? 'eager' : 'lazy'}
            />
            <div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(to top, rgba(12,37,69,0.55) 0%, rgba(12,37,69,0.30) 40%, rgba(12,37,69,0.12) 100%)' }}
            />
          </div>
        ))}

        <div className="relative z-20 h-full flex flex-col">
          <div className="h-[72px] shrink-0" />

          <div className="flex-1 min-h-0 flex flex-col justify-center overflow-hidden">
            <div className="max-w-[1320px] mx-auto px-5 lg:px-10 w-full">
              <div className="max-w-full sm:max-w-[82%] lg:max-w-[65%] xl:max-w-[62%] pt-8 sm:pt-10 lg:pt-24">
                <HeroLabel>{heroSlides[slide].tag}</HeroLabel>

                <h1 className="text-white text-xl sm:text-2xl lg:text-[30px] xl:text-[34px] font-bold font-display leading-tight mb-4 lg:whitespace-nowrap lg:overflow-hidden lg:text-ellipsis">
                  {heroSlides[slide].headline}
                </h1>

                <p className="text-white/72 text-sm sm:text-base font-body leading-relaxed mb-6 lg:whitespace-nowrap lg:overflow-hidden lg:text-ellipsis">
                  {heroSlides[slide].subtext}
                </p>
              </div>
            </div>
          </div>

          {/* Slide navigation dots */}
          <div className="shrink-0 pb-6">
            <div className="max-w-[1320px] mx-auto px-5 lg:px-10">
              <div className="flex justify-center" role="tablist" aria-label="Slideshow navigation">
                <div className="flex items-center gap-2.5" style={{ filter: 'drop-shadow(0 1px 3px rgba(0,0,0,0.5))' }}>
                  {heroSlides.map((_, i) => (
                    <button
                      key={i}
                      role="tab"
                      aria-selected={i === slide}
                      aria-label={`Slide ${i + 1}`}
                      onClick={() => setSlide(i)}
                      className={`rounded-full transition-all duration-300 ${
                        i === slide ? 'w-2.5 h-2.5 bg-gold' : 'w-2 h-2 bg-white/60 hover:bg-white/90'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES & SOLUTIONS (MATCHED TO INDUSTRIES SECTION) ──────── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-[1320px] mx-auto px-5 lg:px-10">
          <div className="max-w-2xl mb-14">
            <span className="block text-gold text-sm sm:text-base font-bold font-display tracking-[0.12em] uppercase mb-3">
              our Solutions &amp; Services
            </span>
            <h2 className="text-navy text-3xl lg:text-4xl font-bold font-display mb-4">Coordinated Supply Chain Capabilities</h2>
            <p className="text-dim text-base lg:text-lg font-body leading-relaxed">
              Connected capabilities designed to support the movement, urgent transport, storage and distribution of goods across the supply chain.
            </p>
          </div>

          {/* Exact same flexbox structure, aspect-ratio & centering as Industries */}
          <div className="flex flex-wrap justify-center gap-5">
            {services.map((svc) => (
              <button
                key={svc.title}
                onClick={() => onNavigate('services')}
                className="group relative overflow-hidden rounded-sm text-left shrink-0 w-full sm:w-[calc(50%-10px)] lg:w-[calc((100%-40px)/3)]"
                style={{ aspectRatio: '16/10' }}
              >
                <img
                  src={svc.image}
                  alt={svc.alt}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/25 to-transparent" />
                <div className="absolute top-4 right-4">
                  <div className="w-8 h-8 bg-white/15 group-hover:bg-gold/85 rounded-full flex items-center justify-center transition-colors duration-200 text-white">
                    <ArrowIcon />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                  <span className="inline-block text-gold text-xs sm:text-sm font-semibold tracking-[0.13em] uppercase font-display mb-1.5">{svc.title}</span>
                  <p className="text-white/85 text-xs sm:text-sm font-body leading-relaxed line-clamp-2">{svc.desc}</p>
                </div>
              </button>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => onNavigate('services')}
              className="inline-flex items-center gap-2.5 px-8 py-3.5 border-2 border-navy text-navy text-sm font-bold font-display tracking-wide rounded-sm hover:bg-navy hover:text-white transition-all duration-300 shadow-sm hover:shadow-md"
            >
              Explore All Services &amp; Solutions
              <ArrowIcon />
            </button>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ─────────────────────────────────────────────── */}
      <section className="bg-white py-20 lg:py-28 border-t border-hairline">
        <div className="max-w-[1320px] mx-auto px-5 lg:px-10">
          
          <div className="max-w-3xl mb-12 lg:mb-16">
            <span className="block text-gold text-sm sm:text-base font-bold font-display tracking-[0.12em] uppercase mb-3">
              Why Choose Us
            </span>
            <h2 className="text-navy text-3xl lg:text-4xl font-bold font-display mb-4">
              Your Shipping &amp; Logistics Needs, Connected
            </h2>
            <p className="text-dim text-base lg:text-lg font-body leading-relaxed">
              We combine operational knowledge with direct service delivery — connecting transportation, warehousing and distribution into a coherent, responsive solution.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-stretch">
            <div className="relative rounded-sm overflow-hidden bg-linen min-h-[360px] sm:min-h-[440px] lg:min-h-full">
              <img
                src="https://images.unsplash.com/photo-1772305336606-989a457ffbae?w=900&h=700&fit=crop&auto=format"
                alt="Premium logistics warehouse with polished concrete floor"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 bg-navy/95 text-white px-5 py-3.5 rounded-sm backdrop-blur-sm border border-white/10 shadow-lg">
                <p className="text-[10px] text-white/50 font-body tracking-[0.12em] uppercase mb-0.5">Operating Since</p>
                <p className="text-2xl font-bold font-display text-gold-light">Est. [YEAR]</p>
              </div>
            </div>

            <div className="flex flex-col justify-between">
              <div className="space-y-6 lg:space-y-7">
                {valueProps.map((vp) => (
                  <div key={vp.title} className="flex gap-4 group">
                    <div className="w-[3px] bg-gold/70 group-hover:bg-gold shrink-0 mt-1 rounded-full transition-colors duration-200" />
                    <div>
                      <h3 className="text-navy text-base font-semibold font-display mb-1">{vp.title}</h3>
                      <p className="text-dim text-sm font-body leading-relaxed">{vp.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-hairline flex flex-wrap gap-3">
                <button
                  onClick={() => onNavigate('about')}
                  className="px-6 py-3 border-2 border-navy text-navy text-sm font-semibold font-display rounded-sm hover:bg-navy hover:text-white transition-all duration-200"
                >
                  About Our Company
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── INDUSTRIES (CENTER-ALIGNED) ───────────────────────────────── */}
      <section className="bg-linen py-20 lg:py-28">
        <div className="max-w-[1320px] mx-auto px-5 lg:px-10">
          <div className="max-w-2xl mb-14">
            <span className="block text-gold text-sm sm:text-base font-bold font-display tracking-[0.12em] uppercase mb-3">
              Industries
            </span>
            <h2 className="text-navy text-3xl lg:text-4xl font-bold font-display mb-4">
              Supporting Organisations Across Critical Supply Chains
            </h2>
            <p className="text-dim text-base lg:text-lg font-body leading-relaxed">
              We serve organisations with exacting supply-chain requirements, where reliability, accountability and operational discipline are essential.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-5">
            {industries.map((ind) => (
              <button
                key={ind.label}
                onClick={() => onNavigate('industries')}
                className="group relative overflow-hidden rounded-sm text-left shrink-0 w-full sm:w-[calc(50%-10px)] lg:w-[calc((100%-40px)/3)]"
                style={{ aspectRatio: '16/10' }}
              >
                <img
                  src={ind.image}
                  alt={ind.alt}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/25 to-transparent" />
                <div className="absolute top-4 right-4">
                  <div className="w-8 h-8 bg-white/15 group-hover:bg-gold/85 rounded-full flex items-center justify-center transition-colors duration-200 text-white">
                    <ArrowIcon />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                  <span className="inline-block text-gold text-xs sm:text-sm font-semibold tracking-[0.13em] uppercase font-display mb-1.5">{ind.label}</span>
                  <p className="text-white/85 text-xs sm:text-sm font-body leading-relaxed line-clamp-2">{ind.desc}</p>
                </div>
              </button>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => onNavigate('industries')}
              className="inline-flex items-center gap-2.5 px-8 py-3.5 border-2 border-navy text-navy text-sm font-bold font-display tracking-wide rounded-sm hover:bg-navy hover:text-white transition-all duration-300 shadow-sm hover:shadow-md"
            >
              View All Industries
              <ArrowIcon />
            </button>
          </div>
        </div>
      </section>

      {/* ── STATISTICS / TRUST (OUR EXPERIENCE) ────────────────────────── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-[1320px] mx-auto px-5 lg:px-10">
          <div className="text-center max-w-xl mx-auto mb-14">
            <span className="block text-gold text-sm sm:text-base font-bold font-display tracking-[0.12em] uppercase mb-3">
              Our Experience
            </span>
            <h2 className="text-navy text-3xl lg:text-4xl font-bold font-display mb-4">
              Experience Built Around Reliability
            </h2>
            <p className="text-dim text-base font-body leading-relaxed">
              Our track record across transportation, warehousing, imports and distribution reflects the requirements of the organisations we work with.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
            {[
              { value: 'XX+', label: 'Years Experience', sub: 'Serving UK supply chains' },
              { value: 'XX+', label: 'Shipments & Deliveries', sub: '[VERIFIED STATISTIC]' },
              { value: 'XX+', label: 'Customers Supported', sub: '[VERIFIED STATISTIC]' },
              { value: 'XX', label: 'Service Categories', sub: 'Connected capabilities' },
            ].map((stat) => (
              <div key={stat.label} className="text-center p-6 border border-hairline rounded-sm hover:border-navy/20 transition-colors group">
                <div className="text-4xl lg:text-5xl font-bold font-display text-gold mb-2 group-hover:text-gold-light transition-colors">{stat.value}</div>
                <div className="text-navy text-sm font-semibold font-display mb-1">{stat.label}</div>
                <div className="text-dim text-xs font-body">{stat.sub}</div>
              </div>
            ))}
          </div>

          <div className="border-t border-hairline pt-10">
            <p className="text-center text-dim text-xs font-body tracking-[0.13em] uppercase mb-6">Accreditations &amp; Credentials</p>
            <div className="flex flex-wrap justify-center gap-3">
              {['[VERIFIED CERTIFICATION]', '[VERIFIED CERTIFICATION]', '[VERIFIED MEMBERSHIP]', '[VERIFIED ACCREDITATION]'].map((cert) => (
                <div key={cert} className="px-5 py-2.5 border border-hairline rounded-sm text-dim text-sm font-body hover:border-navy/20 transition-colors">
                  {cert}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 max-w-2xl mx-auto p-8 bg-linen rounded-sm border border-hairline text-center">
            <svg viewBox="0 0 24 24" className="w-7 h-7 fill-gold/25 mx-auto mb-4" aria-hidden="true">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <p className="text-navy text-base font-body leading-relaxed italic mb-5">[VERIFIED CLIENT TESTIMONIAL]</p>
            <div className="text-dim text-[11px] font-display tracking-[0.1em] uppercase">[CLIENT NAME] · [CLIENT ORGANISATION]</div>
          </div>
        </div>
      </section>

      {/* ── OUR CLIENTS (LOW PADDING & BIGGER LOGOS) ───────────────────── */}
      <section className="bg-slate-50/70 py-16 lg:py-20 border-t border-hairline overflow-hidden">
        <div className="max-w-[1320px] mx-auto px-5 lg:px-10">
          
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="block text-gold text-xs sm:text-sm font-bold font-display tracking-[0.18em] uppercase mb-2">
              TRUSTED BY
            </span>
            <h2 className="text-navy text-3xl lg:text-4xl font-bold font-display mb-3">
              Our Clients &amp; Partners
            </h2>
            <p className="text-dim text-sm sm:text-base font-body leading-relaxed">
              Organisations that trust us to support their critical supply chains, aerospace movements, and enterprise operations.
            </p>
          </div>

          <div className="relative">
            <div className="hidden sm:block pointer-events-none absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-slate-50/90 to-transparent z-10" />
            <div className="hidden sm:block pointer-events-none absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-slate-50/90 to-transparent z-10" />

            <div className="overflow-hidden py-2">
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{
                  transform: `translateX(-${(clientIndex * 100) / visibleCount}%)`,
                }}
              >
                {[...clients, ...clients].map((client, idx) => (
                  <div
                    key={`${client.id}-${idx}`}
                    className="shrink-0 px-2 sm:px-2.5"
                    style={{ width: `${100 / visibleCount}%` }}
                  >
                    <div className="h-[96px] sm:h-[102px] bg-white border border-slate-200/90 rounded-xl px-3.5 py-2 flex items-center justify-center text-center shadow-[0_2px_10px_rgba(0,0,0,0.04)] hover:border-gold hover:shadow-md transition-all duration-300 group select-none">
                      <div className="transition-transform duration-300 group-hover:scale-105 flex items-center justify-center w-full">
                        {client.renderLogo()}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────── */}
      <section className="bg-linen py-20 lg:py-28">
        <div className="max-w-[1320px] mx-auto px-5 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-12 lg:gap-16">
            <div>
              <span className="block text-gold text-sm sm:text-base font-bold font-display tracking-[0.12em] uppercase mb-3">
                FAQ
              </span>
              <h2 className="text-navy text-3xl font-bold font-display mb-4">Frequently Asked Questions</h2>
              <p className="text-dim text-base font-body leading-relaxed mb-6">
                Common questions about our services, capabilities and how to work with us.
              </p>
              <button
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center gap-2 text-navy text-sm font-semibold font-display border-b-2 border-navy pb-0.5 hover:text-gold hover:border-gold transition-colors"
              >
                Ask us directly
                <ArrowIcon />
              </button>
            </div>

            <div className="divide-y divide-hairline border-t border-b border-hairline">
              {faqs.map((faq, i) => (
                <div key={i}>
                  <button
                    className="flex items-start justify-between w-full py-5 text-left gap-4 group"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    aria-expanded={openFaq === i}
                  >
                    <span className={`text-base font-semibold font-display transition-colors ${openFaq === i ? 'text-navy' : 'text-navy/80 group-hover:text-navy'}`}>
                      {faq.q}
                    </span>
                    <svg
                      viewBox="0 0 16 16"
                      className={`w-4 h-4 fill-dim shrink-0 mt-0.5 transition-transform duration-200 ${openFaq === i ? 'rotate-180 fill-gold' : ''}`}
                      aria-hidden="true"
                    >
                      <path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 01.753 1.659l-4.796 5.48a1 1 0 01-1.506 0z" />
                    </svg>
                  </button>
                  {openFaq === i && (
                    <div className="pb-5">
                      <p className="text-dim text-base font-body leading-relaxed">{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

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
            <span className="block text-gold text-sm sm:text-base font-bold font-display tracking-[0.12em] uppercase mb-3">
              Get in Touch
            </span>
          </div>

          <h2 className="text-white text-2xl lg:text-3xl xl:text-4xl font-bold font-display leading-tight mb-4 max-w-2xl mx-auto">
            Have a Transportation, Warehousing or Urgent Delivery Requirement?
          </h2>

          <p className="text-white/65 text-base font-body leading-relaxed mb-9 max-w-xl mx-auto">
            Tell us what you need to move, store or distribute and our team will review your requirements and respond promptly.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            <QuoteButton onClick={() => onNavigate('quote')} size="lg" />

            <button
              onClick={() => onNavigate('contact')}
              className="px-7 py-3.5 border border-white/28 bg-white/10 text-white text-sm font-medium font-body rounded-sm hover:bg-white/20 transition-colors"
            >
              Speak to Our Team
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