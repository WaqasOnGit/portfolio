import React, { useEffect, useRef } from 'react'

const Hero = () => {
  const particlesContainerRef = useRef(null)

  useEffect(() => {
    createParticles()
  }, [])

  const createParticles = () => {
    if (!particlesContainerRef.current) return
    
    const container = particlesContainerRef.current
    const particleCount = 30

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div')
      particle.className = 'particle'
      
      const size = Math.random() * 6 + 2
      const x = Math.random() * window.innerWidth
      const y = Math.random() * window.innerHeight
      const delay = Math.random() * 8
      const duration = Math.random() * 4 + 6
      
      particle.style.width = size + 'px'
      particle.style.height = size + 'px'
      particle.style.left = x + 'px'
      particle.style.top = y + 'px'
      particle.style.animationDelay = delay + 's'
      particle.style.animationDuration = duration + 's'
      particle.style.opacity = Math.random() * 0.3 + 0.1
      
      container.appendChild(particle)
    }
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden mesh-gradient">
      {/* Floating Particles */}
      <div className="absolute inset-0" ref={particlesContainerRef}></div>
      
      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div className="space-y-8">
          {/* Greeting */}
          <div className="opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <p className="text-lg font-mono text-blue-400 mb-4">Hello, I'm</p>
          </div>
          
          {/* Name */}
          <div className="opacity-0 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <h1 className="text-6xl md:text-8xl font-bold mb-6">
              <span className="gradient-text">Waqas Ashraf</span>
            </h1>
          </div>
          
          {/* Role with Typewriter Effect */}
          <div className="opacity-0 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <h2 className="text-2xl md:text-4xl font-light mb-8 h-16 flex items-center justify-center">
              <span className="typewriter font-mono">Frontend Architect & UI Engineer</span>
            </h2>
          </div>
          
          {/* Description */}
          <div className="opacity-0 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-12 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              Crafting pixel-perfect digital experiences with modern web technologies. 
              Specialized in React ecosystems and performance optimization.
            </p>
          </div>
          
          {/* CTA Buttons */}
          <div className="opacity-0 animate-fade-in flex flex-col sm:flex-row gap-6 justify-center" style={{ animationDelay: '1s' }}>
            <button 
              className="btn-primary px-8 py-4 rounded-full text-white font-semibold hover:scale-105 transition-all duration-300"
              onClick={() => scrollToSection('projects')}
            >
              <i className="fas fa-rocket mr-2"></i>View Projects
            </button>
            <button 
              className="glass px-8 py-4 rounded-full font-semibold hover:scale-105 transition-all duration-300"
              onClick={() => scrollToSection('contact')}
            >
              <i className="fas fa-paper-plane mr-2"></i>Get In Touch
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero
