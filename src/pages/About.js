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
              Hi, I'm Irving Sylva, a Full-Stack Web Developer with a passion for building websites that are both fun and intuitive for users.
              I specialize in React, Node.js, Javascript, and working with APIs to bring ideas to life on the web.<br/>
              Born and raised in Southern California, I made a big leap from managing maintenance and front desk operations to coding full-time - driven by a love for problem-solving and creativity.
              As a dedicated husband and proud father of four amazing daughters, I understand the importance of building things that truly work for people.<br/>
              Whether it's crafting clean, responsive interfaces or engineering the backend that makes everything tick, I aim to create experiences that feel
              effortless to use. Let's build something great together.
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