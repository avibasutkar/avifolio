import { Project, SkillCategory, ExperienceItem, EducationItem, CertificationItem } from '../types';

export const personalInfo = {
  name: "Avinash Basutkar",
  shortName: "Avinash B.",
  role: "Data Scientist | Data Analyst | Python Developer",
  callsign: "AVI // DATA_01",
  location: "Bangalore, India",
  coordinates: "12.9716° N, 77.5946° E",
  status: "OPEN_FOR_OPPORTUNITIES",
  statusText: "Ready for Roles & Opportunities",
  email: "avinashbasutkar29@gmail.com",
  phone: "+91 7259999521",
  github: "https://github.com/avibasutkar",
  linkedin: "https://linkedin.com/in/avinash-basutkar-061b3b279",
  resumePath: "/resume/Avinash-Basutkar-Resume.pdf",
  profileImage: "/images/profile.jpg",
  summary: "Computer Science and Engineering graduate and Data Science Intern with hands-on experience in data preprocessing, SQL and Python-based analysis, Power BI dashboards, and applied machine learning. Built five independent projects spanning exploratory data analysis, predictive modeling, explainable AI, computer vision, and NLP, including full-stack apps with React/TypeScript and Streamlit front ends. Looking for Data Scientist, Data Analyst, and Developer roles where I can turn raw data into clear, usable insights and interfaces.",
  extendedBio: "I am a Computer Science & Engineering graduate and Data Science Intern at C Byregowda Institute of Technology with hands-on experience turning complex raw data into clear, actionable insights and production-ready interfaces. My technical foundation spans exploratory data analysis, predictive modeling, explainable AI (SHAP), and Power BI dashboard reporting, combined with modern full-stack development using React, TypeScript, Python, and Streamlit. Having completed a Data Science internship at Qspiders and built 5 independent projects across ML, computer vision, and NLP, I am actively seeking Data Scientist, Data Analyst, and Python Developer roles where I can deliver measurable impact.",
  languages: ["English", "Hindi", "Kannada", "Marathi"],
  stats: [
    { label: "B.E. CSE CGPA", value: "8.02 / 10", code: "ACAD_METRIC" },
    { label: "Core Projects", value: "5 Built", code: "PROD_SHIPPED" },
    { label: "Data Science Intern", value: "01 Completed", code: "FIELD_OPS" },
    { label: "Tech Certifications", value: "06 Verified", code: "CRED_VERIFIED" },
  ]
};

