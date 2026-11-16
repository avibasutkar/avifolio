import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, ChevronRight } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { personalInfo } from '../data/portfolioData';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      rootMargin: '-30% 0px -50% 0px',
      threshold: 0,
    });

    navLinks.forEach((link) => {
      const el = document.querySelector(link.href);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3 bg-white/85 dark:bg-[#080c14]/85 backdrop-blur-md border-b border-slate-200/80 dark:border-white/10 shadow-sm'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo & Profile Avatar */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-lg p-1"
          >
            <div className="relative w-9 h-9 rounded-lg overflow-hidden border border-slate-300 dark:border-white/20 bg-slate-900 group-hover:border-amber-500 dark:group-hover:border-cyan-400 transition-colors shadow-sm">
              <img
                src={personalInfo.profileImage}
                alt={personalInfo.name}
                className="w-full h-full object-cover object-[58%_40%]"
                onError={(e) => {
                  // Fallback avatar if image isn't loaded yet
                  const target = e.target as HTMLElement;
                  target.style.display = 'none';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
            </div>

            <div className="flex flex-col">
              <span className="text-sm font-bold tracking-tight text-slate-900 dark:text-white group-hover:text-amber-500 dark:group-hover:text-cyan-400 transition-colors font-mono">
                {personalInfo.shortName}
              </span>
              <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                CSE // DEV
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-100/70 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 p-1.5 rounded-full backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative px-4 py-1.5 text-xs font-medium uppercase tracking-wider transition-all duration-200 rounded-full ${
                    isActive
                      ? 'text-slate-900 dark:text-white bg-white dark:bg-white/15 shadow-xs font-semibold'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-amber-500 dark:bg-cyan-400" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action Icons: Theme Toggle + Resume CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <ThemeToggle />

            <a
              href={personalInfo.resumePath}
              download="Avinash-Basutkar-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-mono uppercase tracking-wider text-slate-800 dark:text-slate-200 bg-amber-500/10 hover:bg-amber-500/20 dark:bg-cyan-500/10 dark:hover:bg-cyan-500/20 border border-amber-500/30 dark:border-cyan-500/30 hover:border-amber-500 dark:hover:border-cyan-400 rounded-md transition-all duration-200 shadow-xs active:scale-95"
            >
              <FileText className="w-3.5 h-3.5 text-amber-600 dark:text-cyan-400" />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile Menu & Theme Toggle */}
          <div className="flex sm:hidden items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
              className="p-2 rounded-lg border border-slate-200 dark:border-white/15 bg-white/70 dark:bg-slate-900/80 text-slate-700 dark:text-slate-200"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-b border-slate-200 dark:border-white/10 bg-white/95 dark:bg-[#080c14]/95 backdrop-blur-xl px-4 py-5 shadow-lg transition-all animate-fade-in">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium tracking-wide transition-colors ${
                    isActive
                      ? 'bg-amber-500/10 dark:bg-cyan-500/10 text-amber-600 dark:text-cyan-400 font-semibold'
                      : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5'
                  }`}
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 opacity-50" />
                </a>
              );
            })}

            <div className="pt-3 mt-2 border-t border-slate-200 dark:border-white/10">
              <a
                href={personalInfo.resumePath}
                download="Avinash-Basutkar-Resume.pdf"
                className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-lg text-xs font-mono uppercase tracking-wider bg-slate-900 text-white dark:bg-white dark:text-slate-900 font-semibold shadow-xs"
              >
                <FileText className="w-4 h-4" />
                <span>Download Resume</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

