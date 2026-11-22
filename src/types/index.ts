export type Theme = 'light' | 'dark';

export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  details?: string[];
  tags: string[];
  category: 'web' | 'ai-ml' | 'data';
  githubUrl: string;
  liveUrl?: string;
  image: string;
  tacticalCode: string;
  featured?: boolean;
}

export interface SkillItem {
  name: string;
  level?: string;
  iconName?: string;
  popular?: boolean;
}

export interface SkillCategory {
  title: string;
  code: string;
  description: string;
  icon: string;
  skills: SkillItem[];
}

export interface ExperienceItem {
  id: string;
  title: string;
  company: string;
  location: string;
  duration: string;
  badge: string;
  points: string[];
  technologies: string[];
}

export interface PreviousEducationItem {
  degree: string;
  institution: string;
  location: string;
  year: string;
  score: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  graduated: string;
  cgpa: string;
  highlights: string[];
  coursework: string[];
  previousEducation?: PreviousEducationItem[];
}

export interface CertificationItem {
  id: string;
  title: string;
  organization: string;
  year: string;
  description: string;
  image: string;
  pdfUrl?: string;
}

