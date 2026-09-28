import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { WhatIDo } from './components/WhatIDo';
import { Skills } from './components/Skills';
import { Resume } from './components/Resume';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div className="portfolio-app">
      {/* Background Atmosphere Layers */}
      <div className="bg-ambient" aria-hidden="true">
        <div className="ambient-orb orb-1"></div>
        <div className="ambient-orb orb-2"></div>
        <div className="ambient-orb orb-3"></div>
        <div className="ambient-grid"></div>
      </div>

      {/* Main Sections */}
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <WhatIDo />
        <Skills />
        <Resume />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
