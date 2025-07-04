import React from 'react';
import CodeShowcase from '../components/CodeShowcase';

function Home() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="home-container">
      <div className="home-left">
        <h1>Irving Sylva</h1>
        <h2>Full Stack Developer</h2>
        
        <div className="home-content">
          <p className="origin">
            <strong>Born in 1991</strong><br />
            <strong>in Fountain Valley, CA</strong>
          </p>
          
          <p className="description">
            <strong>I bring a unique perspective to software development through my passion for learning and building.</strong>
          </p>
        </div>

        <div className="home-buttons">
          <button 
            className="projects-btn"
            onClick={() => scrollToSection('projects')}
          >
            View Projects
          </button>
          <button 
            className="contact-btn"
            onClick={() => scrollToSection('contact')}
          >
            Contact Me
          </button>
        </div>
      </div>

      <div className="home-right">
        <CodeShowcase />
      </div>
    </div>
  );
}

export default Home; 