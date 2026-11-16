import React, { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import { Theme } from '../types';

interface ThemeToggleProps {
  className?: string;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ className = '' }) => {
  const [theme, setTheme] = useState<Theme>('dark');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('avi_portfolio_theme') as Theme | null;
    if (savedTheme) {
      setTheme(savedTheme);
      applyTheme(savedTheme);
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const initialTheme: Theme = prefersDark ? 'dark' : 'light';
      setTheme(initialTheme);
      applyTheme(initialTheme);
    }
  }, []);

  const applyTheme = (newTheme: Theme) => {
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const toggleTheme = () => {
    const nextTheme: Theme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    localStorage.setItem('avi_portfolio_theme', nextTheme);
    applyTheme(nextTheme);
  };

  if (!mounted) {
    return (
      <div className={`w-9 h-9 rounded-lg border border-slate-200 dark:border-white/10 ${className}`} />
    );
  }

  return (
    <button
      onClick={toggleTheme}
      type="button"
      role="switch"
      aria-checked={theme === 'dark'}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      className={`relative inline-flex items-center justify-center p-2 rounded-lg border border-slate-200 dark:border-white/15 bg-white/70 dark:bg-slate-900/80 backdrop-blur-md text-slate-700 dark:text-slate-200 hover:text-amber-500 dark:hover:text-cyan-400 hover:border-amber-500/40 dark:hover:border-cyan-400/40 transition-all duration-300 shadow-sm active:scale-95 group ${className}`}
    >
      <div className="relative w-5 h-5 flex items-center justify-center overflow-hidden">
        {/* Sun Icon */}
        <Sun
          className={`w-4 h-4 text-amber-500 transition-all duration-500 absolute ${
            theme === 'dark'
              ? 'rotate-90 scale-0 opacity-0'
              : 'rotate-0 scale-100 opacity-100'
          }`}
        />
        {/* Moon Icon */}
        <Moon
          className={`w-4 h-4 text-cyan-400 transition-all duration-500 absolute ${
            theme === 'dark'
              ? 'rotate-0 scale-100 opacity-100'
              : '-rotate-90 scale-0 opacity-0'
          }`}
        />
      </div>
      <span className="sr-only">Toggle theme</span>
    </button>
  );
};

