import { useState, useEffect, useRef } from 'react'
import type { Page } from '../types'

interface HomeProps {
  onNavigate: (page: Page) => void
}

const heroSlides = [
  {
    tag: 'Global Operations',
    headline: 'Moving Goods. Supporting Supply Chains. Growing Business.',
    subtext: 'Transportation, logistics, warehousing, distribution and commodity solutions for organisations connected to UK and international supply chains.',
    image: 'https://images.unsplash.com/photo-1724364552281-dbed323c4633?w=1920&h=1080&fit=crop&auto=format',
    alt: 'Aerial view of a large cargo vessel at sea',
  },
  {
    tag: 'Transportation',
    headline: 'Reliable Transportation Across the Supply Chain',
    subtext: 'Dependable movement of goods between ports, warehouses, facilities and destinations across the UK.',
    image: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=1920&h=1080&fit=crop&auto=format',
    alt: 'Fleet of logistics trucks prepared for transportation',
  },
  {
    tag: 'Warehousing',
    headline: 'Storage That Keeps Operations Moving',
    subtext: 'Flexible warehousing and storage solutions designed to support your supply chain continuity and operational requirements.',
    image: 'https://images.unsplash.com/photo-1766021736631-d2f15082aa59?w=1920&h=1080&fit=crop&auto=format',
    alt: 'Spacious modern industrial warehouse interior',
  },
  {
    tag: 'Commodity Trading',
    headline: 'Connecting Trade, Transportation and Supply',
    subtext: 'Integrated commodity trading capabilities combined with physical supply-chain execution — from source to final destination.',
    image: 'https://images.unsplash.com/photo-1763887487478-dba734cd204c?w=1920&h=1080&fit=crop&auto=format',
    alt: 'International shipyard with cranes and vessels at port',
  },
]

const services = [
  {
    title: 'Transportation & Inland Logistics',
    desc: 'Movement between ports, warehouses, facilities and destinations across the UK supply chain.',
    image: 'https://images.unsplash.com/photo-1551471698-c7787ff6b7ca?w=800&h=600&fit=crop&auto=format',
    alt: 'Logistics truck at speed on a bridge',
  },
  {
    title: 'Shipping & Freight',
    desc: 'Import and freight coordination across relevant routes and partners for your cargo requirements.',
    image: 'https://images.unsplash.com/photo-1724364552281-dbed323c4633?w=800&h=600&fit=crop&auto=format&q=65',
    alt: 'Cargo vessel underway at sea',
  },
  {
    title: 'Warehousing & Storage',
    desc: 'Flexible storage and inventory-support capabilities designed around operational continuity.',
    image: 'https://images.unsplash.com/photo-1782948603191-065fb15e2e8e?w=800&h=600&fit=crop&auto=format',
    alt: 'Warehouse aisle with tall shelving and stored goods',
  },
  {
    title: 'Distribution & Delivery',
    desc: 'Coordinated delivery to required destinations, integrated with warehousing and logistics operations.',
    image: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&h=600&fit=crop&auto=format&q=65',
    alt: 'Distribution fleet of trucks at depot',
  },
  {
    title: 'Supply Chain Solutions',
    desc: 'Integrated support across multiple stages of the supply chain from trade through to delivery.',
    image: 'https://images.unsplash.com/photo-1494412519320-aa613dfb7738?w=800&h=600&fit=crop&auto=format',
    alt: 'Aerial view of container yard and port',
  },
  {
    title: 'Commodity Trading',
    desc: 'Trade and supply capabilities connected to transportation and logistics for physical commodity movement.',
    image: 'https://images.unsplash.com/photo-1535379453347-1ffd615e2e08?w=800&h=600&fit=crop&auto=format',
    alt: 'Agricultural harvest and bulk commodity operations',
  },
]

const supplyChainSteps = [
  { num: '01', label: 'Source', desc: 'Origin of goods or commodities' },
  { num: '02', label: 'Trade / Import', desc: 'Commercial and import coordination' },
  { num: '03', label: 'Port / Terminal', desc: 'Port reception and handling' },
  { num: '04', label: 'Transportation', desc: 'Inland movement and transit' },
  { num: '05', label: 'Warehouse', desc: 'Storage and inventory support' },
  { num: '06', label: 'Distribution', desc: 'Coordinated delivery routing' },
  { num: '07', label: 'Delivery', desc: 'Final destination and handover' },
]

