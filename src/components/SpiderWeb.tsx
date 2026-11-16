import React from 'react';

interface SpiderWebProps {
  className?: string;
}

export const SpiderWeb: React.FC<SpiderWebProps> = ({ className = '' }) => {
  return (
    <div
      aria-hidden="true"
      className={`absolute top-0 right-0 pointer-events-none select-none overflow-hidden transition-opacity duration-700 ${className}`}
      style={{
        width: 'min(420px, 90vw)',
        height: 'min(420px, 90vw)',
      }}
    >
      <svg
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full text-slate-400/25 dark:text-cyan-400/20 group-hover:dark:text-cyan-400/35 transition-colors duration-500"
      >
        <defs>
          <radialGradient id="webGradient" cx="100%" cy="0%" r="100%" fx="100%" fy="0%">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.85" />
            <stop offset="45%" stopColor="currentColor" stopOpacity="0.45" />
            <stop offset="85%" stopColor="currentColor" stopOpacity="0.12" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
          </radialGradient>
          <filter id="webGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="1" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Outer subtle glow circle */}
        <circle cx="400" cy="0" r="320" stroke="url(#webGradient)" strokeWidth="0.5" strokeDasharray="3 6" opacity="0.4" />

        {/* Primary Radial Strands (originating from top right corner 400,0) */}
        <line x1="400" y1="0" x2="0" y2="400" stroke="url(#webGradient)" strokeWidth="1" />
        <line x1="400" y1="0" x2="30" y2="280" stroke="url(#webGradient)" strokeWidth="0.8" />
        <line x1="400" y1="0" x2="100" y2="380" stroke="url(#webGradient)" strokeWidth="0.8" />
        <line x1="400" y1="0" x2="200" y2="400" stroke="url(#webGradient)" strokeWidth="0.8" />
        <line x1="400" y1="0" x2="300" y2="400" stroke="url(#webGradient)" strokeWidth="0.8" />
        <line x1="400" y1="0" x2="0" y2="200" stroke="url(#webGradient)" strokeWidth="0.8" />
        <line x1="400" y1="0" x2="0" y2="100" stroke="url(#webGradient)" strokeWidth="0.8" />
        <line x1="400" y1="0" x2="0" y2="300" stroke="url(#webGradient)" strokeWidth="0.8" />
        <line x1="400" y1="0" x2="0" y2="20" stroke="url(#webGradient)" strokeWidth="0.8" />

        {/* Concentric Web Arcs (Tier 1 - closest to corner) */}
        <path
          d="M 330 0 Q 330 35 345 55 Q 365 70 400 70"
          stroke="url(#webGradient)"
          strokeWidth="0.75"
          fill="none"
        />

        {/* Tier 2 */}
        <path
          d="M 270 0 Q 275 60 300 95 Q 335 125 400 130"
          stroke="url(#webGradient)"
          strokeWidth="0.75"
          fill="none"
        />

        {/* Tier 3 */}
        <path
          d="M 210 0 Q 220 85 255 140 Q 305 185 400 190"
          stroke="url(#webGradient)"
          strokeWidth="0.75"
          fill="none"
        />

        {/* Tier 4 */}
        <path
          d="M 150 0 Q 165 115 210 185 Q 275 245 400 250"
          stroke="url(#webGradient)"
          strokeWidth="0.75"
          fill="none"
        />

        {/* Tier 5 */}
        <path
          d="M 90 0 Q 110 145 165 230 Q 240 305 400 310"
          stroke="url(#webGradient)"
          strokeWidth="0.75"
          fill="none"
        />

        {/* Tier 6 - outer web span */}
        <path
          d="M 30 0 Q 55 175 120 275 Q 210 365 400 370"
          stroke="url(#webGradient)"
          strokeWidth="0.65"
          fill="none"
        />

        {/* Subtle Geometric Web Intersection Nodes */}
        <circle cx="345" cy="55" r="1.5" fill="currentColor" opacity="0.6" />
        <circle cx="300" cy="95" r="1.5" fill="currentColor" opacity="0.6" />
        <circle cx="255" cy="140" r="1.5" fill="currentColor" opacity="0.6" />
        <circle cx="210" cy="185" r="1.5" fill="currentColor" opacity="0.6" />
        <circle cx="165" cy="230" r="1.5" fill="currentColor" opacity="0.6" />
        <circle cx="120" cy="275" r="1.5" fill="currentColor" opacity="0.6" />

        {/* Tactical HUD Corner Accent framing the web motif */}
        <path d="M 390 10 L 390 35" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
        <path d="M 365 10 L 390 10" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
        <text
          x="345"
          y="25"
          fill="currentColor"
          fontSize="7"
          fontFamily="monospace"
          opacity="0.4"
          letterSpacing="1"
        >
          SECTOR_01
        </text>
      </svg>
    </div>
  );
};

