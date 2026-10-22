# Moz Midlands — Premium Logistics Web Application

React 19 + Vite + Tailwind CSS v4 logistics web platform built for **Moz Midlands**, providing UK and international transportation, imports, warehousing, and distribution solutions.

---

## 1. Development & Environment

- **Dev Server**: Vite server runs automatically on `$PORT` (default `8443`). No manual server start is required.
- **Hot Reload**: Source edits in `src/` hot reload immediately in the live preview.
- **Production Build**: Verified with `npm run build` (`vite build`).

---

## 2. Complete Folder & File Structure

```text
Design premium logistics website/
├── .figma/
│   └── make/                  # Figma Make internal deployment & route configurations
├── .mise.toml                 # Toolchain versions (Node.js & package manager)
├── AGENTS.md                  # Project architecture, guidelines, and reference guide
├── index.html                 # Vite HTML entry shell mounting #root
├── package.json               # Dependencies, build tooling, and project metadata
├── vite.config.js             # Vite configuration with React & Tailwind CSS v4 plugins
└── src/
    ├── main.jsx               # React entrypoint mounting <App /> into #root
    ├── App.jsx                # Root router component managing currentPage state & scroll
    ├── index.css              # Global Tailwind CSS v4 stylesheet, brand tokens & typography
    ├── constants.js           # Central constants (e.g. waLink WhatsApp click-to-chat URL)
    │
    ├── assets/                # Visual media, logos, and photography
    │   ├── logo.png           # Official primary brand logo (dark text + gold accent on transparent)
    │   ├── logo-white.png     # Inverted brand logo (white text + gold accent for dark themes)
    │   └── client/            # Official client photography for sectors & services
    │       ├── transportation.jpg       # Inland transport, freight & fleet hero
    │       ├── solutions_hero.jpg       # Warehousing, logistics hub & operations
    │       ├── healthcare.jpg          # NHS & medical supply chain logistics
    │       ├── arts_film_studios.jpg   # Studio, production & equipment logistics
    │       ├── public_sector.jpg       # Civic & institutional supply chains
    │       ├── defence.jpg             # High-security commercial & defence logistics
    │       ├── industrial.jpg          # Heavy engineering, palletised cargo & machinery
    │       └── imports_freight.jpg     # Port & air freight cargo handling
    │
    ├── components/            # Reusable UI layout and interface components
    │   ├── Logo.jsx           # Adaptive brand logo component (light/dark modes)
    │   ├── Nav.jsx            # Fixed header navigation with scroll spy & transparency
    │   ├── Footer.jsx         # Multi-column site footer with glowing `#eed484` links
    │   └── CtaSection.jsx     # Reusable final CTA section (Quote, Contact & WhatsApp)
    │
    ├── services/              # API and webhook integration services
    │   └── submitForm.js      # Form submission dispatcher sending enquiries & quotes to n8n webhook
    │
    └── pages/                 # Full-page view components
        ├── Home.jsx           # Landing page with hero slideshow, services cards, sectors, clients & FAQ
        ├── About.jsx          # Our Story, What We Do, Our Approach (parallel grid) & Markets
        ├── Services.jsx       # Interactive services explorer with sticky scroll spy tabs
        ├── Industries.jsx     # Sectors breakdown with scroll-margin offset sticky tabs
        ├── Contact.jsx        # Direct enquiry form, phone, email, and live office details
        └── Quote.jsx          # Multi-step logistics quote request with time window selectors
```

---

## 3. Architecture & Routing

The application uses an efficient state-based SPA router managed in [`src/App.jsx`](file:///c:/Users/Lenovo/Desktop/Design%20premium%20logistics%20website/src/App.jsx):

| Page ID | Component | Role & Content |
| :--- | :--- | :--- |
| `home` | [`Home.jsx`](file:///c:/Users/Lenovo/Desktop/Design%20premium%20logistics%20website/src/pages/Home.jsx) | Hero slideshow, elevated solution cards, why choose us, sector previews, verified testimonial, enterprise partner ticker, and interactive FAQ. |
| `about` | [`About.jsx`](file:///c:/Users/Lenovo/Desktop/Design%20premium%20logistics%20website/src/pages/About.jsx) | Corporate narrative, connected supply chain services, vertically parallel **Our Approach** pillars & core values, and markets served. |
| `services` | [`Services.jsx`](file:///c:/Users/Lenovo/Desktop/Design%20premium%20logistics%20website/src/pages/Services.jsx) | Deep dive into Transportation, Critical Deliveries, Imports, Warehousing, and Distribution with synchronized sticky tab navigation. |
| `industries` | [`Industries.jsx`](file:///c:/Users/Lenovo/Desktop/Design%20premium%20logistics%20website/src/pages/Industries.jsx) | Specialized supply-chain solutions: Healthcare, Arts & Film Studios, Public Sector, Defence-Related, and Commercial & Industrial with calibrated sticky offsets. |
| `contact` | [`Contact.jsx`](file:///c:/Users/Lenovo/Desktop/Design%20premium%20logistics%20website/src/pages/Contact.jsx) | Contact information, telephone/email/WhatsApp direct lines, and interactive general enquiry form. |
| `quote` | [`Quote.jsx`](file:///c:/Users/Lenovo/Desktop/Design%20premium%20logistics%20website/src/pages/Quote.jsx) | 5-step interactive quote builder with cargo dimensions, date pickers, and pickup/dropoff time window selectors. |

---

## 4. Design System & Brand Tokens

The visual style is governed by **Tailwind CSS v4** via [`src/index.css`](file:///c:/Users/Lenovo/Desktop/Design%20premium%20logistics%20website/src/index.css):

| Token | Hex Value | Usage |
| :--- | :--- | :--- |
| **Navy Primary** (`--color-navy`) | `#0c2545` | Hero sections, headers, footer background, primary buttons |
| **Navy Deep** (`--color-navy-dark`) | `#07182c` | Dark contrast layers, borders, deep shading |
| **Gold Accent** (`--color-gold`) | `#dfbd51` | Eyebrow tags, section labels, active tabs, underline bars |
| **Gold Luminous** (`#eed484`) | `#eed484` | Primary "Request a Quote" buttons, footer hover glow |
| **Linen Neutral** (`--color-linen`) | `#f9f8f6` | Alternating section backgrounds, card containers |
| **Hairline Border** (`--color-hairline`) | `#e5e2dc` | Subtle card dividers, borders, input outlines |

### Typography
- **Headings & Display**: `Instrument Sans`, sans-serif (font-display)
- **Body & Forms**: `Source Sans 3`, sans-serif (font-body)

---

## 5. Agent & Code Quality Rules

1. **Apostrophe Safety**: Always use double quotes for strings containing apostrophes (`"We're here to help"`), or escape them in single-quoted strings to prevent Vite build failures.
2. **Line Endings**: Normalize all project files to Unix/LF (`\n`) line endings.
3. **Component Exports**: Always export React components as `default export`.
4. **Clickable Links**: In chat responses, always provide clickable Markdown links formatted with the `file:///` URI scheme for changed files and symbols.
5. **Sticky Header Offsets**: Fixed top navigation is `72px` and sticky sub-navigation tabs are `~50px`. All in-page scroll anchors must include a minimum `146px` offset (`scroll-mt-[146px]` and `window.scrollTo` delta) to ensure section headers and tags remain completely visible below the sticky bars.
