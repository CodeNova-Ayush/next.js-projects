import { Project } from '@/types/project';

// Hardcoded array of open source projects
export const projects: Project[] = [
  {
    id: 1,
    name: "Next.js",
    description: "The React framework for the web, used to build fast and full-stack web applications.",
    domain: "Web Development",
    technologies: ["React", "TypeScript", "Node.js"],
    difficulty: "Intermediate",
    stars: 128000,
    beginnerFriendly: true,
    githubUrl: "https://github.com/vercel/next.js"
  },
  {
    id: 2,
    name: "FastAPI",
    description: "Modern, fast web framework for building APIs with Python based on standard Python type hints.",
    domain: "Backend",
    technologies: ["Python", "Pydantic", "Starlette"],
    difficulty: "Beginner",
    stars: 80000,
    beginnerFriendly: true,
    githubUrl: "https://github.com/tiangolo/fastapi"
  },
  {
    id: 3,
    name: "Supabase",
    description: "An open source Firebase alternative providing a PostgreSQL database, auth, and realtime APIs.",
    domain: "Backend",
    technologies: ["PostgreSQL", "TypeScript", "Elixir"],
    difficulty: "Intermediate",
    stars: 76000,
    beginnerFriendly: true,
    githubUrl: "https://github.com/supabase/supabase"
  },
  {
    id: 4,
    name: "Express",
    description: "Fast, unopinionated, minimalist web framework for Node.js applications.",
    domain: "Backend",
    technologies: ["JavaScript", "Node.js", "HTTP"],
    difficulty: "Beginner",
    stars: 64000,
    beginnerFriendly: true,
    githubUrl: "https://github.com/expressjs/express"
  },
  {
    id: 5,
    name: "Tailwind CSS",
    description: "A utility-first CSS framework packed with classes that can be composed to build any design.",
    domain: "Web Development",
    technologies: ["CSS", "JavaScript", "PostCSS"],
    difficulty: "Beginner",
    stars: 84000,
    beginnerFriendly: true,
    githubUrl: "https://github.com/tailwindlabs/tailwindcss"
  },
  {
    id: 6,
    name: "shadcn/ui",
    description: "Beautifully designed, accessible components that you can copy and paste into your apps.",
    domain: "Web Development",
    technologies: ["React", "Tailwind CSS", "TypeScript"],
    difficulty: "Beginner",
    stars: 79000,
    beginnerFriendly: true,
    githubUrl: "https://github.com/shadcn-ui/ui"
  },
  {
    id: 7,
    name: "Excalidraw",
    description: "Virtual whiteboard for sketching hand-drawn like diagrams with collaborative editing.",
    domain: "Web Development",
    technologies: ["React", "TypeScript", "Canvas API"],
    difficulty: "Beginner",
    stars: 92000,
    beginnerFriendly: true,
    githubUrl: "https://github.com/excalidraw/excalidraw"
  },
  {
    id: 8,
    name: "Docker Compose",
    description: "Define and run multi-container Docker applications using simple YAML configuration files.",
    domain: "DevOps",
    technologies: ["Go", "Docker", "YAML"],
    difficulty: "Intermediate",
    stars: 34000,
    beginnerFriendly: true,
    githubUrl: "https://github.com/docker/compose"
  },
  {
    id: 9,
    name: "Flutter",
    description: "Google's UI toolkit for building beautiful, natively compiled applications for mobile, web, and desktop.",
    domain: "Mobile",
    technologies: ["Dart", "C++"],
    difficulty: "Beginner",
    stars: 165000,
    beginnerFriendly: true,
    githubUrl: "https://github.com/flutter/flutter"
  },
  {
    id: 10,
    name: "Redux Toolkit",
    description: "The official, opinionated, batteries-included toolset for efficient Redux development.",
    domain: "Web Development",
    technologies: ["TypeScript", "Redux", "React"],
    difficulty: "Beginner",
    stars: 11000,
    beginnerFriendly: true,
    githubUrl: "https://github.com/reduxjs/redux-toolkit"
  }
];

export function getProjectById(id: number): Project | undefined {
  return projects.find((p) => p.id === id);
}

export function formatStarCount(stars: number): string {
  if (stars >= 1000) {
    return `${(stars / 1000).toFixed(0)}k`;
  }
  return stars.toString();
}
