export interface Software {
  id: string;
  name: string;
  icon: string;
  repo: string;
  description: string;
  author: string;
  avatar: string;
  tags: string[];
  features: string[];
  group?: string;
  website?: string;
  docs?: string;
  screenshots: string[];
  releases?: string;
  category?: string;
  categorySlug?: string;
}

export interface CategoryConfig {
  name: string;
  icon: string;
  route?: string;
  items: Software[];
}