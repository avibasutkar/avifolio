import React, { useState, useEffect } from 'react';
import { ArrowUp, Mail, Shield, Terminal } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Footer: React.FC = () => {
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString('en-US', {
          timeZone: 'Asia/Kolkata',
          hour12: false,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        }) + ' IST'
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-slate-200/80 dark:border-white/10 bg-white/40 dark:bg-[#06090f] py-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Tactical Telemetry Ribbon */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-8 mb-8 border-b border-slate-200/60 dark:border-white/5 text-xs font-mono text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              SYSTEM // NORMAL
            </span>
            <span>|</span>
            <span className="hidden sm:inline">BLR_HQ // {personalInfo.coordinates}</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden md:inline">LOCAL_TIME // {time}</span>
            <span>|</span>
            <span>VER // 2.6.4</span>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left Brand */}
          <div className="flex items-center gap-3 text-center md:text-left">
            <div className="w-7 h-7 rounded bg-slate-900 dark:bg-amber-500 text-white dark:text-slate-950 font-mono font-bold flex items-center justify-center text-xs">
              AB
            </div>
            <div>
              <p className="text-sm font-bold text-slate-900 dark:text-white font-mono">
                {personalInfo.name}
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Computer Science & Engineering Student
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-white/10 text-xs font-mono text-slate-600 dark:text-slate-300 hover:text-amber-500 dark:hover:text-cyan-400 hover:border-amber-500/50 dark:hover:border-cyan-400/50 transition-all active:scale-95"
            aria-label="Scroll back to top"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Copyright notice */}
        <div className="mt-8 pt-6 text-center text-xs text-slate-400 dark:text-slate-500 font-mono">
          © {new Date().getFullYear()} {personalInfo.name}. Designed & Rebuilt with modern React, Tailwind CSS & subtle BGMI tactical accents.
        </div>
      </div>
    </footer>
  );
};
