export interface Badge {
  type?: 'info' | 'tip' | 'warning' | 'danger' | string;
  text?: string;
  color?: string;
  bgColor?: string;
  borderColor?: string;
}

export interface Software {
  id: string;
  name: string;
  icon: string;
  repo: string;
  description: string;
  author: string;
  badge?: Badge[];
  tags: string[];
  group?: SocialLinks;
  website?: string;
  docs?: string;
  stcnSection?: string;
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