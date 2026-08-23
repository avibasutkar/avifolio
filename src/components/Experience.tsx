import { motion } from 'motion/react';
import { Briefcase, Calendar, CheckCircle2, Building2 } from 'lucide-react';
import { EXPERIENCE } from '../data';

export function Experience() {
  return (
    <section id="experience" className="py-24 relative bg-slate-100/30 dark:bg-slate-900/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col items-center mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Professional <span className="gradient-text">Experience</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "60px" }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
          />
        </div>

        {/* Horizontal Experience Cards */}
        <div className="space-y-8">
          {EXPERIENCE.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="glass-card p-6 sm:p-8 rounded-3xl relative overflow-hidden shadow-xl border border-slate-200 dark:border-white/10"
            >
              {/* Top Accent Gradient Line */}
              <div className="h-1.5 w-full absolute top-0 left-0 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600" />

              {/* Horizontal Header Row: Title, Company, Duration */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 mb-6 border-b border-slate-200 dark:border-white/10">
                <div className="flex items-center gap-4">
                  <div className="p-3.5 rounded-2xl bg-blue-500/10 text-blue-500 dark:text-blue-400 border border-blue-500/20 shrink-0">
                    <Briefcase className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                      {exp.title}
                    </h3>
                    <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300 font-medium text-base mt-0.5">
                      <Building2 className="w-4 h-4 text-purple-400" />
                      <span>{exp.company}</span>
                    </div>
                  </div>
                </div>

                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-300 text-sm font-bold rounded-full border border-blue-400/30 self-start md:self-auto shrink-0">
                  <Calendar className="w-4 h-4 text-blue-400" />
                  <span>{exp.duration}</span>
                </div>
              </div>

              {/* Horizontal Side-by-Side Content Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {exp.points.map((point, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="p-4 rounded-2xl bg-slate-200/40 dark:bg-white/5 border border-slate-300/50 dark:border-white/10 flex items-start gap-3.5 hover:bg-slate-200/70 dark:hover:bg-white/10 transition-colors"
                  >
                    <CheckCircle2 className="w-5 h-5 text-blue-500 dark:text-blue-400 shrink-0 mt-0.5" />
                    <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed font-medium">
                      {point}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
