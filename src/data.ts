import {
  Code,
  Database,
  LineChart,
  Brain,
  FileSpreadsheet,
  PieChart,
  BarChart,
  Server
} from 'lucide-react';

export const ABOUT_BRING = [
  {
    title: 'Data Analysis',
    description: 'Turning raw datasets into meaningful insights.',
    icon: LineChart,
  },
  {
    title: 'Machine Learning',
    description: 'Building predictive models and analytical solutions.',
    icon: Brain,
  },
  {
    title: 'Business Intelligence',
    description: 'Creating dashboards and reports for decision making.',
    icon: PieChart,
  },
  {
    title: 'AI',
    description: 'Building practical AI-powered data applications.',
    icon: Code,
  },
];

export const SKILLS = [
  {
    category: 'Programming',
    icon: Code,
    gradient: 'from-blue-500 to-cyan-500',
    iconBg: 'bg-blue-500/15 text-blue-500 dark:text-blue-400 border border-blue-500/20',
    tagClass: 'bg-blue-500/10 text-blue-700 dark:text-blue-300 border-blue-500/20 hover:bg-blue-500/20 hover:border-blue-400/50',
    skills: ['Python', 'SQL'],
  },
  {
    category: 'Data Analytics',
    icon: FileSpreadsheet,
    gradient: 'from-emerald-500 to-teal-500',
    iconBg: 'bg-emerald-500/15 text-emerald-500 dark:text-emerald-400 border border-emerald-500/20',
    tagClass: 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-500/20 hover:bg-emerald-500/20 hover:border-emerald-400/50',
    skills: ['Excel', 'Pandas', 'NumPy', 'Data Preprocessing'],
  },
  {
    category: 'Visualization',
    icon: BarChart,
    gradient: 'from-amber-500 to-orange-500',
    iconBg: 'bg-amber-500/15 text-amber-500 dark:text-amber-400 border border-amber-500/20',
    tagClass: 'bg-amber-500/10 text-amber-700 dark:text-amber-300 border-amber-500/20 hover:bg-amber-500/20 hover:border-amber-400/50',
    skills: ['Power BI', 'Tableau', 'Matplotlib'],
  },
  {
    category: 'Machine Learning',
    icon: Brain,
    gradient: 'from-purple-500 to-indigo-500',
    iconBg: 'bg-purple-500/15 text-purple-500 dark:text-purple-400 border border-purple-500/20',
    tagClass: 'bg-purple-500/10 text-purple-700 dark:text-purple-300 border-purple-500/20 hover:bg-purple-500/20 hover:border-purple-400/50',
    skills: ['Machine Learning', 'Predictive Modeling', 'Scikit-learn'],
  },
  {
    category: 'Database',
    icon: Database,
    gradient: 'from-rose-500 to-pink-500',
    iconBg: 'bg-rose-500/15 text-rose-500 dark:text-rose-400 border border-rose-500/20',
    tagClass: 'bg-rose-500/10 text-rose-700 dark:text-rose-300 border-rose-500/20 hover:bg-rose-500/20 hover:border-rose-400/50',
    skills: ['MySQL'],
  },
];

export const EXPERIENCE = [
  {
    title: 'Data Science Intern (Python)',
    company: 'PySpiders',
    duration: '8 Months',
    points: [
      'Performed data preprocessing, cleaning, and exploratory data analysis on real-world datasets using Python and SQL.',
      'Built analytical reports, data visualization pipelines, and interactive business dashboards.',
      'Applied Python data science libraries and machine learning models to solve analytical problems.',
    ],
  },
];

export const PROJECTS = [
  {
    id: 'analysis-agent',
    title: 'Analysis Agent',
    description: 'Full-stack AI Data Analyst Agent that automatically analyzes uploaded CSV datasets and performs Exploratory Data Analysis.',
    tags: ['React', 'TypeScript', 'Express', 'Google Gemini API'],
    github: 'https://github.com/avibasutkar/analysis-agent',
    image: '/images/projects/analysis-agent.png',
  },
  {
    id: 'enterprise-analyst',
    title: 'Enterprise Analyst Platform',
    description: 'End-to-end AI/ML platform for data validation, EDA, multi-model training, evaluation, explainable AI, natural-language interaction, and downloadable PDF reporting.',
    tags: ['Python', 'Streamlit', 'Machine Learning', 'Explainable AI'],
    github: 'https://github.com/avibasutkar/enterprice-analyst-platform',
    image: '/images/projects/enterprise-analyst.png',
  },
  {
    id: 'hr-dashboard',
    title: 'HR Analysis Dashboard',
    description: 'Analyzed employee attrition trends and identified key factors driving turnover using SQL, Python, and Power BI.',
    tags: ['SQL', 'Python', 'Power BI', 'Machine Learning'],
    github: 'https://github.com/avibasutkar/HR-analysis-Dashboard',
    image: '/images/projects/hr-dashboard.png',
  },
  {
    id: 'question-generator',
    title: 'Automatic Question Generator',
    description: 'AI-powered application that generates meaningful practice questions from notes, PDFs, and text.',
    tags: ['Python', 'NLP', 'AI'],
    github: 'https://github.com/avibasutkar/Automatic-Question-Generator',
    image: '/images/projects/question-generator.png',
  },
  {
    id: 'pixel-counter',
    title: 'AI Pixel Counter',
    description: 'Computer vision application that detects, classifies, and counts pixels using color, object boundaries, or selected regions.',
    tags: ['Python', 'Computer Vision', 'Image Processing'],
    github: 'https://github.com/avibasutkar/ai-pixcel-counter',
    image: '/images/projects/pixel-counter.png',
  },
];

