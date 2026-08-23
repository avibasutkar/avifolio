import { motion } from 'motion/react';

export function SectionDivider() {
  return (
    <div className="w-full flex justify-center py-4 relative z-10 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, width: "0%" }}
        whileInView={{ opacity: 1, width: "100%" }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="h-px max-w-5xl mx-auto w-full bg-gradient-to-r from-transparent via-blue-400/50 dark:via-purple-500/50 to-transparent shadow-[0_0_15px_rgba(59,130,246,0.3)] dark:shadow-[0_0_15px_rgba(168,85,247,0.3)]"
      />
    </div>
  );
}
