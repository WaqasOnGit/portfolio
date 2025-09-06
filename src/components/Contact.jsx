import React, { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { db } from "../firebase/firebase"

const Contact = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Validate form data
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setSubmitStatus('error')
      setTimeout(() => setSubmitStatus(null), 3000)
      return
    }

    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // Create contact data
      const contactData = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        subject: formData.subject.trim(),
        message: formData.message.trim(),
        createdAt: serverTimestamp(),
        status: 'new'
      }

      // Save to Firestore
      const contactsRef = collection(db, 'contacts')
      const docRef = await addDoc(contactsRef, contactData)
      
      console.log('Contact saved successfully with ID:', docRef.id)
      
      // Success
      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
      
    } catch (error) {
      console.error('Firebase error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus(null), 5000)
    }
  }

  const contactInfo = [
    {
      icon: 'fas fa-envelope',
      title: 'Email',
      value: 'wa588085@gmail.com',
      gradient: 'from-blue-500 to-purple-500'
    },
    {
      icon: 'fas fa-phone',
      title: 'Phone',
      value: '+92 3039889517 ',
      gradient: 'from-green-500 to-teal-500'
    },
    {
      icon: 'fas fa-map-marker-alt',
      title: 'Location',
      value: 'Karachi, Pakistan, LY',
      gradient: 'from-purple-500 to-pink-500'
    }
  ]

  const socialLinks = [
    { icon: 'fab fa-linkedin', href: 'https://www.linkedin.com/in/waqas-ali-094098336/', gradient: 'from-blue-600 to-blue-700' },
    { icon: 'fab fa-github', href: 'https://github.com/WaqasOnGit', gradient: 'from-gray-800 to-gray-900' },
    { icon: 'fab fa-twitter', href: 'https://x.com/waqasashraf006', gradient: 'from-blue-400 to-blue-500' },
    { icon: 'fab fa-dribbble', href: '#', gradient: 'from-pink-500 to-red-500' }
  ]

  return (
    <section id="contact" className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-20 reveal-element ${inView ? 'revealed' : ''}`} ref={ref}>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Let's Build Something Amazing</span>
          </h2>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Ready to bring your vision to life? Let's discuss your next project
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className={`space-y-8 reveal-element ${inView ? 'revealed' : ''}`}>
            <div className="glass rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-8">Get In Touch</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className={`w-14 h-14 bg-gradient-to-r ${info.gradient} rounded-full flex items-center justify-center`}>
                      <i className={`${info.icon} text-white text-lg`}></i>
                    </div>
                    <div>
                      <p className="font-semibold text-lg">{info.title}</p>
                      <p style={{ color: 'var(--text-secondary)' }}>{info.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="mt-10 pt-8 border-t border-white/10">
                <p className="font-semibold text-lg mb-6">Connect With Me</p>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a 
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 bg-gradient-to-r ${social.gradient} rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300`}
                    >
                      <i className={`${social.icon} text-white`}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`glass rounded-3xl p-8 reveal-element ${inView ? 'revealed' : ''}`}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="form-input w-full px-6 py-4 rounded-xl text-lg transition-all duration-300 focus:scale-[1.02]"
                    disabled={isSubmitting}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="form-input w-full px-6 py-4 rounded-xl text-lg transition-all duration-300 focus:scale-[1.02]"
                    disabled={isSubmitting}
                  />
                </div>
              </div>
              
              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="form-input w-full px-6 py-4 rounded-xl text-lg transition-all duration-300 focus:scale-[1.02]"
                  disabled={isSubmitting}
                />
              </div>
              
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Tell me about your project..."
                  rows="6"
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                  className="form-input w-full px-6 py-4 rounded-xl text-lg resize-none transition-all duration-300 focus:scale-[1.02]"
                  disabled={isSubmitting}
                ></textarea>
              </div>
              
              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="p-4 bg-green-500/20 border border-green-500/30 rounded-xl text-green-400 text-center">
                  <i className="fas fa-check-circle mr-2"></i>
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="p-4 bg-red-500/20 border border-red-500/30 rounded-xl text-red-400 text-center">
                  <i className="fas fa-exclamation-circle mr-2"></i>
                  Failed to send message. Please try again or contact me directly.
                </div>
              )}
              
              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 ${
                  isSubmitting 
                    ? 'bg-gray-500 cursor-not-allowed' 
                    : 'btn-primary hover:scale-[1.02]'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <i className="fas fa-spinner fa-spin mr-2"></i>
                    Sending Message...
                  </>
                ) : (
                  <>
                    <i className="fas fa-paper-plane mr-2"></i>
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact