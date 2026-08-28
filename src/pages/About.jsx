// src/pages/About.jsx
import { waLink } from '../constants'

function SectionLabel({ children, light = false }) {
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

function WhatsAppIcon({ className = 'w-4 h-4' }) {
  return (
    <svg viewBox="0 0 24 24" className={`fill-current ${className}`} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

/* Reusable gold Request a Quote button — matches Home.jsx exactly */
function QuoteButton({ onClick, size = 'md', className = '' }) {
  const padding = size === 'lg' ? 'px-8 py-3.5' : 'px-7 py-3.5'
  return (
    <button
      onClick={onClick}
      className={`${padding} text-white text-sm font-bold font-display rounded-sm transition-all shadow-md hover:shadow-lg ${className}`}
      style={{ backgroundColor: '#C9922A' }}
      onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#b8821f' }}
      onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#C9922A' }}
    >
      Request a Quote
    </button>
  )
}

/* Core services — matches homepage's 4 restructured services (Transportation, Imports, Warehousing, Distribution) */
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

      {/* ── HERO ────────────────────────────────────────────────────────
          Structure now mirrors Home.jsx exactly:
          absolute bg image + gradient → relative z-20 flex-col wrapper
          → nav-spacer div (h-[72px]) → flex-1 centered content.
          This fixes both the height inconsistency and ensures the
          transparent-nav-over-dark-image effect lines up perfectly.
      ────────────────────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden bg-navy"
        style={{ height: '58vh', minHeight: 460, maxHeight: 680 }}
      >
        <img
          src="https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=1920&h=700&fit=crop&auto=format"
          alt="Logistics fleet and transportation operations"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, rgba(12,37,69,0.88) 0%, rgba(12,37,69,0.55) 55%, rgba(12,37,69,0.30) 100%)' }}
        />

        {/* Foreground content — full height flex column, same pattern as Home hero */}
        <div className="relative z-20 h-full flex flex-col">

          {/* Nav spacer — reserves space for the fixed transparent header */}
          <div className="h-[72px] shrink-0" />

          {/* Centered hero text */}
          <div className="flex-1 flex flex-col justify-center">
            <div className="max-w-[1320px] mx-auto px-5 lg:px-10 w-full">
              <div className="max-w-full sm:max-w-[80%] lg:max-w-[65%]">
                <SectionLabel light>About Us</SectionLabel>
                <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold font-display leading-[1.15] mb-5">
                  A Reliable Partner for Transportation &amp; Logistics
                </h1>
                <p className="text-white/72 text-base sm:text-lg font-body leading-relaxed">
                  Connecting transportation, warehousing, imports and distribution into one accountable, responsive service.
                </p>
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
              <SectionLabel>Our Story</SectionLabel>
              <h2 className="text-navy text-3xl lg:text-4xl font-bold font-display mb-6 leading-tight">
                Built Around the Practical Requirements of Supply Chains
              </h2>
              <div className="space-y-4 text-dim font-body text-base leading-relaxed">
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

            <div className="relative rounded-sm overflow-hidden bg-linen" style={{ aspectRatio: '4/3' }}>
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
            <SectionLabel>What We Do</SectionLabel>
            <h2 className="text-navy text-3xl lg:text-4xl font-bold font-display mb-4">
              Connected Services Across the Supply Chain
            </h2>
            <p className="text-dim text-base font-body leading-relaxed">
              Our capabilities span the connected requirements of UK and international supply chains.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {coreServices.map((svc) => (
              <div key={svc.title} className="p-6 bg-white border border-hairline rounded-sm hover:border-navy/20 transition-colors group">
                <div className="w-8 h-[2px] bg-gold mb-4 group-hover:w-12 transition-all duration-300" />
                <h3 className="text-navy text-sm font-semibold font-display mb-2">{svc.title}</h3>
                <p className="text-dim text-sm font-body leading-relaxed">{svc.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <button
              onClick={() => onNavigate('services')}
              className="inline-flex items-center gap-2 text-navy text-sm font-semibold font-display border-b-2 border-navy pb-0.5 hover:text-gold hover:border-gold transition-colors"
            >
              View All Services & Solutions
              <ArrowIcon />
            </button>
          </div>
        </div>
      </section>

      {/* ── OUR APPROACH ────────────────────────────────────────────── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-[1320px] mx-auto px-5 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-12 lg:gap-20">
            <div>
              <SectionLabel>Our Approach</SectionLabel>
              <h2 className="text-navy text-3xl font-bold font-display mb-5 leading-tight">How We Work</h2>
              <p className="text-dim text-base font-body leading-relaxed mb-6">
                We approach every customer requirement with a clear focus on operational delivery, responsiveness and accountability.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {values.map((v) => (
                  <div key={v.label} className="p-4 bg-linen rounded-sm">
                    <div className="w-5 h-px bg-gold mb-3" />
                    <h4 className="text-navy text-sm font-semibold font-display mb-1">{v.label}</h4>
                    <p className="text-dim text-xs font-body leading-relaxed">{v.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-7">
              {approach.map((item) => (
                <div key={item.title} className="flex gap-5 pb-7 border-b border-hairline last:border-0 last:pb-0">
                  <div className="w-[2px] bg-gold shrink-0 mt-1 rounded-full" />
                  <div>
                    <h3 className="text-navy text-base font-semibold font-display mb-2">{item.title}</h3>
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
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-bold font-display text-gold mb-2">{stat.value}</div>
                <div className="text-white/55 text-sm font-body">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MARKETS WE SERVE ────────────────────────────────────────── */}
      <section className="bg-linen py-20 lg:py-28">
        <div className="max-w-[1320px] mx-auto px-5 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative rounded-sm overflow-hidden bg-navy/5" style={{ aspectRatio: '4/3' }}>
              <img
                src="https://images.unsplash.com/photo-1782948603191-065fb15e2e8e?w=800&h=600&fit=crop&auto=format"
                alt="Warehouse operations serving UK organisations"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div>
              <SectionLabel>Markets We Serve</SectionLabel>
              <h2 className="text-navy text-3xl font-bold font-display mb-5 leading-tight">
                Supporting UK-Based Organisations
              </h2>
              <p className="text-dim text-base font-body leading-relaxed mb-8">
                We primarily serve UK-based organisations, including those operating in sectors where supply-chain reliability, accountability and operational continuity are critical considerations.
              </p>
              <div className="space-y-4">
                {['Healthcare Organisations', 'Public Sector Bodies', 'Defence-Related Organisations', 'Commercial & Industrial Businesses'].map((market) => (
                  <div key={market} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                    <span className="text-navy text-sm font-body">{market}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <button
                  onClick={() => onNavigate('industries')}
                  className="inline-flex items-center gap-2 text-navy text-sm font-semibold font-display border-b-2 border-navy pb-0.5 hover:text-gold hover:border-gold transition-colors"
                >
                  View All Industries
                  <ArrowIcon />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-navy py-20 lg:py-24">
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(105deg, rgba(12,37,69,0.98) 0%, rgba(12,37,69,0.9) 60%, rgba(12,37,69,0.75) 100%)' }}
        />
        <div className="max-w-[1320px] mx-auto px-5 lg:px-10 relative text-center">
          <div className="flex justify-center">
            <SectionLabel light>Get in Touch</SectionLabel>
          </div>
          <h2 className="text-white text-2xl lg:text-3xl xl:text-4xl font-bold font-display mb-4">
            Ready to Discuss Your Requirements?
          </h2>
          <p className="text-white/60 text-base font-body mb-9 max-w-lg mx-auto leading-relaxed">
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