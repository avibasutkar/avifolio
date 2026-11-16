import { Project, SkillCategory, ExperienceItem, EducationItem, CertificationItem } from '../types';

export const personalInfo = {
  name: "Avinash Basutkar",
  shortName: "Avinash B.",
  role: "Computer Science Student | Aspiring Web Developer",
  callsign: "AVI // DEV_01",
  location: "Bangalore, Karnataka, India",
  coordinates: "12.9716° N, 77.5946° E",
  status: "OPEN_FOR_OPPORTUNITIES",
  statusText: "Ready for Roles & Internships",
  email: "avinashbasutkar29@gmail.com",
  phone: "+91 7259999521",
  github: "https://github.com/avibasutkar",
  linkedin: "https://linkedin.com/in/avinash-basutkar-061b3b279",
  resumePath: "/resume/Avinash-Basutkar-Resume.pdf",
  profileImage: "/images/profile.jpg",
  summary: "Computer Science and Engineering undergraduate with a strong foundation in modern web development, algorithms, and AI/data intelligence. Passionate about engineering clean, accessible, and high-performance digital products.",
  extendedBio: "I am a Computer Science & Engineering student at C Byregowda Institute of Technology with a strong passion for architecting responsive, aesthetic web applications and intelligent data solutions. My work spans full-stack web development with React, TypeScript, and Node.js to machine learning integrations with Google Gemini and OpenCV. Having completed internships at Qspiders and NoveTech, I thrive in collaborative environments where code quality, performance, and user experience converge.",
  stats: [
    { label: "B.E. CSE CGPA", value: "8.1 / 10", code: "ACAD_METRIC" },
    { label: "Core Projects", value: "5+ Built", code: "PROD_SHIPPED" },
    { label: "Industry Internships", value: "02 Completed", code: "FIELD_OPS" },
    { label: "Tech Certifications", value: "06 Verified", code: "CRED_VERIFIED" },
  ]
};

