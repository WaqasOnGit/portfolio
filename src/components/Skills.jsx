import React from 'react'
import { useInView } from 'react-intersection-observer'

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const skillCategories = [
    {
      icon: '⚛️',
      title: 'Frontend Development',
      skills: [
        { name: 'React & Next.js', icon: 'fab fa-react', color: 'text-blue-400', level: 5 },
        { name: 'javascript', icon: 'fab fa-js-square', color: 'text-yellow-400', level: 4 },
        { name: 'Tailwind CSS', icon: 'fas fa-wind', color: 'text-cyan-400', level: 4 }
      ]
    },
    {
      icon: '🛠️',
      title: 'Tools & Workflow',
      skills: [
        { name: 'Git & GitHub', icon: 'fab fa-git-alt', color: 'text-orange-400', level: 5 },
        { name: 'Figma', icon: 'fab fa-figma', color: 'text-purple-400', level: 4 },
        { name: 'Vercel & Netlify', icon: 'fas fa-rocket', color: 'text-green-400', level: 5 }
      ]
    },
    {
      icon: '🗄️',
      title: 'Backend & Database',
      skills: [
        { name: 'Node.js', icon: 'fab fa-node-js', color: 'text-green-400', level: 3 },
        { name: 'MongoDB', icon: 'fas fa-database', color: 'text-blue-400', level: 3 },
        { name: 'Firebase', icon: 'fas fa-fire', color: 'text-orange-400', level: 4 }
      ]
    }
  ]

  const renderSkillLevel = (level) => {
    const dots = []
    for (let i = 0; i < 5; i++) {
      dots.push(
        <div
          key={i}
          className={`w-2 h-2 rounded-full ${i < level ? 'bg-current' : 'bg-gray-600'}`}
        ></div>
      )
    }
    return dots
  }

  return (
    <section id="skills" className="section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-20 reveal-element ${inView ? 'revealed' : ''}`} ref={ref}>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Skills & Expertise</span>
          </h2>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            A comprehensive toolkit for building modern, scalable web applications
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex}
              className={`skill-card glass rounded-3xl p-8 reveal-element group ${
                inView ? 'revealed' : ''
              }`}
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {category.icon}
              </div>
              <h3 className="text-2xl font-bold mb-6">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center justify-between">
                    <span className="flex items-center space-x-2">
                      <i className={`${skill.icon} ${skill.color}`}></i>
                      <span>{skill.name}</span>
                    </span>
                    <div className="flex space-x-1">
                      {renderSkillLevel(skill.level)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className={`mt-16 text-center reveal-element ${inView ? 'revealed' : ''}`}>
          <h3 className="text-2xl font-bold mb-8">Additional Technologies</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { name: 'HTML5', icon: 'fab fa-html5', color: 'text-orange-500' },
              { name: 'CSS3', icon: 'fab fa-css3-alt', color: 'text-blue-500' },
              { name: 'JavaScript', icon: 'fab fa-js-square', color: 'text-yellow-500' },
              { name: 'Bootstrap', icon: 'fab fa-bootstrap', color: 'text-purple-500' },
              { name: 'Sass', icon: 'fab fa-sass', color: 'text-pink-500' },
              { name: 'Webpack', icon: 'fab fa-webpack', color: 'text-blue-600' },
              { name: 'Docker', icon: 'fab fa-docker', color: 'text-blue-400' },
              { name: 'AWS', icon: 'fab fa-aws', color: 'text-orange-600' }
            ].map((tech, index) => (
              <span
                key={index}
                className="glass px-4 py-2 rounded-full text-sm font-medium flex items-center space-x-2 hover:scale-105 transition-all duration-300"
              >
                <i className={`${tech.icon} ${tech.color}`}></i>
                <span>{tech.name}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
