import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/Contact.css';

function Contact() {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      await emailjs.sendForm(
        'service_pnfbt4n', 
        'template_npj14ol', 
        formRef.current,
        '3vg4b9TEh3-vadqSg' 
      );
      setSuccess(true);
      setForm({
        name: '',
        email: '',
        message: '',
      });
    } catch (error) {
      setError('Failed to send message. Please try again.');
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-section">
      <h1 className="section-title">Contact Me</h1>
      <div className="contact-container">
        <div className="contact-form-container">
          <h2>Send Me a Message</h2>
          <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Your name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="Your email address"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                placeholder="Your message"
                rows="5"
              />
            </div>
            <button type="submit" className="submit-btn" disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'}
            </button>
            {success && (
              <p className="success-message">Message sent successfully!</p>
            )}
            {error && <p className="error-message">{error}</p>}
          </form>
        </div>

        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p>Feel free to reach out for opportunities or collaborations.</p>
          <div className="contact-details">
            {/* <div className="contact-item">
              <h3>Email</h3>
              <p>irvingcsylva@gmail.com</p>
            </div> */}
            <div className="contact-item">
              <h3>Location</h3>
              <p>California, USA</p>
            </div>
            <div className="contact-item">
              <h3>Social</h3>
              <div className="social-links">
                <a href="https://linkedin.com/in/irvingsylva" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
                <span className="separator">|</span>
                <a href="https://github.com/SylvaDev" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
                <span className="separator">|</span>
                <a href="https://x.com/IrvingSylva" target="_blank" rel="noopener noreferrer">
                  Twitter
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact; 