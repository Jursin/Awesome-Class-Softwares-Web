---
title: 贡献指南
icon: code-commit
category:
  - 贡献
---

感谢您考虑为本文档做出贡献！在为本文档贡献之前，请先阅读本指南。

本文档基于 [VuePress](https://vuepress.vuejs.org/) 搭建，使用 [VuePress Theme Hope](https://theme-hope.vuejs.press/zh/) 主题。

首先，你应该已经对以下内容有基本的了解：
- [Markdown](https://theme-hope.vuejs.press/zh/cookbook/markdown/)（包括 [YAML Frontmatter](https://theme-hope.vuejs.press/zh/cookbook/vuepress/page.html#frontmatter) 概念）
- [VuePress 基础知识](https://theme-hope.vuejs.press/zh/cookbook/vuepress/)

## 贡献准则

- 使用小写文件名

    VuePress 对 URL 链接大小写敏感，使用包含大写字母的文件名可能会出现一些问题。在命名文档和文件夹时请使用小写字母，并用`-`分割每个单词，例如：

    ``` plaintext
    example-doc.md
    example-folder/
        |- another-doc.md
    ```

- 将图片放置在仓库文件中

    插入图片时请尽量直接将源文件插入到仓库文件中，不使用额外的 CDN / 图床承载图片，以便发布文档时自动将图片等文件打包到 GitHub Pages 上。插入的图片请放置在 `(文档目录)/images/(文档文件名)`下，例如：

    ``` plaintext
    example-doc.md
    example-doc-2.md
    images/
        |- example-doc/
        |   |- image1.png
        |   |- image2.png
        |- example-doc-2/
            |- image1.png
            |- image2.png
    ```

- 编写简单易读的文档

    在编写文档时请尽量做到简单易读，必要时可以插入图片、Mermaid 图表等。

## 合并更改

您可以向本项目发起 [Pull Request](https://github.com/Jursin/Awesome-Class-Softwares-Web/pulls) 并简要地描述您的更改，等待审核后合并。

更改合并以后，您可以在本站中看到您的更改。