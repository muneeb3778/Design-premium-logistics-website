import type { Page } from '../types'

interface IndustriesProps {
  onNavigate: (page: Page) => void
}

function SectionLabel({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <span className={`flex items-center gap-2 text-[11px] font-semibold tracking-[0.14em] uppercase font-display mb-4 text-gold`}>
      <span className="w-6 h-px bg-gold shrink-0" />
      {children}
    </span>
  )
}

const industries = [
  {
    label: 'Healthcare',
    headline: 'Reliable Logistics for Healthcare Supply Chains',
    image: 'https://images.unsplash.com/photo-1628372095387-017d1099fc19?w=1200&h=600&fit=crop&auto=format',
    alt: 'Healthcare facility representing supply chain support for health organisations',
    context: 'Healthcare organisations operate supply chains where reliability, accountability and operational continuity are non-negotiable. From the procurement of essential goods to the distribution of supplies to healthcare facilities, logistics failures carry real operational consequences.',
    considerations: [
      'Time-sensitive supply requirements',
      'Reliable and accountable delivery',
      'Careful handling of sensitive goods',
      'Clear communication and reporting',
      'Warehouse and inventory support',
      'Distribution coordination',
    ],
    services: ['Transportation & Inland Logistics', 'Warehousing & Storage', 'Distribution & Delivery', 'Supply Chain Solutions'],
  },
  {
    label: 'Public Sector',
    headline: 'Accountable Logistics for Public-Sector Organisations',
    image: 'https://images.unsplash.com/photo-1494412519320-aa613dfb7738?w=1200&h=600&fit=crop&auto=format',
    alt: 'Organised cargo logistics representing public sector supply chain support',
    context: 'Public-sector organisations require logistics partners who can demonstrate accountability, operational structure and transparent reporting. Procurement processes, delivery schedules and audit trails matter. Our service is designed to support structured, compliant supply-chain operations.',
    considerations: [
      'Structured and documented operations',
      'Accountable service delivery',
      'Transparent reporting and communication',
      'Compliance-focused processes',
      'Scalable to procurement volumes',
      'Reliable scheduling and delivery',
    ],
    services: ['Transportation & Inland Logistics', 'Warehousing & Storage', 'Distribution & Delivery', 'Supply Chain Solutions'],
  },
  {
    label: 'Defence-Related',
    headline: 'Disciplined Logistics for Defence-Related Supply Chains',
    image: 'https://images.unsplash.com/photo-1763887487478-dba734cd204c?w=1200&h=600&fit=crop&auto=format',
    alt: 'Industrial port operations representing defence-related logistics support',
    context: 'Defence-related organisations and their supply chains require logistics providers who operate with operational discipline, reliability and clear accountability. Schedule adherence, accurate reporting and careful handling are baseline expectations in this sector.',
    considerations: [
      'Operational reliability and discipline',
      'Schedule adherence',
      'Accountability at every stage',
      'Careful handling of cargo',
      'Secure and controlled operations',
      'Clear communication protocols',
    ],
    services: ['Transportation & Inland Logistics', 'Warehousing & Storage', 'Distribution & Delivery'],
  },
  {
    label: 'Commercial & Industrial',
    headline: 'Flexible Logistics for Commercial and Industrial Operations',
    image: 'https://images.unsplash.com/photo-1494412651409-8963ce7935a7?w=1200&h=600&fit=crop&auto=format',
    alt: 'Commercial cargo and industrial logistics operations',
    context: 'Commercial and industrial businesses require logistics partners who can adapt to changing operational requirements — from fluctuating volumes to multi-site distribution and supply-chain complexity. Our service is designed to scale with operational demand.',
    considerations: [
      'Scalable logistics capacity',
      'Flexible warehousing and storage',
      'Multi-site distribution',
      'Commodity and bulk cargo support',
      'Import and freight coordination',
      'Integrated supply-chain solutions',
    ],
    services: ['Transportation & Inland Logistics', 'Shipping & Freight', 'Warehousing & Storage', 'Distribution & Delivery', 'Commodity Trading'],
  },
]

