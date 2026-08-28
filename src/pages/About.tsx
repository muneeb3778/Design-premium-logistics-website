import type { Page } from '../types'

interface AboutProps {
  onNavigate: (page: Page) => void
}

function SectionLabel({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <span className={`flex items-center gap-2 text-[11px] font-semibold tracking-[0.14em] uppercase font-display mb-4 ${light ? 'text-gold' : 'text-gold'}`}>
      <span className="w-6 h-px bg-gold shrink-0" />
      {children}
    </span>
  )
}

const approach = [
  { title: 'Operationally Focused', desc: 'We centre every engagement around operational execution — ensuring that what is committed is delivered through clear processes and direct communication.' },
  { title: 'Responsive by Design', desc: 'Our team is directly accessible throughout the customer journey, from initial enquiry to completion, without unnecessary process layers.' },
  { title: 'Solution-Oriented', desc: 'We approach each requirement on its own terms, structuring services around what the customer needs rather than what fits an off-the-shelf package.' },
  { title: 'Integrated Capability', desc: 'Transportation, warehousing, distribution and commodity trading work together in our model, giving customers a genuinely connected supply-chain service.' },
]

const values = [
  { label: 'Reliability', desc: 'Dependable operations and consistent service delivery.' },
  { label: 'Accountability', desc: 'Clear ownership at every stage of the supply chain.' },
  { label: 'Responsiveness', desc: 'Direct communication, timely responses and proactive updates.' },
  { label: 'Integrity', desc: 'Honest, transparent engagement with every customer and partner.' },
]

export default function About({ onNavigate }: AboutProps) {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy" style={{ minHeight: '52vh', display: 'flex', alignItems: 'flex-end' }}>
        <img
          src="https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=1920&h=700&fit=crop&auto=format"
          alt="Logistics fleet and transportation operations"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(12,37,69,0.92) 0%, rgba(12,37,69,0.55) 60%, rgba(12,37,69,0.15) 100%)' }} />
        <div className="max-w-[1320px] mx-auto px-5 lg:px-10 w-full relative py-16 pt-[120px]">
          <SectionLabel light>About Us</SectionLabel>
          <h1 className="text-white text-4xl lg:text-5xl font-bold font-display max-w-2xl leading-tight">
            A Reliable Partner for Transportation, Logistics and Trade
          </h1>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-[1320px] mx-auto px-5 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <SectionLabel>Our Story</SectionLabel>
              <h2 className="text-navy text-3xl lg:text-4xl font-bold font-display mb-6">Built Around the Practical Requirements of Supply Chains</h2>
              <div className="space-y-4 text-dim font-body leading-relaxed">
                <p>
                  [COMPANY NAME] was established to address a clear need in the UK logistics and supply-chain market — a provider that could genuinely connect transportation, warehousing, distribution and commodity trading within a single, operationally competent offering.
                </p>
                <p>
                  We work with organisations whose supply-chain requirements demand reliability, responsiveness and accountability at every stage. Our business is structured around direct service delivery, clear communication and operational execution.
                </p>
                <p>
                  Our commodity trading capability sits alongside our logistics operations, enabling us to serve customers who require both the physical movement of goods and the commercial coordination of supply.
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

      {/* What We Do */}
      <section className="bg-linen py-20 lg:py-28">
        <div className="max-w-[1320px] mx-auto px-5 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <SectionLabel>What We Do</SectionLabel>
            <h2 className="text-navy text-3xl lg:text-4xl font-bold font-display mb-4">Connected Services Across the Supply Chain</h2>
            <p className="text-dim text-base font-body leading-relaxed">
              Our capabilities span the connected requirements of UK and international supply chains.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { title: 'Transportation & Inland Logistics', desc: 'Movement between ports, warehouses, facilities and destinations.' },
              { title: 'Shipping & Freight', desc: 'Import and freight coordination across relevant routes and partners.' },
              { title: 'Warehousing & Storage', desc: 'Flexible storage and inventory-support capabilities.' },
              { title: 'Distribution & Delivery', desc: 'Coordinated delivery to required destinations.' },
              { title: 'Supply Chain Solutions', desc: 'Integrated support across multiple supply-chain stages.' },
              { title: 'Commodity Trading', desc: 'Trade and supply capabilities connected to logistics operations.' },
            ].map((svc) => (
              <div key={svc.title} className="p-6 bg-white border border-hairline rounded-sm hover:border-navy/20 transition-colors group">
                <div className="w-8 h-[2px] bg-gold mb-4 group-hover:w-12 transition-all duration-300" />
                <h3 className="text-navy text-sm font-semibold font-display mb-2">{svc.title}</h3>
                <p className="text-dim text-sm font-body leading-relaxed">{svc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-[1320px] mx-auto px-5 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-12 lg:gap-20">
            <div>
              <SectionLabel>Our Approach</SectionLabel>
              <h2 className="text-navy text-3xl font-bold font-display mb-5">How We Work</h2>
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

      {/* Experience stats */}
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

      {/* Markets */}
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
              <h2 className="text-navy text-3xl font-bold font-display mb-5">Supporting UK-Based Organisations</h2>
              <p className="text-dim text-base font-body leading-relaxed mb-8">
                We primarily serve UK-based organisations, including those operating in sectors where supply-chain reliability, accountability and operational continuity are critical considerations.
              </p>
              <div className="space-y-4">
                {['Healthcare Organisations', 'Public Sector Bodies', 'Defence-Related Organisations', 'Commercial & Industrial Businesses', 'International Trade Partners'].map((market) => (
                  <div key={market} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                    <span className="text-navy text-sm font-body">{market}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-16 lg:py-20 border-t border-hairline">
        <div className="max-w-[1320px] mx-auto px-5 lg:px-10 text-center">
          <h2 className="text-navy text-2xl lg:text-3xl font-bold font-display mb-4">Ready to Discuss Your Requirements?</h2>
          <p className="text-dim text-base font-body mb-8 max-w-lg mx-auto">Tell us what you need and our team will review your requirements and respond promptly.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <button onClick={() => onNavigate('quote')} className="px-7 py-3.5 bg-navy text-white text-sm font-semibold font-display rounded-sm hover:bg-navy-mid transition-colors">
              Request a Quote
            </button>
            <button onClick={() => onNavigate('contact')} className="px-7 py-3.5 border-2 border-navy text-navy text-sm font-semibold font-display rounded-sm hover:bg-navy hover:text-white transition-all">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
