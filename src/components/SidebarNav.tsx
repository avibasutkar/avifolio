import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Home,
  User,
  Cpu,
  Briefcase,
  FolderGit2,
  Award,
  GraduationCap,
  Mail,
  Github,
  Linkedin,
  FileText,
  Sun,
  Moon,
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { SOCIALS } from '../data';
import { cn } from '../lib/utils';
import { useTheme } from './ThemeProvider';

interface SidebarNavProps {
  isCollapsed: boolean;
  setIsCollapsed: (collapsed: boolean) => void;
}

export function SidebarNav({ isCollapsed, setIsCollapsed }: SidebarNavProps) {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const navItems = [
    { name: 'Home', href: '#home', id: 'home', icon: Home },
    { name: 'About', href: '#about', id: 'about', icon: User },
    { name: 'Skills', href: '#skills', id: 'skills', icon: Cpu },
    { name: 'Experience', href: '#experience', id: 'experience', icon: Briefcase },
    { name: 'Projects', href: '#projects', id: 'projects', icon: FolderGit2 },
    { name: 'Certifications', href: '#certifications', id: 'certifications', icon: Award },
    { name: 'Education', href: '#education', id: 'education', icon: GraduationCap },
    { name: 'Contact', href: '#contact', id: 'contact', icon: Mail },
  ];

  // Active section scroll detection using IntersectionObserver
  useEffect(() => {
    const handleObserver = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleObserver, {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0,
    });

    navItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Mobile Top Header Bar & Toggle Button */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 glass border-b border-slate-200 dark:border-white/10 px-4 py-3 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full border-2 border-blue-500/60 overflow-hidden shadow-md shrink-0 bg-slate-800 group-hover:scale-110 group-hover:border-blue-400 transition-all duration-300">
            <img
              src="/images/profile.jpg"
              alt="Avinash Basutkar"
              className="w-full h-full object-cover object-[58%_40%]"
            />
          </div>
          <span className="text-lg font-bold tracking-tight text-slate-900 dark:text-white group-hover:text-blue-400 transition-colors">
            Avinash B.
          </span>
        </a>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:text-yellow-400 dark:hover:text-yellow-300 hover:bg-slate-200 dark:hover:bg-white/10 hover:scale-115 hover:rotate-12 active:scale-95 transition-all duration-300"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 hover:scale-110 active:scale-95 transition-all duration-300 shadow-md"
            aria-label="Toggle Menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Slider Overlay Backdrop */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileOpen(false)}
            className="lg:hidden fixed inset-0 z-40 bg-slate-950/70 backdrop-blur-sm"
          />
        )}
      </AnimatePresence>

      {/* Mobile Slide-Out Drawer (Left Column Slider) */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.aside
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="lg:hidden fixed top-0 left-0 bottom-0 z-50 w-80 max-w-[85vw] bg-slate-900/95 dark:bg-slate-950/95 backdrop-blur-2xl border-r border-slate-800 dark:border-white/10 p-5 sm:p-6 flex flex-col justify-between shadow-2xl overflow-y-auto overscroll-contain"
          >
            <div>
              {/* Profile Header */}
              <div className="flex items-center justify-between pb-5 border-b border-slate-800 dark:border-white/10">
                <div className="flex items-center gap-3 group">
                  <div className="w-11 h-11 rounded-full border-2 border-blue-500/60 overflow-hidden shadow-md shrink-0 bg-slate-800 group-hover:scale-110 transition-transform duration-300">
                    <img
                      src="/images/profile.jpg"
                      alt="Avinash Basutkar"
                      className="w-full h-full object-cover object-[58%_40%]"
                    />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white leading-none">Avinash Basutkar</h3>
                    <span className="text-xs text-blue-400 font-medium">Data Scientist</span>
                  </div>
                </div>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 dark:hover:bg-white/10 transition-all"
                  aria-label="Close Menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Items */}
              <nav className="mt-5">
                <ul className="space-y-1">
                  {navItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = activeSection === item.id;
                    return (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          onClick={(e) => {
                            e.preventDefault();
                            handleNavClick(item.href);
                          }}
                          className={cn(
                            'flex items-center gap-3.5 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ease-out group',
                            isActive
                              ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30 font-semibold'
                              : 'text-slate-300 hover:text-white hover:bg-slate-800/80 dark:hover:bg-white/10'
                          )}
                        >
                          <Icon className={cn('w-5 h-5 shrink-0 transition-transform duration-300 group-hover:scale-110', isActive ? 'text-white' : 'text-slate-400 group-hover:text-blue-400')} />
                          <span>{item.name}</span>
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </div>

            {/* Bottom Actions */}
            <div className="pt-5 mt-6 border-t border-slate-800 dark:border-white/10 space-y-4">
              <div className="flex items-center justify-around">
                <a
                  href={SOCIALS.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-slate-800 dark:bg-white/5 text-slate-300 hover:text-white hover:bg-blue-600 hover:scale-115 active:scale-95 transition-all duration-300 shadow-md hover:shadow-blue-500/40"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href={SOCIALS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-slate-800 dark:bg-white/5 text-slate-300 hover:text-white hover:bg-blue-600 hover:scale-115 active:scale-95 transition-all duration-300 shadow-md hover:shadow-blue-500/40"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <button
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  className="p-2.5 rounded-full bg-slate-800 dark:bg-white/5 text-slate-300 hover:text-yellow-400 dark:hover:text-yellow-300 hover:bg-slate-700 hover:scale-115 active:scale-95 transition-all duration-300 shadow-md"
                  aria-label="Toggle Theme"
                >
                  {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </button>
              </div>

              <a
                href="/resume/Avinash-Basutkar-Resume.pdf"
                download
                className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white py-3 px-4 rounded-xl text-sm font-semibold shadow-lg hover:shadow-blue-500/40 active:scale-95 transition-all duration-300"
              >
                <FileText className="w-4 h-4" />
                Download Resume
              </a>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Desktop Fixed Left Column Slider Sidebar */}
      <aside
        className={cn(
          'hidden lg:flex fixed top-0 left-0 bottom-0 z-40 flex-col justify-between transition-all duration-300 ease-in-out border-r border-slate-200 dark:border-white/10 shadow-2xl',
          'bg-slate-900/90 dark:bg-slate-950/90 backdrop-blur-xl text-slate-100',
          isCollapsed ? 'w-20 px-3 py-6' : 'w-72 p-6'
        )}
      >
        {/* Toggle Collapse Button */}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="absolute -right-3.5 top-10 z-50 w-7 h-7 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg border border-white/20 hover:scale-125 hover:bg-blue-500 active:scale-90 transition-all duration-300"
          aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          {isCollapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
        </button>

        {/* Top Header & Branding */}
        <div>
          <div className={cn('flex items-center gap-3 pb-6 border-b border-slate-800 dark:border-white/10 group cursor-pointer', isCollapsed && 'justify-center')}>
            <div className="w-11 h-11 rounded-full border-2 border-blue-500/60 overflow-hidden shadow-md shrink-0 bg-slate-800 group-hover:scale-110 group-hover:border-blue-400 transition-all duration-300">
              <img
                src="/images/profile.jpg"
                alt="Avinash Basutkar"
                className="w-full h-full object-cover object-[58%_40%]"
              />
            </div>
            {!isCollapsed && (
              <div className="overflow-hidden">
                <h2 className="text-base font-bold text-white truncate group-hover:text-blue-400 transition-colors">Avinash Basutkar</h2>
                <p className="text-xs text-blue-400 font-medium truncate">Data Scientist</p>
              </div>
            )}
          </div>

          {/* Navigation Section Items */}
          <nav className="mt-6">
            <ul className="space-y-1.5">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                return (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(item.href);
                      }}
                      title={isCollapsed ? item.name : undefined}
                      className={cn(
                        'flex items-center gap-3.5 rounded-xl font-medium transition-all duration-300 ease-out group relative',
                        isCollapsed ? 'p-3 justify-center' : 'px-4 py-3 text-sm',
                        isActive
                          ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30 scale-[1.02]'
                          : 'text-slate-300 hover:text-white hover:bg-slate-800/80 dark:hover:bg-white/10 hover:translate-x-1.5'
                      )}
                    >
                      <Icon className={cn('w-5 h-5 shrink-0 transition-transform duration-300 group-hover:scale-110', isActive ? 'text-white' : 'text-slate-400 group-hover:text-blue-400')} />
                      {!isCollapsed && <span>{item.name}</span>}

                      {/* Tooltip on Collapsed Hover */}
                      {isCollapsed && (
                        <div className="absolute left-full ml-3 px-3 py-1.5 bg-slate-900 text-white text-xs font-semibold rounded-lg shadow-xl opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap z-50 border border-slate-700">
                          {item.name}
                        </div>
                      )}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        {/* Footer Actions */}
        <div className={cn('pt-6 border-t border-slate-800 dark:border-white/10 space-y-4', isCollapsed && 'flex flex-col items-center')}>
          {/* Social Links & Theme */}
          <div className={cn('flex items-center', isCollapsed ? 'flex-col gap-3' : 'justify-between')}>
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2.5 rounded-xl bg-slate-800 dark:bg-white/5 text-slate-300 hover:text-yellow-400 dark:hover:text-yellow-300 hover:bg-slate-700 dark:hover:bg-white/15 hover:scale-115 hover:rotate-12 active:scale-95 transition-all duration-300 shadow-md hover:shadow-yellow-500/20"
              aria-label="Toggle Theme"
              title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <a
              href={SOCIALS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-800 dark:bg-white/5 text-slate-300 hover:text-white hover:bg-blue-600 hover:scale-115 hover:-translate-y-1 hover:rotate-6 active:scale-95 transition-all duration-300 shadow-md hover:shadow-blue-500/40"
              aria-label="GitHub"
              title="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={SOCIALS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-800 dark:bg-white/5 text-slate-300 hover:text-white hover:bg-blue-600 hover:scale-115 hover:-translate-y-1 hover:-rotate-6 active:scale-95 transition-all duration-300 shadow-md hover:shadow-blue-500/40"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>

          {/* Resume Download Button */}
          {!isCollapsed ? (
            <a
              href="/resume/Avinash-Basutkar-Resume.pdf"
              download
              className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white py-2.5 px-4 rounded-xl text-sm font-semibold shadow-lg hover:shadow-blue-500/40 hover:scale-[1.04] active:scale-95 transition-all duration-300"
            >
              <FileText className="w-4 h-4" />
              Resume
            </a>
          ) : (
            <a
              href="/resume/Avinash-Basutkar-Resume.pdf"
              download
              className="p-2.5 rounded-xl bg-blue-600 text-white hover:bg-blue-500 hover:scale-115 hover:-translate-y-1 active:scale-95 shadow-md hover:shadow-blue-500/40 transition-all duration-300"
              aria-label="Download Resume"
              title="Download Resume"
            >
              <FileText className="w-5 h-5" />
            </a>
          )}
        </div>
      </aside>
    </>
  );
}
