
export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  tags: string[];
  readingTime: string;
  featured?: boolean;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  link: string;
  github?: string;
  image: string;
  status?: 'live' | 'coming-soon';
}

export type Category = 'AI Deep Dives' | 'Growth Mindset' | 'Sales + AI' | 'Tool Reviews' | 'Tutorials';
