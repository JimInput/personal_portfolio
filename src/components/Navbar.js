import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          Jimmy Padilla
        </Link>
        
        <div className={`navbar-menu ${isMenuOpen ? 'is-active' : ''}`}>
          <Link
            to="/"
            className={`navbar-item ${isActive('/') ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/experience"
            className={`navbar-item ${isActive('/experience') ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Experience
          </Link>
          <Link
            to="/projects"
            className={`navbar-item ${isActive('/projects') ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Projects
          </Link>
          <Link
            to="/resume"
            className={`navbar-item ${isActive('/resume') ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Resume
          </Link>
          <Link
            to="/contact"
            className={`navbar-item ${isActive('/contact') ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
        </div>

        <div className="navbar-burger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;