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
  group?: SocialLinks;
  website?: string;
  docs?: string;
  screenshots: string[];
  bvid?: string[];
  releases?: string;
  category?: string;
  categorySlug?: string;
}

export interface SocialLinks {
  qqGroup?: string;
  qqChannel?: string;
  telegram?: string;
  discord?: string;
  facebook?: string;
  x?: string;
}

export interface CategoryConfig {
  name: string;
  icon: string;
  route?: string;
  items: Software[];
}