import React from 'react';

function Projects() {
  return (
    <div className="projects-section">
      <h1 className="section-title">Projects</h1>
      <div className="projects-container">
        <div className="projects-grid">
          {/* Project cards will go here */}
          <div className="project-card">
            <h2>Project Title</h2>
            <p>Project description goes here. This will be a brief overview of the project and its key features.</p>
          </div>
          <div className="project-card">
            <h2>Project Title</h2>
            <p>Project description goes here. This will be a brief overview of the project and its key features.</p>
          </div>
          <div className="project-card">
            <h2>Project Title</h2>
            <p>Project description goes here. This will be a brief overview of the project and its key features.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects; 