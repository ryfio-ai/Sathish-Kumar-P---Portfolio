export interface Project {
  id: string;
  name: string;
  url: string;
  categories: string[];
  description: string;
  features: string[];
  image?: string;
  githubUrl?: string; // Optional github url
  badges?: string[]; // Optional badges for featured projects
  featured?: boolean; // Whether this is a featured project
  caseStudy?: {
    problem: string;
    solution: string;
    keyFeatures: string[];
    myContribution: string;
    impact: string;
  }; // Optional detailed case study
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  duration: string;
  description: string;
  bulletPoints?: string[]; // Add detailed points from resume
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface Achievement {
  id: string;
  title: string;
  description?: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
}
