import { motion } from 'motion/react';
import { SKILLS } from '../data';
import { cn } from '../lib/utils';

export function Skills() {
  return (
    <section id="skills" className="py-24 relative bg-slate-100/50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Technical <span className="gradient-text">Skills</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "60px" }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILLS.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-6 rounded-2xl relative overflow-hidden flex flex-col justify-between group hover:scale-[1.02] transition-transform duration-300"
              >
                {/* Top Colored Accent Bar */}
                <div className={cn('h-1 w-full absolute top-0 left-0 bg-gradient-to-r', category.gradient)} />

                <div>
                  <div className="flex items-center gap-4 mb-6 pt-2">
                    <div className={cn('p-3 rounded-xl flex items-center justify-center shadow-sm', category.iconBg)}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                      {category.category}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2.5">
                    {category.skills.map((skill, sIdx) => (
                      <span 
                        key={sIdx}
                        className={cn(
                          'px-3.5 py-1.5 rounded-lg text-sm font-semibold border transition-all duration-200 cursor-default shadow-xs',
                          category.tagClass
                        )}
                      >
                        {skill}
                      </span>
                    ))}
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
