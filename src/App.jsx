// src\App.jsx
import { useState } from 'react'
import Nav from './components/Nav'
import Footer from './components/Footer'
import { waLink } from './constants'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Industries from './pages/Industries'
import Contact from './pages/Contact'
import Quote from './pages/Quote'

export default function App() {
  const [currentPage, setCurrentPage] = useState('home')

  const navigate = (page) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'instant' })
  }

  return (
    <div className="min-h-screen flex flex-col bg-cream">
      <Nav currentPage={currentPage} onNavigate={navigate} />
      <main className="flex-1">
        {currentPage === 'home' && <Home onNavigate={navigate} />}
        {currentPage === 'about' && <About onNavigate={navigate} />}
        {currentPage === 'services' && <Services onNavigate={navigate} />}
        {currentPage === 'industries' && <Industries onNavigate={navigate} />}
        {currentPage === 'contact' && <Contact onNavigate={navigate} />}
        {currentPage === 'quote' && <Quote onNavigate={navigate} />}
      </main>
      <Footer onNavigate={navigate} />

      {/* Scroll to top floating button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-105"
        style={{ backgroundColor: '#eed484' }}
        aria-label="Scroll to top"
      >
        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-none stroke-white stroke-[2.5]" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M12 19V5M5 12l7-7 7 7" />
        </svg>
      </button>
    </div>
  )
}
