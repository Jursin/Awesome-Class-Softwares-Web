import type { Software, CategoryConfig } from './types';
import { Schedule } from './schedule';
import { MultiFunction} from './multi-function';
import { Board } from './board';
import { Annotation } from './annotation';
import { Download } from './download';
import { Selection } from './selection';

// 导入所有分类配置
export const categories: CategoryConfig[] = [
  Schedule,
  MultiFunction,
  Board,
  Annotation,
  Download,
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