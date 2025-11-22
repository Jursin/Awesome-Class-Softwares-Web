import type { Software, CategoryConfig } from './types';
import { course } from './course';

// 导入所有分类配置
export const categories: CategoryConfig[] = [
  course
];

// 生成softwareList
export const softwareList: Software[] = categories.flatMap(category => 
  category.items.map(item => ({
    ...item,
    category: category.name,
    releases: `https://github.com/${item.repo}/releases`
  }))
);