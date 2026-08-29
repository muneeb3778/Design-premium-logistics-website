// src/pages/Quote.jsx
import { useState } from 'react'

const serviceOptions = [
  'Transportation & Inland Logistics',
  'Imports & Freight',
  'Warehousing & Storage',
  'Distribution & Delivery',
  'Other / Multiple Services',
]

const steps = ['Contact Details', 'Requirement', 'Cargo & Shipment', 'Additional Info']

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

export default function Quote({ onNavigate }) {
  const [step, setStep] = useState(0)
  const [submitted, setSubmitted] = useState(false)

  const [form, setForm] = useState({
    fullName: '',
    company: '',
    email: '',
    phone: '',
    country: 'United Kingdom',
    services: [],
    origin: '',
    destination: '',
    goodsDescription: '',
    quantity: '',
    weight: '',
    dimensions: '',
    collectionDate: '',
    specialRequirements: '',
    additionalInfo: '',
    hearAboutUs: '',
  })

  const inputClass = "w-full px-4 py-3 border border-hairline rounded-sm text-sm font-body text-navy placeholder:text-dim/50 bg-white shadow-[0_2px_8px_rgba(12,37,69,0.06)] focus:outline-none focus:border-navy focus:ring-1 focus:ring-navy/20 focus:shadow-[0_4px_14px_rgba(12,37,69,0.12)] transition-all"
  const labelClass = "block text-navy text-xs font-semibold font-display tracking-wide uppercase mb-2"

  const toggleService = (s) => {
    setForm((f) => ({
      ...f,
      services: f.services.includes(s) ? f.services.filter((x) => x !== s) : [...f.services, s],
    }))
  }

  const handleFinalSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-linen px-5 pt-[72px]">
        <div className="max-w-lg w-full text-center py-20 bg-white p-8 sm:p-12 border border-hairline rounded-sm shadow-md">
          <div className="w-16 h-16 bg-navy text-gold rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
            <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current" aria-hidden="true">
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
            </svg>
          </div>
          <h2 className="text-navy text-3xl font-bold font-display mb-3">Quote Request Received</h2>
          <p className="text-dim text-base font-body leading-relaxed mb-8">
            Thank you, <strong className="text-navy">{form.fullName}</strong>. Our logistics team will review your requirements and respond to <strong className="text-navy">{form.email}</strong> promptly with a tailored proposal.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <button 
              onClick={() => onNavigate('home')} 
              className="px-7 py-3.5 bg-navy text-white text-sm font-bold font-display rounded-sm hover:bg-navy-mid transition-all shadow-sm hover:shadow-md"
            >
              Return to Homepage
            </button>
            <button 
              onClick={() => onNavigate('contact')} 
              className="px-7 py-3.5 border border-hairline text-navy text-sm font-semibold font-display rounded-sm hover:bg-linen transition-colors"
            >
              Contact Us Directly
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div>
      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden bg-navy"
        style={{ height: '65vh', minHeight: 500, maxHeight: 720 }}
      >
        <img
          src="https://images.unsplash.com/photo-1551471698-c7787ff6b7ca?w=1920&h=700&fit=crop&auto=format"
          alt="Logistics fleet prepared for transportation quote"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, rgba(12,37,69,0.92) 0%, rgba(12,37,69,0.58) 55%, rgba(12,37,69,0.30) 100%)' }}
        />

        <div className="relative z-20 h-full flex flex-col">
          <div className="h-[72px] shrink-0" />

          <div className="flex-1 min-h-0 flex flex-col justify-center overflow-hidden">
            <div className="max-w-[1320px] mx-auto px-5 lg:px-10 w-full">
              <div className="max-w-full sm:max-w-[82%] lg:max-w-[65%] xl:max-w-[60%]">
                <HeroLabel>Request a Quote</HeroLabel>
                <h1 className="text-white text-xl sm:text-2xl lg:text-[30px] xl:text-[34px] font-bold font-display leading-tight mb-4 lg:whitespace-nowrap lg:overflow-hidden lg:text-ellipsis">
                  Tell Us About Your Requirements
                </h1>
                <p className="text-white/72 text-sm sm:text-base font-body leading-relaxed lg:whitespace-nowrap lg:overflow-hidden lg:text-ellipsis">
                  Tailored logistics solutions built around your exact specifications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STICKY STEP PROGRESS BAR ─────────────────────────────────── */}
      <div className="bg-white border-b border-hairline sticky top-[72px] z-30 shadow-xs">
        <div className="max-w-[1320px] mx-auto px-5 lg:px-10">
          <div className="flex items-center overflow-x-auto py-2 scrollbar-hide" style={{ scrollbarWidth: 'none' }}>
            {steps.map((s, i) => (
              <div key={s} className="flex items-center shrink-0">
                <button
                  type="button"
                  onClick={() => i < step && setStep(i)}
                  className={`flex items-center gap-2.5 px-3 py-3 rounded-sm transition-colors ${
                    i <= step ? 'cursor-pointer hover:bg-linen/60' : 'cursor-default opacity-60'
                  }`}
                >
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold font-display shrink-0 transition-colors ${
                    i < step 
                      ? 'bg-gold text-white' 
                      : i === step 
                        ? 'bg-navy text-white shadow-xs' 
                        : 'bg-linen text-dim border border-hairline'
                  }`}>
                    {i < step ? (
                      <svg viewBox="0 0 12 12" className="w-3 h-3 fill-white" aria-hidden="true">
                        <path d="M10 3L5 8.5 2 5.5" stroke="white" strokeWidth="1.75" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    ) : i + 1}
                  </div>
                  <span className={`text-sm font-display tracking-wide whitespace-nowrap transition-colors ${
                    i === step ? 'text-navy font-bold' : i < step ? 'text-navy font-medium' : 'text-dim'
                  }`}>
                    {s}
                  </span>
                </button>
                {i < steps.length - 1 && (
                  <div className={`w-6 sm:w-10 h-[2px] mx-1 transition-colors ${i < step ? 'bg-gold' : 'bg-hairline'}`} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── FORM CONTENT SECTION ──────────────────────────────────────── */}
      <section className="bg-linen py-16 lg:py-24">
        <div className="max-w-[1320px] mx-auto px-5 lg:px-10">
          <div className="max-w-2xl bg-white p-6 sm:p-10 rounded-sm border border-hairline shadow-sm">

            {/* Step 0: Contact Details */}
            {step === 0 && (
              <div>
                <SectionTag>Step 1 of 4</SectionTag>
                <h2 className="text-navy text-2xl font-bold font-display mb-6 leading-tight">Your Contact Details</h2>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className={labelClass} htmlFor="q-name">Full Name <span className="text-gold">*</span></label>
                      <input id="q-name" type="text" required placeholder="Your full name" value={form.fullName} onChange={(e) => setForm({ ...form, fullName: e.target.value })} className={inputClass} />
                    </div>
                    <div>
                      <label className={labelClass} htmlFor="q-company">Company / Organisation <span className="text-gold">*</span></label>
                      <input id="q-company" type="text" required placeholder="Organisation name" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} className={inputClass} />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className={labelClass} htmlFor="q-email">Business Email <span className="text-gold">*</span></label>
                      <input id="q-email" type="email" required placeholder="you@company.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputClass} />
                    </div>
                    <div>
                      <label className={labelClass} htmlFor="q-phone">Phone</label>
                      <input id="q-phone" type="tel" placeholder="Your phone number" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className={inputClass} />
                    </div>
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="q-country">Country</label>
                    <input id="q-country" type="text" value={form.country} onChange={(e) => setForm({ ...form, country: e.target.value })} className={inputClass} />
                  </div>
                </div>
              </div>
            )}

            {/* Step 1: Requirement */}
            {step === 1 && (
              <div>
                <SectionTag>Step 2 of 4</SectionTag>
                <h2 className="text-navy text-2xl font-bold font-display mb-2 leading-tight">What Do You Need?</h2>
                <p className="text-dim text-sm font-body mb-6">Select one or more services. You can select multiple if your requirement spans several areas.</p>
                <div className="grid grid-cols-1 gap-3">
                  {serviceOptions.map((s) => {
                    const isSelected = form.services.includes(s)
                    return (
                      <button
                        key={s}
                        type="button"
                        onClick={() => toggleService(s)}
                        className={`p-4 border rounded-sm text-left text-sm font-display transition-all duration-200 flex items-center justify-between shadow-xs ${
                          isSelected
                            ? 'border-navy bg-navy/5 text-navy font-semibold'
                            : 'border-hairline bg-white text-dim hover:border-navy/30 hover:text-navy'
                        }`}
                      >
                        <span className="text-sm">{s}</span>
                        <div className={`w-5 h-5 rounded-sm border flex items-center justify-center shrink-0 transition-colors ${
                          isSelected ? 'bg-gold border-gold text-white' : 'border-hairline bg-white'
                        }`}>
                          {isSelected && (
                            <svg viewBox="0 0 12 12" className="w-3 h-3 fill-current" aria-hidden="true">
                              <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.75" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          )}
                        </div>
                      </button>
                    )
                  })}
                </div>
              </div>
            )}

            {/* Step 2: Cargo & Shipment */}
            {step === 2 && (
              <div>
                <SectionTag>Step 3 of 4</SectionTag>
                <h2 className="text-navy text-2xl font-bold font-display mb-6 leading-tight">Cargo &amp; Shipment Details</h2>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className={labelClass} htmlFor="q-origin">Origin / Collection Location</label>
                      <input id="q-origin" type="text" placeholder="e.g. Felixstowe, UK" value={form.origin} onChange={(e) => setForm({ ...form, origin: e.target.value })} className={inputClass} />
                    </div>
                    <div>
                      <label className={labelClass} htmlFor="q-destination">Destination</label>
                      <input id="q-destination" type="text" placeholder="e.g. Birmingham, UK" value={form.destination} onChange={(e) => setForm({ ...form, destination: e.target.value })} className={inputClass} />
                    </div>
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="q-goods">Goods Description</label>
                    <input id="q-goods" type="text" placeholder="Describe the goods or cargo" value={form.goodsDescription} onChange={(e) => setForm({ ...form, goodsDescription: e.target.value })} className={inputClass} />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className={labelClass} htmlFor="q-qty">Quantity / Units</label>
                      <input id="q-qty" type="text" placeholder="e.g. 10 pallets" value={form.quantity} onChange={(e) => setForm({ ...form, quantity: e.target.value })} className={inputClass} />
                    </div>
                    <div>
                      <label className={labelClass} htmlFor="q-weight">Weight</label>
                      <input id="q-weight" type="text" placeholder="e.g. 5,000 kg" value={form.weight} onChange={(e) => setForm({ ...form, weight: e.target.value })} className={inputClass} />
                    </div>
                    <div>
                      <label className={labelClass} htmlFor="q-dims">Dimensions</label>
                      <input id="q-dims" type="text" placeholder="L × W × H" value={form.dimensions} onChange={(e) => setForm({ ...form, dimensions: e.target.value })} className={inputClass} />
                    </div>
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="q-date">Required Collection / Delivery Date</label>
                    <input id="q-date" type="date" value={form.collectionDate} onChange={(e) => setForm({ ...form, collectionDate: e.target.value })} className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="q-special">Special Requirements</label>
                    <input id="q-special" type="text" placeholder="e.g. temperature control, hazardous goods, fragile cargo" value={form.specialRequirements} onChange={(e) => setForm({ ...form, specialRequirements: e.target.value })} className={inputClass} />
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Additional Info */}
            {step === 3 && (
              <div>
                <SectionTag>Step 4 of 4</SectionTag>
                <h2 className="text-navy text-2xl font-bold font-display mb-6 leading-tight">Additional Information</h2>
                <div className="space-y-5">
                  <div>
                    <label className={labelClass} htmlFor="q-additional">Additional Details</label>
                    <textarea
                      id="q-additional"
                      rows={5}
                      placeholder="Include any other relevant information about your requirement, timeline, frequency, or specific considerations..."
                      value={form.additionalInfo}
                      onChange={(e) => setForm({ ...form, additionalInfo: e.target.value })}
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  {/* Summary Box */}
                  <div className="p-6 bg-linen border border-hairline rounded-sm">
                    <h3 className="text-navy text-sm font-semibold font-display mb-3.5 flex items-center gap-2">
                      <span className="w-4 h-px bg-gold shrink-0" />
                      Quote Request Summary
                    </h3>
                    <div className="space-y-2 text-sm font-body">
                      <div className="flex gap-3"><span className="text-dim w-28 shrink-0">Name:</span><span className="text-navy font-medium">{form.fullName || '—'}</span></div>
                      <div className="flex gap-3"><span className="text-dim w-28 shrink-0">Company:</span><span className="text-navy font-medium">{form.company || '—'}</span></div>
                      <div className="flex gap-3"><span className="text-dim w-28 shrink-0">Email:</span><span className="text-navy font-medium">{form.email || '—'}</span></div>
                      <div className="flex gap-3"><span className="text-dim w-28 shrink-0">Services:</span><span className="text-navy font-medium">{form.services.length > 0 ? form.services.join(', ') : '—'}</span></div>
                      {form.origin && <div className="flex gap-3"><span className="text-dim w-28 shrink-0">Origin:</span><span className="text-navy font-medium">{form.origin}</span></div>}
                      {form.destination && <div className="flex gap-3"><span className="text-dim w-28 shrink-0">Destination:</span><span className="text-navy font-medium">{form.destination}</span></div>}
                      {form.goodsDescription && <div className="flex gap-3"><span className="text-dim w-28 shrink-0">Goods:</span><span className="text-navy font-medium">{form.goodsDescription}</span></div>}
                    </div>
                  </div>

                  <div className="p-4 bg-linen rounded-sm border border-hairline">
                    <p className="text-dim text-xs font-body leading-relaxed">
                      By submitting this form you agree to our Privacy Policy. Your information will be used solely to prepare and respond to your quote request.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Form Step Navigation Buttons */}
            <div className="mt-8 pt-6 border-t border-hairline flex items-center justify-between">
              {step > 0 ? (
                <button
                  type="button"
                  onClick={() => setStep(step - 1)}
                  className="flex items-center gap-2 px-6 py-3 border border-hairline text-navy text-sm font-semibold font-display rounded-sm hover:bg-linen transition-colors"
                >
                  <svg viewBox="0 0 16 16" className="w-3.5 h-3.5 fill-current" aria-hidden="true">
                    <path d="M15 8a.5.5 0 00-.5-.5H2.707l3.147-3.146a.5.5 0 10-.708-.708l-4 4a.5.5 0 000 .708l4 4a.5.5 0 00.708-.708L2.707 8.5H14.5A.5.5 0 0015 8z" />
                  </svg>
                  Back
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => onNavigate('home')}
                  className="text-dim text-sm font-body hover:text-navy transition-colors"
                >
                  Cancel
                </button>
              )}

              {step < steps.length - 1 ? (
                <button
                  type="button"
                  onClick={() => setStep(step + 1)}
                  className="inline-flex items-center gap-2 px-7 py-3 bg-navy text-white text-sm font-bold font-display rounded-sm hover:bg-navy-mid transition-all shadow-md hover:shadow-lg"
                >
                  Continue
                  <ArrowIcon />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleFinalSubmit}
                  className="px-8 py-3.5 text-navy text-sm font-bold font-display rounded-sm transition-all shadow-md hover:shadow-lg"
                  style={{ backgroundColor: '#eed484' }}
                  onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#dfbd51' }}
                  onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#eed484' }}
                >
                  Submit Quote Request
                </button>
              )}
            </div>

            {/* Trust Note */}
            <p className="mt-6 text-dim text-xs font-body text-center">
              We aim to respond to all quote requests within 1 business day. For urgent requirements, please call us or use WhatsApp.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}