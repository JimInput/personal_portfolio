import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import photo from './formal_photo.jpg'

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text-content">
            <h1 className="hero-title">
              Hello, I'm <span className="highlight">Jimmy</span>
            </h1>
            <div className="hero-image mobile-only">
              <div className="placeholder-image">
                <img src={photo} alt="Jimmy" className="profile-photo"/>
              </div>
            </div>
            <p className="hero-subtitle">
              Computer Science & Mechanical Engineering Student | UConn Honors Program
            </p>
            <p className="hero-description">
              Welcome to my portfolio. I'm a dual-degree student at UConn with a 4.0 GPA, 
              passionate about robotics, dynamical control systems, and creating innovative 
              engineering solutions that bridge the gap between software and hardware.
            </p>
            <div className="hero-actions">
              <Link to="/projects" className="btn btn-primary">
                View My Work
              </Link>
              <Link to="/contact" className="btn btn-outline">
                Get In Touch
              </Link>
            </div>
          </div>
          <div className="hero-image desktop-only">
            <div className="placeholder-image">
              <img src={photo} alt="Jimmy" className="profile-photo"/>
            </div>
          </div>
        </div>
      </section>

      <section className="quick-links">
        <div className="page-container">
          <h2 className="section-title">Explore My Portfolio</h2>
          <div className="quick-links-grid">
            <Link to="/experience" className="quick-link-card">
              <div className="quick-link-icon">💼</div>
              <h3>Work Experience</h3>
              <p>Discover my professional journey and key achievements</p>
              <div className="link-arrow">→</div>
            </Link>
            
            <Link to="/projects" className="quick-link-card">
              <div className="quick-link-icon">🚀</div>
              <h3>Projects</h3>
              <p>Explore my latest projects and technical innovations</p>
              <div className="link-arrow">→</div>
            </Link>
            
            <Link to="/contact" className="quick-link-card">
              <div className="quick-link-icon">📬</div>
              <h3>Contact</h3>
              <p>Let's connect and discuss potential opportunities</p>
              <div className="link-arrow">→</div>
            </Link>
          </div>
        </div>
      </section>

      <section className="skills-preview">
        <div className="page-container">
          <h2 className="section-title">Key Skills</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Programming</h3>
              <div className="skill-tags">
                <span className="skill-tag">Python</span>
                <span className="skill-tag">C/C++</span>
                <span className="skill-tag">Java</span>
                <span className="skill-tag">JavaScript</span>
                <span className="skill-tag">MATLAB</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>Engineering Tools</h3>
              <div className="skill-tags">
                <span className="skill-tag">AutoCAD</span>
                <span className="skill-tag">Fusion360</span>
                <span className="skill-tag">Simulink</span>
                <span className="skill-tag">Arduino</span>
                <span className="skill-tag">Raspberry Pi</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>Technologies</h3>
              <div className="skill-tags">
                <span className="skill-tag">AWS</span>
                <span className="skill-tag">6TiSCH</span>
                <span className="skill-tag">IoT</span>
                <span className="skill-tag">LaTeX</span>
                <span className="skill-tag">Git</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;