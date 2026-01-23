import type { Software, CategoryConfig } from './types';
import { Schedule } from './schedule';
import { MultiFunction} from './multi-function';
import { Board } from './board';
import { Annotation } from './annotation';
import { Auxiliary } from './auxiliary';
import { Selection } from './selection';

// 导入所有分类配置
export const categories: CategoryConfig[] = [
  Schedule,
  MultiFunction,
  Board,
  Annotation,
  Auxiliary,
  Selection
];

// 生成softwareList
export const softwareList: Software[] = categories.flatMap(category => 
  category.items.map(item => ({
    ...item,
    category: category.name,
    categorySlug: category.route || category.name,
    releases: `https://github.com/${item.repo}/releases`
  }))
);