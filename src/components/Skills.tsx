import React, { useState } from 'react';
import { Layout, Code2, Database, Wrench, Cpu, Check, Terminal } from 'lucide-react';
import { skillCategories } from '../data/portfolioData';
import { SectionHeader, TacticalCornerBracket } from './TacticalUI';

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layout':
        return <Layout className="w-5 h-5 text-amber-500" />;
      case 'Code2':
        return <Code2 className="w-5 h-5 text-cyan-400" />;
      case 'Database':
        return <Database className="w-5 h-5 text-emerald-400" />;
      case 'Wrench':
        return <Wrench className="w-5 h-5 text-purple-400" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-rose-400" />;
      default:
        return <Terminal className="w-5 h-5 text-amber-400" />;
    }
  };

  const displayedCategories = activeCategory === 'all'
    ? skillCategories
    : skillCategories.filter((c) => c.title === activeCategory);

  return (
    <section id="skills" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag="ARSENAL // 03"
          title="Skills & Technical Capabilities"
          subtitle="A comprehensive toolkit across web engineering, programming languages, database architecture, and machine intelligence."
        />

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-lg text-xs font-mono uppercase tracking-wider transition-all duration-200 border ${
              activeCategory === 'all'
                ? 'bg-slate-900 text-white dark:bg-cyan-500 dark:text-slate-950 font-bold border-transparent shadow-sm'
                : 'bg-white/60 dark:bg-slate-900/60 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-white/10 hover:border-cyan-400/50'
            }`}
          >
            All Categories
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat.title}
              onClick={() => setActiveCategory(cat.title)}
              className={`px-4 py-2 rounded-lg text-xs font-mono uppercase tracking-wider transition-all duration-200 border ${
                activeCategory === cat.title
                  ? 'bg-slate-900 text-white dark:bg-cyan-500 dark:text-slate-950 font-bold border-transparent shadow-sm'
                  : 'bg-white/60 dark:bg-slate-900/60 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-white/10 hover:border-cyan-400/50'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedCategories.map((cat) => (
            <div
              key={cat.title}
              className="group relative flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-white/70 dark:bg-slate-900/60 border border-slate-200/80 dark:border-white/10 backdrop-blur-md transition-all duration-300 hover:border-amber-500/40 dark:hover:border-cyan-400/40 hover:-translate-y-1 shadow-sm"
            >
              <TacticalCornerBracket position="tl" />
              <TacticalCornerBracket position="br" />

              <div>
                {/* Category Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10">
                      {getCategoryIcon(cat.icon)}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">
                        {cat.title}
                      </h3>
                      <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 uppercase tracking-widest">
                        {cat.code}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                  {cat.description}
                </p>

                {/* Skills Badges */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-mono transition-all duration-200 ${
                        skill.popular
                          ? 'bg-amber-500/10 text-amber-800 dark:text-amber-300 border border-amber-500/30 hover:border-amber-500/60'
                          : 'bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/10 hover:border-cyan-400/40'
                      }`}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-current opacity-70" />
                      <span>{skill.name}</span>
                      {skill.level && (
                        <span className="text-[10px] opacity-60 ml-0.5">({skill.level})</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Tactical card bottom indicator */}
              <div className="mt-6 pt-4 border-t border-slate-200/60 dark:border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>{cat.skills.length} competencies</span>
                <span className="group-hover:text-cyan-400 transition-colors">READY</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

