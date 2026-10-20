// src/components/Logo.jsx
import logoDark from '../assets/logo.png'
import logoLight from '../assets/logo-white.png'

/**
 * Brand Logo component matching the client's official branding:
 * Bold 'MOZ' with geometric letterforms and 'MIDLANDS' with the authentic
 * navy accent bar beneath the first section of the word.
 *
 * Automatically adapts between light mode (for dark heroes & navy footer)
 * and dark mode (for white navbars and light backgrounds).
 */
export default function Logo({ light = false, className = '' }) {
  return (
    <img
      src={light ? logoLight : logoDark}
      alt="Moz Midlands"
      className={`h-7 sm:h-8 w-auto object-contain transition-opacity duration-200 select-none ${className}`}
    />
  )
}