export const CERTIFICATIONS = [
  {
    id: 'basics-of-ai-uniathena',
    title: 'Basics of Artificial Intelligence',
    organization: 'UniAthena & CIQ, UK',
    year: '2026',
    description: 'Certified in Artificial Intelligence fundamentals, blockchain-verified credential delivered in partnership with Cambridge International Qualifications, UK.',
    image: '/images/certifications/ai-uniathena.png',
    pdf: '/certificates/uniathena-AI.pdf',
  },
  {
    id: 'basics-of-python-uniathena',
    title: 'Basics of Python',
    organization: 'UniAthena & CIQ, UK',
    year: '2026',
    description: 'Certified in Python programming fundamentals, blockchain-verified credential delivered in partnership with Cambridge International Qualifications, UK.',
    image: '/images/certifications/python-uniathena.png',
    pdf: '/certificates/uniathena-python.pdf',
  },
  {
    id: 'cisco-networking-labs',
    title: 'Practical Cisco Networking Labs',
    organization: 'Udemy / Cisco',
    year: '2025',
    description: 'Hands-on certification in Cisco Networking Labs and Cisco Packet Tracer configuration.',
    image: '/images/certifications/cisco-networking.png',
    pdf: '/certificates/CISCO.pdf',
  },
  {
    id: 'ai-tools-chatgpt-be10x',
    title: 'AI Tools & ChatGPT Workshop',
    organization: 'Be10X',
    year: '2026',
    description: 'Hands-on workshop on ChatGPT prompt engineering, AI data analysis, presentation generation, and AI-assisted coding & debugging.',
    image: '/images/certifications/chatgpt-workshop.png',
    pdf: '/certificates/chatGPT workshop.pdf',
  },
  {
    id: 'powerbi-workshop-officemaster',
    title: 'PowerBI Workshop',
    organization: 'OfficeMaster',
    year: '2026',
    description: 'Practical certification for creating AI-powered interactive business dashboards and analytical reports in Power BI.',
    image: '/images/certifications/powerbi-workshop.png',
    pdf: '/certificates/powerBI.pdf',
  },
  {
    id: '30-days-powerbi-skillcourse',
    title: '30 Days Power BI Micro Course',
    organization: 'SkillCourse',
    year: '2026',
    description: 'ISO 9001:2015 certified intensive 30-day course covering advanced Power BI data visualization and analytics.',
    image: '/images/certifications/skillcourse-powerbi.png',
  },
  {
    id: 'claude-ai-guvi-hcl',
    title: 'Claude AI Productivity Course',
    organization: 'GUVI | HCL',
    year: '2026',
    description: 'Building custom AI work assistants and mastering productivity tools powered by Claude AI.',
    image: '/images/certifications/claude-ai.jpeg',
  },
  {
    id: 'generative-ai-guvi-hcl',
    title: 'Master the Power of Generative AI',
    organization: 'GUVI | HCL',
    year: '2026',
    description: 'Hands-on webinar on Generative AI applications and building careers in AI & Machine Learning.',
    image: '/images/certifications/guvi-gen-ai.jpeg',
  },
  {
    id: 'python-chatbot-guvi-hcl',
    title: 'Building a Chatbot Using Python',
    organization: 'GUVI | HCL',
    year: '2026',
    description: 'Hands-on certification for developing conversational AI applications and AI chatbots in Python.',
    image: '/images/certifications/python-chatbot.png',
  },
  {
    id: 'quizoff-2026-ai-quiz',
    title: "QuizOff 2026: India's Biggest AI Quiz",
    organization: 'CampusCrew / Unstop',
    year: '2026',
    description: "Recognized participant in QuizOff 2026: India's Biggest AI Quiz among 525,000+ students across 48,500+ institutions.",
    image: '/images/certifications/ai-quizoff.jpeg',
  },
  {
    id: 'quantum-quest-hackathon',
    title: 'Quantum Quest 24 HR Hackathon',
    organization: 'Unstop / CByregowda Institute of Technology',
    year: '2026',
    description: 'Round 2 participant in 24-Hour Quantum Quest AI & Software Hackathon organized by C. Byre Gowda Institute of Technology.',
    image: '/images/certifications/quantum-quest-hackathon.jpeg',
  },
];

export const EDUCATION = [
  {
    degree: 'Bachelor of Engineering — Computer Science and Engineering',
    institution: 'C Byregowda Institute of Technology, Bangalore',
    graduated: '2026',
    cgpa: '8.1',
    coursework: ['DBMS', 'Statistics', 'Machine Learning', 'Data Structures'],
  },
  {
    degree: 'Pre-University Course (PCMB) — Science',
    institution: 'D. Devaraj Urs College of Science',
    graduated: '2022',
    coursework: ['Physics', 'Chemistry', 'Mathematics', 'Biology'],
  },
  {
    degree: 'Secondary Schooling (SSLC)',
    institution: 'Sharada Vidyanikethan School',
    graduated: '2020',
    coursework: ['Science', 'Mathematics', 'Social Science'],
  },
];

export const SOCIALS = {
  github: 'https://github.com/avibasutkar',
  linkedin: 'https://linkedin.com/in/avinash-basutkar-061b3b279',
  email: 'avinashbasutkar29@gmail.com',
  phone: '+91 7259999521',
  location: 'Bangalore, India',
};
