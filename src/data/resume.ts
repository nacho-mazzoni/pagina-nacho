export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  highlights: string[];
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  description?: string;
}

export interface Skill {
  name: string;
  category: string;
  level: number;
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  url?: string;
  github?: string;
  image?: string;
}

export interface Language {
  name: string;
  level: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  url?: string;
}

export interface BlogPost {
  title: string;
  date: string;
  excerpt: string;
  url?: string;
}

export interface ResumeData {
  name: string;
  title: string;
  roles: string[];
  tagline: string;
  email: string;
  phone?: string;
  location: string;
  website?: string;
  linkedin: string;
  github: string;
  about: string;
  experience: Experience[];
  education: Education[];
  skills: Skill[];
  projects: Project[];
  languages: Language[];
  certifications: Certification[];
  blog: BlogPost[];
}

const resume: ResumeData = {
  name: "Ignacio Mazzoni",
  title: "Systems Engineering Student",
  roles: ["AI Agents Developer", "Python & Backend"],
  tagline: "Building software that can think,\nreason and automate.",
  email: "nachomazzoni1@gmail.com",
  location: "Ciudad, País",
  linkedin: "https://www.linkedin.com/in/ignacio-mazzoni-493732303/",
  github: "https://www.github.com/nacho-mazzoni",
  about:
    "I build intelligent software.\n\nMy current interests are focused on:\n\n• Agentic AI\n• Large Language Models\n• Data Science\n• Numerical Computing\n• Systems Design\n\nI enjoy creating tools that combine software engineering with artificial intelligence.",
  experience: [
    {
      company: "Rumba Habana Ice Cream Parlor",
      role: "Summer Volunteer - Customer Service",
      period: "2024 - Present",
      description: "Providing exceptional customer service in a fast-paced environment.",
      highlights: [
        "Delivered friendly and efficient service to customers",
        "Managed transactions and maintained a clean workspace",
        "Collaborated with team members to ensure smooth operations",
      ],
    },
    {
      company: "Private Tutor",
      role: "Mathematics & Programming Tutor",
      period: "2022 - Present",
      description: "Providing one-on-one tutoring in mathematics and programming.",
      highlights: [
        "Taught algebra, calculus, and programming fundamentals",
        "Adapted teaching methods to individual student needs",
        "Helped students improve their grades and confidence",
      ],
    },
  ],
  education: [
    {
      institution: "Universidad Tecnológica Nacional - Facultad Regional Santa Fe (UTN FRSF)",
      degree: "Ingeniería en Sistemas",
      period: "2022 - Present",
      description: "Título de grado con orientación en desarrollo de software.",
    },
  ],
  skills: [
    { name: "TypeScript", category: "Languages", level: 70 },
    { name: "JavaScript", category: "Languages", level: 75 },
    { name: "Python", category: "Languages", level: 95 },
    { name: "React", category: "Frontend", level: 70 },
    { name: "Astro", category: "Frontend", level: 60 },
    { name: "Tailwind CSS", category: "Frontend", level: 85 },
    { name: "Node.js", category: "Backend", level: 85 },
    { name: "PostgreSQL", category: "Backend", level: 85 },
    { name: "Docker", category: "DevOps", level: 65 },
    { name: "Git", category: "DevOps", level: 90 },
  ],
  projects: [
    {
      title: "Hotel Management System",
      description: "System design project for UTN FRSF.",
      tech: ["System Design", "UML", "SQL"],
      github: "https://github.com/nacho-mazzoni/TPDiseno2025",
    },
    {
      title: "Order Management System",
      description: "Software development project.",
      tech: ["Software Development"],
      github: "https://github.com/LuccaSch/DESO",
    },
    {
      title: "Three-Body Problem Simulation",
      description: "Numerical analysis using Python.",
      tech: ["Python", "NumPy", "Scientific Computing"],
      github: "https://github.com/nacho-mazzoni/AnalisisNumericoTP5",
    },
    {
      title: "Phase Change Temperature Transfer",
      description: "Numerical analysis resolution.",
      tech: ["Python", "Numerical Methods"],
      github: "https://github.com/nacho-mazzoni/AnalisisNumericoTP6",
    },
    {
      title: "Proof of Ship - Bounty - Apuntacelo",
      description: "Web application project.",
      tech: ["Web Development"],
      url: "https://github.com/nacho-mazzoni/Apuntacelo",
      github: "https://github.com/nacho-mazzoni/Apuntacelo",
    },
    {
      title: "Diagrams MCP",
      description: "MCP server for generating diagrams.",
      tech: ["MCP", "TypeScript"],
      url: "https://github.com/nacho-mazzoni/diagrams-mcp",
      github: "https://github.com/nacho-mazzoni/diagrams-mcp",
    },
  ],
  languages: [
    { name: "Español", level: "Nativo" },
    { name: "Inglés", level: "Avanzado (C1)" },
  ],
  certifications: [
  ],
  blog: [
    {
      title: "Static Reflection in C++26",
      date: "2026-06-10",
      excerpt: "Exploring the new static reflection features in C++26.",
      url: "https://x.com/NMtech__/status/2064729976524423443?s=20",
    },
    {
      title: "n8n Automation for E-mails",
      date: "2026-03-25",
      excerpt: "How I build an n8n workflow to automate my e-mail management.",
      url: "https://x.com/NMtech__/status/2036802273662099690?s=20",
    },
  ],
};

export default resume;
