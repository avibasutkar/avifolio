import { motion } from 'motion/react';
import { FileDown } from 'lucide-react';

export function ResumeCTA() {
  return (
    <section className="py-16 sm:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 to-purple-900/10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-blue-500/10 rounded-full blur-[100px] -z-10" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card p-6 sm:p-12 rounded-3xl"
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 sm:mb-6 text-slate-900 dark:text-white tracking-tight">
            Interested in working together?
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-300 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed">
            Download my resume to learn more about my skills, experience, and projects. 
            I'm currently seeking Data Analyst and Data Scientist opportunities.
          </p>
          
          <a 
            href="/resume/Avinash-Basutkar-Resume.pdf" 
            download
            className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm sm:text-base transition-all hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] active:scale-95 group w-full sm:w-auto"
          >
            <FileDown className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
            Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
}
