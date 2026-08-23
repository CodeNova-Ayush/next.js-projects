// Type definition for an open-source project
export interface Project {
  id: number;
  name: string;
  description: string;
  domain: string;
  technologies: string[];
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  stars: number;
  beginnerFriendly: boolean;
  githubUrl: string;
}
