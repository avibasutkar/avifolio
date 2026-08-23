import { motion } from 'motion/react';
import { ABOUT_BRING } from '../data';

export function About() {
  return (
    <section id="about" className="py-16 sm:py-24 relative bg-slate-50/50 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-12 sm:mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4"
          >
            About <span className="gradient-text">Me</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "60px" }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-slate-700 dark:text-slate-300 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6 font-medium">
              I am a Computer Science and Engineering graduate with a strong foundation in 
              <span className="text-blue-600 dark:text-blue-400 font-bold"> Python, SQL, Excel, Power BI</span>, and <span className="text-purple-600 dark:text-purple-400 font-bold">Machine Learning</span>.
            </p>
            <p className="text-slate-700 dark:text-slate-300 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6 font-medium">
              My passion lies in <span className="text-blue-600 dark:text-blue-400 font-bold">Data Analysis</span> and <span className="text-purple-600 dark:text-purple-400 font-bold">Data Preprocessing</span>, 
              transforming raw complex datasets into actionable insights through robust dashboard development and predictive modeling.
            </p>
            <p className="text-slate-700 dark:text-slate-300 text-base sm:text-lg leading-relaxed font-medium">
              I am particularly interested in tackling challenging problems like <span className="text-slate-900 dark:text-white font-bold">Fraud Risk Analysis</span> and 
              deep <span className="text-slate-900 dark:text-white font-bold">Data Investigation</span> to drive effective, data-driven decision making in dynamic environments.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4"
          >
            <div className="col-span-full mb-1 sm:mb-2">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">What I Bring</h3>
            </div>
            
            {ABOUT_BRING.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card p-4 sm:p-5 rounded-2xl flex flex-col items-start gap-3 transition-transform duration-300"
                >
                  <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 shrink-0">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white text-base mb-1">{item.title}</h4>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-medium leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
