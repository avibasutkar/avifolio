import { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { ArrowDown, Github, Linkedin, Mail, Sparkles } from 'lucide-react';
import { SOCIALS } from '../data';

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay fallback if blocked by browser policies
      });
    }
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-[90vh] lg:min-h-screen flex items-center overflow-hidden py-12 lg:py-0"
    >
      {/* Background Video with Crystal-Clear Visibility */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <video
          ref={videoRef}
          className="w-full h-full object-cover object-[70%_center]"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        >
          <source src="/videos/hero-background.mp4" type="video/mp4" />
        </video>
        {/* Light subtle vignettes */}
        <div className="absolute inset-0 bg-black/15" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />
      </div>

      {/* Content Container Pushed to the Left - Pure Crisp White Theme */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-12 flex justify-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-transparent border-0 shadow-none backdrop-blur-none p-0 sm:py-4 max-w-xl lg:max-w-2xl text-left"
        >
          {/* Crisp Tagline Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold tracking-wide shadow-xl border border-white/30 mb-6 drop-shadow-lg transition-transform duration-300 hover:scale-105"
          >
            <Sparkles className="w-4 h-4 text-yellow-300 animate-pulse" />
            <span>Aspiring Data Scientist</span>
          </motion.div>

          {/* Main Title in Pure White */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]"
          >
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-purple-300 bg-clip-text text-transparent font-black drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">
              Avinash Basutkar
            </span>
          </motion.h1>

          {/* Subheading Description in Bright White */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base sm:text-xl text-white mb-8 leading-relaxed font-semibold drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)]"
          >
            I turn raw data into clear, actionable insights using{' '}
            <span className="text-white font-extrabold bg-blue-600/50 px-2.5 py-0.5 rounded-lg border border-white/20 backdrop-blur-md shadow-md">
              Python, SQL, Machine Learning
            </span>{' '}
            and{' '}
            <span className="text-white font-extrabold bg-purple-600/50 px-2.5 py-0.5 rounded-lg border border-white/20 backdrop-blur-md shadow-md">
              Power BI & Tableau
            </span>
            .
          </motion.p>

          {/* Call-to-Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-8"
          >
            <a
              href="#projects"
              className="text-center bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-8 py-3.5 rounded-2xl font-bold transition-all duration-300 shadow-xl shadow-blue-500/40 hover:shadow-blue-500/60 hover:scale-[1.05] hover:-translate-y-1 active:scale-95 border border-white/30"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="text-center bg-white/15 hover:bg-white/25 text-white px-8 py-3.5 rounded-2xl font-bold transition-all duration-300 border border-white/30 backdrop-blur-md shadow-xl hover:shadow-white/20 hover:scale-[1.05] hover:-translate-y-1 active:scale-95"
            >
              Get in Touch
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex items-center gap-4 pt-4 border-t border-white/30"
          >
            <span className="text-xs uppercase tracking-wider font-extrabold text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">Connect:</span>
            <a
              href={SOCIALS.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-3 rounded-xl bg-white/15 hover:bg-blue-600 text-white border border-white/30 transition-all duration-300 hover:scale-120 hover:-translate-y-1 hover:rotate-6 active:scale-95 shadow-xl hover:shadow-blue-500/40 backdrop-blur-md"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={SOCIALS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-3 rounded-xl bg-white/15 hover:bg-blue-600 text-white border border-white/30 transition-all duration-300 hover:scale-120 hover:-translate-y-1 hover:-rotate-6 active:scale-95 shadow-xl hover:shadow-blue-500/40 backdrop-blur-md"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${SOCIALS.email}`}
              aria-label="Email"
              className="p-3 rounded-xl bg-white/15 hover:bg-blue-600 text-white border border-white/30 transition-all duration-300 hover:scale-120 hover:-translate-y-1 hover:rotate-6 active:scale-95 shadow-xl hover:shadow-blue-500/40 backdrop-blur-md"
            >
              <Mail className="w-5 h-5" />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        aria-label="Scroll to About section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ opacity: { duration: 1, delay: 0.8 }, y: { duration: 1.8, repeat: Infinity, ease: 'easeInOut' } }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-white hover:text-blue-300 p-2.5 rounded-full bg-white/15 backdrop-blur-md border border-white/30 shadow-2xl hover:scale-115 transition-transform duration-300"
      >
        <ArrowDown className="w-5 h-5" />
      </motion.a>
    </section>
  );
}
