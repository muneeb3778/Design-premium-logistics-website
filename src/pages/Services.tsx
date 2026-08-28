import { useState } from 'react'
import type { Page } from '../types'

interface ServicesProps {
  onNavigate: (page: Page) => void
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="flex items-center gap-2 text-[11px] font-semibold tracking-[0.14em] uppercase font-display mb-4 text-gold">
      <span className="w-6 h-px bg-gold shrink-0" />
      {children}
    </span>
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
    id: 'shipping',
    label: 'Shipping & Freight',
    fullTitle: 'Shipping & Freight',
    image: 'https://images.unsplash.com/photo-1724364552281-dbed323c4633?w=900&h=600&fit=crop&auto=format',
    alt: 'Cargo vessel representing shipping and freight operations',
    overview: 'We coordinate shipping and freight requirements across relevant routes and partners, supporting the movement of cargo from origin through to UK port or onward destination. Our freight coordination service is designed around the specific requirements of each customer and cargo type.',
    capabilities: [
      'Import freight coordination',
      'Port and terminal liaison',
      'Container and bulk cargo support',
      'Freight documentation support',
      'Partner carrier coordination',
      'Multi-modal freight solutions',
    ],
    benefits: [
      'Coordinated end-to-end freight management',
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
  {
    id: 'supply-chain',
    label: 'Supply Chain',
    fullTitle: 'Supply Chain Solutions',
    image: 'https://images.unsplash.com/photo-1494412519320-aa613dfb7738?w=900&h=600&fit=crop&auto=format',
    alt: 'Container port representing supply chain coordination',
    overview: 'Our supply chain solutions service provides integrated coordination across multiple logistics stages — connecting transportation, port handling, warehousing and distribution into a managed, end-to-end supply chain solution. Designed for organisations that require a coherent view across their logistics operations.',
    capabilities: [
      'End-to-end supply chain coordination',
      'Multi-stage logistics management',
      'Port-to-warehouse-to-delivery workflows',
      'Single-point coordination and reporting',
      'Supply chain mapping and optimisation support',
      'Escalation and contingency management',
    ],
    benefits: [
      'Single coordination point',
      'Connected view across all stages',
      'Reduced operational complexity',
      'Scalable to supply chain growth',
    ],
  },
  {
    id: 'commodity',
    label: 'Commodity Trading',
    fullTitle: 'Commodity Trading',
    image: 'https://images.unsplash.com/photo-1535379453347-1ffd615e2e08?w=900&h=600&fit=crop&auto=format',
    alt: 'Agricultural commodity harvest representing trading operations',
    overview: 'Our commodity trading capability provides commercial sourcing, procurement and supply coordination for physical commodities, directly connected to our transportation and logistics operations. We support customers who require both the commercial trading function and the physical supply-chain execution in a coordinated model.',
    capabilities: [
      'Commodity sourcing and procurement',
      'Supply and trade coordination',
      'Physical delivery integration',
      '[COMMODITY CATEGORIES] — to be confirmed',
      'Commercial and logistics coordination',
      'Supply continuity management',
    ],
    benefits: [
      'Integrated trading and logistics',
      'Commercial and physical coordination',
      'Supply continuity focused',
      'Connected to UK transportation network',
    ],
  },
]

export default function Services({ onNavigate }: ServicesProps) {
  const [activeService, setActiveService] = useState(serviceList[0].id)
  const current = serviceList.find((s) => s.id === activeService) ?? serviceList[0]

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy" style={{ minHeight: '50vh', display: 'flex', alignItems: 'flex-end' }}>
        <img
          src="https://images.unsplash.com/photo-1494412519320-aa613dfb7738?w=1920&h=700&fit=crop&auto=format"
          alt="Aerial view of container port representing our services"
          className="absolute inset-0 w-full h-full object-cover opacity-28"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(12,37,69,0.92) 0%, rgba(12,37,69,0.5) 60%, rgba(12,37,69,0.12) 100%)' }} />
        <div className="max-w-[1320px] mx-auto px-5 lg:px-10 w-full relative py-16 pt-[120px]">
          <SectionLabel>Services & Solutions</SectionLabel>
          <h1 className="text-white text-4xl lg:text-5xl font-bold font-display max-w-2xl leading-tight mb-4">
            Our Services & Solutions
          </h1>
          <p className="text-white/55 text-base font-body max-w-xl leading-relaxed">
            Connected capabilities designed to support the movement, storage and distribution of goods across the supply chain.
          </p>
        </div>
      </section>

