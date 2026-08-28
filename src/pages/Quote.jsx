import { useState } from 'react'

const serviceOptions = [
  'Transportation & Inland Logistics',
  'Shipping & Freight',
  'Import Logistics',
  'Warehousing & Storage',
  'Distribution & Delivery',
  'Supply Chain Solutions',
  'Commodity Trading',
  'Other / Multiple Services',
]

const steps = ['Contact Details', 'Requirement', 'Cargo & Shipment', 'Additional Info']

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

  const inputClass = "w-full px-4 py-3 border border-hairline rounded-sm text-sm font-body text-navy placeholder:text-dim/45 bg-white focus:outline-none focus:border-navy focus:ring-1 focus:ring-navy/15 transition-colors"
  const labelClass = "block text-navy text-xs font-semibold font-display tracking-wide uppercase mb-1.5"

  const toggleService = (s) => {
    setForm((f) => ({
      ...f,
      services: f.services.includes(s) ? f.services.filter((x) => x !== s) : [...f.services, s],
    }))
  }

  const handleFinalSubmit = () => setSubmitted(true)

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-linen px-5 pt-[72px]">
        <div className="max-w-lg w-full text-center py-20">
          <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center mx-auto mb-6">
            <svg viewBox="0 0 24 24" className="w-8 h-8 fill-white" aria-hidden="true">
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
            </svg>
          </div>
          <h2 className="text-navy text-3xl font-bold font-display mb-4">Quote Request Received</h2>
          <p className="text-dim text-base font-body leading-relaxed mb-8">
            Thank you, {form.fullName}. Our team will review your requirements and respond to you at <strong>{form.email}</strong> promptly.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <button onClick={() => onNavigate('home')} className="px-7 py-3 bg-navy text-white text-sm font-semibold font-display rounded-sm hover:bg-navy-mid transition-colors">
              Return to Homepage
            </button>
            <button onClick={() => onNavigate('contact')} className="px-7 py-3 border border-hairline text-navy text-sm font-medium font-body rounded-sm hover:bg-linen transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-linen min-h-screen pt-[72px]">
      {/* Page header */}
      <div className="bg-navy">
        <div className="max-w-[1320px] mx-auto px-5 lg:px-10 py-12 lg:py-16">
          <span className="flex items-center gap-2 text-[11px] font-semibold tracking-[0.14em] uppercase font-display mb-4 text-gold">
            <span className="w-6 h-px bg-gold shrink-0" />
            Request a Quote
          </span>
          <h1 className="text-white text-3xl lg:text-4xl font-bold font-display max-w-xl">
            Tell Us About Your Requirements
          </h1>
          <p className="text-white/50 text-sm font-body mt-3 max-w-lg">
            Complete the form below and our team will review your requirements and respond with a tailored quote.
          </p>
        </div>
      </div>

      {/* Step indicator */}
      <div className="bg-white border-b border-hairline">
        <div className="max-w-[1320px] mx-auto px-5 lg:px-10">
          <div className="flex items-center overflow-x-auto" style={{ scrollbarWidth: 'none' }}>
            {steps.map((s, i) => (
              <div key={s} className="flex items-center shrink-0">
                <div className={`flex items-center gap-2.5 px-2 py-4 ${i <= step ? 'cursor-pointer' : 'cursor-default'}`} onClick={() => i < step && setStep(i)}>
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold font-display shrink-0 transition-colors ${
                    i < step ? 'bg-gold text-white' : i === step ? 'bg-navy text-white' : 'bg-hairline text-dim'
                  }`}>
                    {i < step ? (
                      <svg viewBox="0 0 12 12" className="w-3 h-3 fill-white" aria-hidden="true"><path d="M10 3L5 8.5 2 5.5" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    ) : i + 1}
                  </div>
                  <span className={`text-sm font-medium whitespace-nowrap font-body transition-colors ${
                    i === step ? 'text-navy font-semibold' : i < step ? 'text-dim' : 'text-dim/50'
                  }`}>{s}</span>
                </div>
                {i < steps.length - 1 && (
                  <div className={`w-8 h-px mx-1 transition-colors ${i < step ? 'bg-gold' : 'bg-hairline'}`} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Form content */}
      <div className="max-w-[1320px] mx-auto px-5 lg:px-10 py-10 lg:py-14">
        <div className="max-w-2xl">

          {/* Step 0: Contact Details */}
          {step === 0 && (
            <div>
              <h2 className="text-navy text-xl font-bold font-display mb-6">Your Contact Details</h2>
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className={labelClass} htmlFor="q-name">Full Name *</label>
                    <input id="q-name" type="text" required placeholder="Your full name" value={form.fullName} onChange={(e) => setForm({ ...form, fullName: e.target.value })} className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="q-company">Company / Organisation *</label>
                    <input id="q-company" type="text" required placeholder="Organisation name" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} className={inputClass} />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className={labelClass} htmlFor="q-email">Business Email *</label>
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
              <h2 className="text-navy text-xl font-bold font-display mb-2">What Do You Need?</h2>
              <p className="text-dim text-sm font-body mb-6">Select one or more services. You can select multiple if your requirement spans several areas.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {serviceOptions.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => toggleService(s)}
                    className={`p-4 border rounded-sm text-left text-sm font-body transition-all ${
                      form.services.includes(s)
                        ? 'border-navy bg-navy text-white'
                        : 'border-hairline bg-white text-navy hover:border-navy/30'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <div className={`w-4 h-4 rounded-sm border flex items-center justify-center shrink-0 transition-colors ${
                        form.services.includes(s) ? 'bg-gold border-gold' : 'border-hairline bg-white'
                      }`}>
                        {form.services.includes(s) && (
                          <svg viewBox="0 0 12 12" className="w-2.5 h-2.5 fill-white" aria-hidden="true">
                            <path d="M2 6l3 3 5-5" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        )}
                      </div>
                      {s}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Cargo & Shipment */}
          {step === 2 && (
            <div>
              <h2 className="text-navy text-xl font-bold font-display mb-6">Cargo & Shipment Details</h2>
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
              <h2 className="text-navy text-xl font-bold font-display mb-6">Additional Information</h2>
              <div className="space-y-4">
                <div>
                  <label className={labelClass} htmlFor="q-additional">Additional Details</label>
                  <textarea
                    id="q-additional"
                    rows={6}
                    placeholder="Include any other relevant information about your requirement, timeline, frequency, or specific considerations..."
                    value={form.additionalInfo}
                    onChange={(e) => setForm({ ...form, additionalInfo: e.target.value })}
                    className={`${inputClass} resize-none`}
                  />
                </div>

                {/* Summary */}
                <div className="p-5 bg-linen border border-hairline rounded-sm">
                  <h3 className="text-navy text-sm font-semibold font-display mb-3">Quote Request Summary</h3>
                  <div className="space-y-2 text-sm font-body">
                    <div className="flex gap-3"><span className="text-dim w-28 shrink-0">Name:</span><span className="text-navy">{form.fullName || '—'}</span></div>
                    <div className="flex gap-3"><span className="text-dim w-28 shrink-0">Company:</span><span className="text-navy">{form.company || '—'}</span></div>
                    <div className="flex gap-3"><span className="text-dim w-28 shrink-0">Email:</span><span className="text-navy">{form.email || '—'}</span></div>
                    <div className="flex gap-3"><span className="text-dim w-28 shrink-0">Services:</span><span className="text-navy">{form.services.length > 0 ? form.services.join(', ') : '—'}</span></div>
                    {form.origin && <div className="flex gap-3"><span className="text-dim w-28 shrink-0">Origin:</span><span className="text-navy">{form.origin}</span></div>}
                    {form.destination && <div className="flex gap-3"><span className="text-dim w-28 shrink-0">Destination:</span><span className="text-navy">{form.destination}</span></div>}
                    {form.goodsDescription && <div className="flex gap-3"><span className="text-dim w-28 shrink-0">Goods:</span><span className="text-navy">{form.goodsDescription}</span></div>}
                  </div>
                </div>

                <div className="p-4 bg-sky-light/30 border border-sky-light rounded-sm">
                  <p className="text-dim text-xs font-body leading-relaxed">
                    By submitting this form you agree to our <button className="underline underline-offset-2 text-navy">Privacy Policy</button>. Your information will be used solely to prepare and respond to your quote request.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="mt-8 flex items-center justify-between">
            {step > 0 ? (
              <button
                onClick={() => setStep(step - 1)}
                className="flex items-center gap-2 px-5 py-3 border border-hairline text-navy text-sm font-medium font-body rounded-sm hover:bg-linen transition-colors"
              >
                <svg viewBox="0 0 16 16" className="w-3.5 h-3.5 fill-current" aria-hidden="true">
                  <path d="M15 8a.5.5 0 00-.5-.5H2.707l3.147-3.146a.5.5 0 10-.708-.708l-4 4a.5.5 0 000 .708l4 4a.5.5 0 00.708-.708L2.707 8.5H14.5A.5.5 0 0015 8z" />
                </svg>
                Back
              </button>
            ) : (
              <button
                onClick={() => onNavigate('home')}
                className="text-dim text-sm font-body hover:text-navy transition-colors"
              >
                Cancel
              </button>
            )}

            {step < steps.length - 1 ? (
              <button
                onClick={() => setStep(step + 1)}
                className="flex items-center gap-2 px-7 py-3 bg-navy text-white text-sm font-semibold font-display rounded-sm hover:bg-navy-mid transition-colors"
              >
                Continue
                <svg viewBox="0 0 16 16" className="w-3.5 h-3.5 fill-current" aria-hidden="true">
                  <path d="M1 8a.5.5 0 01.5-.5h11.793l-3.147-3.146a.5.5 0 01.708-.708l4 4a.5.5 0 010 .708l-4 4a.5.5 0 01-.708-.708L13.293 8.5H1.5A.5.5 0 011 8z" />
                </svg>
              </button>
            ) : (
              <button
                onClick={handleFinalSubmit}
                className="px-8 py-3 bg-gold text-white text-sm font-bold font-display rounded-sm hover:bg-gold-light transition-colors shadow-md"
              >
                Submit Quote Request
              </button>
            )}
          </div>

          {/* Trust note */}
          <p className="mt-6 text-dim text-xs font-body text-center">
            We aim to respond to all quote requests within 1 business day. For urgent requirements, please call us or use WhatsApp.
          </p>
        </div>
      </div>
    </div>
  )
}
