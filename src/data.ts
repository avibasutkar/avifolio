import {
  Code,
  Database,
  LineChart,
  Brain,
  FileSpreadsheet,
  PieChart,
  BarChart,
  Layers,
  Sparkles
} from 'lucide-react';

export const ABOUT_BRING = [
  {
    title: 'Data Analysis',
    description: 'Turning raw datasets into meaningful insights and analytical reporting.',
    icon: LineChart,
  },
  {
    title: 'Machine Learning',
    description: 'Building predictive models and explainable AI solutions.',
    icon: Brain,
  },
  {
    title: 'Dashboard Development',
    description: 'Creating interactive Power BI dashboards for data-driven decisions.',
    icon: PieChart,
  },
  {
    title: 'Data Preprocessing',
    description: 'Robust ETL, data cleaning, and statistical investigation with Python & SQL.',
    icon: Code,
  },
];

export const SKILLS = [
  {
    category: 'Languages & Tools',
    icon: Code,
    gradient: 'from-blue-500 to-cyan-500',
    iconBg: 'bg-blue-500/15 text-blue-500 dark:text-blue-400 border border-blue-500/20',
    tagClass: 'bg-blue-500/10 text-blue-700 dark:text-blue-300 border-blue-500/20 hover:bg-blue-500/20 hover:border-blue-400/50',
    skills: ['Python', 'SQL', 'Excel'],
  },
  {
    category: 'Data Science & ML',
    icon: Brain,
    gradient: 'from-purple-500 to-indigo-500',
    iconBg: 'bg-purple-500/15 text-purple-500 dark:text-purple-400 border border-purple-500/20',
    tagClass: 'bg-purple-500/10 text-purple-700 dark:text-purple-300 border-purple-500/20 hover:bg-purple-500/20 hover:border-purple-400/50',
    skills: ['Machine Learning', 'Data Science', 'Predictive Modeling'],
  },
  {
    category: 'Visualization',
    icon: BarChart,
    gradient: 'from-amber-500 to-orange-500',
    iconBg: 'bg-amber-500/15 text-amber-500 dark:text-amber-400 border border-amber-500/20',
    tagClass: 'bg-amber-500/10 text-amber-700 dark:text-amber-300 border-amber-500/20 hover:bg-amber-500/20 hover:border-amber-400/50',
    skills: ['Power BI'],
  },
  {
    category: 'Databases',
    icon: Database,
    gradient: 'from-rose-500 to-pink-500',
    iconBg: 'bg-rose-500/15 text-rose-500 dark:text-rose-400 border border-rose-500/20',
    tagClass: 'bg-rose-500/10 text-rose-700 dark:text-rose-300 border-rose-500/20 hover:bg-rose-500/20 hover:border-rose-400/50',
    skills: ['MySQL'],
  },
  {
    category: 'Core Competencies',
    icon: Layers,
    gradient: 'from-emerald-500 to-teal-500',
    iconBg: 'bg-emerald-500/15 text-emerald-500 dark:text-emerald-400 border border-emerald-500/20',
    tagClass: 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-500/20 hover:bg-emerald-500/20 hover:border-emerald-400/50',
    skills: ['Data Analytics', 'Data Preprocessing', 'Dashboard Development', 'Fraud Risk Analysis'],
  },
];

export const EXPERIENCE = [
  {
    title: 'Data Science Intern',
    company: 'Qspiders',
    duration: 'Jan 2026 – Present',
    points: [
      'Performed data preprocessing and cleaning on real-world datasets using Python and SQL to prepare them for analysis.',
      'Built reports and interactive dashboards to support analytical problem-solving and data-driven decisions.',
    ],
  },
];

