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
    <footer className="relative border-t border-slate-200/80 dark:border-white/10 bg-slate-950 dark:bg-[#05070d] text-slate-300 py-12 overflow-hidden transition-colors duration-300">
      {/* Background Graphic */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <img
          src="/images/footer-bg.jpg"
          alt=""
          className="w-full h-full object-cover object-right-top opacity-35 dark:opacity-45 filter contrast-125 mix-blend-screen scale-105"
        />
        {/* Gradient overlays to smoothly blend top edge and keep content legible */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/75 to-slate-950/85 dark:from-[#05070d]/95 dark:via-[#05070d]/70 dark:to-[#05070d]/85" />
        {/* Subtle ambient cyan/amber accent glows */}
        <div className="absolute top-0 right-1/4 w-80 h-36 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-60 h-24 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Tactical Telemetry Ribbon */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-8 mb-8 border-b border-white/10 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              SYSTEM // NORMAL
            </span>
            <span className="text-slate-600">|</span>
            <span className="hidden sm:inline">BLR_HQ // {personalInfo.coordinates}</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden md:inline">LOCAL_TIME // {time}</span>
            <span className="text-slate-600">|</span>
            <span className="text-cyan-400">STATUS // DEPLOYED</span>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left Brand */}
          <div className="flex items-center gap-3 text-center md:text-left">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-amber-600 text-slate-950 font-mono font-extrabold flex items-center justify-center text-xs shadow-md border border-amber-400/40">
              AB
            </div>
            <div>
              <p className="text-sm font-bold text-white font-mono tracking-wide">
                {personalInfo.name}
              </p>
              <p className="text-xs text-slate-400 font-mono">
                {personalInfo.role}
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:border-amber-500/50 hover:bg-white/10 transition-all"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-400 hover:text-cyan-400 hover:border-cyan-400/50 hover:bg-white/10 transition-all"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-400 hover:text-amber-400 hover:border-amber-500/50 hover:bg-white/10 transition-all"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-slate-300 hover:text-cyan-300 hover:border-cyan-400/50 hover:bg-white/10 transition-all active:scale-95 shadow-sm"
            aria-label="Scroll back to top"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Copyright notice */}
        <div className="mt-8 pt-6 border-t border-white/5 text-center text-xs text-slate-500 font-mono">
          © {new Date().getFullYear()} {personalInfo.name}. Designed & Rebuilt with modern React, Tailwind CSS & subtle BGMI tactical accents.
        </div>
      </div>
    </footer>
  );
};
