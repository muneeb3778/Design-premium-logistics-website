// src/pages/Quote.jsx
import { useState, useRef, useEffect } from 'react'
import CtaSection from '../components/CtaSection'

const serviceOptions = [
  'Transportation & Inland Logistics',
  'Imports & Freight',
  'Warehousing & Storage',
  'Distribution & Delivery',
  'Other / Multiple Services',
]

const steps = ['Contact Details', 'Requirement', 'Pickup', 'Dropoff', 'Additional Info']

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

/**
 * Custom resizable textarea with a permanently visible drag handle.
 * Fixes the native browser bug where the resize grip gets hidden
 * behind the scrollbar once the content overflows.
 */
function ResizableTextarea({ id, value, onChange, placeholder, rows = 4, minHeight = 100, className = '' }) {
  const textareaRef = useRef(null)
  const [isResizing, setIsResizing] = useState(false)
  const startY = useRef(0)
  const startHeight = useRef(0)

  const handleMouseDown = (e) => {
    e.preventDefault()
    setIsResizing(true)
    startY.current = e.clientY
    startHeight.current = textareaRef.current.offsetHeight
    document.body.style.cursor = 'ns-resize'
    document.body.style.userSelect = 'none'
  }

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isResizing || !textareaRef.current) return
      const newHeight = startHeight.current + (e.clientY - startY.current)
      if (newHeight >= minHeight) {
        textareaRef.current.style.height = `${newHeight}px`
      }
    }
    const handleMouseUp = () => {
      setIsResizing(false)
      document.body.style.cursor = ''
      document.body.style.userSelect = ''
    }
    if (isResizing) {
      window.addEventListener('mousemove', handleMouseMove)
      window.addEventListener('mouseup', handleMouseUp)
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseup', handleMouseUp)
    }
  }, [isResizing, minHeight])

  // Touch support for mobile drag-resize
  const handleTouchStart = (e) => {
    setIsResizing(true)
    startY.current = e.touches[0].clientY
    startHeight.current = textareaRef.current.offsetHeight
  }

  useEffect(() => {
    const handleTouchMove = (e) => {
      if (!isResizing || !textareaRef.current) return
      const newHeight = startHeight.current + (e.touches[0].clientY - startY.current)
      if (newHeight >= minHeight) {
        textareaRef.current.style.height = `${newHeight}px`
      }
    }
    const handleTouchEnd = () => setIsResizing(false)
    if (isResizing) {
      window.addEventListener('touchmove', handleTouchMove)
      window.addEventListener('touchend', handleTouchEnd)
    }
    return () => {
      window.removeEventListener('touchmove', handleTouchMove)
      window.removeEventListener('touchend', handleTouchEnd)
    }
  }, [isResizing, minHeight])

  return (
    <div className="relative">
      <textarea
        ref={textareaRef}
        id={id}
        rows={rows}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        style={{ minHeight: `${minHeight}px` }}
        className={`${className} resize-none pr-6`}
      />
      <div
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
        className="absolute bottom-1.5 right-1.5 w-4 h-4 cursor-ns-resize flex items-center justify-center text-dim/70 hover:text-navy transition-colors z-10"
        title="Drag to resize"
      >
        <svg viewBox="0 0 16 16" className="w-3.5 h-3.5 fill-current" aria-hidden="true">
          <path d="M13.5 13.5h-2v-2h2v2zm0-4.5h-2V7h2v2zm-4.5 4.5h-2v-2h2v2z" />
        </svg>
      </div>
    </div>
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
    // Pickup fields
    pickupDoorNo: '',
    pickupStreet: '',
    pickupCity: '',
    pickupPostcode: '',
    pickupCountry: 'United Kingdom',
    goodsDescription: '',
    quantity: '',
    weight: '',
    dimensions: '',
    pickupDate: '',
    specialRequirements: '',
    // Dropoff fields
    dropoffDoorNo: '',
    dropoffStreet: '',
    dropoffCity: '',
    dropoffPostcode: '',
    dropoffCountry: 'United Kingdom',
    dropoffDate: '',
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
        style={{ height: '74vh', minHeight: 580, maxHeight: 800 }}
      >
        <img
          src="https://images.unsplash.com/photo-1551471698-c7787ff6b7ca?w=1920&h=1080&fit=crop&auto=format"
          alt="Logistics fleet prepared for transportation quote"
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
                <HeroLabel>Request a Quote</HeroLabel>
                <h1 className="text-white text-2xl sm:text-3xl lg:text-4xl xl:text-[44px] font-bold font-display leading-[1.2] mb-4">
                  Tell Us About Your Requirements
                </h1>
                <p className="text-white/90 text-base sm:text-lg font-body leading-relaxed max-w-2xl">
                  Tailored logistics solutions built around your exact specifications.
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
                  <span className={`text-sm sm:text-base font-display tracking-wide whitespace-nowrap transition-colors ${
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

       {/* Form content */}
      <div className="max-w-[1320px] mx-auto px-5 lg:px-10 py-10 lg:py-14">
        <div className="max-w-2xl">

          {/* Step 0: Contact Details */}
          {step === 0 && (
            <div>
              <h2 className="text-navy text-2xl font-bold font-display mb-6">Your Contact Details</h2>
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
              <h2 className="text-navy text-2xl font-bold font-display mb-2">What Do You Need?</h2>
              <p className="text-dim text-base font-body mb-6">Select one or more services. You can select multiple if your requirement spans several areas.</p>
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

          {/* Step 2: Pickup */}
          {step === 2 && (
            <div>
              <h2 className="text-navy text-2xl font-bold font-display mb-6">Pickup Details</h2>
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className={labelClass} htmlFor="q-pickup-door">Door No.</label>
                    <input id="q-pickup-door" type="text" placeholder="e.g. Unit 4B" value={form.pickupDoorNo} onChange={(e) => setForm({ ...form, pickupDoorNo: e.target.value })} className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="q-pickup-street">Street</label>
                    <input id="q-pickup-street" type="text" placeholder="e.g. Industrial Way" value={form.pickupStreet} onChange={(e) => setForm({ ...form, pickupStreet: e.target.value })} className={inputClass} />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className={labelClass} htmlFor="q-pickup-city">City</label>
                    <input id="q-pickup-city" type="text" placeholder="e.g. London" value={form.pickupCity} onChange={(e) => setForm({ ...form, pickupCity: e.target.value })} className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="q-pickup-postcode">Postcode / Pin</label>
                    <input id="q-pickup-postcode" type="text" placeholder="e.g. EC1A 1BB" value={form.pickupPostcode} onChange={(e) => setForm({ ...form, pickupPostcode: e.target.value })} className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="q-pickup-country">Country</label>
                    <input id="q-pickup-country" type="text" placeholder="e.g. United Kingdom" value={form.pickupCountry} onChange={(e) => setForm({ ...form, pickupCountry: e.target.value })} className={inputClass} />
                  </div>
                </div>
                <div>
                  <label className={labelClass} htmlFor="q-goods">Goods Description</label>
                  <ResizableTextarea
                    id="q-goods"
                    rows={4}
                    minHeight={100}
                    placeholder="Describe the goods or cargo (drag the corner handle to expand/shrink)"
                    value={form.goodsDescription}
                    onChange={(e) => setForm({ ...form, goodsDescription: e.target.value })}
                    className={inputClass}
                  />
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
                  <label className={labelClass} htmlFor="q-pickup-date">Pick Up Date</label>
                  <input id="q-pickup-date" type="date" value={form.pickupDate} onChange={(e) => setForm({ ...form, pickupDate: e.target.value })} className={inputClass} />
                </div>
                <div>
                  <label className={labelClass} htmlFor="q-special">Special Requirements</label>
                  <input id="q-special" type="text" placeholder="e.g. temperature control, hazardous goods, fragile cargo" value={form.specialRequirements} onChange={(e) => setForm({ ...form, specialRequirements: e.target.value })} className={inputClass} />
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Dropoff */}
          {step === 3 && (
            <div>
              <h2 className="text-navy text-2xl font-bold font-display mb-6">Dropoff Details</h2>
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className={labelClass} htmlFor="q-dropoff-door">Door No.</label>
                    <input id="q-dropoff-door" type="text" placeholder="e.g. Unit 12" value={form.dropoffDoorNo} onChange={(e) => setForm({ ...form, dropoffDoorNo: e.target.value })} className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="q-dropoff-street">Street</label>
                    <input id="q-dropoff-street" type="text" placeholder="e.g. Logistics Park" value={form.dropoffStreet} onChange={(e) => setForm({ ...form, dropoffStreet: e.target.value })} className={inputClass} />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className={labelClass} htmlFor="q-dropoff-city">City</label>
                    <input id="q-dropoff-city" type="text" placeholder="e.g. Birmingham" value={form.dropoffCity} onChange={(e) => setForm({ ...form, dropoffCity: e.target.value })} className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="q-dropoff-postcode">Postcode / Pin</label>
                    <input id="q-dropoff-postcode" type="text" placeholder="e.g. B1 1AA" value={form.dropoffPostcode} onChange={(e) => setForm({ ...form, dropoffPostcode: e.target.value })} className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="q-dropoff-country">Country</label>
                    <input id="q-dropoff-country" type="text" placeholder="e.g. United Kingdom" value={form.dropoffCountry} onChange={(e) => setForm({ ...form, dropoffCountry: e.target.value })} className={inputClass} />
                  </div>
                </div>
                <div>
                  <label className={labelClass} htmlFor="q-dropoff-date">Drop Off Date</label>
                  <input id="q-dropoff-date" type="date" value={form.dropoffDate} onChange={(e) => setForm({ ...form, dropoffDate: e.target.value })} className={inputClass} />
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Additional Info */}
          {step === 4 && (
            <div>
              <h2 className="text-navy text-2xl font-bold font-display mb-6">Additional Information</h2>
              <div className="space-y-4">
                <div>
                  <label className={labelClass} htmlFor="q-additional">Additional Details</label>
                  <ResizableTextarea
                    id="q-additional"
                    rows={6}
                    minHeight={120}
                    placeholder="Include any other relevant information about your requirement, timeline, frequency, or specific considerations..."
                    value={form.additionalInfo}
                    onChange={(e) => setForm({ ...form, additionalInfo: e.target.value })}
                    className={inputClass}
                  />
                </div>

                {/* Summary */}
                <div className="p-5 bg-linen border border-hairline rounded-sm">
                  <h3 className="text-navy text-base font-semibold font-display mb-3">Quote Request Summary</h3>
                  <div className="space-y-2 text-sm font-body">
                    <div className="flex gap-3"><span className="text-dim w-28 shrink-0">Name:</span><span className="text-navy">{form.fullName || '—'}</span></div>
                    <div className="flex gap-3"><span className="text-dim w-28 shrink-0">Company:</span><span className="text-navy">{form.company || '—'}</span></div>
                    <div className="flex gap-3"><span className="text-dim w-28 shrink-0">Email:</span><span className="text-navy">{form.email || '—'}</span></div>
                    <div className="flex gap-3"><span className="text-dim w-28 shrink-0">Services:</span><span className="text-navy">{form.services.length > 0 ? form.services.join(', ') : '—'}</span></div>
                    {form.pickupCity && <div className="flex gap-3"><span className="text-dim w-28 shrink-0">Pickup:</span><span className="text-navy">{`${form.pickupDoorNo ? form.pickupDoorNo + ', ' : ''}${form.pickupStreet ? form.pickupStreet + ', ' : ''}${form.pickupCity}`}</span></div>}
                    {form.dropoffCity && <div className="flex gap-3"><span className="text-dim w-28 shrink-0">Dropoff:</span><span className="text-navy">{`${form.dropoffDoorNo ? form.dropoffDoorNo + ', ' : ''}${form.dropoffStreet ? form.dropoffStreet + ', ' : ''}${form.dropoffCity}`}</span></div>}
                    {form.goodsDescription && <div className="flex gap-3"><span className="text-dim w-28 shrink-0">Goods:</span><span className="text-navy">{form.goodsDescription}</span></div>}
                  </div>
                </div>

                <div className="p-4 bg-sky-light/30 border border-sky-light rounded-sm">
                  <p className="text-dim text-sm font-body leading-relaxed">
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
                className="px-8 py-3 bg-gold text-navy text-sm font-bold font-display rounded-sm hover:bg-gold-light transition-colors shadow-md"
              >
                Submit Quote Request
              </button>
            )}
          </div>

          {/* Trust note */}
          <p className="mt-6 text-dim text-sm font-body text-center">
            We aim to respond to all quote requests within 1 business day. For urgent requirements, please call us or use WhatsApp.
          </p>
        </div>
      </div>

      {/* ── FINAL CTA ─────────────────────────────────────────────────── */}
      <CtaSection onNavigate={onNavigate} />

    </div>
  )
}