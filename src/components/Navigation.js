import React, { useState } from 'react';
import '../styles/Navigation.css';

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false); // Close menu after clicking
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navigation">
      <div className="nav-title">
        <span className="nav-title-text">&lt;Portfolio /&gt;</span>
      </div>
      <button className="mobile-menu-button" onClick={toggleMenu}>
        <span className={`menu-icon ${isMenuOpen ? 'open' : ''}`}></span>
      </button>
      <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <li><button onClick={() => scrollToSection('home')}>Home</button></li>
        <li><button onClick={() => scrollToSection('about')}>About</button></li>
        <li><button onClick={() => scrollToSection('projects')}>Projects</button></li>
        <li><button onClick={() => scrollToSection('achievements')}>Achievements</button></li>
        <li><button onClick={() => scrollToSection('contact')}>Contact</button></li>
      </ul>
    </nav>
  );
}

export default Navigation; 