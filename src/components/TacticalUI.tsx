import React from 'react';

export const TacticalCornerBracket: React.FC<{
  position: 'tl' | 'tr' | 'bl' | 'br';
  className?: string;
}> = ({ position, className = '' }) => {
  const positionClasses = {
    tl: 'top-0 left-0 border-t-2 border-l-2',
    tr: 'top-0 right-0 border-t-2 border-r-2',
    bl: 'bottom-0 left-0 border-b-2 border-l-2',
    br: 'bottom-0 right-0 border-b-2 border-r-2',
  };

  return (
    <div
      aria-hidden="true"
      className={`absolute w-2.5 h-2.5 pointer-events-none transition-colors duration-300 border-amber-500/40 dark:border-amber-400/50 group-hover:border-cyan-400 ${positionClasses[position]} ${className}`}
    />
  );
};

export const TacticalCrosshair: React.FC<{ className?: string }> = ({ className = '' }) => (
  <span
    aria-hidden="true"
    className={`font-mono text-xs select-none pointer-events-none text-slate-400/40 dark:text-cyan-400/30 ${className}`}
  >
    +
  </span>
);

export const TacticalBadge: React.FC<{
  children: React.ReactNode;
  variant?: 'amber' | 'cyan' | 'green' | 'default';
  className?: string;
  glow?: boolean;
}> = ({ children, variant = 'default', className = '', glow = false }) => {
  const variants = {
    default:
      'bg-slate-200/70 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border-slate-300/60 dark:border-slate-700/60',
    amber:
      'bg-amber-500/10 text-amber-700 dark:text-amber-300 border-amber-500/30 hover:border-amber-400/60',
    cyan:
      'bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border-cyan-500/30 hover:border-cyan-400/60',
    green:
      'bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-500/30',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono tracking-wider uppercase border transition-all duration-200 rounded-sm ${
        variants[variant]
      } ${glow ? 'shadow-[0_0_10px_rgba(245,158,11,0.15)]' : ''} ${className}`}
    >
      {children}
    </span>
  );
};

export const SectionHeader: React.FC<{
  tag: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}> = ({ tag, title, subtitle, align = 'center' }) => {
  const isCenter = align === 'center';

  return (
    <div className={`mb-12 sm:mb-16 ${isCenter ? 'text-center' : 'text-left'}`}>
      <div
        className={`inline-flex items-center gap-2 mb-3 text-xs font-mono uppercase tracking-widest text-amber-600 dark:text-amber-400 ${
          isCenter ? 'justify-center' : ''
        }`}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
        <span>{tag}</span>
        <span className="text-slate-400 dark:text-slate-600 font-mono">//</span>
      </div>

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-3.5 text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}

      {/* Subtle tactical line divider */}
      <div
        className={`mt-4 flex items-center gap-2 ${
          isCenter ? 'justify-center' : 'justify-start'
        }`}
      >
        <div className="w-12 h-[2px] bg-gradient-to-r from-amber-500 to-transparent" />
        <div className="w-2 h-2 rotate-45 border border-cyan-400/60 bg-transparent" />
        <div className="w-12 h-[2px] bg-gradient-to-l from-cyan-500 to-transparent" />
      </div>
    </div>
  );
};

export const TacticalCard: React.FC<{
  children: React.ReactNode;
  className?: string;
  interactive?: boolean;
}> = ({ children, className = '', interactive = true }) => {
  return (
    <div
      className={`group relative bg-white/70 dark:bg-slate-900/60 backdrop-blur-md border border-slate-200/80 dark:border-white/10 rounded-lg p-6 transition-all duration-300 shadow-sm hover:shadow-md dark:shadow-none ${
        interactive
          ? 'hover:border-amber-500/50 dark:hover:border-cyan-400/40 hover:-translate-y-1'
          : ''
      } ${className}`}
    >
      <TacticalCornerBracket position="tl" />
      <TacticalCornerBracket position="br" />
      {children}
    </div>
  );
};

