import React from 'react'
import { useInView } from 'react-intersection-observer'

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  return (
    <section id="about" className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Profile Image */}
          <div className={`relative reveal-element ${inView ? 'revealed' : ''}`} ref={ref}>
            <div className="glass rounded-3xl p-8 transform hover:scale-105 transition-all duration-500">
              <div className="aspect-square bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-8xl relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <span className="relative z-10">👨‍💻</span>
              </div>
            </div>
            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-500/20 rounded-full floating-element"></div>
            <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-purple-500/20 rounded-full floating-element" style={{ animationDelay: '2s' }}></div>
          </div>

          {/* About Content */}
          <div className={`space-y-8 reveal-element ${inView ? 'revealed' : ''}`}>
            <div>
              <h2 className="text-5xl md:text-6xl font-bold mb-8">
                <span className="gradient-text">About Me</span>
              </h2>
              
              <div className="space-y-6 text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                <p>
                  I'm a passionate frontend developer who believes great user experiences are built on the intersection of beautiful design and clean, performant code.
                </p>
                <p>
                  My approach combines modern development practices with an eye for detail that ensures every pixel serves a purpose. I specialize in React ecosystems, TypeScript, and creating scalable component libraries.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring the latest web technologies, contributing to open-source projects, or mentoring fellow developers in the community.
                </p>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/10">
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text mb-2">15+</div>
                <div className="text-sm font-medium" style={{ color: 'var(--text-muted)' }}>Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text mb-2">2+</div>
                <div className="text-sm font-medium" style={{ color: 'var(--text-muted)' }}>Years Learning</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text mb-2">100%</div>
                <div className="text-sm font-medium" style={{ color: 'var(--text-muted)' }}>Client Satisfaction</div>
              </div>
            </div>

            {/* Core Technologies */}
            <div className="flex flex-wrap gap-3 pt-6">
              <span className="glass px-4 py-2 rounded-full text-sm font-medium flex items-center space-x-2 hover:scale-105 transition-all duration-300">
                <i className="fab fa-react text-blue-400"></i>
                <span>React</span>
              </span>
              <span className="glass px-4 py-2 rounded-full text-sm font-medium flex items-center space-x-2 hover:scale-105 transition-all duration-300">
                <i className="fab fa-js-square text-yellow-400"></i>
                <span>javascript</span>
              </span>
              <span className="glass px-4 py-2 rounded-full text-sm font-medium flex items-center space-x-2 hover:scale-105 transition-all duration-300">
                <i className="fab fa-node-js text-green-400"></i>
                <span>Next.js</span>
              </span>
              <span className="glass px-4 py-2 rounded-full text-sm font-medium flex items-center space-x-2 hover:scale-105 transition-all duration-300">
                <i className="fas fa-wind text-cyan-400"></i>
                <span>Tailwind</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
