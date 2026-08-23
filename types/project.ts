export type DomainType =
  | 'Web Development'
  | 'AI & Machine Learning'
  | 'Backend & Cloud'
  | 'DevOps & Infra'
  | 'Mobile & Cross-Platform'
  | 'Developer Tools';

export type DifficultyType = 'Beginner' | 'Intermediate' | 'Advanced';

export interface Project {
  id: number;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  longDescription: string;
  domain: DomainType;
  technologies: string[];
  difficulty: DifficultyType;
  stars: number;
  forks: number;
  openIssues: number;
  beginnerFriendly: boolean;
  goodFirstIssuesCount: number;
  goodFirstIssuesUrl?: string;
  githubUrl: string;
  websiteUrl?: string;
  features: string[];
  gettingStarted: {
    prerequisites: string[];
    steps: string[];
  };
  license: string;
  owner: string;
  avatarUrl: string;
  featured?: boolean;
  trending?: boolean;
  topics: string[];
}

export type SortOption = 'stars-desc' | 'stars-asc' | 'name-asc' | 'difficulty-asc' | 'forks-desc';

export interface FilterState {
  searchQuery: string;
  domain: DomainType | 'All';
  difficulty: DifficultyType | 'All';
  beginnerOnly: boolean;
  selectedTech: string[];
  sortBy: SortOption;
}
