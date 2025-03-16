---
title: 快速开始
icon: fa-solid fa-signs-post
category:
  - Classworks
  - 快速开始
---

## 环境准备
- Node.js 16+
- pnpm 7+

## 安装步骤
- 克隆项目到本地
- 进入项目文件夹
  ```bash
  cd Classworks
  ```
-开始使用

::: tabs

@tab 安装依赖

```bash
pnpm install
```

@tab 启动开发服务器

```bash
pnpm run dev
```

@tab 构建生产版本

```bash
pnpm run build
```

:::

## 📂 项目结构

```
Classworks/
├── src/           # 源代码
├── public/        # 静态资源
├── components/    # 通用组件
├── views/         # 页面
├── store/         # 状态管理
└── utils/         # 工具函数
```