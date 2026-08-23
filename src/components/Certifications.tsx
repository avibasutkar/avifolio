import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Award,
  ExternalLink,
  FileText,
  X,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  CheckCircle2,
  Calendar,
  ShieldCheck,
  MapPin,
  Flame,
} from 'lucide-react';
import { CERTIFICATIONS } from '../data';
import { LazyImage } from './LazyImage';

export function Certifications() {
  const [selectedCertIndex, setSelectedCertIndex] = useState<number | null>(null);

  const handleKeyDown = (e: KeyboardEvent) => {
    if (selectedCertIndex === null) return;
    if (e.key === 'Escape') setSelectedCertIndex(null);
    if (e.key === 'ArrowLeft') {
      setSelectedCertIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : CERTIFICATIONS.length - 1));
    }
    if (e.key === 'ArrowRight') {
      setSelectedCertIndex((prev) => (prev !== null && prev < CERTIFICATIONS.length - 1 ? prev + 1 : 0));
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    if (selectedCertIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [selectedCertIndex]);

  return (
    <section id="certifications" className="py-24 relative overflow-hidden bg-slate-100/30 dark:bg-slate-900/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-500 dark:text-blue-400 text-xs font-bold uppercase tracking-wider mb-4 border border-blue-500/20"
          >
            <Sparkles className="w-4 h-4 text-yellow-500" />
            <span>Achievement Milestones</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-slate-900 dark:text-white"
          >
            Certifications & <span className="gradient-text">Roadmap</span>
          </motion.h2>

          <p className="text-slate-600 dark:text-slate-400 text-base max-w-xl mx-auto mb-4 font-medium">
            Chronological milestone journey of verified certifications, hackathons, and technical workshops.
          </p>

          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: '80px' }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 rounded-full"
          />
        </div>

        {/* Roadmap Timeline Container */}
        <div className="relative pl-6 md:pl-0">
          {/* Glowing Central Vertical Roadmap Line */}
          <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-indigo-600 rounded-full -translate-x-1/2 opacity-70 shadow-[0_0_15px_rgba(59,130,246,0.5)]" />
          <div className="md:hidden absolute left-2 top-4 bottom-4 w-1 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full opacity-70" />

          <div className="space-y-12">
            {CERTIFICATIONS.map((cert, index) => {
              const isEven = index % 2 === 0;
              const stepNumber = String(index + 1).padStart(2, '0');

              return (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, x: isEven ? -40 : 40, y: 20 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.08 }}
                  className="relative flex flex-col md:flex-row items-center"
                >
                  {/* Glowing Roadmap Node Dot */}
                  <div className="absolute left-[-26px] md:left-1/2 w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 text-white font-black text-xs flex items-center justify-center md:-translate-x-1/2 z-20 shadow-xl border-2 border-white dark:border-slate-900 group hover:scale-125 transition-transform duration-300">
                    <span className="drop-shadow">{stepNumber}</span>
                  </div>

                  {/* Roadmap Milestone Content Box */}
                  <div className={`w-full md:w-1/2 ${isEven ? 'md:pr-14 md:text-right' : 'md:pl-14 md:ml-auto md:text-left'} pt-1 md:pt-0`}>
                    <div className="glass-card p-6 rounded-3xl relative shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-200 dark:border-white/10 group hover:scale-[1.02] text-left">
                      {/* Step Pill Header */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-4 pb-3 border-b border-slate-200 dark:border-white/10">
                        <div className="flex items-center gap-2">
                          <span className="px-3 py-1 bg-blue-500/10 text-blue-500 dark:text-blue-400 text-xs font-bold rounded-full border border-blue-500/20">
                            Milestone #{stepNumber}
                          </span>
                          <span className="flex items-center gap-1 px-2.5 py-1 bg-purple-500/10 text-purple-500 dark:text-purple-400 text-xs font-semibold rounded-full border border-purple-500/20">
                            <Calendar className="w-3 h-3" />
                            {cert.year}
                          </span>
                        </div>

                        {cert.pdf && (
                          <span className="flex items-center gap-1 text-xs text-emerald-600 dark:text-emerald-400 font-bold bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                            <ShieldCheck className="w-3.5 h-3.5" /> Verified PDF
                          </span>
                        )}
                      </div>

                      {/* Certification Title & Organization */}
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1.5 leading-snug group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">
                        {cert.title}
                      </h3>
                      <p className="text-blue-600 dark:text-blue-400 text-sm font-semibold mb-3 flex items-center gap-1.5">
                        <Award className="w-4 h-4 text-amber-500 shrink-0" />
                        <span>{cert.organization}</span>
                      </p>

                      {/* Roadmap Visual Card Container / Preview */}
                      <div
                        onClick={() => setSelectedCertIndex(index)}
                        className="relative h-44 my-4 rounded-2xl overflow-hidden bg-slate-900 border border-slate-700/50 cursor-pointer group/img shadow-inner"
                      >
                        <LazyImage
                          src={cert.image}
                          alt={cert.title}
                          containerClassName="w-full h-full absolute inset-0"
                          imgClassName="w-full h-full object-cover group-hover/img:scale-105 transition-all duration-500 opacity-90 group-hover/img:opacity-100"
                          fallback={<div className="w-full h-full bg-slate-900 animate-pulse" />}
                          errorFallback={
                            /* Interactive High-Tech Roadmap Card Placeholder */
                            <div className="w-full h-full bg-gradient-to-br from-slate-900 via-indigo-950/80 to-purple-950/90 p-5 flex flex-col justify-between text-white relative overflow-hidden">
                              <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-blue-500/20 rounded-full blur-2xl pointer-events-none" />
                              <div className="flex items-center justify-between">
                                <span className="flex items-center gap-1.5 text-xs font-bold text-blue-300 bg-blue-500/20 px-3 py-1 rounded-full border border-blue-400/30">
                                  <Flame className="w-3.5 h-3.5 text-orange-400" />
                                  Roadmap Milestone
                                </span>
                                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                              </div>
                              <div>
                                <h4 className="text-sm font-bold text-white line-clamp-1 mb-1">{cert.title}</h4>
                                <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">{cert.description}</p>
                              </div>
                              <div className="flex items-center justify-between text-[11px] text-blue-400 font-semibold pt-2 border-t border-white/10">
                                <span>{cert.organization}</span>
                                <span className="flex items-center gap-1 text-yellow-300">
                                  <Sparkles className="w-3 h-3" /> Certificate Verified
                                </span>
                              </div>
                            </div>
                          }
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center text-white font-bold text-xs gap-2 backdrop-blur-[2px]">
                          <ExternalLink className="w-4 h-4" /> Expand Milestone Preview
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-5 font-normal">
                        {cert.description}
                      </p>

                      {/* Action Links */}
                      <div className="flex items-center justify-between pt-3 border-t border-slate-200 dark:border-white/10">
                        <button
                          onClick={() => setSelectedCertIndex(index)}
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          View Milestone
                        </button>

                        {cert.pdf && (
                          <a
                            href={cert.pdf}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 px-3 py-1.5 rounded-xl shadow-md transition-all hover:scale-105"
                          >
                            <FileText className="w-3.5 h-3.5" />
                            PDF Certificate
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedCertIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/90 backdrop-blur-md p-4 sm:p-8"
            onClick={() => setSelectedCertIndex(null)}
          >
            <button
              className="absolute top-6 right-6 p-3 bg-white/15 hover:bg-white/25 text-white rounded-full transition-all hover:scale-110 z-10 border border-white/20 shadow-xl"
              onClick={() => setSelectedCertIndex(null)}
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>

            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3.5 bg-white/15 hover:bg-white/25 text-white rounded-full transition-all hover:scale-110 z-10 hidden sm:block border border-white/20 shadow-xl"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedCertIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : CERTIFICATIONS.length - 1));
              }}
              aria-label="Previous certificate"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3.5 bg-white/15 hover:bg-white/25 text-white rounded-full transition-all hover:scale-110 z-10 hidden sm:block border border-white/20 shadow-xl"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedCertIndex((prev) => (prev !== null && prev < CERTIFICATIONS.length - 1 ? prev + 1 : 0));
              }}
              aria-label="Next certificate"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative max-w-5xl w-full max-h-[85vh] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative flex-grow overflow-hidden rounded-2xl bg-slate-950 border border-white/15 flex items-center justify-center p-4 min-h-[50vh] shadow-2xl">
                <LazyImage
                  src={CERTIFICATIONS[selectedCertIndex].image}
                  alt={CERTIFICATIONS[selectedCertIndex].title}
                  containerClassName="w-full h-full absolute inset-0 flex items-center justify-center"
                  imgClassName="w-full h-full object-contain max-h-[70vh]"
                  fallback={<div className="w-full h-full bg-slate-900 animate-pulse" />}
                  errorFallback={
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-950 text-white p-8 text-center">
                      <div className="p-4 rounded-full bg-blue-500/20 text-blue-400 border border-blue-400/30 mb-4 shadow-xl">
                        <Award className="w-12 h-12" />
                      </div>
                      <h4 className="text-2xl font-bold text-white mb-2">{CERTIFICATIONS[selectedCertIndex].title}</h4>
                      <p className="text-blue-400 font-medium text-base mb-2">
                        {CERTIFICATIONS[selectedCertIndex].organization} • {CERTIFICATIONS[selectedCertIndex].year}
                      </p>
                      <p className="text-slate-300 text-sm max-w-md leading-relaxed">{CERTIFICATIONS[selectedCertIndex].description}</p>
                    </div>
                  }
                />
              </div>

              <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-center sm:text-left bg-slate-900/90 border border-white/15 rounded-2xl p-4 shadow-xl">
                <div>
                  <h3 className="text-xl font-bold text-white">{CERTIFICATIONS[selectedCertIndex].title}</h3>
                  <p className="text-blue-400 text-sm mt-0.5 font-medium">
                    {CERTIFICATIONS[selectedCertIndex].organization} • {CERTIFICATIONS[selectedCertIndex].year}
                  </p>
                </div>

                {CERTIFICATIONS[selectedCertIndex].pdf && (
                  <a
                    href={CERTIFICATIONS[selectedCertIndex].pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold text-sm shadow-lg transition-all hover:scale-105 shrink-0"
                  >
                    <FileText className="w-4 h-4" />
                    Open Verified PDF Document
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
