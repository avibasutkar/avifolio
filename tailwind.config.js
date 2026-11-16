/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        tactical: {
          dark: '#080c14',
          surface: '#0f172a',
          card: '#141e33',
          border: 'rgba(255, 255, 255, 0.08)',
          'border-light': 'rgba(0, 0, 0, 0.08)',
          amber: '#f59e0b',
          'amber-glow': 'rgba(245, 158, 11, 0.15)',
          cyan: '#06b6d4',
          'cyan-glow': 'rgba(6, 182, 212, 0.15)',
          red: '#ef4444',
          green: '#10b981',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'Menlo', 'Monaco', 'Courier New', 'monospace'],
        tactical: ['"Chakra Petch"', '"Rajdhani"', 'sans-serif'],
      },
      backgroundImage: {
        'grid-pattern': "radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.05) 1px, transparent 0)",
        'grid-pattern-light': "radial-gradient(circle at 1px 1px, rgba(0, 0, 0, 0.05) 1px, transparent 0)",
      },
      animation: {
        'pulse-subtle': 'pulseSubtle 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'radar': 'radarScan 6s linear infinite',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'hud-scan': 'hudScan 8s ease-in-out infinite alternate',
      },
      keyframes: {
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        },
        radarScan: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        hudScan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        }
      }
    },
  },
  plugins: [],
}

