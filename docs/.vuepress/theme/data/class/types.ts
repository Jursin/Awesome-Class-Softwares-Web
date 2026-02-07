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

export type SocialLinkValue = string | string[];

export interface SocialLinks {
  qqGroup?: SocialLinkValue;
  qqChannel?: SocialLinkValue;
  telegram?: SocialLinkValue;
  discord?: SocialLinkValue;
  facebook?: SocialLinkValue;
  x?: SocialLinkValue;
}

export interface CategoryConfig {
  name: string;
  icon: string;
  route?: string;
  items: Software[];
}