export const projectsData: Project[] = [
  {
    id: "analysis-agent",
    title: "Analysis Agent",
    subtitle: "Autonomous Full-Stack AI Data Analyst",
    description: "Full-stack AI Data Analyst Agent that automatically ingests uploaded CSV datasets, conducts comprehensive Exploratory Data Analysis (EDA), and generates dynamic visual dashboards alongside a conversational natural language chat interface.",
    details: [
      "Integrated Google Gemini API to translate plain English queries into real-time dataset filtering, statistics, and charts.",
      "Engineered a responsive React & TypeScript frontend paired with Express.js backend for fast file parsing and streaming responses.",
      "Implemented automated detection of data types, missing values, anomalies, and statistical correlations."
    ],
    tags: ["React", "TypeScript", "Express.js", "Google Gemini API", "Tailwind CSS"],
    category: "web",
    githubUrl: "https://github.com/avibasutkar/analysis-agent",
    image: "/images/projects/analysis-agent.png",
    tacticalCode: "OP // ANL-AGT-01",
    featured: true
  },
  {
    id: "enterprise-analyst",
    title: "Enterprise Analyst Platform",
    subtitle: "End-to-End AI/ML Automated Intelligence Suite",
    description: "An end-to-end AI/ML application performing rigorous data validation, exploratory analysis, multi-model automated training, and evaluation on any uploaded CSV or Excel dataset. Features explainable AI and downloadable PDF reporting.",
    details: [
      "Built multi-algorithm benchmark pipeline comparing regression and classification models in real time.",
      "Embedded Explainable AI (SHAP / Feature Importance) to deliver transparent model interpretability.",
      "Integrated automated PDF report generation with comprehensive data visual summaries."
    ],
    tags: ["Python", "Streamlit", "Machine Learning", "Explainable AI", "Pandas"],
    category: "ai-ml",
    githubUrl: "https://github.com/avibasutkar/enterprice-analystplatform",
    image: "/images/projects/enterprise-analyst.png",
    tacticalCode: "OP // ENT-PLT-02",
    featured: true
  },
  {
    id: "automatic-question-generator",
    title: "Automatic Question Generator",
    subtitle: "NLP-Powered Study & Exam Material Engine",
    description: "AI-powered web tool that automatically parses lecture notes, PDFs, and unstructured text to synthesize practice questions, MCQs, and flashcards to supercharge exam preparation and curriculum generation.",
    details: [
      "Extracted key conceptual entities and keywords using advanced Natural Language Processing techniques.",
      "Generated multi-format assessments including multiple choice, fill-in-the-blank, and subjective queries.",
      "Designed an intuitive web workflow for document upload, question customization, and export."
    ],
    tags: ["Python", "NLP", "FastAPI", "React", "Text Processing"],
    category: "web",
    githubUrl: "https://github.com/avibasutkar/Automatic-Question-Generator",
    image: "/images/projects/question-generator.png",
    tacticalCode: "OP // QST-GEN-03",
    featured: true
  },
  {
    id: "ai-pixel-counter",
    title: "AI Pixel Counter",
    subtitle: "Computer Vision & Object Boundary Analysis",
    description: "Computer vision application that detects, segments, and quantifies pixels based on chromatic thresholds, object boundaries, or custom defined regions. Applied image processing algorithms to enable fast, automated spatial inspections.",
    details: [
      "Implemented color space conversions (HSV, LAB) and contour edge extraction for pinpoint boundary detection.",
      "Optimized pixel classification pipelines using NumPy vectorization for real-time camera and static image analysis.",
      "Provided visual heatmaps and diagnostic reports on pixel densities across target regions."
    ],
    tags: ["Python", "OpenCV", "Computer Vision", "NumPy", "Image Processing"],
    category: "ai-ml",
    githubUrl: "https://github.com/avibasutkar/ai-pixcel-counter",
    image: "/images/projects/pixel-counter.png",
    tacticalCode: "OP // PXL-CTR-04",
    featured: false
  },
  {
    id: "hr-analysis-dashboard",
    title: "HR Analysis Dashboard",
    subtitle: "Workforce Attrition & Retention Intelligence",
    description: "Enterprise analytics dashboard investigating employee attrition drivers to pinpoint critical retention factors. Combines automated SQL ETL pipelines, predictive modeling, and executive-level Power BI reporting.",
    details: [
      "Engineered automated SQL queries for data aggregation, cleaning, and demographic KPI tracking.",
      "Identified critical correlations between overtime hours, compensation tiers, and turnover rates.",
      "Built multi-page interactive Power BI dashboards with drill-through filters for HR leadership."
    ],
    tags: ["Power BI", "SQL", "Python", "Data Visualization", "ETL"],
    category: "data",
    githubUrl: "https://github.com/avibasutkar/HR-analysis-Dashboard",
    image: "/images/projects/hr-dashboard.png",
    tacticalCode: "OP // HR-DSH-05",
    featured: false
  }
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Development",
    code: "FRONTEND // UI_UX",
    description: "Building responsive, modern, and accessible user interfaces with clean architecture.",
    icon: "Layout",
    skills: [
      { name: "React.js", level: "Advanced", popular: true },
      { name: "JavaScript (ES6+)", level: "Advanced", popular: true },
      { name: "TypeScript", level: "Proficient", popular: true },
      { name: "HTML5 & Semantic Web", level: "Advanced" },
      { name: "CSS3 & Modern CSS", level: "Advanced" },
      { name: "Tailwind CSS", level: "Advanced", popular: true },
      { name: "Responsive Design", level: "Advanced" },
      { name: "Next.js Basics", level: "Familiar" },
    ]
  },
  {
    title: "Programming Languages",
    code: "LANGUAGES // CORE",
    description: "Core languages used for building software, data pipelines, and system logic.",
    icon: "Code2",
    skills: [
      { name: "Python", level: "Advanced", popular: true },
      { name: "Java (Core & Advanced)", level: "Proficient", popular: true },
      { name: "SQL", level: "Advanced", popular: true },
      { name: "JavaScript", level: "Advanced" },
      { name: "TypeScript", level: "Proficient" },
      { name: "C++", level: "Intermediate" },
    ]
  },
  {
    title: "Backend & Databases",
    code: "BACKEND // INFRA",
    description: "Server architecture, API endpoints, and relational database systems.",
    icon: "Database",
    skills: [
      { name: "Node.js", level: "Intermediate", popular: true },
      { name: "Express.js", level: "Intermediate", popular: true },
      { name: "RESTful APIs", level: "Advanced" },
      { name: "MySQL", level: "Advanced", popular: true },
      { name: "Database Schema Design", level: "Proficient" },
      { name: "JSON & Data Parsing", level: "Advanced" },
    ]
  },
  {
    title: "Tools & Technologies",
    code: "TOOLING // ECOSYSTEM",
    description: "Developer tooling, version control, deployment platforms, and analytics.",
    icon: "Wrench",
    skills: [
      { name: "Git & GitHub", level: "Advanced", popular: true },
      { name: "VS Code", level: "Advanced" },
      { name: "Vite", level: "Advanced" },
      { name: "Postman", level: "Intermediate" },
      { name: "Power BI", level: "Advanced", popular: true },
      { name: "Streamlit", level: "Advanced" },
      { name: "Linux / Bash", level: "Intermediate" },
      { name: "Vercel / Netlify", level: "Proficient" },
    ]
  },
  {
    title: "Data & Machine Learning",
    code: "AI_ML // ANALYTICS",
    description: "Exploratory analysis, predictive modeling, and intelligent APIs.",
    icon: "Cpu",
    skills: [
      { name: "Machine Learning", level: "Proficient" },
      { name: "EDA & Data Cleaning", level: "Advanced" },
      { name: "Pandas & NumPy", level: "Advanced" },
      { name: "OpenCV (Computer Vision)", level: "Intermediate" },
      { name: "Google Gemini API", level: "Proficient" },
      { name: "Prompt Engineering", level: "Advanced" },
    ]
  }
];

