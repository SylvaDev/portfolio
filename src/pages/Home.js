import React from 'react';

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
            Born in 1991 in Fountain Valley, California
          </p>
          
          <p className="description">
            I bring a unique perspective to software development through my passion for learning and building.
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
        {/* Placeholder for your media content */}
        <div className="media-placeholder">
          <p>Media content will be displayed here</p>
        </div>
      </div>
    </div>
  );
}

export default Home; 