const valueProps = [
  { title: 'Reliable Operations', desc: 'Clear processes designed to support dependable movement across every stage of the supply chain.' },
  { title: 'Responsive Communication', desc: 'Direct, timely communication from initial enquiry through to operational execution and delivery.' },
  { title: 'Flexible Solutions', desc: 'Services adapted to your transportation, storage and distribution requirements — not a fixed template.' },
  { title: 'Connected Supply Chain', desc: 'One connected view across trade, transport, warehousing and delivery, reducing complexity and risk.' },
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

const faqs = [
  {
    q: 'What services do you provide?',
    a: 'We provide a connected range of services including transportation, shipping and freight coordination, import logistics, warehousing and storage, distribution and delivery, supply chain solutions, and commodity trading. Each service is designed to work individually or as part of an integrated supply-chain solution.',
  },
  {
    q: 'Do you provide inland transportation?',
    a: 'Yes. We provide inland transportation services connecting ports, terminals, warehouses, facilities and delivery destinations. Our team can discuss specific routes, collection points, delivery requirements and load specifications.',
  },
  {
    q: 'Do you provide warehousing?',
    a: 'Yes. We offer flexible warehousing and storage solutions for short-term and longer-duration storage requirements. Contact us to discuss your specific storage needs.',
  },
  {
    q: 'Can you support imported goods?',
    a: 'Yes. We support import logistics coordination, working with freight and shipping partners to facilitate the movement of imported goods through ports, terminals and onward to storage or final destination.',
  },
  {
    q: 'Do you provide distribution?',
    a: 'Yes. We provide coordinated distribution services supporting delivery to required destinations, integrated with our warehousing and logistics network. Our team can discuss delivery requirements, frequency and locations.',
  },
  {
    q: 'How do I request a quote?',
    a: 'Use our Request a Quote form to describe your requirements. Our team will review and respond promptly. You can also contact us directly by phone, email or WhatsApp for immediate assistance.',
  },
]

function SectionLabel({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <span className={`flex items-center gap-2 text-[11px] font-semibold tracking-[0.14em] uppercase font-display mb-4 ${light ? 'text-gold' : 'text-gold'}`}>
      <span className="w-6 h-px bg-gold shrink-0" />
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

export default function Home({ onNavigate }: HomeProps) {
  const [slide, setSlide] = useState(0)
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const pausedRef = useRef(false)

  useEffect(() => {
    const timer = setInterval(() => {
      if (!pausedRef.current) {
        setSlide((s) => (s + 1) % heroSlides.length)
      }
    }, 6500)
    return () => clearInterval(timer)
  }, [])

  return (
    <div>

      {/* ── HERO ────────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden"
        style={{ height: '100svh', minHeight: 600, maxHeight: 920 }}
        onMouseEnter={() => { pausedRef.current = true }}
        onMouseLeave={() => { pausedRef.current = false }}
        aria-label="Homepage feature slideshow"
      >
        {heroSlides.map((s, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-1000 ${i === slide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
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
              style={{ background: 'linear-gradient(to top, rgba(12,37,69,0.82) 0%, rgba(12,37,69,0.40) 42%, rgba(12,37,69,0.08) 100%)' }}
            />
          </div>
        ))}

        {/* Nav height spacer */}
        <div className="h-[72px]" />

        {/* Content */}
        <div className="relative z-20 h-[calc(100%-72px)] flex flex-col justify-end">
          <div className="max-w-[1320px] mx-auto px-5 lg:px-10 w-full pb-16 lg:pb-20">
            <SectionLabel light>{heroSlides[slide].tag}</SectionLabel>

            <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl xl:text-[68px] font-bold font-display leading-[1.08] max-w-[780px] mb-6">
              {heroSlides[slide].headline}
            </h1>

            <p className="text-white/72 text-base sm:text-lg max-w-[540px] font-body leading-relaxed mb-10">
              {heroSlides[slide].subtext}
            </p>

            <div className="flex flex-wrap gap-3 mb-12">
              <button
                onClick={() => onNavigate('quote')}
                className="px-7 py-3.5 bg-gold text-white text-sm font-bold font-display rounded-sm hover:bg-gold-light transition-colors shadow-lg shadow-navy/20"
              >
                Request a Quote
              </button>
              <button
                onClick={() => onNavigate('services')}
                className="px-7 py-3.5 border border-white/35 text-white text-sm font-medium font-body rounded-sm hover:bg-white/10 transition-colors"
              >
                Explore Services & Solutions
              </button>
            </div>

            {/* Slide indicators */}
            <div className="flex items-center gap-3" role="tablist" aria-label="Slideshow navigation">
              {heroSlides.map((_, i) => (
                <button
                  key={i}
                  role="tab"
                  aria-selected={i === slide}
                  aria-label={`Slide ${i + 1}`}
                  onClick={() => setSlide(i)}
                  className={`h-[2px] rounded-full transition-all duration-300 ${
                    i === slide ? 'w-8 bg-gold' : 'w-3 bg-white/30 hover:bg-white/55'
                  }`}
                />
              ))}

              {/* Prev / Next */}
              <div className="ml-4 flex items-center gap-2">
                <button
                  onClick={() => setSlide((s) => (s - 1 + heroSlides.length) % heroSlides.length)}
                  className="w-8 h-8 border border-white/25 rounded-full flex items-center justify-center text-white hover:bg-white/10 transition-colors"
                  aria-label="Previous slide"
                >
                  <svg viewBox="0 0 16 16" className="w-3.5 h-3.5 fill-current" aria-hidden="true">
                    <path d="M15 8a.5.5 0 00-.5-.5H2.707l3.147-3.146a.5.5 0 10-.708-.708l-4 4a.5.5 0 000 .708l4 4a.5.5 0 00.708-.708L2.707 8.5H14.5A.5.5 0 0015 8z" />
                  </svg>
                </button>
                <button
                  onClick={() => setSlide((s) => (s + 1) % heroSlides.length)}
                  className="w-8 h-8 border border-white/25 rounded-full flex items-center justify-center text-white hover:bg-white/10 transition-colors"
                  aria-label="Next slide"
                >
                  <svg viewBox="0 0 16 16" className="w-3.5 h-3.5 fill-current" aria-hidden="true">
                    <path d="M1 8a.5.5 0 01.5-.5h11.793l-3.147-3.146a.5.5 0 01.708-.708l4 4a.5.5 0 010 .708l-4 4a.5.5 0 01-.708-.708L13.293 8.5H1.5A.5.5 0 011 8z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CAPABILITY STRIP ──────────────────────────────────────────── */}
      <section className="bg-navy">
        <div className="max-w-[1320px] mx-auto px-5 lg:px-10">
          <div className="flex flex-wrap items-center justify-center py-4">
            {['Transportation', 'Shipping & Freight', 'Warehousing', 'Distribution', 'Supply Chain', 'Commodity Trading'].map((cap, i, arr) => (
              <div key={cap} className="flex items-center">
                <span className="px-4 py-2 text-white/65 text-xs sm:text-sm font-medium font-display tracking-wide hover:text-white transition-colors cursor-default whitespace-nowrap">
                  {cap}
                </span>
                {i < arr.length - 1 && <span className="w-px h-3.5 bg-white/12 shrink-0" />}
              </div>
            ))}
          </div>
          <p className="text-center text-white/28 text-[10px] font-body tracking-[0.12em] uppercase pb-3">
            Built around reliability, responsiveness and operational continuity
          </p>
        </div>
      </section>

      {/* ── SERVICES & SOLUTIONS ──────────────────────────────────────── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-[1320px] mx-auto px-5 lg:px-10">
          <div className="max-w-2xl mb-14">
            <SectionLabel>Services & Solutions</SectionLabel>
            <h2 className="text-navy text-3xl lg:text-4xl font-bold font-display mb-4">Our Services & Solutions</h2>
            <p className="text-dim text-base lg:text-lg font-body leading-relaxed">
              Connected capabilities designed to support the movement, storage and distribution of goods across the supply chain.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((svc) => (
              <button
                key={svc.title}
                onClick={() => onNavigate('services')}
                className="group relative overflow-hidden rounded-sm text-left"
                style={{ aspectRatio: '4/3' }}
              >
                <img
                  src={svc.image}
                  alt={svc.alt}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/25 to-transparent" />
                <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/12 transition-colors duration-300" />

                {/* Corner tag */}
                <div className="absolute top-4 left-4">
                  <span className="text-white/50 text-[10px] font-display tracking-[0.14em] uppercase">
                    {svc.title.split(' ')[0]}
                  </span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="text-white text-[15px] font-semibold font-display mb-1.5 leading-snug">{svc.title}</h3>
                  <p className="text-white/60 text-xs font-body leading-relaxed mb-3">{svc.desc}</p>
                  <div className="flex items-center gap-1.5 text-gold text-xs font-semibold font-display opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    Learn more <ArrowIcon />
                  </div>
                </div>
              </button>
            ))}
          </div>

          <div className="mt-11 text-center">
            <button
              onClick={() => onNavigate('services')}
              className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-navy text-navy text-sm font-semibold font-display rounded-sm hover:bg-navy hover:text-white transition-all duration-200"
            >
              Explore All Services & Solutions
              <ArrowIcon />
            </button>
          </div>
        </div>
      </section>

      {/* ── END-TO-END SUPPLY CHAIN ───────────────────────────────────── */}
      <section className="bg-linen py-20 lg:py-28">
        <div className="max-w-[1320px] mx-auto px-5 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <SectionLabel>Supply Chain</SectionLabel>
            <h2 className="text-navy text-3xl lg:text-4xl font-bold font-display mb-4">From Source to Final Destination</h2>
            <p className="text-dim text-base lg:text-lg font-body leading-relaxed">
              We support organisations across the connected stages of the supply chain — from origin and trade, through port and transport, to warehousing, distribution and final delivery.
            </p>
          </div>

          <div className="relative">
            {/* Horizontal connector line (desktop) */}
            <div className="hidden lg:block absolute top-8 left-[calc(100%/14)] right-[calc(100%/14)] h-px bg-hairline" style={{ zIndex: 0 }} />

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-y-8 gap-x-4 relative z-10">
              {supplyChainSteps.map((step, i) => (
                <div key={step.label} className="flex flex-col items-center text-center">
                  <div className={`w-16 h-16 rounded-full flex flex-col items-center justify-center mb-4 border-2 transition-colors ${
                    i === 3
                      ? 'bg-navy border-navy'
                      : 'bg-white border-hairline hover:border-navy/25'
                  }`}>
                    <span className={`text-xs font-bold font-display leading-none ${i === 3 ? 'text-gold' : 'text-dim'}`}>{step.num}</span>
                  </div>
                  <h3 className="text-navy text-sm font-semibold font-display mb-1">{step.label}</h3>
                  <p className="text-dim text-xs font-body leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-14 text-center">
            <button
              onClick={() => onNavigate('quote')}
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-navy text-white text-sm font-semibold font-display rounded-sm hover:bg-navy-mid transition-colors"
            >
              Discuss Your Requirements
              <ArrowIcon />
            </button>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ─────────────────────────────────────────────── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-[1320px] mx-auto px-5 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Image */}
            <div className="relative rounded-sm overflow-hidden bg-linen" style={{ aspectRatio: '4/3', minHeight: 320 }}>
              <img
                src="https://images.unsplash.com/photo-1772305336606-989a457ffbae?w=900&h=700&fit=crop&auto=format"
                alt="Premium logistics warehouse with polished concrete floor"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute bottom-5 left-5 bg-navy/92 text-white px-5 py-3.5 rounded-sm backdrop-blur-sm">
                <p className="text-[10px] text-white/45 font-body tracking-[0.12em] uppercase mb-0.5">Operating Since</p>
                <p className="text-2xl font-bold font-display text-gold-light">Est. [YEAR]</p>
              </div>
            </div>

            {/* Content */}
            <div>
              <SectionLabel>Why Choose Us</SectionLabel>
              <h2 className="text-navy text-3xl lg:text-4xl font-bold font-display mb-5">
                Your Shipping & Logistics Needs, Connected
              </h2>
              <p className="text-dim text-base font-body leading-relaxed mb-10">
                We combine operational knowledge with direct service delivery — connecting trade, transportation, warehousing and distribution into a coherent, responsive solution.
              </p>

              <div className="space-y-7">
                {valueProps.map((vp) => (
                  <div key={vp.title} className="flex gap-4">
                    <div className="w-[2px] bg-gold shrink-0 mt-1 rounded-full" />
                    <div>
                      <h3 className="text-navy text-sm font-semibold font-display mb-1.5">{vp.title}</h3>
                      <p className="text-dim text-sm font-body leading-relaxed">{vp.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap gap-3">
                <button
                  onClick={() => onNavigate('quote')}
                  className="px-6 py-3 bg-navy text-white text-sm font-semibold font-display rounded-sm hover:bg-navy-mid transition-colors"
                >
                  Request a Quote
                </button>
                <button
                  onClick={() => onNavigate('about')}
                  className="px-6 py-3 border border-hairline text-navy text-sm font-medium font-body rounded-sm hover:bg-linen transition-colors"
                >
                  About Our Company
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ────────────────────────────────────────────────── */}
      <section className="bg-linen py-20 lg:py-28">
        <div className="max-w-[1320px] mx-auto px-5 lg:px-10">
          <div className="max-w-2xl mb-14">
            <SectionLabel>Industries</SectionLabel>
            <h2 className="text-navy text-3xl lg:text-4xl font-bold font-display mb-4">
              Supporting Organisations Across Critical Supply Chains
            </h2>
            <p className="text-dim text-base lg:text-lg font-body leading-relaxed">
              We serve organisations with exacting supply-chain requirements, where reliability, accountability and operational discipline are essential.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {industries.map((ind) => (
              <button
                key={ind.label}
                onClick={() => onNavigate('industries')}
                className="group relative overflow-hidden rounded-sm text-left"
                style={{ aspectRatio: '16/9' }}
              >
                <img
                  src={ind.image}
                  alt={ind.alt}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/82 via-navy/22 to-transparent" />

                <div className="absolute top-5 right-5">
                  <div className="w-8 h-8 bg-white/12 group-hover:bg-gold/85 rounded-full flex items-center justify-center transition-colors duration-200">
                    <ArrowIcon />
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="inline-block text-gold text-[11px] font-semibold tracking-[0.13em] uppercase font-display mb-2">{ind.label}</span>
                  <p className="text-white/68 text-sm font-body leading-relaxed">{ind.desc}</p>
                </div>
              </button>
            ))}
          </div>

          <div className="mt-10">
            <button
              onClick={() => onNavigate('industries')}
              className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-navy text-navy text-sm font-semibold font-display rounded-sm hover:bg-navy hover:text-white transition-all duration-200"
            >
              View All Industries
              <ArrowIcon />
            </button>
          </div>
        </div>
      </section>

      {/* ── COMMODITY TRADING ─────────────────────────────────────────── */}
      <section className="bg-navy py-20 lg:py-28 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1499529112087-3cb3b73cec95?w=1920&h=800&fit=crop&auto=format)', backgroundSize: 'cover', backgroundPosition: 'center' }}
          aria-hidden="true"
        />
        <div className="max-w-[1320px] mx-auto px-5 lg:px-10 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            <div>
              <SectionLabel light>Commodity Trading</SectionLabel>
              <h2 className="text-white text-3xl lg:text-4xl font-bold font-display mb-5">
                Connecting Trade, Transportation and Supply
              </h2>
              <p className="text-white/55 text-base font-body leading-relaxed mb-8">
                Our commodity trading capability sits alongside our physical supply-chain operations — connecting the sourcing, trade and movement of goods into a coordinated commercial and logistics solution.
              </p>

              {/* Flow */}
              <div className="flex flex-wrap items-center gap-2.5 mb-8">
                {['Source', 'Trade', 'Transport', 'Store', 'Distribute'].map((step, i) => (
                  <div key={step} className="flex items-center gap-2.5">
                    <div className="px-4 py-2 border border-white/15 rounded-sm hover:border-gold/40 transition-colors">
                      <span className="text-white/78 text-sm font-medium font-display">{step}</span>
                    </div>
                    {i < 4 && (
                      <svg viewBox="0 0 16 16" className="w-3 h-3 fill-gold/70 shrink-0" aria-hidden="true">
                        <path d="M1 8a.5.5 0 01.5-.5h11.793l-3.147-3.146a.5.5 0 01.708-.708l4 4a.5.5 0 010 .708l-4 4a.5.5 0 01-.708-.708L13.293 8.5H1.5A.5.5 0 011 8z" />
                      </svg>
                    )}
                  </div>
                ))}
              </div>

              <p className="text-white/30 text-xs font-body mb-8 italic">
                [COMMODITY CATEGORIES] — Contact us to discuss your specific commodity trading and logistics requirements.
              </p>

              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => onNavigate('services')}
                  className="px-6 py-3 bg-gold text-white text-sm font-semibold font-display rounded-sm hover:bg-gold-light transition-colors"
                >
                  Explore Trading Services
                </button>
                <button
                  onClick={() => onNavigate('contact')}
                  className="px-6 py-3 border border-white/20 text-white text-sm font-medium font-body rounded-sm hover:bg-white/8 transition-colors"
                >
                  Speak to Our Team
                </button>
              </div>
            </div>

            <div className="relative rounded-sm overflow-hidden bg-navy-mid" style={{ aspectRatio: '4/3' }}>
              <img
                src="https://images.unsplash.com/photo-1535379453347-1ffd615e2e08?w=800&h=600&fit=crop&auto=format"
                alt="Agricultural commodity harvest and bulk operations"
                className="w-full h-full object-cover opacity-65"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/55 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* ── STATISTICS / TRUST ────────────────────────────────────────── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-[1320px] mx-auto px-5 lg:px-10">

          <div className="text-center max-w-xl mx-auto mb-14">
            <SectionLabel>Our Experience</SectionLabel>
            <h2 className="text-navy text-3xl lg:text-4xl font-bold font-display mb-4">
              Experience Built Around Reliability
            </h2>
            <p className="text-dim text-base font-body leading-relaxed">
              Our track record across transportation, logistics, warehousing and commodity trading reflects the requirements of the organisations we work with.
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

          {/* Credentials */}
          <div className="border-t border-hairline pt-10">
            <p className="text-center text-dim text-[10px] font-body tracking-[0.13em] uppercase mb-6">Accreditations & Credentials</p>
            <div className="flex flex-wrap justify-center gap-3">
              {['[VERIFIED CERTIFICATION]', '[VERIFIED CERTIFICATION]', '[VERIFIED MEMBERSHIP]', '[VERIFIED ACCREDITATION]'].map((cert) => (
                <div key={cert} className="px-5 py-2.5 border border-hairline rounded-sm text-dim text-xs font-body hover:border-navy/20 transition-colors">
                  {cert}
                </div>
              ))}
            </div>
          </div>

          {/* Testimonial */}
          <div className="mt-12 max-w-2xl mx-auto p-8 bg-linen rounded-sm border border-hairline text-center">
            <svg viewBox="0 0 24 24" className="w-7 h-7 fill-gold/25 mx-auto mb-4" aria-hidden="true">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <p className="text-navy text-base font-body leading-relaxed italic mb-5">[VERIFIED CLIENT TESTIMONIAL]</p>
            <div className="text-dim text-[11px] font-display tracking-[0.1em] uppercase">[CLIENT NAME] · [CLIENT ORGANISATION]</div>
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────── */}
      <section className="bg-linen py-20 lg:py-28">
        <div className="max-w-[1320px] mx-auto px-5 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-12 lg:gap-16">

            <div>
              <SectionLabel>FAQ</SectionLabel>
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
                    <span className={`text-sm font-semibold font-display transition-colors ${openFaq === i ? 'text-navy' : 'text-navy/80 group-hover:text-navy'}`}>
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
                      <p className="text-dim text-sm font-body leading-relaxed">{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ─────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-navy py-24 lg:py-32">
        <img
          src="https://images.unsplash.com/photo-1641176716788-d4816a66dc6d?w=1920&h=700&fit=crop&auto=format"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(105deg, rgba(12,37,69,0.96) 0%, rgba(12,37,69,0.75) 55%, rgba(12,37,69,0.45) 100%)' }}
        />

        <div className="max-w-[1320px] mx-auto px-5 lg:px-10 relative">
          <div className="max-w-[640px]">
            <SectionLabel light>Get in Touch</SectionLabel>
            <h2 className="text-white text-3xl lg:text-4xl xl:text-5xl font-bold font-display leading-tight mb-5">
              Have a Transportation, Logistics or Trading Requirement?
            </h2>
            <p className="text-white/60 text-base lg:text-lg font-body leading-relaxed mb-10">
              Tell us what you need to move, store, distribute or source and our team will review your requirements and respond promptly.
            </p>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => onNavigate('quote')}
                className="px-8 py-3.5 bg-gold text-white text-sm font-bold font-display rounded-sm hover:bg-gold-light transition-colors shadow-lg"
              >
                Request a Quote
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="px-7 py-3.5 border border-white/28 text-white text-sm font-medium font-body rounded-sm hover:bg-white/8 transition-colors"
              >
                Speak to Our Team
              </button>
              <a
                href="https://wa.me/[WHATSAPP_NUMBER]"
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 flex items-center gap-2 border border-white/28 text-white text-sm font-medium font-body rounded-sm hover:bg-white/8 transition-colors"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