export const PROJECTS = [
  {
    id: 'analysis-agent',
    title: 'Analysis Agent',
    description: 'Full-stack AI Data Analyst Agent that automatically analyzes uploaded CSV datasets and performs Exploratory Data Analysis (EDA). Generated visual dashboards and an AI-powered natural language chat interface to interrogate data conversationally.',
    tags: ['React', 'TypeScript', 'Express', 'Google Gemini API'],
    github: 'https://github.com/avibasutkar/analysis-agent',
    image: '/images/projects/analysis-agent.png',
  },
  {
    id: 'enterprise-analyst',
    title: 'Enterprise Analyst Platform',
    description: 'End-to-end AI/ML web app that runs data validation, EDA, multi-model training, and evaluation on any uploaded CSV/Excel dataset. Added explainable AI, AI-generated insights, natural-language chat, and downloadable PDF reporting.',
    tags: ['Python', 'Streamlit', 'Machine Learning', 'Explainable AI'],
    github: 'https://github.com/avibasutkar/enterprice-analyst-platform',
    image: '/images/projects/enterprise-analyst.png',
  },
  {
    id: 'hr-dashboard',
    title: 'HR Analysis Dashboard',
    description: 'Analyzed employee attrition trends to identify key factors driving turnover, combining SQL, Python, and Power BI. Delivered actionable insights and interactive Power BI dashboards to help HR teams improve retention strategies.',
    tags: ['SQL', 'Python', 'Power BI', 'Machine Learning'],
    github: 'https://github.com/avibasutkar/HR-analysis-Dashboard',
    image: '/images/projects/hr-dashboard.png',
  },
  {
    id: 'question-generator',
    title: 'Automatic Question Generator',
    description: 'AI-powered tool that automatically generates meaningful practice questions from notes, PDFs, or text content. Designed to help students and educators speed up exam preparation and study material creation.',
    tags: ['Python', 'NLP', 'AI'],
    github: 'https://github.com/avibasutkar/Automatic-Question-Generator',
    image: '/images/projects/question-generator.png',
  },
  {
    id: 'pixel-counter',
    title: 'AI Pixel Counter',
    description: 'Computer vision application that detects, classifies, and counts pixels by color, object boundary, or selected region. Applied image processing and AI techniques to enable efficient, automated image analysis.',
    tags: ['Python', 'Computer Vision', 'Image Processing'],
    github: 'https://github.com/avibasutkar/ai-pixcel-counter',
    image: '/images/projects/pixel-counter.png',
  },
];

export const CERTIFICATIONS = [
  {
    id: 'fullstack-web-tap-academy',
    title: 'Fullstack Web Development',
    organization: 'Tap Academy',
    year: '2024',
    description: 'Core & Advanced Java, Spring, Hibernate, MySQL, and frontend development, applied in a capstone Online Food Delivery app.',
    image: '/images/certifications/cisco-networking.png',
  },
  {
    id: 'hackfest-unstop-cbit',
    title: 'AI & Data Science Hackfest',
    organization: 'UnStop / C Byregowda Institute of Technology',
    year: '2025',
    description: '24-hour intensive hackathon at C Byregowda Institute of Technology, Kolar developing innovative AI solutions.',
    image: '/images/certifications/quantum-quest-hackathon.jpeg',
  },
  {
    id: 'ai-tools-chatgpt-be10x',
    title: 'AI Tools & ChatGPT Workshop',
    organization: 'Be10X',
    year: '2026',
    description: '12-hour hands-on workshop led by an IIT Delhi trainer on ChatGPT, advanced prompt engineering, and AI tools for data analysis.',
    image: '/images/certifications/chatgpt-workshop.png',
    pdf: '/certificates/chatGPT workshop.pdf',
  },
  {
    id: 'claude-ai-guvi-hcl',
    title: 'Claude AI',
    organization: 'GUVI | HCL',
    year: '2025',
    description: 'Prompt engineering and building real-time production projects with AI.',
    image: '/images/certifications/claude-ai.jpeg',
  },
  {
    id: 'gen-ai-aiml-guvi-hcl',
    title: 'Gen AI in AIML',
    organization: 'GUVI | HCL',
    year: '2026',
    description: 'Webinar and hands-on session on building AI & Machine Learning projects.',
    image: '/images/certifications/guvi-gen-ai.jpeg',
  },
  {
    id: 'data-analyst-intern-novetech',
    title: 'Data Analyst Intern Certification',
    organization: 'NoveTech',
    year: '2026',
    description: 'Issued by NoveTech for demonstrated excellence in data analytics and problem solving.',
    image: '/images/certifications/powerbi-workshop.png',
  },
];

export const EDUCATION = [
  {
    degree: 'B.E. in Computer Science and Engineering',
    institution: 'C Byregowda Institute of Technology, Bangalore',
    graduated: 'Graduated 2026',
    cgpa: '8.1',
    coursework: ['DBMS', 'Statistics', 'Machine Learning', 'Data Structures'],
  },
];

export const LANGUAGES = ['English', 'Hindi', 'Kannada', 'Marathi', 'Telugu'];

export const SOCIALS = {
  github: 'https://github.com/avibasutkar',
  linkedin: 'https://linkedin.com/in/avinash-basutkar-061b3b279',
  email: 'avinashbasutkar29@gmail.com',
  phone: '+91 7259999521',
  location: 'Bangalore, India',
  website: 'https://avifolio.vercel.app/',
};
