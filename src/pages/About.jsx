// src/pages/About.jsx
import { waLink } from '../constants'
import CtaSection from '../components/CtaSection'

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

const coreServices = [
  {
    title: 'Transportation',
    desc: 'Movement between ports, warehouses, facilities and destinations across the UK supply chain.',
  },
  {
    title: 'Imports',
    desc: 'Import and freight coordination across relevant routes and partners for your cargo requirements.',
  },
  {
    title: 'Warehousing',
    desc: 'Flexible storage and inventory-support capabilities designed around operational continuity.',
  },
  {
    title: 'Distribution',
    desc: 'Coordinated delivery to required destinations, integrated with warehousing and logistics operations.',
  },
]

const approach = [
  { title: 'Operationally Focused', desc: 'We centre every engagement around operational execution — ensuring that what is committed is delivered through clear processes and direct communication.' },
  { title: 'Responsive by Design', desc: 'Our team is directly accessible throughout the customer journey, from initial enquiry to completion, without unnecessary process layers.' },
  { title: 'Solution-Oriented', desc: 'We approach each requirement on its own terms, structuring services around what the customer needs rather than what fits an off-the-shelf package.' },
  { title: 'Integrated Capability', desc: 'Transportation, warehousing, imports and distribution work together in our model, giving customers a genuinely connected supply-chain service.' },
]

const values = [
  { label: 'Reliability', desc: 'Dependable operations and consistent service delivery.' },
  { label: 'Accountability', desc: 'Clear ownership at every stage of the supply chain.' },
  { label: 'Responsiveness', desc: 'Direct communication, timely responses and proactive updates.' },
  { label: 'Integrity', desc: 'Honest, transparent engagement with every customer and partner.' },
]

