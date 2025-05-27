import React from 'react';

function Navigation() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navigation">
      <ul>
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