export const projectsData: Project[] = [
  {
    id: "analysis-agent",
    title: "Analysis Agent",
    subtitle: "Autonomous Full-Stack AI Data Analyst",
    description: "Full-stack AI Data Analyst Agent that automatically analyzes uploaded CSV datasets and performs Exploratory Data Analysis (EDA). Generates visual dashboards and offers a natural-language chat interface so users can query their data conversationally.",
    details: [
      "Designed and built the React + TypeScript front end (upload flow, dashboard views, and conversational chat UI).",
      "Developed the Express back end and integrated the Gemini API to turn dataset summaries and user questions into actionable insights.",
      "Engineered automated Exploratory Data Analysis (EDA) pipelines and visual dashboard generation."
    ],
    tags: ["React", "TypeScript", "Express", "Google Gemini API", "Tailwind CSS"],
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
    description: "End-to-end AI/ML web app that performs data validation, EDA, multi-model training, and evaluation on any uploaded CSV/Excel dataset. Includes explainable AI (SHAP), AI-generated insights, a natural-language chat interface, and downloadable PDF reporting.",
    details: [
      "Architected the modular pipeline (ingestion, preprocessing, model training with XGBoost/LightGBM/CatBoost, and evaluation).",
      "Built the Streamlit interface and implemented the explainability (SHAP) and PDF/CSV reporting features.",
      "Embedded an interactive natural-language chat interface and automated statistical insight generation."
    ],
    tags: ["Python", "Streamlit", "Machine Learning", "Explainable AI (SHAP)", "XGBoost", "Pandas"],
    category: "ai-ml",
    githubUrl: "https://github.com/avibasutkar/enterprice-analystplatform",
    image: "/images/projects/enterprise-analyst.png",
    tacticalCode: "OP // ENT-PLT-02",
    featured: true
  },
  {
    id: "hr-analysis-dashboard",
    title: "HR Analysis Dashboard",
    subtitle: "Workforce Attrition Trends & Retention Intelligence",
    description: "Analyzed employee attrition trends to identify key factors driving turnover, combining SQL, Python, and Power BI. Delivered actionable insights and an interactive Power BI dashboard to help HR teams improve retention strategies.",
    details: [
      "Wrote SQL queries to extract and shape workforce data, cleaned it, and performed EDA in Python.",
      "Analyzed employee attrition trends to uncover critical factors driving turnover.",
      "Designed the interactive Power BI dashboard and KPI visuals for HR stakeholders to optimize retention strategies."
    ],
    tags: ["Power BI", "SQL", "Python", "EDA", "Data Visualization", "Machine Learning"],
    category: "data",
    githubUrl: "https://github.com/avibasutkar/HR-analysis-Dashboard",
    image: "/images/projects/hr-dashboard.png",
    tacticalCode: "OP // HR-DSH-03",
    featured: true
  },
  {
    id: "automatic-question-generator",
    title: "Automatic Question Generator",
    subtitle: "NLP-Powered Study & Exam Material Engine",
    description: "AI-powered tool that generates practice questions automatically from notes, PDFs, or plain text, helping students and educators speed up exam preparation.",
    details: [
      "Built the text/PDF input handling and NLP processing pipeline for unstructured documents.",
      "Implemented the question-generation logic, assessment generation, and structured output flow.",
      "Designed intuitive workflow enabling rapid study material and question synthesis."
    ],
    tags: ["Python", "NLP", "AI", "Text Processing", "FastAPI"],
    category: "ai-ml",
    githubUrl: "https://github.com/avibasutkar/Automatic-Question-Generator",
    image: "/images/projects/question-generator.png",
    tacticalCode: "OP // QST-GEN-04",
    featured: false
  },
  {
    id: "ai-pixel-counter",
    title: "AI Pixel Counter",
    subtitle: "Computer Vision & Object Boundary Analysis",
    description: "Computer vision application that detects, classifies, and counts pixels by color, object boundary, or selected region for automated image analysis.",
    details: [
      "Implemented segmentation-based pixel counting using PyTorch DeepLabV3 architecture.",
      "Engineered per-class overlays, boundary detection, and pixel quantification algorithms.",
      "Built the Streamlit interface with real-time visual results and downloadable report outputs."
    ],
    tags: ["Python", "Computer Vision", "PyTorch DeepLabV3", "Image Processing", "Streamlit"],
    category: "ai-ml",
    githubUrl: "https://github.com/avibasutkar/ai-pixcel-counter",
    image: "/images/projects/pixel-counter.png",
    tacticalCode: "OP // PXL-CTR-05",
    featured: false
  }
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming",
    code: "LANGUAGES // CORE",
    description: "Core programming and query languages for data science, software development, and scripting.",
    icon: "Code2",
    skills: [
      { name: "Python", level: "Advanced", popular: true },
      { name: "SQL", level: "Advanced", popular: true },
      { name: "TypeScript", level: "Proficient", popular: true },
      { name: "JavaScript (ES6+)", level: "Advanced" },
    ]
  },
  {
    title: "Data Analysis & ML",
    code: "AI_ML // ANALYTICS",
    description: "Data manipulation, predictive modeling, explainable AI, statistics, and machine learning algorithms.",
    icon: "Cpu",
    skills: [
      { name: "Pandas", level: "Advanced", popular: true },
      { name: "NumPy", level: "Advanced", popular: true },
      { name: "Scikit-learn", level: "Advanced", popular: true },
      { name: "EDA", level: "Advanced", popular: true },
      { name: "Data Cleaning", level: "Advanced" },
      { name: "Data Preprocessing", level: "Advanced" },
      { name: "Predictive Modeling", level: "Proficient", popular: true },
      { name: "Statistics", level: "Advanced" },
      { name: "Explainable AI (SHAP)", level: "Proficient", popular: true },
      { name: "NLP", level: "Proficient" },
      { name: "Computer Vision", level: "Intermediate" },
    ]
  },
  {
    title: "Visualization & BI",
    code: "VISUAL // BI_REPORTING",
    description: "Interactive executive dashboards, business intelligence reporting, and statistical visualizations.",
    icon: "BarChart3",
    skills: [
      { name: "Power BI", level: "Advanced", popular: true },
      { name: "Dashboard Development", level: "Advanced", popular: true },
      { name: "BI Reporting", level: "Advanced", popular: true },
      { name: "Matplotlib", level: "Advanced" },
      { name: "Seaborn", level: "Advanced" },
      { name: "Excel", level: "Advanced" },
    ]
  },
  {
    title: "Python & Frontend Development",
    code: "DEV // FULLSTACK",
    description: "Frontend interfaces, interactive data apps, and REST API integrations.",
    icon: "Layout",
    skills: [
      { name: "Streamlit", level: "Advanced", popular: true },
      { name: "React", level: "Proficient", popular: true },
      { name: "TypeScript", level: "Proficient" },
      { name: "Express", level: "Intermediate" },
      { name: "REST API Integration", level: "Advanced", popular: true },
      { name: "Google Gemini API", level: "Proficient", popular: true },
    ]
  },
  {
    title: "Databases",
    code: "DATABASES // SQL",
    description: "Relational database operations, complex querying, and schema definition.",
    icon: "Database",
    skills: [
      { name: "MySQL", level: "Advanced", popular: true },
      { name: "SQL*Plus", level: "Proficient" },
      { name: "DDL & DML", level: "Advanced" },
      { name: "Joins & Subqueries", level: "Advanced", popular: true },
    ]
  },
  {
    title: "Tools & Platforms",
    code: "TOOLING // ECOSYSTEM",
    description: "Developer workflows, version control, notebooks, and analysis environments.",
    icon: "Wrench",
    skills: [
      { name: "Git", level: "Advanced", popular: true },
      { name: "GitHub", level: "Advanced", popular: true },
      { name: "Jupyter Notebook", level: "Advanced", popular: true },
      { name: "Excel", level: "Advanced" },
      { name: "VS Code", level: "Advanced" },
    ]
  }
];