export default function About({ onNavigate }) {
  return (
    <div>

          {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden bg-navy"
        style={{ height: '74vh', minHeight: 580, maxHeight: 800 }}
      >
        <img
          src="https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=1920&h=1080&fit=crop&auto=format"
          alt="Logistics fleet and transportation operations"
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
                <HeroLabel>About Us</HeroLabel>
                <h1 className="text-white text-2xl sm:text-3xl lg:text-4xl xl:text-[44px] font-bold font-display leading-[1.2] mb-4">
                  A Reliable Partner in Logistics
                </h1>
                <p className="text-white/90 text-base sm:text-lg font-body leading-relaxed max-w-2xl">
                  Transportation, warehousing and distribution — connected.
                </p>
              </div>
            </div>
          </div>

          {/* Spacer to match Home's hero dots bar height — keeps vertical centering identical */}
          <div className="shrink-0 pb-7 pt-2" aria-hidden="true">
            <div className="max-w-[1320px] mx-auto px-5 lg:px-10">
              <div className="flex justify-center">
                <div className="h-2.5 w-2.5 opacity-0" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── OUR STORY ───────────────────────────────────────────────── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-[1320px] mx-auto px-5 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <SectionTag>Our Story</SectionTag>
              <h2 className="text-navy text-3xl lg:text-4xl font-bold font-display mb-6 leading-tight">
                Built Around the Practical Requirements of Supply Chains
              </h2>
              <div className="space-y-4 text-dim font-body text-base lg:text-lg leading-relaxed">
                <p>
                  [COMPANY NAME] was established to address a clear need in the UK logistics market — a provider that could genuinely connect transportation, warehousing, imports and distribution within a single, operationally competent offering.
                </p>
                <p>
                  We work with organisations whose supply-chain requirements demand reliability, responsiveness and accountability at every stage. Our business is structured around direct service delivery, clear communication and operational execution.
                </p>
                <p>
                  Whatever the scale of your requirement, our team is directly accessible from initial enquiry through to final delivery — with no unnecessary layers in between.
                </p>
              </div>
            </div>

            <div className="relative rounded-sm overflow-hidden bg-linen shadow-sm border border-hairline" style={{ aspectRatio: '4/3' }}>
              <img
                src="https://images.unsplash.com/photo-1494412519320-aa613dfb7738?w=800&h=600&fit=crop&auto=format"
                alt="Aerial view of port and container logistics operations"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-navy/10" />
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT WE DO ──────────────────────────────────────────────── */}
      <section className="bg-linen py-20 lg:py-28">
        <div className="max-w-[1320px] mx-auto px-5 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <SectionTag>What We Do</SectionTag>
            <h2 className="text-navy text-3xl lg:text-4xl font-bold font-display mb-4">
              Connected Services Across the Supply Chain
            </h2>
            <p className="text-dim text-base lg:text-lg font-body leading-relaxed">
              Our capabilities span the connected requirements of UK and international supply chains.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {coreServices.map((svc) => (
              <div key={svc.title} className="p-6 bg-white border border-hairline rounded-sm hover:border-navy/20 transition-all duration-300 group shadow-sm">
                <div className="w-8 h-[2px] bg-gold mb-4 group-hover:w-12 transition-all duration-300" />
                <h3 className="text-navy text-lg font-semibold font-display mb-2">{svc.title}</h3>
                <p className="text-dim text-sm font-body leading-relaxed">{svc.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => onNavigate('services')}
              className="inline-flex items-center gap-2.5 px-8 py-3.5 border-2 border-navy text-navy text-sm font-bold font-display tracking-wide rounded-sm hover:bg-navy hover:text-white transition-all duration-300 shadow-sm hover:shadow-md"
            >
              View All Services &amp; Solutions
              <ArrowIcon />
            </button>
          </div>
        </div>
      </section>

      {/* ── OUR APPROACH (PARALLEL REDESIGN) ─────────────────────────── */}
      <section className="bg-white py-20 lg:py-28 border-t border-hairline">
        <div className="max-w-[1320px] mx-auto px-5 lg:px-10">
          
          {/* Top-Left Section Header */}
          <div className="max-w-3xl mb-12 lg:mb-16">
            <SectionTag>Our Approach</SectionTag>
            <h2 className="text-navy text-3xl lg:text-4xl font-bold font-display leading-tight">
              How We Work
            </h2>
          </div>

          {/* Parallel 2-Column Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Intro Description + 4 Core Values */}
            <div>
              <p className="text-dim text-base lg:text-lg font-body leading-relaxed mb-8">
                We approach every customer requirement with a clear focus on operational delivery, responsiveness and accountability.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {values.map((v) => (
                  <div 
                    key={v.label} 
                    className="p-5 bg-linen rounded-sm border border-hairline hover:border-navy/20 transition-all duration-200"
                  >
                    <div className="w-6 h-[2px] bg-gold mb-3" />
                    <h4 className="text-navy text-base font-semibold font-display mb-1.5">{v.label}</h4>
                    <p className="text-dim text-sm font-body leading-relaxed">{v.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: 4 Approach Pillars */}
            <div className="space-y-6 lg:space-y-7">
              {approach.map((item) => (
                <div key={item.title} className="flex gap-4 group">
                  <div className="w-[3px] bg-gold/70 group-hover:bg-gold shrink-0 mt-1 rounded-full transition-colors duration-200" />
                  <div>
                    <h3 className="text-navy text-base font-semibold font-display mb-1.5">{item.title}</h3>
                    <p className="text-dim text-sm font-body leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ── EXPERIENCE STATS ────────────────────────────────────────── */}
      <section className="bg-navy py-16 lg:py-20">
        <div className="max-w-[1320px] mx-auto px-5 lg:px-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: 'XX+', label: 'Years Experience' },
              { value: 'XX+', label: 'Shipments Completed' },
              { value: 'XX+', label: 'Customers Supported' },
              { value: 'UK', label: 'Focused Operations' },
            ].map((stat) => (
              <div key={stat.label} className="text-center p-6 border border-white/10 rounded-sm hover:border-gold/30 transition-colors">
                <div className="text-4xl lg:text-5xl font-bold font-display text-gold mb-2">{stat.value}</div>
                <div className="text-white/75 text-sm font-semibold font-display">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MARKETS WE SERVE ────────────────────────────────────────── */}
      <section className="bg-linen py-20 lg:py-28">
        <div className="max-w-[1320px] mx-auto px-5 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative rounded-sm overflow-hidden bg-navy/5 shadow-sm border border-hairline" style={{ aspectRatio: '4/3' }}>
              <img
                src="https://images.unsplash.com/photo-1782948603191-065fb15e2e8e?w=800&h=600&fit=crop&auto=format"
                alt="Warehouse operations serving UK organisations"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div>
              <SectionTag>Markets We Serve</SectionTag>
              <h2 className="text-navy text-3xl font-bold font-display mb-5 leading-tight">
                Supporting UK-Based Organisations
              </h2>
              <p className="text-dim text-base lg:text-lg font-body leading-relaxed mb-8">
                We primarily serve UK-based organisations, including those operating in sectors where supply-chain reliability, accountability and operational continuity are critical considerations.
              </p>
              <div className="space-y-4 mb-8">
                {['Healthcare Organisations', 'Public Sector Bodies', 'Defence-Related Organisations', 'Commercial & Industrial Businesses'].map((market) => (
                  <div key={market} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-gold shrink-0" />
                    <span className="text-navy text-base font-medium font-body">{market}</span>
                  </div>
                ))}
              </div>
              <div>
                <button
                  onClick={() => onNavigate('industries')}
                  className="inline-flex items-center gap-2.5 px-8 py-3.5 border-2 border-navy text-navy text-sm font-bold font-display tracking-wide rounded-sm hover:bg-navy hover:text-white transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  View All Industries
                  <ArrowIcon />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ─────────────────────────────────────────────────── */}
      <CtaSection onNavigate={onNavigate} />

    </div>
  )
}