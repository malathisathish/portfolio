import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import './index.css';

function App() {
  return (
    <div className="portfolio-app">
      <div className="glow-bg">
        <div className="blob" style={{ top: '-100px', left: '-100px' }}></div>
        <div className="blob" style={{ bottom: '-100px', right: '-100px', background: 'radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, rgba(3, 7, 18, 0) 70%)' }}></div>
      </div>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Certifications />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer style={{ textAlign: 'center', padding: '4rem 2rem', color: 'var(--text-secondary)', fontSize: '0.9rem', borderTop: '1px solid var(--glass-border)', marginTop: '4rem' }}>
        <p>Built with Passion & Data Science &copy; {new Date().getFullYear()} Malathi Y. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
