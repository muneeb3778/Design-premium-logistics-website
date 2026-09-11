// src/components/CtaSection.jsx
import { waLink } from '../constants'

function WhatsAppIcon({ className = 'w-4 h-4' }) {
  return (
    <svg viewBox="0 0 24 24" className={`fill-current ${className}`} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

function QuoteButton({ onClick, size = 'md', className = '' }) {
  const padding = size === 'lg' ? 'px-6 py-3.5' : 'px-6 py-3'
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center justify-center ${padding} text-navy text-sm font-bold font-display rounded-sm transition-all shadow-md hover:shadow-lg ${className}`}
      style={{ backgroundColor: '#eed484' }}
      onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#dfbd51' }}
      onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#eed484' }}
    >
      Request a Quote
    </button>
  )
}

export default function CtaSection({ onNavigate }) {
  return (
    <section className="relative overflow-hidden bg-navy py-20 lg:py-24">
      <img
        src="https://images.unsplash.com/photo-1641176716788-d4816a66dc6d?w=1920&h=700&fit=crop&auto=format"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover opacity-15"
      />
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(105deg, rgba(12,37,69,0.98) 0%, rgba(12,37,69,0.90) 60%, rgba(12,37,69,0.75) 100%)' }}
      />

      <div className="max-w-[1320px] mx-auto px-5 lg:px-10 relative text-center">
        <div className="flex justify-center">
          <span className="block text-gold text-sm sm:text-base font-bold font-display tracking-[0.12em] uppercase mb-3">
            Get in Touch
          </span>
        </div>

        <h2 className="text-white text-2xl lg:text-3xl xl:text-4xl font-bold font-display leading-tight mb-4 max-w-2xl mx-auto">
          Have a Transportation, Warehousing or Urgent Delivery Requirement?
        </h2>

        <p className="text-white/65 text-base font-body leading-relaxed mb-9 max-w-xl mx-auto">
          Tell us what you need to move, store or distribute and our team will review your requirements and respond promptly.
        </p>

        <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-3.5">
          <QuoteButton
            onClick={() => onNavigate('quote')}
            size="lg"
            className="w-full sm:w-56 py-3.5 px-6"
          />

          <button
            onClick={() => onNavigate('contact')}
            className="w-full sm:w-56 py-3.5 px-6 inline-flex items-center justify-center border border-white/28 bg-white/10 text-white text-sm font-bold font-display rounded-sm hover:bg-white/20 transition-colors shadow-sm"
          >
            Speak to Our Team
          </button>

          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-56 py-3.5 px-6 inline-flex items-center justify-center gap-2 text-white text-sm font-bold font-display rounded-sm transition-all hover:brightness-110 shadow-md"
            style={{ backgroundColor: '#25D366' }}
          >
            <WhatsAppIcon className="w-4 h-4 shrink-0" />
            WhatsApp Chat
          </a>
        </div>
      </div>
    </section>
  )
}
