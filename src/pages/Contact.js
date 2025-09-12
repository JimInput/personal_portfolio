import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle form submission
    // For now, we'll just show a success message
    setFormStatus('success');
    setTimeout(() => {
      setFormStatus('');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/jimmy-padilla',
      icon: '💼',
      description: 'Connect with me professionally'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/JimInput',
      icon: '💻',
      description: 'Check out my code repositories'
    },
    {
      name: 'Email',
      url: 'mailto:oJimmy05o@gmail.com',
      icon: '📧',
      description: 'Send me a direct email'
    }
  ];

  const contactInfo = [
    {
      label: 'Location',
      value: 'Enfield, CT / Storrs, CT',
      icon: '📍'
    },
    {
      label: 'Email',
      value: 'oJimmy05o@gmail.com',
      icon: '📧'
    },
    {
      label: 'Phone',
      value: '+1 (860) 734-6372',
      icon: '📱'
    },
    {
      label: 'Status',
      value: 'Student at UConn - Available for opportunities',
      icon: '🎓'
    }
  ];

  return (
    <div className="contact">
      <div className="page-container">
        <h1 className="section-title">Get In Touch</h1>
        <p className="contact-intro">
          I'm always interested in research opportunities, internships, and collaborative engineering projects. 
          Whether you want to discuss robotics, dynamical control systems, or just connect, I'd love to hear from you!
        </p>

        <div className="contact-content">
          <div className="contact-form-section">
            <h2 className="section-subtitle">Send Me a Message</h2>
            
            {formStatus === 'success' && (
              <div className="form-success">
                <p>✅ Thank you! Your message has been sent successfully. I'll get back to you soon.</p>
              </div>
            )}
            
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Your full name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  placeholder="What's this about?"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="6"
                  placeholder="Tell me more about your project or just say hello..."
                ></textarea>
              </div>
              
              <button type="submit" className="btn btn-primary submit-btn">
                Send Message
              </button>
            </form>
          </div>

          <div className="contact-info-section">
            <h2 className="section-subtitle">Contact Information</h2>
            
            <div className="contact-details">
              {contactInfo.map((info, index) => (
                <div key={index} className="contact-detail">
                  <div className="contact-icon">{info.icon}</div>
                  <div className="contact-text">
                    <span className="contact-label">{info.label}</span>
                    <span className="contact-value">{info.value}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="availability-note">
              <h3>Response Time</h3>
              <p>I typically respond to messages within 24-48 hours. For urgent matters, please mention it in your subject line.</p>
            </div>
          </div>
        </div>

        <section className="social-section">
          <h2 className="section-subtitle">Connect With Me</h2>
          <p className="social-intro">
            Find me on these platforms and let's connect! I'm active on social media and love engaging with the community.
          </p>
          
          <div className="social-grid">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-card"
              >
                <div className="social-icon">{social.icon}</div>
                <h3 className="social-name">{social.name}</h3>
                <p className="social-description">{social.description}</p>
                <div className="social-arrow">→</div>
              </a>
            ))}
          </div>
        </section>

        <section className="cta-section">
          <div className="cta-content">
            <h2>Ready to Work Together?</h2>
            <p>Let's discuss your project and see how I can help bring your ideas to life.</p>
            <div className="cta-actions">
              <a href="mailto:oJimmy05o@gmail.com" className="btn btn-primary">
                Start a Conversation
              </a>
              <a href="/projects" className="btn btn-outline">
                View My Work
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Contact;