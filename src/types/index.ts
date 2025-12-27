export interface Technology {
  name: string;
  icon: string;
  color: string;
  hoverColor: string;
}

export interface Project {
  id: string;
  title: string;
  /* description: string; */
  image: string;
  technologies: Technology[];
  github?: string;
  figma?: string;
  powerbi?: string;
  liveUrl?: string;
  featured?: boolean;
}

export interface Skill {
  name: string;
  icon: string;
  category: 'frontend' | 'backend' | 'mobile' | 'data' | 'design';
  proficiency?: number;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface ContactInfo {
  email: string;
  github: string;
  linkedin: string;
  location?: string;
}
