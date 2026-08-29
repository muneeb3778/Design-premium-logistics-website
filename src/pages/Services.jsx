// src/pages/Services.jsx
import { useState } from 'react'

function SectionLabel({ children, light = false }) {
  return (
    <span className={`flex items-center gap-2 text-[11px] font-semibold tracking-[0.14em] uppercase font-display mb-4 ${light ? 'text-gold' : 'text-gold'}`}>
      <span className="w-6 h-px bg-gold shrink-0" />
      {children}
    </span>
  )
}

function HeroLabel({ children }) {
  return (
    <span className="block text-gold text-sm sm:text-base font-bold font-display tracking-[0.12em] uppercase mb-4">
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
  const current = serviceList.find((s) => s.id === activeService) ?? serviceList[0]

  return (
    <div>

      {/* ── HERO ────────────────────────────────────────────────────────
          FIX (hero text truncating with "..."):
          Subtext shortened so it reliably fits on one line at the reduced
          hero font size, instead of relying on text-ellipsis to hide the
          overflow. Safety-net classes (whitespace-nowrap etc.) retained
          in case future copy edits run long again.
      ────────────────────────────────────────────────────────────────── */}
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

      {/* ── SERVICE NAV TABS ──────────────────────────────────────────── */}
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

      {/* ── SERVICE DETAIL ────────────────────────────────────────────── */}
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

    </div>
  )
}