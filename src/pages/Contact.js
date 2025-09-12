import React from 'react';
import './Contact.css';

function Contact() {

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
              <h3>Let's Connect</h3>
              <p>I'm always interested in research opportunities, internships, and collaborative engineering projects. Feel free to reach out through any of the channels above or connect with me on social media!</p>
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