export const experienceData: ExperienceItem[] = [
  {
    id: "qspiders-intern",
    title: "Data Science Intern",
    company: "Qspiders",
    location: "Bangalore, India",
    duration: "Jan 2026 – Aug 2026",
    badge: "INTERNSHIP COMPLETED",
    points: [
      "Performed data preprocessing and cleaning on real-world datasets using Python and SQL, handling missing values, duplicates, and inconsistent formats to prepare data for analysis.",
      "Built reports and interactive Power BI dashboards to support analytical problem-solving and data-driven decision-making.",
      "Applied EDA and statistical techniques to uncover trends and patterns, and presented findings in a clear, business-friendly format."
    ],
    technologies: ["Python", "SQL", "Power BI", "EDA", "Data Cleaning", "Data Preprocessing", "Statistics"]
  }
];

export const educationData: EducationItem = {
  degree: "B.E. in Computer Science and Engineering",
  institution: "C Byregowda Institute of Technology",
  location: "Bangalore, Karnataka",
  graduated: "Graduate: 2026",
  cgpa: "8.02 / 10",
  highlights: [
    "Graduating in Computer Science and Engineering with an 8.02 CGPA.",
    "Built five independent projects across data analytics, predictive modeling, explainable AI, NLP, and computer vision.",
    "Completed intensive Data Science Internship at Qspiders, Bangalore."
  ],
  coursework: [
    "Machine Learning & Data Science",
    "Database Management Systems (DBMS)",
    "Statistics & Probability",
    "Data Structures & Algorithms",
    "Object-Oriented Programming (OOP)",
    "Operating Systems & Computer Networks",
    "Software Engineering Methodologies"
  ],
  previousEducation: [
    {
      degree: "College (Pre-University, Science)",
      institution: "DDU PU Science College",
      location: "Shahapur, Karnataka",
      year: "2022",
      score: "70%"
    },
    {
      degree: "Secondary School (SSLC)",
      institution: "Sharada Vidyanikethan School",
      location: "Shahapur, Karnataka",
      year: "2020",
      score: "75%"
    }
  ]
};

export const certificationsData: CertificationItem[] = [
  {
    id: "cisco-networking-udemy",
    title: "CISCO Networking Labs",
    organization: "Udemy",
    year: "2025",
    description: "Practical CISCO Networking Labs in CISCO Packet Tracer covering network architectures, routing, switching, and protocol simulation.",
    image: "/images/certifications/cisco-networking.png"
  },
  {
    id: "hackfest-unstop-cbit",
    title: "AI & Data Science Hackfest",
    organization: "UnStop / C Byregowda Institute of Technology, Kolar",
    year: "2025",
    description: "24-hour competitive hackathon building real-world AI prototypes and data analytics solutions.",
    image: "/images/certifications/quantum-quest-hackathon.jpeg"
  },
  {
    id: "ai-tools-chatgpt-be10x",
    title: "AI Tools & ChatGPT Workshop",
    organization: "Be10X (IIT Delhi Trainer)",
    year: "2026",
    description: "12-hour hands-on workshop led by an IIT Delhi trainer covering LLM prompting, AI productivity, and workflow automation.",
    image: "/images/certifications/chatgpt-workshop.png"
  },
  {
    id: "claude-ai-guvi-hcl",
    title: "Claude AI Certification",
    organization: "GUVI | HCL",
    year: "2025",
    description: "Prompt engineering, agentic workflows, and building real-time applications with Anthropic Claude AI.",
    image: "/images/certifications/claude-ai.jpeg"
  },
  {
    id: "gen-ai-aiml-guvi-hcl",
    title: "Gen AI in AIML",
    organization: "GUVI | HCL",
    year: "2026",
    description: "Webinar and hands-on session on building Generative AI & Machine Learning projects.",
    image: "/images/certifications/guvi-gen-ai.jpeg"
  },
  {
    id: "basics-of-ai-uniathena",
    title: "Basics of AI",
    organization: "UniAthena | Cambridge International Qualifications, UK",
    year: "2025",
    description: "International certification on foundational Artificial Intelligence, Machine Learning algorithms, and cognitive computing.",
    image: "/images/certifications/powerbi-workshop.png"
  }
];