export default function Industries({ onNavigate }: IndustriesProps) {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy" style={{ minHeight: '50vh', display: 'flex', alignItems: 'flex-end' }}>
        <img
          src="https://images.unsplash.com/photo-1724364552281-dbed323c4633?w=1920&h=700&fit=crop&auto=format"
          alt="International cargo operations representing industries we support"
          className="absolute inset-0 w-full h-full object-cover opacity-28"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(12,37,69,0.92) 0%, rgba(12,37,69,0.5) 60%, rgba(12,37,69,0.12) 100%)' }} />
        <div className="max-w-[1320px] mx-auto px-5 lg:px-10 w-full relative py-16 pt-[120px]">
          <SectionLabel>Industries</SectionLabel>
          <h1 className="text-white text-4xl lg:text-5xl font-bold font-display max-w-2xl leading-tight mb-4">
            Supporting Organisations Across Critical Supply Chains
          </h1>
          <p className="text-white/55 text-base font-body max-w-xl leading-relaxed">
            We work with organisations where supply-chain reliability, accountability and operational continuity are essential.
          </p>
        </div>
      </section>

      {/* Industry nav */}
      <div className="bg-white border-b border-hairline">
        <div className="max-w-[1320px] mx-auto px-5 lg:px-10">
          <div className="flex overflow-x-auto gap-0" style={{ scrollbarWidth: 'none' }}>
            {industries.map((ind) => (
              <a key={ind.label} href={`#${ind.label.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z-]/g, '')}`} className="px-5 py-4 text-sm font-medium font-body whitespace-nowrap border-b-2 border-transparent text-dim hover:text-navy hover:border-gold transition-colors shrink-0">
                {ind.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Industry sections */}
      {industries.map((ind, idx) => (
        <section
          key={ind.label}
          id={ind.label.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z-]/g, '')}
          className={idx % 2 === 0 ? 'bg-white py-20 lg:py-28' : 'bg-linen py-20 lg:py-28'}
        >
          <div className="max-w-[1320px] mx-auto px-5 lg:px-10">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${idx % 2 === 1 ? 'lg:[direction:rtl]' : ''}`}>

              {/* Image */}
              <div className="lg:[direction:ltr] relative rounded-sm overflow-hidden bg-navy/5" style={{ aspectRatio: '16/10' }}>
                <img
                  src={ind.image}
                  alt={ind.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-navy/5" />
                <div className="absolute bottom-5 left-5">
                  <span className="inline-block bg-navy/90 text-white text-[10px] font-semibold tracking-[0.13em] uppercase font-display px-3 py-1.5 rounded-sm backdrop-blur-sm">
                    {ind.label}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="lg:[direction:ltr]">
                <SectionLabel>{ind.label}</SectionLabel>
                <h2 className="text-navy text-2xl lg:text-3xl font-bold font-display mb-5">{ind.headline}</h2>
                <p className="text-dim text-base font-body leading-relaxed mb-8">{ind.context}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
                  <div>
                    <h3 className="text-navy text-xs font-semibold font-display tracking-wide uppercase mb-3 flex items-center gap-2">
                      <span className="w-4 h-px bg-gold" />
                      Key Considerations
                    </h3>
                    <ul className="space-y-2">
                      {ind.considerations.map((c) => (
                        <li key={c} className="flex items-start gap-2 text-dim text-sm font-body">
                          <span className="w-1 h-1 rounded-full bg-gold shrink-0 mt-2" />
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-navy text-xs font-semibold font-display tracking-wide uppercase mb-3 flex items-center gap-2">
                      <span className="w-4 h-px bg-gold" />
                      Relevant Services
                    </h3>
                    <ul className="space-y-2">
                      {ind.services.map((s) => (
                        <li key={s} className="flex items-start gap-2 text-dim text-sm font-body">
                          <span className="w-1 h-1 rounded-full bg-gold shrink-0 mt-2" />
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={() => onNavigate('quote')}
                    className="px-6 py-3 bg-navy text-white text-sm font-semibold font-display rounded-sm hover:bg-navy-mid transition-colors"
                  >
                    Request a Quote
                  </button>
                  <button
                    onClick={() => onNavigate('services')}
                    className="px-6 py-3 border border-hairline text-navy text-sm font-medium font-body rounded-sm hover:bg-linen transition-colors"
                  >
                    View Services
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="bg-navy py-16">
        <div className="max-w-[1320px] mx-auto px-5 lg:px-10 text-center">
          <h2 className="text-white text-2xl lg:text-3xl font-bold font-display mb-4">Ready to Discuss Your Requirements?</h2>
          <p className="text-white/50 text-base font-body mb-8 max-w-md mx-auto">Tell us about your organisation and supply-chain requirements and we will respond promptly.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <button onClick={() => onNavigate('quote')} className="px-7 py-3.5 bg-gold text-white text-sm font-bold font-display rounded-sm hover:bg-gold-light transition-colors">
              Request a Quote
            </button>
            <button onClick={() => onNavigate('contact')} className="px-7 py-3.5 border border-white/25 text-white text-sm font-medium font-body rounded-sm hover:bg-white/8 transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
