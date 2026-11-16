import React from 'react';
import { Code, BrainCircuit, Rocket, CheckCircle2, Award, BookOpen, MapPin, Sparkles } from 'lucide-react';
import { personalInfo, educationData } from '../data/portfolioData';
import { SectionHeader, TacticalCornerBracket, TacticalBadge } from './TacticalUI';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag="DOSSIER // 01"
          title="About Me"
          subtitle="A disciplined approach to engineering modern web interfaces and intelligent software solutions."
        />

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
          {personalInfo.stats.map((stat, idx) => (
            <div
              key={idx}
              className="relative p-5 rounded-xl bg-white/70 dark:bg-slate-900/60 border border-slate-200/80 dark:border-white/10 backdrop-blur-md transition-all duration-300 hover:border-amber-500/40 dark:hover:border-cyan-400/40 group"
            >
              <TacticalCornerBracket position="tl" />
              <TacticalCornerBracket position="br" />
              <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 dark:text-slate-400 block mb-1">
                {stat.code}
              </span>
              <p className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-0.5 group-hover:text-amber-500 dark:group-hover:text-cyan-400 transition-colors">
                {stat.value}
              </p>
              <span className="text-xs text-slate-600 dark:text-slate-400 font-medium">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Two Column Layout: Story & Focus Areas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Narrative */}
          <div className="lg:col-span-7 flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-white/70 dark:bg-slate-900/60 border border-slate-200/80 dark:border-white/10 backdrop-blur-md relative">
            <TacticalCornerBracket position="tl" />
            <TacticalCornerBracket position="tr" />

            <div>
              <div className="flex items-center gap-2 mb-4">
                <TacticalBadge variant="cyan">
                  <span>BIO_BRIEF // PROFILE</span>
                </TacticalBadge>
                <span className="text-xs font-mono text-slate-400 dark:text-slate-500">
                  REF: CBIT-CSE-26
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight mb-4">
                Passionate Developer Crafting Fast, Accessible & Purposeful Code
              </h3>

              <div className="space-y-4 text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                <p>
                  I'm currently pursuing my Bachelor of Engineering in Computer Science and Engineering
                  at <strong className="text-slate-900 dark:text-white font-semibold">{educationData.institution}</strong> in Bangalore,
                  maintaining a solid <span className="text-amber-600 dark:text-amber-400 font-semibold font-mono">8.1 CGPA</span>.
                </p>
                <p>
                  My engineering journey began with a curiosity about how software shapes daily interactions.
                  Over time, that curiosity evolved into a focused dedication towards building scalable web applications,
                  interactive frontends with React and TypeScript, and integrating cutting-edge AI models
                  to solve real problems.
                </p>
                <p>
                  Through hands-on internships at <strong className="text-slate-900 dark:text-white">Qspiders</strong> and{' '}
                  <strong className="text-slate-900 dark:text-white">NoveTech</strong>, I gained real-world exposure to ETL data pipelines,
                  exploratory data analysis, interactive dashboard development, and cross-functional team workflows.
                  Whether writing performant React components or tuning machine learning models, I strive for clean architecture,
                  responsive design, and exceptional end-user satisfaction.
                </p>
              </div>
            </div>

            {/* Quick Education / Location Footer inside card */}
            <div className="mt-8 pt-6 border-t border-slate-200/70 dark:border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-500" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-cyan-400" />
                <span>B.E. Computer Science & Engg (Graduating 2026)</span>
              </div>
            </div>
          </div>

          {/* Right Column: Core Architectural Pillars */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {/* Pillar 1 */}
            <div className="p-6 rounded-xl bg-white/70 dark:bg-slate-900/60 border border-slate-200/80 dark:border-white/10 backdrop-blur-md transition-all duration-300 hover:border-amber-500/40 dark:hover:border-cyan-400/40 relative group">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 group-hover:scale-110 transition-transform">
                  <Code className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight mb-1">
                    Modern Web Development
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    Crafting reactive, mobile-first, and accessible interfaces using React, TypeScript, Tailwind CSS, and RESTful API integrations.
                  </p>
                </div>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="p-6 rounded-xl bg-white/70 dark:bg-slate-900/60 border border-slate-200/80 dark:border-white/10 backdrop-blur-md transition-all duration-300 hover:border-cyan-400/40 relative group">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20 group-hover:scale-110 transition-transform">
                  <BrainCircuit className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight mb-1">
                    AI & Intelligent Systems
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    Building practical AI-infused tools leveraging Google Gemini API, OpenCV computer vision, and machine learning models for automated insights.
                  </p>
                </div>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="p-6 rounded-xl bg-white/70 dark:bg-slate-900/60 border border-slate-200/80 dark:border-white/10 backdrop-blur-md transition-all duration-300 hover:border-emerald-500/40 relative group">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 group-hover:scale-110 transition-transform">
                  <Rocket className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight mb-1">
                    Problem Solving & Clean Code
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    Deep foundation in data structures, relational DBMS, and clean modular code standards with continuous learning and curiosity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

