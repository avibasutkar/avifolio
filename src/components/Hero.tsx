import React from 'react';
import { ArrowDownRight, FolderGit2, Mail, ShieldCheck, Terminal, Download } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { SpiderWeb } from './SpiderWeb';
import { TacticalCornerBracket, TacticalBadge } from './TacticalUI';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden"
    >
      {/* Spider-Man Inspired Web Pattern with Hanging Spider - Upper Right Corner */}
      <SpiderWeb className="z-20" />

      {/* Subtle Tactical Grid Background */}
      <div className="absolute inset-0 pointer-events-none bg-grid-pattern-light dark:bg-grid-pattern opacity-60 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_45%,#000_70%,transparent_100%)]" />

      {/* Ambient Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[350px] bg-gradient-to-tr from-amber-500/10 via-cyan-500/10 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Tactical HUD Coordinates & Status Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-8 text-[11px] font-mono text-slate-500 dark:text-slate-400 border-b border-slate-200/70 dark:border-white/10 pb-3">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-slate-800 dark:text-slate-300 font-semibold">STATUS // ONLINE</span>
            <span className="text-slate-300 dark:text-slate-700">|</span>
            <span className="hidden sm:inline">LOC // {personalInfo.coordinates}</span>
          </div>

          <div className="flex items-center gap-2 tracking-wider">
            <span>CALLSIGN: <span className="text-amber-600 dark:text-amber-400 font-semibold">{personalInfo.callsign}</span></span>
            <span className="text-slate-300 dark:text-slate-700">|</span>
            <span className="hidden md:inline">CSE_UNDERGRAD // 2026</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Tactical Stencil Pill Badge */}
            <div className="mb-4">
              <TacticalBadge variant="amber" glow>
                <Terminal className="w-3 h-3 text-amber-500" />
                <span>Data Scientist & Python Developer</span>
              </TacticalBadge>
            </div>

            {/* Main Name & Title */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.08] mb-4">
              Hi, I'm <span className="bg-gradient-to-r from-amber-500 via-amber-400 to-cyan-400 bg-clip-text text-transparent">{personalInfo.name}</span>
            </h1>

            {/* Professional Role */}
            <p className="text-lg sm:text-xl md:text-2xl font-mono text-slate-700 dark:text-slate-300 font-medium mb-5">
              Data Scientist <span className="text-amber-500">|</span> Data Analyst <span className="text-amber-500">|</span> Python Developer
            </p>

            {/* Engaging Introduction */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl mb-8">
              Turning raw data into clear, usable insights and interfaces. Hands-on experience in data preprocessing,
              SQL and Python-based analysis, interactive Power BI dashboards, and applied machine learning with full-stack interfaces.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10">
              {/* Primary CTA: View Projects */}
              <button
                onClick={() => scrollTo('#projects')}
                className="group relative inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-mono font-semibold uppercase tracking-wider text-white bg-slate-900 hover:bg-slate-800 dark:bg-amber-500 dark:hover:bg-amber-400 dark:text-slate-950 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 active:scale-95"
              >
                <FolderGit2 className="w-4 h-4" />
                <span>View Projects</span>
                <ArrowDownRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
              </button>

              {/* Secondary CTA: Contact Me */}
              <button
                onClick={() => scrollTo('#contact')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-mono font-semibold uppercase tracking-wider text-slate-800 dark:text-slate-200 bg-slate-100 hover:bg-slate-200 dark:bg-slate-900/80 dark:hover:bg-slate-800 border border-slate-300 dark:border-white/15 hover:border-cyan-400 rounded-lg transition-all duration-300 active:scale-95"
              >
                <Mail className="w-4 h-4 text-cyan-500" />
                <span>Contact Me</span>
              </button>

              {/* Resume download */}
              <a
                href={personalInfo.resumePath}
                download="Avinash-Basutkar-Resume.pdf"
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 text-xs font-mono font-medium uppercase tracking-wider text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                title="Download Avinash Basutkar Resume"
              >
                <Download className="w-4 h-4" />
                <span>Get CV (PDF)</span>
              </a>
            </div>

            {/* Social Links & Verified Badges */}
            <div className="flex items-center gap-4 pt-4 border-t border-slate-200/60 dark:border-white/10 w-full">
              <span className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-widest">
                DIRECT_CHANNELS:
              </span>
              <div className="flex items-center gap-2">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:border-amber-500/50 transition-colors"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:border-cyan-400/50 transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="p-2 rounded-lg border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:border-amber-500/50 transition-colors"
                  aria-label="Email Avinash"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Tactical Profile Card / Visual Container */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md group">
              {/* Tactical Radar Ring background accent */}
              <div className="absolute -inset-4 border border-dashed border-amber-500/20 dark:border-cyan-400/20 rounded-2xl pointer-events-none -z-10 group-hover:scale-105 transition-transform duration-500" />
              
              {/* Outer Tactical Card */}
              <div className="relative bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200/90 dark:border-white/10 rounded-2xl p-4 sm:p-5 shadow-xl transition-all duration-300 group-hover:border-amber-500/40 dark:group-hover:border-cyan-400/40">
                <TacticalCornerBracket position="tl" />
                <TacticalCornerBracket position="tr" />
                <TacticalCornerBracket position="bl" />
                <TacticalCornerBracket position="br" />

                {/* Profile Photo Container */}
                <div className="relative aspect-square w-full rounded-xl overflow-hidden border border-slate-200 dark:border-white/15 bg-slate-950 shadow-inner mb-4">
                  <img
                    src={personalInfo.profileImage}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover object-[58%_40%] group-hover:scale-105 transition-transform duration-700 filter contrast-[1.03]"
                  />
                  
                  {/* Subtle HUD scanline overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />

                  {/* Top tactical HUD stamp inside photo */}
                  <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2 py-0.5 rounded bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-mono text-cyan-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                    <span>AV_PROFILE // VERIFIED</span>
                  </div>

                  {/* Bottom tactical label inside photo */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs font-mono">
                    <span className="font-semibold">{personalInfo.name}</span>
                    <span className="text-[10px] text-amber-400">B.E. CSE // 2026</span>
                  </div>
                </div>

                {/* Tactical Telemetry Metrics under photo */}
                <div className="grid grid-cols-2 gap-2 pt-1 font-mono text-xs">
                  <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-white/5 border border-slate-200/70 dark:border-white/5">
                    <span className="text-[10px] text-slate-500 dark:text-slate-400 block uppercase">DEGREE // CGPA</span>
                    <span className="font-bold text-slate-800 dark:text-white">8.02 / 10 CSE</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-white/5 border border-slate-200/70 dark:border-white/5">
                    <span className="text-[10px] text-slate-500 dark:text-slate-400 block uppercase">SPECIALIZATION</span>
                    <span className="font-bold text-slate-800 dark:text-white">Data Science & AI</span>
                  </div>
                </div>

                {/* Status bar */}
                <div className="mt-3 flex items-center justify-between px-3 py-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 dark:text-emerald-300 text-xs font-mono">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>{personalInfo.statusText}</span>
                  </span>
                  <span className="text-[10px] text-slate-500 uppercase">BLR // IN</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
