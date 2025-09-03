export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  category: 'fullstack' | 'ai-ml' | 'blockchain' | 'frappe';
  githubUrl?: string;
  liveUrl?: string;
  imageUrl: string;
  featured: boolean;
  metrics?: {
    users?: number;
    performance?: string;
    impact?: string;
  };
}

export interface Skill {
  name: string;
  category: 'Frontend' | 'Backend' | 'Database' | 'AI/ML' | 'DevOps' | 'Frappe';
  level: number; // 1-10
  years: number;
  projects: string[];
  icon?: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  location: string;
  description: string[];
  technologies: string[];
  achievements: string[];
}