      {/* Service nav tabs */}
      <div className="bg-white border-b border-hairline sticky top-[72px] z-30">
        <div className="max-w-[1320px] mx-auto px-5 lg:px-10">
          <div className="flex overflow-x-auto gap-0 scrollbar-hide" style={{ scrollbarWidth: 'none' }}>
            {serviceList.map((s) => (
              <button
                key={s.id}
                onClick={() => setActiveService(s.id)}
                className={`px-5 py-4 text-sm font-medium font-body whitespace-nowrap border-b-2 transition-colors shrink-0 ${
                  activeService === s.id
                    ? 'border-gold text-navy font-semibold'
                    : 'border-transparent text-dim hover:text-navy'
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Service detail */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-[1320px] mx-auto px-5 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

            <div>
              <SectionLabel>{current.label}</SectionLabel>
              <h2 className="text-navy text-3xl lg:text-4xl font-bold font-display mb-6">{current.fullTitle}</h2>
              <p className="text-dim text-base font-body leading-relaxed mb-10">{current.overview}</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
                <div className="p-5 bg-linen rounded-sm">
                  <h3 className="text-navy text-sm font-semibold font-display mb-3 flex items-center gap-2">
                    <span className="w-4 h-px bg-gold" />
                    Capabilities
                  </h3>
                  <ul className="space-y-2">
                    {current.capabilities.map((cap) => (
                      <li key={cap} className="flex items-start gap-2 text-dim text-sm font-body">
                        <span className="w-1 h-1 rounded-full bg-gold shrink-0 mt-2" />
                        {cap}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-5 bg-linen rounded-sm">
                  <h3 className="text-navy text-sm font-semibold font-display mb-3 flex items-center gap-2">
                    <span className="w-4 h-px bg-gold" />
                    Key Benefits
                  </h3>
                  <ul className="space-y-2">
                    {current.benefits.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-dim text-sm font-body">
                        <span className="w-1 h-1 rounded-full bg-gold shrink-0 mt-2" />
                        {b}
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
                  Request a Quote for {current.label}
                </button>
                <button
                  onClick={() => onNavigate('contact')}
                  className="px-6 py-3 border border-hairline text-navy text-sm font-medium font-body rounded-sm hover:bg-linen transition-colors"
                >
                  Speak to Our Team
                </button>
              </div>
            </div>

            <div className="relative rounded-sm overflow-hidden bg-linen" style={{ aspectRatio: '4/3' }}>
              <img
                src={current.image}
                alt={current.alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-navy/8" />
            </div>
          </div>
        </div>
      </section>

      {/* All services summary */}
      <section className="bg-linen py-16 lg:py-20">
        <div className="max-w-[1320px] mx-auto px-5 lg:px-10">
          <h2 className="text-navy text-2xl font-bold font-display mb-8">All Services & Solutions</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {serviceList.map((s) => (
              <button
                key={s.id}
                onClick={() => { setActiveService(s.id); window.scrollTo({ top: 300, behavior: 'smooth' }) }}
                className={`p-5 border rounded-sm text-left transition-all group ${
                  s.id === activeService
                    ? 'border-navy bg-white'
                    : 'border-hairline bg-white hover:border-navy/25'
                }`}
              >
                <div className="w-5 h-[2px] bg-gold mb-3" />
                <h3 className="text-navy text-sm font-semibold font-display mb-1">{s.fullTitle}</h3>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-navy py-16">
        <div className="max-w-[1320px] mx-auto px-5 lg:px-10 text-center">
          <h2 className="text-white text-2xl lg:text-3xl font-bold font-display mb-4">Ready to Discuss Your Logistics Requirements?</h2>
          <p className="text-white/50 text-base font-body mb-8 max-w-lg mx-auto">Our team will review your requirements and respond with a tailored quote.</p>
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
