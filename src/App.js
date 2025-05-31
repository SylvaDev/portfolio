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
      <MatrixBackground />
      <Navigation />
      <main>
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="achievements">
          <Achievements />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
