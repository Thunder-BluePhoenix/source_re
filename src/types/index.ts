// Core interface definitions
export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  category: 'data-science' | 'ai-ml' | 'frappe-erp' | 'fullstack' | 'blockchain' | 'solution-architecture';
  githubUrl?: string;
  liveUrl?: string;
  demoUrl?: string;
  imageUrl: string;
  featured: boolean;
  complexity: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  metrics?: {
    users?: number;
    dataProcessed?: string;
    accuracy?: string;
    performance?: string;
    impact?: string;
    revenue?: string;
  };
  tags: string[];
  status: 'completed' | 'in-progress' | 'archived';
}

export interface Skill {
  name: string;
  category: 'Data Science' | 'AI/ML' | 'Frappe/ERPNext' | 'Frontend' | 'Backend' | 'Database' | 'DevOps' | 'Analytics' | 'Solution Architecture';
  level: number; // 1-10
  years: number;
  projects: string[];
  icon?: string;
  certifications?: string[];
  subSkills?: string[];
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  location: string;
  type: 'full-time' | 'freelance' | 'internship' | 'contract';
  description: string[];
  technologies: string[];
  achievements: string[];
  projects: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  publishedAt: string;
  tags: string[];
  category: 'data-science' | 'ai-ml' | 'frappe' | 'tutorial' | 'case-study';
  readTime: number;
  featured: boolean;
  imageUrl?: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  issueDate: string;
  expiryDate?: string;
  credentialUrl?: string;
  skills: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  duration: string;
  cgpa?: string;
  percentage?: string;
  specialization?: string;
  achievements: string[];
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  context?: string;
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
  projectType?: 'data-science' | 'frappe-erp' | 'fullstack' | 'consultation';
  budget?: string;
  timeline?: string;
}

// Utility types
export type SkillCategory = Skill['category'];
export type ProjectCategory = Project['category'];
export type ProjectComplexity = Project['complexity'];