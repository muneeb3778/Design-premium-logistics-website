// src/pages/Contact.jsx
import { useState, useRef, useEffect } from 'react'
import { waLink } from '../constants'

function HeroLabel({ children }) {
  return (
    <span className="block text-gold text-sm sm:text-base font-bold font-display tracking-[0.12em] uppercase mb-4 pl-8">
      {children}
    </span>
  )
}

function SectionTag({ children, className = 'mb-3', noShift = false }) {
  return (
    <span className={`block text-gold text-sm sm:text-base font-bold font-display tracking-[0.12em] uppercase ${noShift ? '' : 'pl-8'} ${className}`}>
      {children}
    </span>
  )
}

function WhatsAppIcon({ className = 'w-4 h-4' }) {
  return (
    <svg viewBox="0 0 24 24" className={`fill-current ${className}`} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

const enquiryTypes = [
  'Transportation',
  'Imports',
  'Warehousing',
  'Distribution',
  'General Enquiry',
]

function CustomSelect({ id, value, onChange, options, placeholder }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        id={id}
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className={`w-full px-4 py-3 border border-hairline rounded-sm text-sm font-body text-left bg-white shadow-[0_2px_8px_rgba(12,37,69,0.06)] focus:outline-none focus:border-navy focus:ring-1 focus:ring-navy/20 focus:shadow-[0_4px_14px_rgba(12,37,69,0.12)] transition-all flex items-center justify-between ${
          value ? 'text-navy font-medium' : 'text-dim/50'
        }`}
      >
        <span>{value || placeholder}</span>
        <svg
          viewBox="0 0 16 16"
          className={`w-3.5 h-3.5 fill-gold shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          aria-hidden="true"
        >
          <path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 01.753 1.659l-4.796 5.48a1 1 0 01-1.506 0z" />
        </svg>
      </button>

      {open && (
        <div
          role="listbox"
          className="absolute z-30 mt-1.5 w-full bg-white border border-hairline rounded-sm shadow-[0_8px_24px_rgba(12,37,69,0.14)] overflow-hidden max-h-64 overflow-y-auto"
        >
          {options.map((opt) => (
            <button
              key={opt}
              type="button"
              role="option"
              aria-selected={value === opt}
              onClick={() => { onChange(opt); setOpen(false) }}
              className={`w-full text-left px-4 py-2.5 text-sm font-body transition-colors ${
                value === opt ? 'bg-gold/15 text-navy font-semibold' : 'text-navy hover:bg-linen'
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default function Contact({ onNavigate }) {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    enquiryType: '',
    message: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const inputClass = "w-full px-4 py-3 border border-hairline rounded-sm text-sm font-body text-navy placeholder:text-dim/50 bg-white shadow-[0_2px_8px_rgba(12,37,69,0.06)] focus:outline-none focus:border-navy focus:ring-1 focus:ring-navy/20 focus:shadow-[0_4px_14px_rgba(12,37,69,0.12)] transition-all"
  const labelClass = "block text-navy text-xs font-semibold font-display tracking-wide uppercase mb-2"

  return (
    <div>

      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden bg-navy"
        style={{ height: '65vh', minHeight: 500, maxHeight: 720 }}
      >
        <img
          src="https://images.unsplash.com/photo-1782948603191-065fb15e2e8e?w=1920&h=600&fit=crop&auto=format"
          alt="Warehouse representing our operations and contact"
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
                <HeroLabel>Contact</HeroLabel>
                <h1 className="text-white text-xl sm:text-2xl lg:text-[30px] xl:text-[34px] font-bold font-display leading-tight mb-4 lg:whitespace-nowrap lg:overflow-hidden lg:text-ellipsis">
                  Get in Touch With Our Team
                </h1>
                <p className="text-white/72 text-sm sm:text-base font-body leading-relaxed lg:whitespace-nowrap lg:overflow-hidden lg:text-ellipsis">
                  Let's discuss your logistics requirements today.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MAIN CONTACT SECTION ──────────────────────────────────────── */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-[1320px] mx-auto px-5 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-12 lg:gap-16">

            {/* Left Column: Contact Details */}
            <div>
              <SectionTag>Contact Details</SectionTag>
              <h2 className="text-navy text-3xl font-bold font-display mb-4 leading-tight">
                How to Reach Us
              </h2>
              <p className="text-dim text-base font-body leading-relaxed mb-8">
                Our team is available to discuss your requirements, answer questions and arrange a formal quote for your transportation, logistics or trading needs.
              </p>

              <div className="space-y-5 mb-8">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 bg-linen rounded-sm flex items-center justify-center shrink-0 mt-0.5">
                    <svg viewBox="0 0 16 16" className="w-4 h-4 fill-navy/60" aria-hidden="true">
                      <path d="M3.654 1.328a.678.678 0 00-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 004.168 6.608 17.569 17.569 0 006.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 00-.063-1.015l-2.307-1.794a.678.678 0 00-.58-.122l-2.19.547a1.745 1.745 0 01-1.657-.459L5.482 8.062a1.745 1.745 0 01-.46-1.657l.548-2.19a.678.678 0 00-.122-.58L3.654 1.328z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] text-dim font-body tracking-widest uppercase mb-0.5">Phone</p>
                    <a href="tel:[PHONE_NUMBER]" className="text-navy text-sm font-body hover:text-gold transition-colors">[PHONE NUMBER]</a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 bg-linen rounded-sm flex items-center justify-center shrink-0 mt-0.5">
                    <svg viewBox="0 0 16 16" className="w-4 h-4 fill-navy/60" aria-hidden="true">
                      <path d="M0 4a2 2 0 012-2h12a2 2 0 012 2v8a2 2 0 01-2 2H2a2 2 0 01-2-2V4zm2-1a1 1 0 00-1 1v.217l7 4.2 7-4.2V4a1 1 0 00-1-1H2zm13 2.383l-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 002 13h12a1 1 0 00.966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] text-dim font-body tracking-widest uppercase mb-0.5">Email</p>
                    <a href="mailto:[EMAIL_ADDRESS]" className="text-navy text-sm font-body hover:text-gold transition-colors break-all">[EMAIL ADDRESS]</a>
                  </div>
                </div>

                {/* WhatsApp contact row — uses waLink so the number is managed
                    from the single WHATSAPP_NUMBER constant at the top of
                    this file. Pre-filled text gives the agent instant context. */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 bg-linen rounded-sm flex items-center justify-center shrink-0 mt-0.5">
                    <WhatsAppIcon className="w-4 h-4 text-navy/60" />
                  </div>
                  <div>
                    <p className="text-[10px] text-dim font-body tracking-widest uppercase mb-0.5">WhatsApp</p>
                    <a
                      href={waLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-navy text-sm font-body hover:text-gold transition-colors"
                    >
                      Start a WhatsApp Conversation
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 bg-linen rounded-sm flex items-center justify-center shrink-0 mt-0.5">
                    <svg viewBox="0 0 16 16" className="w-4 h-4 fill-navy/60" aria-hidden="true">
                      <path d="M8 16s6-5.686 6-10A6 6 0 002 6c0 4.314 6 10 6 10zm0-7a3 3 0 110-6 3 3 0 010 6z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] text-dim font-body tracking-widest uppercase mb-0.5">Address</p>
                    <p className="text-navy text-sm font-body leading-relaxed">[Company Address]<br />United Kingdom</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 bg-linen rounded-sm flex items-center justify-center shrink-0 mt-0.5">
                    <svg viewBox="0 0 16 16" className="w-4 h-4 fill-navy/60" aria-hidden="true">
                      <path d="M8 3.5a.5.5 0 00-1 0V9a.5.5 0 00.252.434l3.5 2a.5.5 0 00.496-.868L8 8.71V3.5z" />
                      <path d="M8 16A8 8 0 108 0a8 8 0 000 16zm7-8A7 7 0 111 8a7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] text-dim font-body tracking-widest uppercase mb-0.5">Opening Hours</p>
                    <p className="text-navy text-sm font-body leading-relaxed">[OPENING HOURS]</p>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA card — same waLink constant */}
              <div className="p-5 bg-linen border border-hairline rounded-sm shadow-[0_2px_10px_rgba(12,37,69,0.05)]">
                <p className="text-navy text-sm font-semibold font-display mb-1.5">Quick questions?</p>
                <p className="text-dim text-xs font-body mb-3">Use WhatsApp for immediate responses to quick questions about our services.</p>
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-sm text-sm font-semibold font-display text-white transition-colors"
                  style={{ backgroundColor: '#25D366' }}
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  Start WhatsApp Chat
                </a>
              </div>
            </div>

            {/* Right Column: Enquiry Form */}
            <div>
              <SectionTag>Quick Enquiry</SectionTag>
              <h2 className="text-navy text-3xl font-bold font-display mb-3 leading-tight">
                Send Us an Enquiry
              </h2>
              <p className="text-dim text-base font-body mb-8">
                For a detailed quote, use our <button onClick={() => onNavigate('quote')} className="text-navy font-semibold underline underline-offset-4 hover:text-gold transition-colors">Request a Quote form</button>.
              </p>

              {submitted ? (
                <div className="p-10 bg-linen border border-hairline rounded-sm text-center shadow-sm">
                  <div className="w-14 h-14 bg-navy rounded-full flex items-center justify-center mx-auto mb-4 text-gold">
                    <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current" aria-hidden="true">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                    </svg>
                  </div>
                  <h3 className="text-navy text-xl font-bold font-display mb-2">Enquiry Received</h3>
                  <p className="text-dim text-sm font-body leading-relaxed max-w-md mx-auto">
                    Thank you for reaching out. Our team will review your message and respond promptly to the email address you provided.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className={labelClass} htmlFor="contact-name">Full Name <span className="text-gold">*</span></label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        placeholder="Your full name"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className={labelClass} htmlFor="contact-company">Company</label>
                      <input
                        id="contact-company"
                        type="text"
                        placeholder="Your organisation"
                        value={form.company}
                        onChange={(e) => setForm({ ...form, company: e.target.value })}
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className={labelClass} htmlFor="contact-email">Business Email <span className="text-gold">*</span></label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        placeholder="you@company.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className={labelClass} htmlFor="contact-phone">Phone</label>
                      <input
                        id="contact-phone"
                        type="tel"
                        placeholder="Your phone number"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div>
                    <label className={labelClass} htmlFor="contact-type">Enquiry Type</label>
                    <CustomSelect
                      id="contact-type"
                      value={form.enquiryType}
                      onChange={(val) => setForm({ ...form, enquiryType: val })}
                      options={enquiryTypes}
                      placeholder="Select enquiry type"
                    />
                  </div>

                  <div>
                    <label className={labelClass} htmlFor="contact-message">Message <span className="text-gold">*</span></label>
                    <textarea
                      id="contact-message"
                      required
                      rows={5}
                      placeholder="Describe your requirement or question..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  <div className="p-4 bg-linen rounded-sm border border-hairline">
                    <p className="text-dim text-xs font-body leading-relaxed">
                      By submitting this form you agree to our Privacy Policy. Your information will be used to respond to your enquiry and will not be shared with third parties.
                    </p>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 text-navy text-sm font-bold font-display rounded-sm transition-all shadow-md hover:shadow-lg"
                    style={{ backgroundColor: '#eed484' }}
                    onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#dfbd51' }}
                    onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#eed484' }}
                  >
                    Send Enquiry
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

    </div>
  )
}