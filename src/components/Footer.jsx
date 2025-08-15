import React from 'react'

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t" style={{ borderColor: 'var(--glass-border)' }}>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-2xl font-bold">
            <span className="gradient-text">Waqas Ashraf </span>
          </div>
          <p style={{ color: 'var(--text-secondary)' }}>
            © 2025 WAQAS ASHRAF . Crafted with passion and modern web technologies.
          </p>
        </div>
        
        {/* Back to Top Button */}
        <div className="text-center mt-8">
          <button
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
            className="glass px-6 py-3 rounded-full text-sm font-medium hover:scale-105 transition-all duration-300"
          >
            <i className="fas fa-arrow-up mr-2"></i>Back to Top
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
