import React, { useState } from 'react';
import { Briefcase, GraduationCap, Award, Calendar, MapPin, CheckCircle2, ChevronRight, ExternalLink } from 'lucide-react';
import { experienceData, educationData, certificationsData } from '../data/portfolioData';
import { SectionHeader, TacticalCornerBracket, TacticalBadge } from './TacticalUI';

type TabType = 'experience' | 'education' | 'certifications';

export const ExperienceAndEducation: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('experience');

  return (
    <section id="experience" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag="CAREER_TRACK // 04"
          title="Experience & Education"
          subtitle="My professional timeline, academic foundation in Computer Science, and industry-recognized certifications."
        />

        {/* Tab Controls */}
        <div className="flex items-center justify-center gap-2 mb-12">
          <div className="inline-flex p-1.5 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 backdrop-blur-md">
            <button
              onClick={() => setActiveTab('experience')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-mono uppercase tracking-wider transition-all duration-200 ${
                activeTab === 'experience'
                  ? 'bg-slate-900 text-white dark:bg-amber-500 dark:text-slate-950 font-bold shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Briefcase className="w-4 h-4" />
              <span>Experience</span>
            </button>

            <button
              onClick={() => setActiveTab('education')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-mono uppercase tracking-wider transition-all duration-200 ${
                activeTab === 'education'
                  ? 'bg-slate-900 text-white dark:bg-amber-500 dark:text-slate-950 font-bold shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <GraduationCap className="w-4 h-4" />
              <span>Education</span>
            </button>

            <button
              onClick={() => setActiveTab('certifications')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-mono uppercase tracking-wider transition-all duration-200 ${
                activeTab === 'certifications'
                  ? 'bg-slate-900 text-white dark:bg-amber-500 dark:text-slate-950 font-bold shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Award className="w-4 h-4" />
              <span>Certifications</span>
            </button>
          </div>
        </div>

        {/* Tab Content: Experience */}
        {activeTab === 'experience' && (
          <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
            {experienceData.map((exp, index) => (
              <div
                key={exp.id}
                className="relative p-6 sm:p-8 rounded-2xl bg-white/70 dark:bg-slate-900/60 border border-slate-200/80 dark:border-white/10 backdrop-blur-md transition-all duration-300 hover:border-amber-500/40 dark:hover:border-cyan-400/40"
              >
                <TacticalCornerBracket position="tl" />
                <TacticalCornerBracket position="br" />

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <TacticalBadge variant={index === 0 ? 'green' : 'default'}>
                        {exp.badge}
                      </TacticalBadge>
                      <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                        OP // 0{index + 1}
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                      {exp.title}
                    </h3>
                    <p className="text-sm font-semibold text-amber-600 dark:text-amber-400 font-mono">
                      {exp.company}
                    </p>
                  </div>

                  <div className="flex flex-col sm:items-end text-xs font-mono text-slate-500 dark:text-slate-400 gap-1">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{exp.duration}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-amber-500" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Key Points */}
                <ul className="space-y-2.5 mb-6">
                  {exp.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-200/60 dark:border-white/5">
                  {exp.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-0.5 rounded text-xs font-mono bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab Content: Education */}
        {activeTab === 'education' && (
          <div className="max-w-4xl mx-auto space-y-6 animate-fade-in">
            <div className="relative p-6 sm:p-8 rounded-2xl bg-white/70 dark:bg-slate-900/60 border border-slate-200/80 dark:border-white/10 backdrop-blur-md">
              <TacticalCornerBracket position="tl" />
              <TacticalCornerBracket position="tr" />
              <TacticalCornerBracket position="bl" />
              <TacticalCornerBracket position="br" />

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div>
                  <TacticalBadge variant="cyan" className="mb-2">
                    BACHELOR OF ENGINEERING
                  </TacticalBadge>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                    {educationData.degree}
                  </h3>
                  <p className="text-base text-amber-600 dark:text-amber-400 font-mono mt-1">
                    {educationData.institution}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-center sm:text-right shrink-0">
                  <span className="text-[10px] font-mono uppercase text-slate-500 block">CUMULATIVE GPA</span>
                  <span className="text-2xl font-bold font-mono text-slate-900 dark:text-white">
                    {educationData.cgpa}
                  </span>
                  <span className="text-[10px] font-mono text-emerald-500 block">FIRST CLASS DISTINCTION</span>
                </div>
              </div>

              {/* Highlights */}
              <div className="mb-6">
                <h4 className="text-xs font-mono uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-3">
                  Key Academic Highlights:
                </h4>
                <ul className="space-y-2">
                  {educationData.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-300">
                      <ChevronRight className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Coursework Grid */}
              <div className="pt-6 border-t border-slate-200/60 dark:border-white/5 mb-6">
                <h4 className="text-xs font-mono uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-3">
                  Core Engineering Coursework:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {educationData.coursework.map((course) => (
                    <span
                      key={course}
                      className="px-3 py-1 rounded-md text-xs font-mono bg-slate-100 dark:bg-white/5 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-white/10"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>

              {/* Previous Academic Milestones */}
              {educationData.previousEducation && educationData.previousEducation.length > 0 && (
                <div className="pt-6 border-t border-slate-200/60 dark:border-white/5">
                  <h4 className="text-xs font-mono uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-4">
                    Previous Academic Milestones:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {educationData.previousEducation.map((prev, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-xl bg-slate-50/70 dark:bg-white/5 border border-slate-200/70 dark:border-white/5 flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex items-center justify-between mb-1.5">
                            <span className="text-[10px] font-mono text-cyan-600 dark:text-cyan-400 uppercase font-semibold">
                              YEAR: {prev.year}
                            </span>
                            <span className="text-xs font-mono font-bold text-amber-600 dark:text-amber-400">
                              {prev.score}
                            </span>
                          </div>
                          <h5 className="text-sm font-bold text-slate-900 dark:text-white">
                            {prev.degree}
                          </h5>
                          <p className="text-xs text-slate-600 dark:text-slate-400 font-mono mt-0.5">
                            {prev.institution}, {prev.location}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Tab Content: Certifications */}
        {activeTab === 'certifications' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
            {certificationsData.map((cert) => (
              <div
                key={cert.id}
                className="group relative flex flex-col justify-between rounded-xl bg-white/70 dark:bg-slate-900/60 border border-slate-200/80 dark:border-white/10 backdrop-blur-md overflow-hidden transition-all duration-300 hover:border-amber-500/40 dark:hover:border-cyan-400/40"
              >
                <TacticalCornerBracket position="tl" />

                {/* Certificate Thumbnail */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-950 border-b border-slate-200 dark:border-white/10">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      const target = e.target as HTMLElement;
                      target.style.display = 'none';
                    }}
                  />
                  <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded bg-black/70 text-cyan-300 font-mono text-[10px]">
                    {cert.year}
                  </div>
                </div>

                <div className="p-5 flex flex-col justify-between flex-1">
                  <div>
                    <span className="text-[11px] font-mono text-amber-600 dark:text-amber-400 block mb-1">
                      {cert.organization}
                    </span>
                    <h4 className="text-base font-bold text-slate-900 dark:text-white tracking-tight mb-2">
                      {cert.title}
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      {cert.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-200/50 dark:border-white/5 flex items-center justify-between text-xs font-mono text-slate-500">
                    <span className="flex items-center gap-1 text-emerald-500">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Verified
                    </span>
                    <span className="text-[10px] text-slate-400">CRED_ID // OK</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

