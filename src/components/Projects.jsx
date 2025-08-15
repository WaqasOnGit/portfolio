import React, { useState } from 'react'
import { useInView } from 'react-intersection-observer'

const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const [selectedProject, setSelectedProject] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const projects = [
    {
      id: 'ecommerce',
      title: 'ModernShop',
      description: 'Full-stack e-commerce platform with advanced filtering, real-time inventory, and seamless checkout experience.',
      icon: '🛍️',
      gradient: 'from-blue-500 via-purple-600 to-pink-500',
      tech: ['React', 'Next.js', 'Stripe', 'MongoDB'],
      github: 'https://github.com/username/modernshop',
      demo: 'https://modernshop-demo.vercel.app',
      details: {
        overview: 'A full-stack e-commerce platform built with modern web technologies. Features include advanced product filtering, real-time inventory management, secure payment processing with Stripe, and a comprehensive admin dashboard.',
        features: [
          'Responsive design with mobile-first approach',
          'Advanced search and filtering system',
          'Real-time inventory tracking',
          'Secure payment processing with Stripe',
          'User authentication and profiles',
          'Admin dashboard with analytics',
          'Shopping cart with persistent state',
          'Order tracking and management'
        ],
        technologies: ['React 18', 'Next.js 13', 'TypeScript', 'Tailwind CSS', 'Node.js', 'MongoDB', 'Stripe API', 'JWT Auth'],
        performance: [
          { metric: 'Lighthouse Score', value: '95/100', color: 'text-green-400' },
          { metric: 'First Contentful Paint', value: '1.2s', color: 'text-green-400' },
          { metric: 'Time to Interactive', value: '2.1s', color: 'text-green-400' }
        ]
      }
    },
    {
      id: 'taskflow',
      title: 'TaskFlow Pro',
      description: 'Collaborative task management with real-time updates, drag-and-drop functionality, and team analytics.',
      icon: '📋',
      gradient: 'from-green-500 via-teal-600 to-blue-500',
      tech: ['React', 'Firebase', 'Framer Motion', 'Chart.js'],
      github: 'https://github.com/username/taskflow',
      demo: 'https://taskflow-pro.vercel.app',
      details: {
        overview: 'A collaborative task management application with real-time updates, drag-and-drop functionality, team collaboration features, and comprehensive analytics dashboard.',
        features: [
          'Real-time collaboration with WebSocket',
          'Drag-and-drop task management',
          'Team workspaces and permissions',
          'Advanced filtering and search',
          'Time tracking and reporting',
          'File attachments and comments',
          'Mobile-responsive design',
          'Dark/Light theme support'
        ],
        technologies: ['React', 'Firebase', 'Framer Motion', 'Chart.js', 'React DnD', 'Material-UI', 'PWA', 'WebSocket'],
        achievements: [
          { metric: 'User Engagement', value: '+40%', color: 'text-green-400' },
          { metric: 'Task Completion Rate', value: '85%', color: 'text-green-400' },
          { metric: 'Team Productivity', value: '+25%', color: 'text-green-400' }
        ]
      }
    },
    {
      id: 'weather',
      title: 'WeatherLens',
      description: 'Beautiful weather application with location-based forecasts, interactive maps, and detailed analytics.',
      icon: '🌤️',
      gradient: 'from-orange-500 via-red-600 to-pink-500',
      tech: ['React', 'OpenWeather API', 'Mapbox', 'PWA'],
      github: 'https://github.com/username/weatherlens',
      demo: 'https://weatherlens.vercel.app',
      details: {
        overview: 'A beautiful weather application with location-based forecasts, interactive weather maps, detailed weather analytics, and Progressive Web App capabilities.',
        features: [
          'Location-based weather forecasts',
          'Interactive weather maps',
          '7-day detailed forecasts',
          'Weather alerts and notifications',
          'Historical weather data',
          'Offline functionality (PWA)',
          'Multiple location tracking',
          'Beautiful weather animations'
        ],
        technologies: ['React', 'OpenWeather API', 'Mapbox GL', 'PWA', 'Service Worker', 'Geolocation API', 'Chart.js', 'CSS Animations'],
        highlights: [
          { metric: 'API Response Time', value: '< 500ms', color: 'text-green-400' },
          { metric: 'Offline Capability', value: '✓ Full', color: 'text-green-400' },
          { metric: 'Mobile Performance', value: '98/100', color: 'text-green-400' }
        ]
      }
    },
    {
      id: 'portfolio',
      title: 'Creative Portfolio',
      description: 'Interactive portfolio website with smooth animations, dark mode, and optimized performance.',
      icon: '💼',
      gradient: 'from-purple-500 via-indigo-600 to-blue-500',
      tech: ['Next.js', 'Framer Motion', 'Tailwind', 'TypeScript'],
      github: 'https://github.com/username/portfolio',
      demo: 'https://portfolio-demo.vercel.app',
      details: {
        overview: 'Interactive portfolio website with smooth animations, dark mode, and optimized performance.',
        features: [
          'Smooth page transitions',
          'Dark/Light theme toggle',
          'Responsive design',
          'Performance optimized',
          'SEO friendly',
          'Accessibility compliant'
        ],
        technologies: ['Next.js', 'Framer Motion', 'Tailwind CSS', 'TypeScript', 'React Hook Form', 'Framer Motion'],
        highlights: [
          { metric: 'Performance Score', value: '98/100', color: 'text-green-400' },
          { metric: 'Accessibility', value: '95/100', color: 'text-green-400' },
          { metric: 'SEO Score', value: '100/100', color: 'text-green-400' }
        ]
      }
    },
    {
      id: 'crypto',
      title: 'CryptoTracker',
      description: 'Real-time cryptocurrency tracking with portfolio management, price alerts, and market analysis.',
      icon: '₿',
      gradient: 'from-yellow-500 via-orange-600 to-red-500',
      tech: ['React', 'WebSocket', 'CoinGecko API', 'Chart.js'],
      github: 'https://github.com/username/cryptotracker',
      demo: 'https://cryptotracker.vercel.app',
      details: {
        overview: 'Real-time cryptocurrency tracking with portfolio management, price alerts, and market analysis.',
        features: [
          'Real-time price updates',
          'Portfolio tracking',
          'Price alerts',
          'Market analysis',
          'Historical data charts',
          'News integration',
          'Mobile responsive',
          'PWA support'
        ],
        technologies: ['React', 'WebSocket', 'CoinGecko API', 'Chart.js', 'PWA', 'Service Worker'],
        highlights: [
          { metric: 'Real-time Updates', value: '< 1s', color: 'text-green-400' },
          { metric: 'Data Accuracy', value: '99.9%', color: 'text-green-400' },
          { metric: 'User Rating', value: '4.8/5', color: 'text-green-400' }
        ]
      }
    },
    {
      id: 'social',
      title: 'SocialHub',
      description: 'Comprehensive social media management dashboard with analytics, scheduling, and engagement tracking.',
      icon: '📱',
      gradient: 'from-pink-500 via-purple-600 to-indigo-500',
      tech: ['React', 'Node.js', 'Express', 'MongoDB'],
      github: 'https://github.com/username/socialhub',
      demo: 'https://socialhub.vercel.app',
      details: {
        overview: 'Comprehensive social media management dashboard with analytics, scheduling, and engagement tracking.',
        features: [
          'Multi-platform integration',
          'Content scheduling',
          'Analytics dashboard',
          'Engagement tracking',
          'Team collaboration',
          'Automated responses',
          'Performance insights',
          'ROI tracking'
        ],
        technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.io', 'JWT', 'Multer', 'Chart.js'],
        highlights: [
          { metric: 'Platform Support', value: '6+', color: 'text-green-400' },
          { metric: 'Time Saved', value: '60%', color: 'text-green-400' },
          { metric: 'Engagement Boost', value: '+45%', color: 'text-green-400' }
        ]
      }
    }
  ]

  const openProjectModal = (project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const closeProjectModal = () => {
    setIsModalOpen(false)
    setSelectedProject(null)
  }

  return (
    <section id="projects" className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-20 reveal-element ${inView ? 'revealed' : ''}`} ref={ref}>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            A curated selection of my recent work showcasing modern web development practices
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className={`project-card glass rounded-3xl overflow-hidden reveal-element group ${
                inView ? 'revealed' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`relative h-64 bg-gradient-to-br ${project.gradient} overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 space-x-4">
                    <a 
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary px-6 py-3 rounded-full text-sm font-semibold"
                    >
                      <i className="fas fa-external-link-alt mr-2"></i>Live Demo
                    </a>
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glass px-6 py-3 rounded-full text-sm font-semibold"
                    >
                      <i className="fab fa-github mr-2"></i>Code
                    </a>
                  </div>
                </div>
                <div className="absolute top-6 left-6 text-6xl">{project.icon}</div>
                <div className="absolute bottom-6 right-6 glass px-3 py-1 rounded-full text-xs font-medium">
                  {project.tech[0]} + {project.tech[1]}
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                <p className="mb-6 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="glass px-3 py-1 rounded-full text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex gap-3">
                  <button
                    onClick={() => openProjectModal(project)}
                    className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors duration-300"
                  >
                    View Details →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      {isModalOpen && selectedProject && (
        <div className="fixed inset-0 modal-backdrop flex items-center justify-center z-50 p-4">
          <div className="glass rounded-3xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-3xl font-bold gradient-text">{selectedProject.title}</h3>
              <button 
                onClick={closeProjectModal}
                className="text-gray-400 hover:text-white text-2xl hover:scale-110 transition-all duration-300"
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
            
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-bold mb-4 text-blue-400">🚀 Project Overview</h4>
                  <p className="mb-6 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    {selectedProject.details.overview}
                  </p>
                  
                  <h4 className="text-xl font-bold mb-4 text-green-400">✨ Key Features</h4>
                  <ul className="space-y-2 mb-6" style={{ color: 'var(--text-secondary)' }}>
                    {selectedProject.details.features.map((feature, index) => (
                      <li key={index}>• {feature}</li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-xl font-bold mb-4 text-purple-400">🛠️ Technologies Used</h4>
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {selectedProject.details.technologies.map((tech, index) => (
                      <span key={index} className="glass px-3 py-2 rounded-lg text-sm">{tech}</span>
                    ))}
                  </div>
                  
                  <h4 className="text-xl font-bold mb-4 text-orange-400">
                    {selectedProject.details.performance ? '📊 Performance' : '🌟 Highlights'}
                  </h4>
                  <div className="space-y-3">
                    {(selectedProject.details.performance || selectedProject.details.achievements || selectedProject.details.highlights).map((item, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span>{item.metric}</span>
                        <span className={`${item.color} font-bold`}>{item.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-6 glass rounded-xl">
                <div className="flex justify-center space-x-4">
                  <a 
                    href={selectedProject.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary px-6 py-3 rounded-full text-sm font-semibold"
                  >
                    <i className="fas fa-external-link-alt mr-2"></i>Live Demo
                  </a>
                  <a 
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass px-6 py-3 rounded-full text-sm font-semibold"
                  >
                    <i className="fab fa-github mr-2"></i>View Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Projects
