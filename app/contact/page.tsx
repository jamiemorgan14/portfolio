'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically handle the form submission
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <main>
      <h1>Contact Me</h1>
      <div style={{
        maxWidth: '600px',
        width: '100%',
        background: 'rgb(31, 41, 55)',
        padding: '2rem',
        borderRadius: '0.5rem',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)'
      }}>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label htmlFor="name" style={{ color: 'rgb(156, 163, 175)' }}>Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              style={{
                padding: '0.75rem',
                borderRadius: '0.375rem',
                border: '1px solid rgb(75, 85, 99)',
                background: 'rgb(17, 24, 39)',
                color: 'white',
                fontSize: '1rem'
              }}
            />
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label htmlFor="email" style={{ color: 'rgb(156, 163, 175)' }}>Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{
                padding: '0.75rem',
                borderRadius: '0.375rem',
                border: '1px solid rgb(75, 85, 99)',
                background: 'rgb(17, 24, 39)',
                color: 'white',
                fontSize: '1rem'
              }}
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label htmlFor="message" style={{ color: 'rgb(156, 163, 175)' }}>Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              style={{
                padding: '0.75rem',
                borderRadius: '0.375rem',
                border: '1px solid rgb(75, 85, 99)',
                background: 'rgb(17, 24, 39)',
                color: 'white',
                fontSize: '1rem',
                resize: 'vertical'
              }}
            />
          </div>

          <button
            type="submit"
            style={{
              background: '#3b82f6',
              color: 'white',
              padding: '0.75rem 1.5rem',
              borderRadius: '0.5rem',
              border: 'none',
              cursor: 'pointer',
              fontSize: '1rem',
              transition: 'background-color 0.2s'
            }}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#2563eb'}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#3b82f6'}
          >
            Send Message
          </button>
        </form>

        <div style={{ marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid rgb(75, 85, 99)' }}>
          <h2 style={{ color: '#60a5fa', marginBottom: '1rem' }}>Other Ways to Connect</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <p style={{ color: 'rgb(156, 163, 175)' }}>
              <strong>Email:</strong>{' '}
              <a 
                href="mailto:jmorgan3475@gmail.com"
                style={{
                  color: '#60a5fa',
                  textDecoration: 'underline'
                }}
              >
                jmorgan3475@gmail.com
              </a>
            </p>
            <p style={{ color: 'rgb(156, 163, 175)' }}>
              <strong>LinkedIn:</strong>{' '}
              <a 
                href="https://www.linkedin.com/in/jmorgan14" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  color: '#60a5fa',
                  textDecoration: 'underline'
                }}
              >
                linkedin.com/in/jmorgan14
              </a>
            </p>
            <p style={{ color: 'rgb(156, 163, 175)' }}>
              <strong>GitHub:</strong>{' '}
              <a 
                href="https://github.com/jamiemorgan14" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  color: '#60a5fa',
                  textDecoration: 'underline'
                }}
              >
                github.com/jamiemorgan14
              </a>
            </p>
          </div>
        </div>
      </div>
    </main>
  )
} 