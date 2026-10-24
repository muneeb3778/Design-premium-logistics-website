// src/pages/Home.jsx
import { useState, useEffect } from 'react'
import { waLink } from '../constants'
import CtaSection from '../components/CtaSection'
import solutionsHeroImg from '../assets/client/solutions_hero.jpg'
import transportationImg from '../assets/client/transportation.jpg'
import importsFreightImg from '../assets/client/imports_freight.jpg'
import healthcareImg from '../assets/client/healthcare.jpg'
import artsFilmImg from '../assets/client/arts_film_studios.jpg'
import publicSectorImg from '../assets/client/public_sector.jpg'
import defenceImg from '../assets/client/defence.jpg'
import industrialImg from '../assets/client/industrial.jpg'
import logoWhite from '../assets/logo-white.png'
import f1Logo from '../assets/partners/f1.svg'
import alpineLogo from '../assets/partners/alpine.svg'
import modLogo from '../assets/partners/mod.svg'
import ukaeaLogo from '../assets/partners/ukaea.svg'
import nhsLogo from '../assets/partners/nhs.svg'
import boeingLogo from '../assets/partners/boeing.svg'
import heathrowLogo from '../assets/partners/heathrow.svg'
import gatwickLogo from '../assets/partners/gatwick.svg'
import hsbcLogo from '../assets/partners/hsbc.svg'
import fedexLogo from '../assets/partners/fedex.svg'
import warnerbrosLogo from '../assets/partners/warnerbros.svg'
import kodakLogo from '../assets/partners/kodak.svg'
import companieshouseLogo from '../assets/partners/companieshouse.svg'
import mitieLogo from '../assets/partners/mitie.svg'

/*
  Hero slideshow data
*/
const heroSlides = [
  {
    tag: 'Moz Midlands Logistics',
    headline: 'Coordinated Logistics. Reliable Delivery.',
    subtext: 'From time-sensitive transport to warehousing and distribution, Moz Midlands provides practical logistics solutions designed around modern businesses.',
    image: solutionsHeroImg,
    alt: 'Moz Midlands logistics depot and vehicle fleet',
  },
  {
    tag: 'Transportation',
    headline: 'Moving Your Business Forward, Around the Clock.',
    subtext: 'When your business depends on a delivery, every minute matters. Practical collection and delivery solutions across the UK.',
    image: transportationImg,
    alt: 'Moz Midlands dedicated transport solutions',
  },
  {
    tag: 'Warehousing',
    headline: 'Storage That Keeps Operations Moving.',
    subtext: 'Flexible warehousing and secure storage for supply chain continuity.',
    image: 'https://images.unsplash.com/photo-1766021736631-d2f15082aa59?w=1920&h=1080&fit=crop&auto=format',
    alt: 'Spacious modern industrial warehouse interior',
  },
  {
    tag: 'Imports & Freight',
    headline: 'Connecting Your Cargo to Its Destination.',
    subtext: 'Air and sea freight transport support, container loading and devanning from port to delivery.',
    image: importsFreightImg,
    alt: 'Air and sea freight cargo operations and container loading',
  },
]

const services = [
  {
    title: 'Transportation',
    desc: 'Moving your business forward with planned, urgent and same-day collection and delivery solutions across the UK.',
    image: transportationImg,
    alt: 'Logistics transport vehicle preparing for delivery',
  },
  {
    title: 'Critical & Last-Minute Deliveries',
    desc: 'Rapid-response, dedicated urgent freight and time-critical transport when schedules are non-negotiable.',
    image: 'https://images.unsplash.com/photo-1616401784845-180882ba9ba8?w=800&h=600&fit=crop&auto=format',
    alt: 'Dedicated priority courier vehicle on rapid delivery route',
  },
  {
    title: 'Imports & Freight',
    desc: 'Air & sea freight coordination, container loading & de-vanning, and import cargo collection to final destinations.',
    image: importsFreightImg,
    alt: 'Import cargo handling and freight transport',
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
  { title: 'Reliable Coordination', desc: 'We bring together transport, handling and storage support to keep your operations running smoothly.' },
  { title: 'Clear Communication', desc: 'Direct, timely communication and careful coordination from initial booking to delivery.' },
  { title: 'Tailored Solutions', desc: 'Practical collection and delivery solutions structured around your cargo and business schedule.' },
  { title: 'Dedicated Commitment', desc: 'Your goods. Your deadlines. Our commitment — delivering a professional customer experience.' },
  { title: 'Accountable Service', desc: 'Clear ownership and named contacts from enquiry through to completion, with measurable commitments.' },
]

const industries = [
  {
    label: 'Healthcare',
    desc: 'Supporting the movement of healthcare goods, approved medical supplies, NHS facilities and pharma deliveries.',
    image: healthcareImg,
    alt: 'Healthcare and medical goods logistics',
  },
  {
    label: 'Arts & Film Studios',
    desc: 'Logistics for creative productions, soundstages, film equipment, materials, props and demanding shoot schedules.',
    image: artsFilmImg,
    alt: 'Film studio and creative production equipment transport',
  },
  {
    label: 'Public Sector',
    desc: 'Dependable transport solutions supporting public sector supply chains, facilities, and essential services.',
    image: publicSectorImg,
    alt: 'Public sector supply chain support',
  },
  {
    label: 'Defence-Related',
    desc: 'Professional transport and disciplined logistics support for approved commercial and defence supply chains.',
    image: defenceImg,
    alt: 'Defence-related and engineering logistics support',
  },
  {
    label: 'Commercial & Industrial',
    desc: 'Transport solutions for industrial components, engineering machinery, site deliveries and commercial cargo.',
    image: industrialImg,
    alt: 'Industrial and commercial transport solutions',
  },
]

/*
  Clients & Enterprise Partners Data (Official Brand Logos Collage)
*/
const collageItems = [
  // Row 1 (5 logos across)
  { id: 'f1', name: 'Formula 1®', sector: 'Motorsport Logistics', logo: f1Logo, h: 'h-7 sm:h-8' },
  { id: 'boeing', name: 'Boeing', sector: 'Aerospace & Defence', logo: boeingLogo, h: 'h-6 sm:h-7' },
  { id: 'hsbc', name: 'HSBC', sector: 'Financial Services', logo: hsbcLogo, h: 'h-6 sm:h-7' },
  { id: 'fedex', name: 'FedEx Express', sector: 'Global Freight', logo: fedexLogo, h: 'h-7 sm:h-8' },
  { id: 'heathrow', name: 'Heathrow Airport', sector: 'Aviation Cargo Hub', logo: heathrowLogo, h: 'h-6 sm:h-7' },

  // Row 2 Left (2 logos)
  { id: 'nhs', name: 'NHS Trust', sector: 'Healthcare Logistics', logo: nhsLogo, h: 'h-7 sm:h-8' },
  { id: 'mod', name: 'Ministry of Defence', sector: 'UK Defence Logistics', logo: modLogo, h: 'h-8 sm:h-9' },

  // Row 2 Center: Moz Midlands Focal Brand Badge
  { type: 'center' },

  // Row 2 Right (2 logos)
  { id: 'alpine', name: 'Alpine UK', sector: 'Motorsport Division', logo: alpineLogo, h: 'h-8 sm:h-9' },
  { id: 'ukaea', name: 'Atomic Energy UK', sector: 'Nuclear & Research', logo: ukaeaLogo, h: 'h-9 sm:h-10' },

  // Row 3 (5 logos across)
  { id: 'gatwick', name: 'Gatwick Airport', sector: 'Airport Cargo Hub', logo: gatwickLogo, h: 'h-6 sm:h-7' },
  { id: 'warnerbros', name: 'Warner Bros. Studios', sector: 'Film & Media Studios', logo: warnerbrosLogo, h: 'h-8 sm:h-9' },
  { id: 'kodak', name: 'Kodak Studios', sector: 'Studio Logistics', logo: kodakLogo, h: 'h-8 sm:h-9' },
  { id: 'companieshouse', name: 'Companies House', sector: 'UK Executive Agency', logo: companieshouseLogo, h: 'h-7 sm:h-8' },
  { id: 'mitie', name: 'Mitie UK', sector: 'Facilities & Security', logo: mitieLogo, h: 'h-6 sm:h-7' },
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
    <span className="block text-gold text-sm sm:text-base font-bold font-display tracking-[0.14em] uppercase mb-4">
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
  const padding = size === 'lg' ? 'px-6 py-3.5' : 'px-6 py-3'
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center justify-center ${padding} text-navy text-sm font-bold font-display rounded-sm transition-all shadow-md hover:shadow-lg ${className}`}
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

  return (
    <div>

      {/* ── HERO ────────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden"
        style={{ height: '74vh', minHeight: 580, maxHeight: 800 }}
        aria-label="Homepage feature slideshow"
      >
        {heroSlides.map((s, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-1000 ${i === slide ? 'opacity-100 z-0' : 'opacity-0 z-0'}`}
            aria-hidden={i !== slide}
          >
            {/* Crisp hero image */}
            <img
              src={s.image}
              alt={s.alt}
              className="absolute inset-0 w-full h-full object-cover"
              loading={i === 0 ? 'eager' : 'lazy'}
            />
            {/* Slightly dark tinted overlay for optimal text clarity */}
            <div
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(to top, rgba(12,37,69,0.65) 0%, rgba(12,37,69,0.45) 50%, rgba(12,37,69,0.28) 100%)',
              }}
            />
          </div>
        ))}

        <div className="relative z-20 h-full flex flex-col">
          <div className="h-[72px] shrink-0" />

          {/* Centered text container */}
          <div className="flex-1 flex flex-col justify-center">
            <div className="max-w-[1320px] mx-auto px-5 lg:px-10 w-full">
              <div className="max-w-full sm:max-w-[82%] lg:max-w-[65%] xl:max-w-[60%]">
                <HeroLabel>{heroSlides[slide].tag}</HeroLabel>

                <h1 className="text-white text-2xl sm:text-3xl lg:text-4xl xl:text-[44px] font-bold font-display leading-[1.2] mb-4">
                  {heroSlides[slide].headline}
                </h1>

                <p className="text-white/90 text-base sm:text-lg font-body leading-relaxed max-w-2xl">
                  {heroSlides[slide].subtext}
                </p>
              </div>
            </div>
          </div>

          {/* Slide navigation dots */}
          <div className="shrink-0 pb-7 pt-2">
            <div className="max-w-[1320px] mx-auto px-5 lg:px-10">
              <div className="flex justify-center" role="tablist" aria-label="Slideshow navigation">
                <div
                  className="flex items-center gap-2.5"
                  style={{ filter: 'drop-shadow(0 1px 3px rgba(0,0,0,0.65))' }}
                >
                  {heroSlides.map((_, i) => (
                    <button
                      key={i}
                      role="tab"
                      aria-selected={i === slide}
                      aria-label={`Slide ${i + 1}`}
                      onClick={() => setSlide(i)}
                      className={`rounded-full transition-all duration-300 ${
                        i === slide ? 'w-2.5 h-2.5 bg-gold' : 'w-2 h-2 bg-white/50 hover:bg-white/80'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── SERVICES & SOLUTIONS ──────────────────────────────────────── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-[1320px] mx-auto px-5 lg:px-10">
          <div className="max-w-2xl mb-14">
            <span className="block text-[#dfbd51] text-sm sm:text-base font-bold font-display tracking-[0.14em] uppercase mb-3">
              Our Solutions &amp; Services
            </span>
            <h2 className="text-navy text-3xl lg:text-4xl font-bold font-display mb-4">Coordinated Supply Chain Capabilities</h2>
            <p className="text-dim text-base lg:text-lg font-body leading-relaxed">
              From time-sensitive transport to warehousing and distribution, Moz Midlands provides practical logistics solutions designed around the needs of modern businesses.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {services.map((svc) => (
              <button
                key={svc.title}
                onClick={() => onNavigate('services')}
                className="group relative overflow-hidden rounded-md text-left shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc((100%-48px)/3)] shadow-[0_4px_20px_rgba(12,37,69,0.08)] hover:shadow-[0_14px_32px_rgba(12,37,69,0.2)] hover:-translate-y-1 transition-all duration-300 border border-slate-100"
                style={{ aspectRatio: '16/10' }}
              >
                <img
                  src={svc.image}
                  alt={svc.alt}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                  loading="lazy"
                />
                {/* Multi-stage atmospheric gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy/95 via-navy/45 to-navy/15 group-hover:via-navy/55 transition-colors duration-300" />

                {/* Top-right action arrow badge */}
                <div className="absolute top-4 right-4">
                  <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md border border-white/25 group-hover:bg-gold group-hover:border-gold group-hover:text-navy text-white flex items-center justify-center transition-all duration-300 shadow-sm group-hover:scale-110">
                    <ArrowIcon />
                  </div>
                </div>

                {/* Bottom title block with accent bar */}
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-7">
                  <div className="w-7 h-[2.5px] bg-gold rounded-full mb-2.5 group-hover:w-11 transition-all duration-300" />
                  <h3 className="text-lg sm:text-xl font-semibold font-display text-white group-hover:text-gold transition-colors duration-300 leading-snug">
                    {svc.title}
                  </h3>
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
              Moving Your Business Forward
            </h2>
            <p className="text-dim text-base lg:text-lg font-body leading-relaxed">
              Every business has different logistics requirements. Whether you need an urgent delivery, support with imported goods, secure storage or an organised distribution solution, Moz Midlands is here to help you move goods efficiently and with confidence.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 lg:gap-x-14">
            {/* Left Column: Image whose height exactly matches the valueProps list */}
            <div className="relative rounded-sm overflow-hidden bg-linen min-h-[360px] sm:min-h-[440px] lg:min-h-0 h-full">
              <img
                src={solutionsHeroImg}
                alt="Moz Midlands operations and transport fleet"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 bg-navy/95 text-white px-5 py-3.5 rounded-sm backdrop-blur-sm border border-white/10 shadow-lg">
                <p className="text-[10px] text-white/50 font-body tracking-[0.12em] uppercase mb-0.5">Operating Since</p>
                <p className="text-2xl font-bold font-display text-gold-light">Est. [YEAR]</p>
              </div>
            </div>

            {/* Right Column: Value Props list (from Reliable Coordination to Accountable Service) */}
            <div className="space-y-6 lg:space-y-7 mt-8 lg:mt-0">
              {valueProps.map((vp) => (
                <div key={vp.title} className="flex gap-4 group">
                  <div className="w-[3px] bg-gold/70 group-hover:bg-gold shrink-0 mt-1 rounded-full transition-colors duration-200" />
                  <div>
                    <h3 className="text-navy text-lg font-bold font-display mb-1.5">{vp.title}</h3>
                    <p className="text-dim text-base font-body leading-relaxed">{vp.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Row 2: Empty cell on left */}
            <div className="hidden lg:block" aria-hidden="true" />

            {/* Row 2: Divider line and button placed directly below the Value Props */}
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
      </section>

      {/* ── INDUSTRIES ────────────────────────────────────────────────── */}
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

          <div className="flex flex-wrap justify-center gap-6">
            {industries.map((ind) => (
              <button
                key={ind.label}
                onClick={() => onNavigate('industries')}
                className="group relative overflow-hidden rounded-md text-left shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc((100%-48px)/3)] shadow-[0_4px_20px_rgba(12,37,69,0.08)] hover:shadow-[0_14px_32px_rgba(12,37,69,0.2)] hover:-translate-y-1 transition-all duration-300 border border-slate-100"
                style={{ aspectRatio: '16/10' }}
              >
                <img
                  src={ind.image}
                  alt={ind.alt}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                  loading="lazy"
                />
                {/* Multi-stage atmospheric gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy/95 via-navy/45 to-navy/15 group-hover:via-navy/55 transition-colors duration-300" />

                {/* Top-right action arrow badge */}
                <div className="absolute top-4 right-4">
                  <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md border border-white/25 group-hover:bg-gold group-hover:border-gold group-hover:text-navy text-white flex items-center justify-center transition-all duration-300 shadow-sm group-hover:scale-110">
                    <ArrowIcon />
                  </div>
                </div>

                {/* Bottom title block with accent bar */}
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-7">
                  <div className="w-7 h-[2.5px] bg-gold rounded-full mb-2.5 group-hover:w-11 transition-all duration-300" />
                  <h3 className="text-lg sm:text-xl font-semibold font-display text-white group-hover:text-gold transition-colors duration-300 leading-snug">
                    {ind.label}
                  </h3>
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

      {/* ── STATISTICS / TRUST (OUR EXPERIENCE) ───────────────────────── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-[1320px] mx-auto px-5 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="block text-gold text-sm sm:text-base font-bold font-display tracking-[0.12em] uppercase mb-3">
              Our Experience
            </span>
            <h2 className="text-navy text-3xl lg:text-4xl font-bold font-display mb-4">
              Experience Built Around Reliability
            </h2>
            <p className="text-dim text-base lg:text-lg font-body leading-relaxed">
              Our track record across transportation, warehousing, imports and distribution reflects the requirements of the organisations we work with.
            </p>
          </div>

          {/* Cards with prominent font sizing and balanced padding */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { value: 'XX+', label: 'Years Experience', sub: 'Serving UK supply chains' },
              { value: 'XX+', label: 'Shipments & Deliveries', sub: '[VERIFIED STATISTIC]' },
              { value: 'XX+', label: 'Customers Supported', sub: '[VERIFIED STATISTIC]' },
              { value: 'XX', label: 'Service Categories', sub: 'Connected capabilities' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="text-center p-7 sm:p-8 border border-hairline rounded-sm hover:border-navy/30 hover:shadow-md transition-all duration-300 group flex flex-col justify-center bg-white"
              >
                <div className="text-5xl sm:text-6xl font-bold font-display text-gold mb-3 group-hover:text-gold-light transition-colors">
                  {stat.value}
                </div>
                <div className="text-navy text-lg sm:text-xl font-bold font-display mb-2 leading-tight">
                  {stat.label}
                </div>
                <div className="text-dim text-sm sm:text-base font-body leading-relaxed">
                  {stat.sub}
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-hairline pt-12">
            <p className="text-center text-dim text-xs sm:text-sm font-body tracking-[0.15em] uppercase font-semibold mb-6">
              Accreditations &amp; Credentials
            </p>
            <div className="flex flex-wrap justify-center gap-3.5">
              {['[VERIFIED CERTIFICATION]', '[VERIFIED CERTIFICATION]', '[VERIFIED MEMBERSHIP]', '[VERIFIED ACCREDITATION]'].map((cert, index) => (
                <div key={`${cert}-${index}`} className="px-6 py-3 border border-hairline rounded-sm text-dim text-sm sm:text-base font-medium font-body hover:border-navy/30 hover:text-navy transition-colors">
                  {cert}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-14 max-w-2xl mx-auto p-8 sm:p-10 bg-linen rounded-sm border border-hairline text-center">
            <svg viewBox="0 0 24 24" className="w-8 h-8 fill-gold/35 mx-auto mb-4" aria-hidden="true">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <p className="text-navy text-lg sm:text-xl font-body leading-relaxed italic mb-5">
              "[VERIFIED CLIENT TESTIMONIAL]"
            </p>
            <div className="text-dim text-xs sm:text-sm font-display tracking-[0.14em] uppercase font-bold">
              [CLIENT NAME] · [CLIENT ORGANISATION]
            </div>
          </div>
        </div>
      </section>

      {/* ── OUR CLIENTS & ENTERPRISE PARTNERS COLLAGE CARD ─────────────── */}
      <section className="bg-slate-50/70 py-16 lg:py-24 border-t border-hairline overflow-hidden">
        <div className="max-w-[1320px] mx-auto px-5 lg:px-10">
          
          <div className="text-center max-w-2xl mx-auto mb-10 lg:mb-12">
            <span className="block text-gold text-xs sm:text-sm font-bold font-display tracking-[0.18em] uppercase mb-2">
              TRUSTED BY
            </span>
            <h2 className="text-navy text-3xl lg:text-4xl font-bold font-display mb-3">
              Our Clients &amp; Partners
            </h2>
            <p className="text-dim text-sm sm:text-base font-body leading-relaxed">
              Organisations that trust Moz Midlands to support their critical supply chains, aerospace movements, and enterprise operations.
            </p>
          </div>

          {/* Unified Collage Card (Inspired by premier racing partner logo wall) */}
          <div className="bg-white border border-slate-200/90 rounded-2xl sm:rounded-3xl shadow-[0_12px_40px_rgba(12,37,69,0.06)] p-5 sm:p-8 lg:p-10 max-w-[1240px] mx-auto">
            
            {/* 15-cell grid: 5 columns on desktop, 3 columns on tablet, 2 columns on mobile */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 lg:gap-4.5 items-stretch">
              {collageItems.map((item) => (
                item.type === 'center' ? (
                  <div
                    key="center-badge"
                    className="col-span-2 sm:col-span-1 lg:col-span-1 flex flex-col items-center justify-center text-center p-4 rounded-xl bg-gradient-to-br from-[#0c2545] via-[#081b33] to-[#040f1d] border border-gold/50 shadow-lg group select-none min-h-[96px] sm:min-h-[104px] relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-radial from-gold/10 via-transparent to-transparent pointer-events-none" />
                    <img
                      src={logoWhite}
                      alt="Moz Midlands"
                      className="h-6 sm:h-7 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="w-8 h-[1.5px] bg-gold my-2 rounded-full" />
                    <span className="text-[10px] sm:text-[11px] text-gold font-bold font-display tracking-[0.16em] uppercase">
                      Partner Network
                    </span>
                  </div>
                ) : (
                  <div
                    key={item.id}
                    className="h-[96px] sm:h-[104px] bg-white border border-slate-200/80 hover:border-gold/60 rounded-xl p-3 sm:p-4 flex flex-col items-center justify-center text-center shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 group"
                    title={`${item.name} · ${item.sector}`}
                  >
                    <div className="flex-1 flex items-center justify-center w-full">
                      <img
                        src={item.logo}
                        alt={item.name}
                        className={`${item.h} w-auto max-w-[85%] object-contain transition-transform duration-300 group-hover:scale-105`}
                        loading="lazy"
                      />
                    </div>
                    <span className="text-[10px] text-dim/70 font-body font-medium mt-1 truncate max-w-full">
                      {item.sector}
                    </span>
                  </div>
                )
              ))}
            </div>

            {/* Bottom Trust Micro-bar */}
            <div className="mt-6 sm:mt-8 pt-5 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs text-dim">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span className="font-semibold text-navy">High-Security &amp; Time-Critical Clearances</span> across Defence, Aviation &amp; Healthcare
              </span>
              <span className="font-medium text-dim/80">
                UK &amp; International Supply Chain Coordination
              </span>
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
      <CtaSection onNavigate={onNavigate} />

    </div>
  )
}