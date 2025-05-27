import React from 'react';

function About() {
  const skills = [
    {
      title: "Frontend Development",
      description: "Proficient in React, JavaScript, HTML5, and CSS3. Experienced in creating responsive and interactive user interfaces."
    },
    {
      title: "Backend Development",
      description: "Skilled in Node.js, Express, and database management. Capable of building robust server-side applications and APIs."
    },
    {
      title: "Version Control",
      description: "Experienced with Git and GitHub for collaborative development and version control."
    },
    {
      title: "Problem Solving",
      description: "Strong analytical skills and ability to break down complex problems into manageable solutions."
    }
  ];

  return (
    <div className="about-section">
      <h1 className="section-title">About Me</h1>
      
      <div className="about-container">
        <div className="about-left">
          <h2>Who am I?</h2>
          <div className="about-content">
            <p>
              [Your detailed description here - this is where you can talk about your journey,
              your passion for technology, and what drives you as a developer. You can include
              your background, education, and what makes you unique in the tech industry.]
            </p>
          </div>
        </div>

        <div className="about-right">
          <div className="skills-container">
            <h2>Skills & Expertise</h2>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div key={index} className="skill-card">
                  <h3>{skill.title}</h3>
                  <p>{skill.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About; 