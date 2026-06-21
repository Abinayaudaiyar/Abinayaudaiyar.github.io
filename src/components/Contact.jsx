import React, { useState } from 'react';
import { Mail, Send, CheckCircle2 } from 'lucide-react';
import { Github, Linkedin } from './SocialIcons';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    // Mock API request delay
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Auto-hide success alert
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="reveal">
      <div className="section-header">
        <span className="section-tag">Get In Touch</span>
        <h2 className="section-title">
          Contact <span className="gradient-text">Me</span>
        </h2>
        <p className="section-subtitle">
          Have an interesting project or a full-time opportunity? Drop a line, and let's build something exceptional.
        </p>
      </div>

      <div className="contact-container">
        
        {/* Left column: Quick social/email details */}
        <div className="contact-info-cards">
          
          {/* Email card */}
          <a href="mailto:abinayaudaiyarr@gmail.com" className="glass-panel contact-info-card">
            <div className="contact-icon-box">
              <Mail size={22} style={{ color: 'var(--color-primary)' }} />
            </div>
            <div className="contact-card-content">
              <h5>Email Address</h5>
              <p>abinayaudaiyarr@gmail.com</p>
            </div>
          </a>

          {/* LinkedIn card */}
          <a 
            href="https://www.linkedin.com/in/abinayaudaiyarr" 
            target="_blank" 
            rel="noreferrer" 
            className="glass-panel contact-info-card"
          >
            <div className="contact-icon-box">
              <Linkedin size={22} style={{ color: 'var(--color-secondary)' }} />
            </div>
            <div className="contact-card-content">
              <h5>LinkedIn Profile</h5>
              <p>linkedin.com/in/abinayaudaiyarr</p>
            </div>
          </a>

          {/* GitHub card */}
          <a 
            href="https://github.com/Abinayaudaiyar" 
            target="_blank" 
            rel="noreferrer" 
            className="glass-panel contact-info-card"
          >
            <div className="contact-icon-box">
              <Github size={22} style={{ color: 'var(--color-accent)' }} />
            </div>
            <div className="contact-card-content">
              <h5>GitHub Handle</h5>
              <p>github.com/Abinayaudaiyar</p>
            </div>
          </a>

        </div>

        {/* Right column: Interactive form panel */}
        <div className="glass-panel contact-form-panel" style={{ position: 'relative' }}>
          {submitSuccess && (
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(3, 7, 18, 0.95)',
              borderRadius: '20px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 10,
              gap: '1rem',
              padding: '2rem',
              textAlign: 'center',
              animation: 'fadeIn 0.3s ease'
            }}>
              <CheckCircle2 size={56} style={{ color: '#10b981' }} />
              <h4 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#ffffff' }}>
                Message Sent Successfully!
              </h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', maxWidth: '300px' }}>
                Thank you for reaching out. I will get back to you as soon as possible!
              </p>
              <button 
                onClick={() => setSubmitSuccess(false)}
                className="secondary-btn"
                style={{ marginTop: '1rem', padding: '0.5rem 1.5rem' }}
              >
                Send Another
              </button>
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="form-group-row">
              <div className="form-group">
                <label className="form-label" htmlFor="name">Your Name *</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  className="form-input" 
                  placeholder="John Doe" 
                  required 
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="email">Email Address *</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  className="form-input" 
                  placeholder="john@example.com" 
                  required 
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="subject">Subject</label>
              <input 
                type="text" 
                id="subject" 
                name="subject" 
                className="form-input" 
                placeholder="Collaboration Proposal" 
                value={formData.subject}
                onChange={handleChange}
              />
            </div>

            <div className="form-group textarea">
              <label className="form-label" htmlFor="message">Your Message *</label>
              <textarea 
                id="message" 
                name="message" 
                className="form-input" 
                placeholder="Tell me about your project details..." 
                required 
                value={formData.message}
                onChange={handleChange}
              />
            </div>

            <button 
              type="submit" 
              className="primary-btn" 
              style={{ width: '100%', justifyContent: 'center' }}
              disabled={isSubmitting}
            >
              <Send size={18} />
              <span>{isSubmitting ? "Sending Message..." : "Send Message"}</span>
            </button>
          </form>
        </div>

      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
      `}} />
    </section>
  );
}
