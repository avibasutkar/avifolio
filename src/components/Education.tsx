import { motion } from 'motion/react';
import { GraduationCap } from 'lucide-react';
import { EDUCATION } from '../data';

export function Education() {
  return (
    <section id="education" className="py-24 relative bg-slate-100/50 dark:bg-slate-900/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Education
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "60px" }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
          />
        </div>

        <div className="relative pl-8 md:pl-0">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-slate-200 dark:bg-white/10 -translate-x-1/2" />
          <div className="md:hidden absolute left-0 top-0 bottom-0 w-px bg-slate-200 dark:bg-white/10" />

          {EDUCATION.map((edu, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative mb-12 flex flex-col md:flex-row items-center"
              >
                {/* Timeline Icon */}
                <div className="absolute left-[-33px] md:left-1/2 w-10 h-10 rounded-full glass border border-purple-500/50 flex items-center justify-center md:-translate-x-1/2 z-10 bg-slate-50 dark:bg-slate-950 shadow-md">
                  <GraduationCap className="w-5 h-5 text-purple-400" />
                </div>

                {/* Content Container */}
                <div className={`w-full md:w-1/2 ${isEven ? 'md:pr-12 md:text-right' : 'md:pl-12 md:ml-auto md:text-left'} pt-1 md:pt-0`}>
                  <div className="glass-card p-6 rounded-2xl relative text-left">
                    {edu.graduated && (
                      <span className="inline-block px-3 py-1 bg-purple-500/10 text-purple-400 text-sm font-medium rounded-full mb-3">
                        Year: {edu.graduated}
                      </span>
                    )}
                    
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">{edu.degree}</h3>
                    <h4 className="text-lg text-slate-600 dark:text-slate-300 mb-2">{edu.institution}</h4>
                    
                    {edu.cgpa && (
                      <p className="text-blue-400 font-medium mb-3">CGPA: {edu.cgpa}</p>
                    )}
                    
                    {edu.coursework && edu.coursework.length > 0 && (
                      <div>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mb-2 font-medium">Core Subjects / Coursework:</p>
                        <div className="flex flex-wrap gap-2">
                          {edu.coursework.map((course, i) => (
                            <span key={i} className="text-xs px-2.5 py-1 rounded-md bg-slate-200/50 dark:bg-white/5 border border-slate-300 dark:border-white/10 text-slate-600 dark:text-slate-300">
                              {course}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
