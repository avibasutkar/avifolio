import React, { useState } from 'react';
import { ExternalLink, Sparkles, Layers, CheckCircle2, X } from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import { Project } from '../types';
import { SectionHeader, TacticalCornerBracket, TacticalBadge } from './TacticalUI';
import { GithubIcon } from './Icons';

type FilterCategory = 'all' | 'web' | 'ai-ml' | 'data';

export const Projects: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<FilterCategory>('all');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const filteredProjects = selectedFilter === 'all'
    ? projectsData
    : projectsData.filter((p) => p.category === selectedFilter || p.tags.some(t => {
        if (selectedFilter === 'web') return ['React', 'TypeScript', 'Express.js', 'FastAPI'].includes(t);
        if (selectedFilter === 'ai-ml') return ['Machine Learning', 'Google Gemini API', 'NLP', 'Computer Vision', 'OpenCV'].includes(t);
        if (selectedFilter === 'data') return ['Power BI', 'SQL', 'Pandas', 'ETL', 'Data Analytics'].includes(t);
        return false;
      }));

  const filters: { label: string; value: FilterCategory; count: number }[] = [
    { label: 'All Projects', value: 'all', count: projectsData.length },
    { label: 'Web Applications', value: 'web', count: projectsData.filter(p => p.category === 'web' || p.tags.includes('React')).length },
    { label: 'AI & Machine Learning', value: 'ai-ml', count: projectsData.filter(p => p.category === 'ai-ml' || p.tags.includes('Google Gemini API')).length },
    { label: 'Data & Analytics', value: 'data', count: projectsData.filter(p => p.category === 'data').length },
  ];

  return (
    <section id="projects" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag="FIELD_DEPLOYMENTS // 02"
          title="Featured Projects"
          subtitle="Explore selected web applications, automated AI intelligence tools, and data analytics systems."
        />

        {/* Filter Navigation Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filters.map((f) => {
            const isActive = selectedFilter === f.value;
            return (
              <button
                key={f.value}
                onClick={() => setSelectedFilter(f.value)}
                className={`px-4 py-2 rounded-lg text-xs font-mono uppercase tracking-wider transition-all duration-200 border ${
                  isActive
                    ? 'bg-slate-900 text-white dark:bg-amber-500 dark:text-slate-950 font-bold border-transparent shadow-sm'
                    : 'bg-white/60 dark:bg-slate-900/60 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-white/10 hover:border-amber-500/40 dark:hover:border-cyan-400/40'
                }`}
              >
                <span>{f.label}</span>
                <span className={`ml-2 text-[10px] px-1.5 py-0.5 rounded ${
                  isActive ? 'bg-white/20 dark:bg-black/20' : 'bg-slate-200 dark:bg-white/10'
                }`}>
                  {f.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative flex flex-col justify-between rounded-2xl bg-white/70 dark:bg-slate-900/60 border border-slate-200/90 dark:border-white/10 backdrop-blur-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-amber-500/50 dark:hover:border-cyan-400/50 hover:-translate-y-1.5"
            >
              <TacticalCornerBracket position="tl" />
              <TacticalCornerBracket position="tr" />

              <div>
                {/* Project Image Preview Container */}
                <div
                  onClick={() => setActiveModalProject(project)}
                  className="relative aspect-video w-full overflow-hidden bg-slate-950 cursor-pointer border-b border-slate-200/80 dark:border-white/10"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      // Fallback gradient placeholder if image isn't loaded
                      const target = e.target as HTMLElement;
                      target.style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                  {/* Tactical Code Pill overlay */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2 py-0.5 rounded bg-black/70 backdrop-blur-md text-[10px] font-mono text-cyan-300 border border-cyan-400/30">
                      {project.tacticalCode}
                    </span>
                  </div>

                  {project.featured && (
                    <div className="absolute top-3 right-3">
                      <span className="px-2 py-0.5 rounded bg-amber-500/90 text-slate-950 font-mono text-[10px] font-bold tracking-wider uppercase">
                        FEATURED
                      </span>
                    </div>
                  )}

                  {/* Subtle expand cue on hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-[2px]">
                    <span className="px-3 py-1.5 rounded-full bg-white/90 text-slate-900 text-xs font-mono font-medium tracking-wider shadow-lg">
                      View Architecture & Details
                    </span>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[11px] font-mono text-amber-600 dark:text-amber-400 font-semibold tracking-wider uppercase">
                      {project.subtitle || project.category.toUpperCase()}
                    </span>
                  </div>

                  <h3
                    onClick={() => setActiveModalProject(project)}
                    className="text-xl font-bold text-slate-900 dark:text-white tracking-tight mb-2.5 cursor-pointer group-hover:text-amber-500 dark:group-hover:text-cyan-400 transition-colors"
                  >
                    {project.title}
                  </h3>

                  <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-3 leading-relaxed mb-5">
                    {project.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons Footer */}
              <div className="p-6 pt-0 border-t border-slate-100 dark:border-white/5 mt-auto">
                <div className="flex items-center justify-between gap-3 pt-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-700 dark:text-slate-300 hover:text-amber-600 dark:hover:text-cyan-400 transition-colors py-1"
                    aria-label={`View ${project.title} repository on GitHub`}
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>Source Code</span>
                  </a>

                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-slate-900 dark:text-white font-semibold hover:text-amber-500 dark:hover:text-cyan-400 transition-colors"
                  >
                    <span>Details</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      {activeModalProject && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fade-in"
          onClick={() => setActiveModalProject(null)}
        >
          <div
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white dark:bg-[#0c1220] border border-slate-200 dark:border-cyan-500/30 shadow-2xl p-6 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <TacticalCornerBracket position="tl" />
            <TacticalCornerBracket position="tr" />
            <TacticalCornerBracket position="bl" />
            <TacticalCornerBracket position="br" />

            {/* Close Button */}
            <button
              onClick={() => setActiveModalProject(null)}
              className="absolute top-4 right-4 p-2 rounded-lg text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white bg-slate-100 dark:bg-white/10 transition-colors"
              aria-label="Close project modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="mb-4">
              <span className="text-xs font-mono text-cyan-500 dark:text-cyan-400 uppercase tracking-widest block mb-1">
                {activeModalProject.tacticalCode}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                {activeModalProject.title}
              </h3>
              {activeModalProject.subtitle && (
                <p className="text-sm font-mono text-amber-600 dark:text-amber-400 mt-1">
                  {activeModalProject.subtitle}
                </p>
              )}
            </div>

            {/* Modal Image */}
            <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-slate-950 border border-slate-200 dark:border-white/10 mb-6 shadow-inner">
              <img
                src={activeModalProject.image}
                alt={activeModalProject.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Description */}
            <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
              {activeModalProject.description}
            </p>

            {/* Highlights / Details */}
            {activeModalProject.details && (
              <div className="mb-6">
                <h4 className="text-xs font-mono uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-3">
                  Key Technical Features & Architecture:
                </h4>
                <ul className="space-y-2.5">
                  {activeModalProject.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tech Stack */}
            <div className="mb-8">
              <h4 className="text-xs font-mono uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-2.5">
                Technologies & Tools Deployed:
              </h4>
              <div className="flex flex-wrap gap-2">
                {activeModalProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-md text-xs font-mono bg-slate-100 dark:bg-white/5 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-white/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Footer CTA */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-200 dark:border-white/10">
              <a
                href={activeModalProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-mono uppercase tracking-wider bg-slate-900 text-white dark:bg-amber-500 dark:text-slate-950 font-bold hover:opacity-90 transition-opacity"
              >
                <GithubIcon className="w-4 h-4" />
                <span>Inspect Repository on GitHub</span>
              </a>

              <button
                onClick={() => setActiveModalProject(null)}
                className="text-xs font-mono uppercase text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              >
                Close Details
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
