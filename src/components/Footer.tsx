import { Github, Linkedin, Mail, Quote } from 'lucide-react';
import { SOCIALS } from '../data';

export function Footer() {
  return (
    <footer className="py-12 border-t border-slate-300 dark:border-white/10 bg-slate-50 dark:bg-slate-950 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1/2 bg-blue-500/5 rounded-full blur-[80px] -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        {/* Data Science & Analytics Thought Quote */}
        <div className="max-w-2xl mx-auto mb-8 px-6 py-5 rounded-2xl bg-white/60 dark:bg-white/5 border border-slate-200 dark:border-white/10 shadow-sm relative">
          <Quote className="w-6 h-6 text-blue-500/40 absolute -top-3 left-6 bg-slate-50 dark:bg-slate-950 px-1" />
          <blockquote className="text-sm sm:text-base font-medium italic text-slate-700 dark:text-slate-300 leading-relaxed">
            "Data is the raw canvas of reality — Data Science & Analytics turn complex patterns into actionable clarity, empowering decisions that shape the future."
          </blockquote>
          <p className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mt-2.5">
            — Avinash Basutkar
          </p>
        </div>

        {/* Social Icons with Hover Micro-Animations */}
        <div className="flex gap-6 mb-6">
          <a
            href={SOCIALS.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="p-3.5 rounded-full bg-slate-200/70 dark:bg-white/5 text-slate-700 dark:text-slate-300 hover:text-white hover:bg-blue-600 hover:scale-120 hover:-translate-y-1 hover:rotate-6 active:scale-95 transition-all duration-300 border border-slate-300 dark:border-white/15 shadow-md hover:shadow-blue-500/40"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href={SOCIALS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-3.5 rounded-full bg-slate-200/70 dark:bg-white/5 text-slate-700 dark:text-slate-300 hover:text-white hover:bg-blue-600 hover:scale-120 hover:-translate-y-1 hover:-rotate-6 active:scale-95 transition-all duration-300 border border-slate-300 dark:border-white/15 shadow-md hover:shadow-blue-500/40"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href={`mailto:${SOCIALS.email}`}
            aria-label="Email"
            className="p-3.5 rounded-full bg-slate-200/70 dark:bg-white/5 text-slate-700 dark:text-slate-300 hover:text-white hover:bg-blue-600 hover:scale-120 hover:-translate-y-1 hover:rotate-6 active:scale-95 transition-all duration-300 border border-slate-300 dark:border-white/15 shadow-md hover:shadow-blue-500/40"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
        
        {/* Copyright Notice */}
        <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">
          © {new Date().getFullYear()} Avinash Basutkar. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
