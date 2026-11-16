import React, { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { ExperienceAndEducation } from './components/ExperienceAndEducation';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { JarvisCursor } from './components/JarvisCursor';

export const App: React.FC = () => {
  return (
    <div className="relative min-h-screen text-slate-900 dark:text-slate-100 selection:bg-amber-500/20 selection:text-amber-500 dark:selection:bg-cyan-500/25 dark:selection:text-cyan-300">
      {/* JARVIS Tactical Reticle Cursor for desktop */}
      <JarvisCursor />

      {/* Main Navigation Bar */}
      <Navbar />

      {/* Main Content Flow */}
      <main id="main-content" className="relative z-10 flex flex-col">
        {/* Section 0: Hero with Spider-Man Web & BGMI Tactical Accents */}
        <Hero />

        {/* Section 1: About Me & Engineering Philosophy */}
        <About />

        {/* Section 2: Projects Showcase with Filterable Tabs */}
        <Projects />

        {/* Section 3: Skills & Technical Capabilities */}
        <Skills />

        {/* Section 4: Experience, Education & Certifications */}
        <ExperienceAndEducation />

        {/* Section 5: Accessible Contact Form & Direct Channels */}
        <Contact />
      </main>

      {/* Footer with Tactical Telemetry and Status Clock */}
      <Footer />
    </div>
  );
};

export default App;

