import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, MapPin, Phone, Send, CheckCircle2 } from 'lucide-react';
import { SOCIALS } from '../data';

export function Contact() {
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Simulate sending message
    setShowToast(true);
    const form = e.currentTarget;
    form.reset();
    
    setTimeout(() => {
      setShowToast(false);
    }, 4000);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 relative bg-slate-100/50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-12 sm:mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4"
          >
            Get in <span className="gradient-text">Touch</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "60px" }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 space-y-4 sm:space-y-6"
          >
            <div className="glass-card p-4 sm:p-6 rounded-2xl flex items-start gap-3.5 sm:gap-4">
              <div className="p-2.5 sm:p-3 rounded-xl bg-blue-500/10 text-blue-400 shrink-0">
                <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div className="overflow-hidden">
                <h3 className="font-semibold text-slate-900 dark:text-white mb-0.5 sm:mb-1 text-sm sm:text-base">Email</h3>
                <a href={`mailto:${SOCIALS.email}`} className="text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-white transition-colors text-xs sm:text-sm break-all">
                  {SOCIALS.email}
                </a>
              </div>
            </div>

            <div className="glass-card p-4 sm:p-6 rounded-2xl flex items-start gap-3.5 sm:gap-4">
              <div className="p-2.5 sm:p-3 rounded-xl bg-purple-500/10 text-purple-400 shrink-0">
                <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 dark:text-white mb-0.5 sm:mb-1 text-sm sm:text-base">Phone</h3>
                <a href={`tel:${SOCIALS.phone.replace(/\s+/g, '')}`} className="text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-white transition-colors text-xs sm:text-sm">
                  {SOCIALS.phone}
                </a>
              </div>
            </div>

            <div className="glass-card p-4 sm:p-6 rounded-2xl flex items-start gap-3.5 sm:gap-4">
              <div className="p-2.5 sm:p-3 rounded-xl bg-blue-500/10 text-blue-400 shrink-0">
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 dark:text-white mb-0.5 sm:mb-1 text-sm sm:text-base">Location</h3>
                <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm">
                  {SOCIALS.location}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-3"
          >
            <form 
              className="glass-card p-5 sm:p-8 rounded-3xl"
              onSubmit={handleSubmit}
            >
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-4 sm:mb-6">Send me a message</h3>
              
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-300">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      required
                      className="w-full bg-white/50 dark:bg-slate-950/50 border border-slate-300 dark:border-white/10 rounded-xl px-3.5 sm:px-4 py-2.5 sm:py-3 text-slate-900 dark:text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-base"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-300">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      required
                      className="w-full bg-white/50 dark:bg-slate-950/50 border border-slate-300 dark:border-white/10 rounded-xl px-3.5 sm:px-4 py-2.5 sm:py-3 text-slate-900 dark:text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-base"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-300">Message</label>
                  <textarea 
                    id="message" 
                    required
                    rows={4}
                    className="w-full bg-white/50 dark:bg-slate-950/50 border border-slate-300 dark:border-white/10 rounded-xl px-3.5 sm:px-4 py-2.5 sm:py-3 text-slate-900 dark:text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none text-base"
                    placeholder="Hello Avinash, I'd like to discuss..."
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full py-3.5 sm:py-4 rounded-xl bg-blue-600 hover:bg-blue-700 active:scale-98 text-white font-semibold transition-colors flex items-center justify-center gap-2 mt-2"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 bg-white dark:bg-slate-800 text-slate-900 dark:text-white px-5 py-3.5 rounded-full shadow-2xl border border-slate-200 dark:border-white/10 max-w-[90vw]"
          >
            <div className="bg-green-500/10 text-green-500 rounded-full p-1 shrink-0">
              <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <span className="font-medium text-xs sm:text-sm">Message sent successfully!</span>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
