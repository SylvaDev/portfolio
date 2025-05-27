import React from 'react';
import './App.css';

// Import sections
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Achievements from './pages/Achievements';
import Contact from './pages/Contact';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
