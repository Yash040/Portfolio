import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import DSA from './components/DSA';
import Certificates from './components/Certificates';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <DSA />
      <Certificates />
      <Contact />
    </div>
  );
}

export default App;