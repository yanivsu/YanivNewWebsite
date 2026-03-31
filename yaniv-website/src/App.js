import React from 'react';
import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <footer className="footer">
        <div className="container">
          <p>© 2026 <span>Yaniv Suriyano</span> · Built with React</p>
        </div>
      </footer>
    </>
  );
}

export default App;
