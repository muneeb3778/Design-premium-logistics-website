// src/components/Footer.jsx
import { waLink } from '../constants'

/*
  FIX (per decision "Update Service Tabs: Remove the commodity trading
  and supply chain tabs from the services navigation menu"):
  Footer service list now matches the finalized 4-service structure
  used on the Home page (Transportation, Imports, Warehousing, Distribution).
  "Supply Chain Solutions" and "Commodity Trading" removed completely.
*/
const services = [
  { label: 'Transportation' },
  { label: 'Imports' },
  { label: 'Warehousing' },
  { label: 'Distribution' },
]

const company = [
  { label: 'About Us', page: 'about' },
  { label: 'Services & Solutions', page: 'services' },
  { label: 'Industries', page: 'industries' },
  { label: 'Contact', page: 'contact' },
  { label: 'Request a Quote', page: 'quote' },
]

export default function Footer({ onNavigate }) {
  return (
    <footer className="bg-navy">
      <div className="max-w-[1320px] mx-auto px-5 lg:px-10">

        {/* Main */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="lg:col-span-1">
            <button
              onClick={() => onNavigate('home')}
              className="flex items-center gap-3 mb-6 group"
              aria-label="Go to homepage"
            >
              <div className="w-9 h-9 bg-white/10 flex items-center justify-center rounded-sm group-hover:bg-white/15 transition-colors">
                <svg viewBox="0 0 20 20" className="w-5 h-5" fill="none" aria-hidden="true">
                  <circle cx="10" cy="10" r="8.5" stroke="white" strokeWidth="1.2" />
                  <path d="M10 2L11.8 9L10 11L8.2 9Z" fill="white" opacity="0.95" />
                  <path d="M10 18L8.2 11L10 9L11.8 11Z" fill="white" opacity="0.4" />
                  <path d="M2 10L9 8.2L11 10L9 11.8Z" fill="white" opacity="0.4" />
                  <path d="M18 10L11 11.8L9 10L11 8.2Z" fill="white" opacity="0.95" />
                </svg>
              </div>
              <div>
                <span className="block text-sm font-semibold text-white font-display tracking-wide">[COMPANY NAME]</span>
                <span className="block text-[10px] text-white/40 tracking-[0.14em] uppercase font-body">Logistics & Trading</span>
              </div>
            </button>
            <p className="text-sm leading-relaxed text-white/45 font-body mb-6 max-w-[280px]">
              Transportation, logistics, warehousing, distribution and import solutions for UK and international supply chains.
            </p>
            <div className="flex gap-2.5">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-white/10 hover:bg-white/20 flex items-center justify-center rounded-sm transition-colors"
                aria-label="Follow us on LinkedIn"
              >
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-white" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-white/10 hover:bg-white/20 flex items-center justify-center rounded-sm transition-colors"
                aria-label="Follow us on X (Twitter)"
              >
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-white" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.258 5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white text-[10px] font-semibold tracking-[0.14em] uppercase mb-5 font-display">Services</h3>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s.label}>
                  <button
                    onClick={() => onNavigate('services')}
                    className="text-sm text-white/45 hover:text-white/80 transition-colors font-body text-left leading-snug"
                  >
                    {s.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white text-[10px] font-semibold tracking-[0.14em] uppercase mb-5 font-display">Company</h3>
            <ul className="space-y-2.5">
              {company.map(({ label, page }) => (
                <li key={label}>
                  <button
                    onClick={() => onNavigate(page)}
                    className="text-sm text-white/45 hover:text-white/80 transition-colors font-body text-left"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-[10px] font-semibold tracking-[0.14em] uppercase mb-5 font-display">Contact</h3>
            <ul className="space-y-3.5">
              <li>
                <a href="tel:[PHONE_NUMBER]" className="flex items-start gap-2.5 text-sm text-white/45 hover:text-white/80 transition-colors font-body group">
                  <svg viewBox="0 0 16 16" className="w-4 h-4 fill-white/30 mt-0.5 shrink-0 group-hover:fill-white/50 transition-colors" aria-hidden="true">
                    <path d="M3.654 1.328a.678.678 0 00-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 004.168 6.608 17.569 17.569 0 006.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 00-.063-1.015l-2.307-1.794a.678.678 0 00-.58-.122l-2.19.547a1.745 1.745 0 01-1.657-.459L5.482 8.062a1.745 1.745 0 01-.46-1.657l.548-2.19a.678.678 0 00-.122-.58L3.654 1.328z" />
                  </svg>
                  [PHONE NUMBER]
                </a>
              </li>
              <li>
                <a href="mailto:[EMAIL_ADDRESS]" className="flex items-start gap-2.5 text-sm text-white/45 hover:text-white/80 transition-colors font-body group break-all">
                  <svg viewBox="0 0 16 16" className="w-4 h-4 fill-white/30 mt-0.5 shrink-0 group-hover:fill-white/50 transition-colors" aria-hidden="true">
                    <path d="M0 4a2 2 0 012-2h12a2 2 0 012 2v8a2 2 0 01-2 2H2a2 2 0 01-2-2V4zm2-1a1 1 0 00-1 1v.217l7 4.2 7-4.2V4a1 1 0 00-1-1H2zm13 2.383l-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 002 13h12a1 1 0 00.966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z" />
                  </svg>
                  [EMAIL ADDRESS]
                </a>
              </li>
              <li>
                <a href={waLink} target="_blank" rel="noopener noreferrer" className="flex items-start gap-2.5 text-sm text-white/45 hover:text-white/80 transition-colors font-body group">
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white/30 mt-0.5 shrink-0 group-hover:fill-white/50 transition-colors" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp Us
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <svg viewBox="0 0 16 16" className="w-4 h-4 fill-white/30 mt-1 shrink-0" aria-hidden="true">
                  <path d="M8 16s6-5.686 6-10A6 6 0 002 6c0 4.314 6 10 6 10zm0-7a3 3 0 110-6 3 3 0 010 6z" />
                </svg>
                <span className="text-sm text-white/45 font-body leading-relaxed">[Company Address]<br />United Kingdom</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/25 font-body order-2 sm:order-1">
            © {new Date().getFullYear()} [COMPANY NAME] Ltd. All rights reserved. Company Reg: [REGISTRATION NUMBER]
          </p>
          <div className="flex flex-wrap items-center gap-4 order-1 sm:order-2">
            {['Privacy Policy', 'Cookie Policy', 'Terms & Conditions', 'Accessibility'].map((link) => (
              <button key={link} className="text-xs text-white/25 hover:text-white/50 transition-colors font-body">
                {link}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}