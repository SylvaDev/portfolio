import React from 'react';

function Contact() {
  return (
    <div className="contact-section">
      <h1 className="section-title">Contact Me</h1>
      <div className="contact-container">
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p>Feel free to reach out for opportunities or collaborations.</p>
          <div className="contact-details">
            <div className="contact-item">
              <h3>Email</h3>
              <p>your.email@example.com</p>
            </div>
            <div className="contact-item">
              <h3>Location</h3>
              <p>Your Location</p>
            </div>
            <div className="contact-item">
              <h3>Social</h3>
              <p>LinkedIn | GitHub | Twitter</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact; 