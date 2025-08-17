import React from 'react'
import { useInView } from 'react-intersection-observer'
import ahmadImage from '../assets/images/ahmad.webp.jpeg'
import moizImage from '../assets/images/Moiz Khan.jpeg'
import sidneyImage from '../assets/images/Sidney Simone Barmoha.jpeg'

const Testimonials = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const testimonials = [
    {
      name: 'Ahmad',
      role: 'Software Developer',
      avatar: ahmadImage,
      content: "Waqas Ashraf's attention to detail and ability to translate complex requirements into beautiful, functional interfaces is exceptional. The project exceeded our expectations.",
      gradient: 'from-blue-400 to-purple-500'
    },
    {
      name: 'Moiz Khan',
      role: 'CTO, StartupLab',
      avatar: moizImage,
      content: "Working with Waqas Ashraf was a game-changer for our platform. His modern approach to frontend development and performance optimization delivered outstanding results.",
      gradient: 'from-green-400 to-blue-500'
    },
    {
      name: 'Sidney Simone Barmoha',
      role: 'Design Lead, CreativeStudio',
      avatar: sidneyImage,
      content: "Waqas Ashraf has an incredible ability to bring designs to life with pixel-perfect precision. His understanding of modern web standards is impressive.",
      gradient: 'from-purple-400 to-pink-500'
    }
  ]

  return (
    <section id="testimonials" className="section-padding">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-20 reveal-element ${inView ? 'revealed' : ''}`} ref={ref}>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Client Testimonials</span>
          </h2>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            What people say about working with me
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className={`testimonial-card glass rounded-3xl p-8 reveal-element ${
                inView ? 'revealed' : ''
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-center mb-6">
                <div className={`w-16 h-16 bg-gradient-to-r ${testimonial.gradient} rounded-full flex items-center justify-center text-2xl mr-4 overflow-hidden`}>
                  {typeof testimonial.avatar === 'string' && testimonial.avatar.startsWith('👨') || testimonial.avatar.startsWith('👩') ? (
                    testimonial.avatar
                  ) : (
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-full h-full object-cover rounded-full"
                    />
                  )}
                </div>
                <div>
                  <h4 className="text-lg font-bold">{testimonial.name}</h4>
                  <p className="text-sm" style={{ color: 'var(--text-muted)' }}>{testimonial.role}</p>
                </div>
              </div>
              <p className="text-lg mb-6 italic leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                "{testimonial.content}"
              </p>
              <div className="flex text-yellow-400 text-sm">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-16 reveal-element ${inView ? 'revealed' : ''}`}>
          <div className="glass rounded-3xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to work together?</h3>
            <p className="mb-6" style={{ color: 'var(--text-secondary)' }}>
              Let's discuss your next project and bring your vision to life
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById('contact')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }
              }}
              className="btn-primary px-8 py-4 rounded-full text-white font-semibold hover:scale-105 transition-all duration-300"
            >
              <i className="fas fa-paper-plane mr-2"></i>Start a Project
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
