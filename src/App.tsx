/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { ThemeProvider } from './components/ThemeProvider';
import { SidebarNav } from './components/SidebarNav';
import { ScrollProgress } from './components/ScrollProgress';
import { ScrollToTop } from './components/ScrollToTop';
import { CustomCursor } from './components/CustomCursor';
import { SectionDivider } from './components/SectionDivider';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Certifications } from './components/Certifications';
import { Education } from './components/Education';
import { ResumeCTA } from './components/ResumeCTA';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { cn } from './lib/utils';

export default function App() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <ThemeProvider defaultTheme="dark">
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 font-sans selection:bg-blue-500/30 selection:text-white transition-colors duration-300">
        <ScrollProgress />
        <SidebarNav isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
        <ScrollToTop />
        <CustomCursor />

        <div className={cn('transition-all duration-300 pt-16 lg:pt-0', isCollapsed ? 'lg:pl-20' : 'lg:pl-72')}>
          <main>
            <Hero />
            <SectionDivider />
            <About />
            <SectionDivider />
            <Skills />
            <SectionDivider />
            <Experience />
            <SectionDivider />
            <Projects />
            <SectionDivider />
            <Certifications />
            <SectionDivider />
            <Education />
            <SectionDivider />
            <ResumeCTA />
            <SectionDivider />
            <Contact />
          </main>
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
}
