# Modern Minimalist Tactical Portfolio — Avinash Basutkar

> **Computer Science & Engineering Student | Aspiring Web Developer**  
> Rebuilt with a modern, minimalist interface inspired by **BGMI tactical HUD aesthetics**, **JARVIS interactive precision**, and **Spider-Man web design accents**.

---

## 🌟 Visual & Architectural Direction

1. **Subtle BGMI-Inspired Tactical Aesthetic**:
   - Restrained palette: Tactical Amber (`#f59e0b`) & Tactical Cyan (`#06b6d4`) against clean slate/dark backdrops.
   - Precision military/HUD corner brackets, coordinate telemetry (`LOC // 12.9716° N, 77.5946° E`), operational status badges (`STATUS // READY_FOR_HIRE`), and crosshair micro-accents.
   - Zero gamer clutter or neon fatigue — 100% recruiter and industry-ready.

2. **JARVIS-Inspired Desktop Reticle Cursor**:
   - Precision center dot with smooth lag/spring physics for outer reticle ring.
   - 4-axis HUD tick marks that dynamically rotate and expand when hovering interactive elements.
   - Automatically disabled on touchscreens and when `prefers-reduced-motion` is enabled.
   - Strictly `pointer-events: none` ensuring no interference with clicking or text selection.

3. **Spider-Man-Inspired Web Pattern**:
   - Geometric radial SVG web motif nestled in the hero section's top-right corner.
   - Delicate line weights, subtle opacity (15–25%), and glowing nodal coordinates.

4. **Zero-Flash Theme System**:
   - Smooth animated Dark / Light mode toggle switch with rotation physics.
   - Immediate pre-render script preventing FOUC (Flash of Unstyled Content).
   - Saved in `localStorage` with automated fallback to system preference.

5. **Curated Content Sections**:
   - **Hero Section**: Tactical coordinate ribbon, verified identity badge, bold typography, profile container with HUD scan overlay, and dual CTAs (*View Projects* & *Contact Me*).
   - **About Me**: Academic metrics (8.1 CGPA), development philosophy, and core architectural pillars.
   - **Projects**: Filterable grid (Web, AI/ML, Data Analytics) with real screenshots, GitHub links, and interactive architecture inspection modals.
   - **Skills**: Categorized badges for Frontend, Programming Languages, Backend & Databases, Tools & Platforms, and AI/Data.
   - **Experience & Education**: Interactive tabbed timelines covering internships at Qspiders & NoveTech, B.E. at C Byregowda Institute of Technology, and verified certifications.
   - **Contact**: Encrypted transmission form with real validation, confetti celebration on dispatch, and 1-click copy buttons for email and phone.
   - **Tactical Footer**: Live IST system clock, coordinates, social links, and back-to-top shortcut.

---

## 🚀 Tech Stack

- **Framework**: React 18 + TypeScript
- **Bundler**: Vite 5
- **Styling**: Tailwind CSS 3
- **Icons**: Lucide React + Custom SVG Icons
- **Effects**: Canvas Confetti + Custom RAF Interpolation Engine

---

## 🛠️ Local Development & Build

```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev

# 3. Build optimized production bundle
npm run build

# 4. Preview production build locally
npm run preview
```

---

## 📁 Project Directory Structure

```text
pofio/
├── public/
│   ├── favicon.ico
│   ├── favicon.svg
│   ├── images/
│   │   ├── profile.jpg
│   │   ├── projects/          # analysis-agent, enterprise-analyst, etc.
│   │   └── certifications/    # quantum-quest, chatgpt, tap-academy, etc.
│   └── resume/
│       └── Avinash-Basutkar-Resume.pdf
├── src/
│   ├── components/
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── ExperienceAndEducation.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Icons.tsx
│   │   ├── JarvisCursor.tsx
│   │   ├── Navbar.tsx
│   │   ├── Projects.tsx
│   │   ├── Skills.tsx
│   │   ├── SpiderWeb.tsx
│   │   ├── TacticalUI.tsx
│   │   └── ThemeToggle.tsx
│   ├── data/
│   │   └── portfolioData.ts   # Real data extracted & organized
│   ├── types/
│   │   └── index.ts
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.ts
```

---

## 📄 License

MIT © Avinash Basutkar

