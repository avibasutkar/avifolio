import React, { useState } from 'react';

interface SpiderWebProps {
  className?: string;
}

export const SpiderWeb: React.FC<SpiderWebProps> = ({ className = '' }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      aria-hidden="true"
      className={`absolute top-0 right-0 pointer-events-auto select-none overflow-visible transition-opacity duration-700 ${className}`}
      style={{
        width: 'min(460px, 92vw)',
        height: 'min(460px, 92vw)',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <svg
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full overflow-visible"
      >
        <defs>
          {/* Web Glow Gradient */}
          <radialGradient id="spidyWebGrad" cx="100%" cy="0%" r="100%" fx="100%" fy="0%">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.85" />
            <stop offset="35%" stopColor="#06b6d4" stopOpacity="0.45" />
            <stop offset="70%" stopColor="#f59e0b" stopOpacity="0.25" />
            <stop offset="95%" stopColor="#06b6d4" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
          </radialGradient>

          {/* Hanging Silk Strand Gradient */}
          <linearGradient id="spidySilkGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.2" />
            <stop offset="40%" stopColor="#38bdf8" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#ef4444" stopOpacity="0.9" />
          </linearGradient>

          {/* Spider Body Gradient */}
          <linearGradient id="spiderBodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1e293b" />
            <stop offset="60%" stopColor="#0f172a" />
            <stop offset="100%" stopColor="#e11d48" />
          </linearGradient>

          {/* Red Spider Glow Filter */}
          <filter id="spiderGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        <style>
          {`
            @keyframes pendulumSwing {
              0% {
                transform: rotate(4.5deg);
              }
              50% {
                transform: rotate(-4.5deg);
              }
              100% {
                transform: rotate(4.5deg);
              }
            }

            @keyframes spiderClimbBob {
              0%, 100% {
                transform: translateY(0px);
              }
              50% {
                transform: translateY(6px);
              }
            }

            @keyframes pulseEye {
              0%, 100% {
                opacity: 0.85;
                filter: drop-shadow(0 0 2px #ef4444);
              }
              50% {
                opacity: 1;
                filter: drop-shadow(0 0 6px #f43f5e);
              }
            }

            .spidy-pendulum {
              transform-origin: 300px 0px;
              animation: pendulumSwing 4.5s ease-in-out infinite;
              will-change: transform;
            }

            .spidy-bob {
              animation: spiderClimbBob 3s ease-in-out infinite;
              will-change: transform;
            }

            .spidy-eye-pulse {
              animation: pulseEye 2s ease-in-out infinite;
            }

            @media (prefers-reduced-motion: reduce) {
              .spidy-pendulum, .spidy-bob, .spidy-eye-pulse {
                animation: none !important;
              }
            }
          `}
        </style>

        {/* ======================================================== */}
        {/* SPIDER-MAN CORNER WEB STRUCTURE                         */}
        {/* ======================================================== */}
        <g className="text-slate-400/25 dark:text-cyan-400/25 transition-colors duration-500">
          {/* Subtle Outer Radius Frame */}
          <circle cx="400" cy="0" r="360" stroke="url(#spidyWebGrad)" strokeWidth="0.5" strokeDasharray="3 7" opacity="0.4" />
          <circle cx="400" cy="0" r="280" stroke="url(#spidyWebGrad)" strokeWidth="0.5" strokeDasharray="2 5" opacity="0.3" />

          {/* Primary Radial Structural Anchor Strands (Origin 400, 0) */}
          <line x1="400" y1="0" x2="0" y2="400" stroke="url(#spidyWebGrad)" strokeWidth="1.2" />
          <line x1="400" y1="0" x2="20" y2="280" stroke="url(#spidyWebGrad)" strokeWidth="0.9" />
          <line x1="400" y1="0" x2="80" y2="380" stroke="url(#spidyWebGrad)" strokeWidth="0.9" />
          <line x1="400" y1="0" x2="180" y2="400" stroke="url(#spidyWebGrad)" strokeWidth="0.9" />
          <line x1="400" y1="0" x2="280" y2="400" stroke="url(#spidyWebGrad)" strokeWidth="0.9" />
          <line x1="400" y1="0" x2="350" y2="400" stroke="url(#spidyWebGrad)" strokeWidth="0.9" />
          <line x1="400" y1="0" x2="0" y2="200" stroke="url(#spidyWebGrad)" strokeWidth="0.9" />
          <line x1="400" y1="0" x2="0" y2="120" stroke="url(#spidyWebGrad)" strokeWidth="0.9" />
          <line x1="400" y1="0" x2="0" y2="50" stroke="url(#spidyWebGrad)" strokeWidth="0.9" />

          {/* Concentric Drooping Spider-Man Web Arcs */}
          {/* Tier 1 - closest to the ceiling corner */}
          <path
            d="M 350 0 Q 355 25 370 42 Q 385 50 400 50"
            stroke="url(#spidyWebGrad)"
            strokeWidth="0.8"
            fill="none"
          />

          {/* Tier 2 */}
          <path
            d="M 300 0 Q 310 50 338 85 Q 368 105 400 110"
            stroke="url(#spidyWebGrad)"
            strokeWidth="0.85"
            fill="none"
          />

          {/* Tier 3 */}
          <path
            d="M 240 0 Q 255 75 295 130 Q 350 165 400 170"
            stroke="url(#spidyWebGrad)"
            strokeWidth="0.85"
            fill="none"
          />

          {/* Tier 4 */}
          <path
            d="M 180 0 Q 200 105 250 180 Q 320 225 400 235"
            stroke="url(#spidyWebGrad)"
            strokeWidth="0.8"
            fill="none"
          />

          {/* Tier 5 */}
          <path
            d="M 120 0 Q 145 138 205 230 Q 285 295 400 305"
            stroke="url(#spidyWebGrad)"
            strokeWidth="0.75"
            fill="none"
          />

          {/* Tier 6 */}
          <path
            d="M 60 0 Q 90 170 155 280 Q 250 360 400 375"
            stroke="url(#spidyWebGrad)"
            strokeWidth="0.7"
            fill="none"
          />

          {/* Spiderweb Geometric Nodes / Droplets */}
          <circle cx="370" cy="42" r="1.5" fill="currentColor" opacity="0.7" />
          <circle cx="338" cy="85" r="1.7" fill="currentColor" opacity="0.7" />
          <circle cx="295" cy="130" r="2" fill="currentColor" opacity="0.8" />
          <circle cx="250" cy="180" r="1.8" fill="currentColor" opacity="0.7" />
          <circle cx="205" cy="230" r="1.6" fill="currentColor" opacity="0.6" />
          <circle cx="155" cy="280" r="1.5" fill="currentColor" opacity="0.5" />

          {/* Additional Intersection Nodes */}
          <circle cx="355" cy="140" r="1.5" fill="#06b6d4" opacity="0.6" />
          <circle cx="270" cy="70" r="1.5" fill="#f59e0b" opacity="0.5" />

          {/* Tactical Corner Framing Overlay */}
          <path d="M 390 12 L 390 38" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
          <path d="M 362 12 L 390 12" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
          <text
            x="340"
            y="26"
            fill="currentColor"
            fontSize="7"
            fontFamily="'Chakra Petch', monospace"
            opacity="0.5"
            letterSpacing="1.5"
          >
            SPIDY_NET // SECTOR_01
          </text>
        </g>

        {/* ======================================================== */}
        {/* HANGING SPIDER-MAN SPIDER & SILK THREAD                  */}
        {/* Anchored at (300, 0) and hanging down gracefully         */}
        {/* ======================================================== */}
        <g
          className={`spidy-pendulum cursor-pointer transition-all duration-300 ${
            isHovered ? 'scale-105' : ''
          }`}
          style={{ transformOrigin: '300px 0px' }}
        >
          {/* Glowing Silk Thread */}
          <line
            x1="300"
            y1="0"
            x2="300"
            y2="175"
            stroke="url(#spidySilkGrad)"
            strokeWidth="1.2"
            strokeDasharray="4 1"
          />

          {/* Anchor node on top strand */}
          <circle cx="300" cy="0" r="2.5" fill="#06b6d4" opacity="0.9" />

          {/* Dangling Silk Node at Spider Attachment */}
          <circle cx="300" cy="175" r="2" fill="#ef4444" opacity="0.9" />

          {/* Hanging Spider Container with subtle bobbing motion */}
          <g
            className="spidy-bob"
            transform="translate(300, 195)"
            filter={isHovered ? 'url(#spiderGlow)' : undefined}
          >
            {/* SPIDER LEGS (8 Articulated Legs: 4 Left, 4 Right) */}
            <g
              stroke={isHovered ? '#f43f5e' : '#38bdf8'}
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              className="transition-colors duration-300"
              opacity="0.95"
            >
              {/* Pair 1: Front Legs reaching downwards */}
              {/* Left Front Leg */}
              <path d="M -3 -8 L -14 -16 L -18 -6 L -16 6" />
              {/* Right Front Leg */}
              <path d="M 3 -8 L 14 -16 L 18 -6 L 16 6" />

              {/* Pair 2: Middle-Front Legs */}
              {/* Left Middle-Front */}
              <path d="M -4 -4 L -18 -8 L -23 4 L -19 16" />
              {/* Right Middle-Front */}
              <path d="M 4 -4 L 18 -8 L 23 4 L 19 16" />

              {/* Pair 3: Middle-Rear Legs */}
              {/* Left Middle-Rear */}
              <path d="M -4 2 L -19 4 L -21 16 L -15 26" />
              {/* Right Middle-Rear */}
              <path d="M 4 2 L 18 4 L 21 16 L 15 26" />

              {/* Pair 4: Rear Legs extending up towards the silk thread */}
              {/* Left Rear Leg */}
              <path d="M -3 6 L -15 14 L -14 26 L -7 34" />
              {/* Right Rear Leg */}
              <path d="M 3 6 L 15 14 L 14 26 L 7 34" />
            </g>

            {/* SPIDER BODY */}
            {/* Abdomen (Tapered oval lower body) */}
            <ellipse
              cx="0"
              cy="6"
              rx="6.5"
              ry="9.5"
              fill="url(#spiderBodyGrad)"
              stroke={isHovered ? '#ef4444' : '#06b6d4'}
              strokeWidth="1.2"
              className="transition-colors duration-300"
            />

            {/* Cephalothorax (Upper chest/head) */}
            <ellipse
              cx="0"
              cy="-6"
              rx="5"
              ry="4.5"
              fill="#0f172a"
              stroke={isHovered ? '#ef4444' : '#06b6d4'}
              strokeWidth="1"
            />

            {/* Iconic Spider-Man Arachnid Symbol on Abdomen */}
            <path
              d="M 0 1 L -2.5 5 L 0 9 L 2.5 5 Z"
              fill={isHovered ? '#ef4444' : '#f59e0b'}
              opacity="0.9"
              className="transition-colors duration-300"
            />
            <line x1="-4" y1="5" x2="4" y2="5" stroke={isHovered ? '#ef4444' : '#f59e0b'} strokeWidth="0.8" />
            <line x1="-3" y1="7" x2="3" y2="7" stroke={isHovered ? '#ef4444' : '#f59e0b'} strokeWidth="0.8" />

            {/* Glowing Spider Eyes (Spider-Man Angled Eyes) */}
            <g className="spidy-eye-pulse">
              {/* Left Eye */}
              <polygon
                points="-3.2,-8.5 -1.2,-7 -2,-5.5"
                fill={isHovered ? '#ffffff' : '#ef4444'}
              />
              {/* Right Eye */}
              <polygon
                points="3.2,-8.5 1.2,-7 2,-5.5"
                fill={isHovered ? '#ffffff' : '#ef4444'}
              />
            </g>

            {/* Micro Tactical Crosshair Indicator over Spider */}
            <circle
              cx="0"
              cy="0"
              r="13"
              stroke="#06b6d4"
              strokeWidth="0.5"
              strokeDasharray="2 3"
              opacity={isHovered ? '0.7' : '0.3'}
              className="transition-opacity duration-300"
            />

            {/* Interactive Tooltip Pill on Hover */}
            {isHovered && (
              <g transform="translate(0, 42)">
                <rect
                  x="-38"
                  y="-8"
                  width="76"
                  height="16"
                  rx="4"
                  fill="#080c14"
                  stroke="#ef4444"
                  strokeWidth="0.8"
                />
                <text
                  x="0"
                  y="3"
                  textAnchor="middle"
                  fill="#ffffff"
                  fontSize="7"
                  fontFamily="'Chakra Petch', monospace"
                  fontWeight="bold"
                  letterSpacing="1"
                >
                  SPIDY_BOT // ACTIVE
                </text>
              </g>
            )}
          </g>
        </g>
      </svg>
    </div>
  );
};
