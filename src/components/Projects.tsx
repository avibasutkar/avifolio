import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';
import { PROJECTS } from '../data';
import { LazyImage } from './LazyImage';

export function Projects() {
  return (
    <section id="projects" className="py-16 sm:py-24 relative bg-slate-100/50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-12 sm:mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4"
          >
            Featured <span className="gradient-text">Projects</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "60px" }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-2xl overflow-hidden group flex flex-col h-full transition-all duration-300"
            >
              {/* Image Container */}
              <div className="relative h-44 sm:h-56 overflow-hidden bg-slate-200 dark:bg-slate-800">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-950/80 z-10" />
                <LazyImage 
                  src={project.image} 
                  alt={project.title} 
                  containerClassName="w-full h-full absolute inset-0"
                  imgClassName="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  fallback={<div className="w-full h-full bg-slate-200 dark:bg-slate-800 animate-pulse" />}
                  errorFallback={
                    <div className="w-full h-full flex items-center justify-center bg-slate-200 dark:bg-slate-800 p-8">
                      <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
                    </div>
                  }
                />
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6 flex flex-col flex-grow">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed mb-5 sm:mb-6 flex-grow font-medium">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-5 sm:mb-6">
                  {project.tags.map((tag, tIdx) => (
                    <span 
                      key={tIdx} 
                      className="text-xs px-2.5 py-1 rounded-md bg-blue-500/10 text-blue-700 dark:text-blue-300 border border-blue-500/20 font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-4 mt-auto pt-2">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-bold text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-white transition-colors py-1"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                  <button className="flex items-center gap-2 text-sm font-medium text-slate-400 cursor-not-allowed opacity-50 ml-4 py-1">
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