export const experienceData: ExperienceItem[] = [
  {
    id: "qspiders-intern",
    title: "Data Science Intern",
    company: "Qspiders",
    location: "Bangalore, India",
    duration: "Jan 2026 – Present",
    badge: "CURRENT ACTIVE ROLE",
    points: [
      "Performed real-world data preprocessing, cleaning, and transformation pipelines using Python and SQL.",
      "Built interactive dashboards and predictive models to support analytical problem-solving and decision-making.",
      "Collaborated on software development best practices, data validation frameworks, and data visual storytelling."
    ],
    technologies: ["Python", "SQL", "Data Analytics", "EDA", "Machine Learning"]
  },
  {
    id: "novetech-intern",
    title: "Data Analyst Intern",
    company: "NoveTech",
    location: "Remote",
    duration: "2025 – 2026",
    badge: "COMPLETED",
    points: [
      "Demonstrated excellence in data analysis, data structuring, and metric visualization.",
      "Conducted exploratory data analyses on enterprise datasets to uncover behavioral trends and operational bottlenecks.",
      "Produced structured documentation and visual presentations for technical and non-technical stakeholders."
    ],
    technologies: ["Data Analytics", "Power BI", "Excel", "Data Cleaning", "Reporting"]
  }
];

export const educationData: EducationItem = {
  degree: "B.E. in Computer Science and Engineering",
  institution: "C Byregowda Institute of Technology",
  location: "Bangalore / Kolar, Karnataka",
  graduated: "Batch of 2026",
  cgpa: "8.1 / 10",
  highlights: [
    "Consistent academic record with 8.1 CGPA across core engineering disciplines.",
    "Active participant in technical hackathons, coding workshops, and AI developer summits.",
    "Led development teams in capstone projects integrating full-stack web tech and ML models."
  ],
  coursework: [
    "Data Structures & Algorithms",
    "Database Management Systems (DBMS)",
    "Object-Oriented Programming (OOP)",
    "Web Technologies & Architectures",
    "Operating Systems & Computer Networks",
    "Machine Learning & Data Science",
    "Software Engineering Methodologies"
  ]
};

export const certificationsData: CertificationItem[] = [
  {
    id: "hackfest-unstop-cbit",
    title: "AI & Data Science Hackfest",
    organization: "UnStop / C Byregowda Institute of Technology",
    year: "2025",
    description: "24-hour intensive competitive hackathon solving real-world challenges through innovative AI prototypes and data solutions.",
    image: "/images/certifications/quantum-quest-hackathon.jpeg"
  },
  {
    id: "fullstack-web-tap-academy",
    title: "Fullstack Web Development",
    organization: "Tap Academy",
    year: "2024",
    description: "Comprehensive training in Core & Advanced Java, Spring Boot, Hibernate, MySQL, HTML5/CSS3/JavaScript, culminating in a full-stack Online Delivery project.",
    image: "/images/certifications/cisco-networking.png"
  },
  {
    id: "data-analyst-intern-novetech",
    title: "Data Analyst Intern Certification",
    organization: "NoveTech",
    year: "2026",
    description: "Awarded for exceptional analytical capabilities, dataset validation, and KPI visualization throughout the internship term.",
    image: "/images/certifications/powerbi-workshop.png"
  },
  {
    id: "ai-tools-chatgpt-be10x",
    title: "AI Tools & ChatGPT Workshop",
    organization: "Be10X (IIT Delhi Trainer)",
    year: "2026",
    description: "12-hour hands-on certification covering state-of-the-art LLM prompting, workflow automation, and AI productivity tooling.",
    image: "/images/certifications/chatgpt-workshop.png"
  },
  {
    id: "claude-ai-guvi-hcl",
    title: "Claude AI Certification",
    organization: "GUVI | HCL",
    year: "2025",
    description: "Advanced prompt engineering, agentic workflow concepts, and constructing production-ready AI applications.",
    image: "/images/certifications/claude-ai.jpeg"
  },
  {
    id: "gen-ai-aiml-guvi-hcl",
    title: "Generative AI in AIML",
    organization: "GUVI | HCL",
    year: "2026",
    description: "Webinar and hands-on laboratory session constructing generative AI pipelines and deep neural concepts.",
    image: "/images/certifications/guvi-gen-ai.jpeg"
  }
];

