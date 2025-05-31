import React from 'react';

// Import styles
import './App.css';

// Import page components
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Achievements from './pages/Achievements';
import Contact from './pages/Contact';

// Import layout components
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import MatrixBackground from './components/MatrixBackground';

/**
 * Main App Component
 * Serves as the root component of my portfolio website
 * Organizes the layout and navigation between different sections
 */
function App() {
  return (
    <div className="App">
      <MatrixBackground data-testid="matrix-background" />
      <Navigation />
      <main>
        <section id="home" data-testid="home-section">
          <Home />
        </section>
        <section id="about" data-testid="about-section">
          <About />
        </section>
        <section id="projects" data-testid="projects-section">
          <Projects />
        </section>
        <section id="achievements" data-testid="achievements-section">
          <Achievements />
        </section>
        <section id="contact" data-testid="contact-section">
          <Contact />
        </section>
      </main>
      <Footer data-testid="footer" />
    </div>
  );
}

export default App;
