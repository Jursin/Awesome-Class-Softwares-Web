---
pageLayout: doc
title: 贡献指南
---

> 感谢您考虑为 ==Awesome Class Softwares== 做出贡献！您可以为本项目或网站做出包括但不限于反馈内容过时/错误、优化排版、项目推荐等贡献。在为本项目贡献之前，请先阅读本贡献指南。

## 反馈内容时过/错误
- 如果您在阅读本项目的过程中遇到某些项目的内容过时或出现错误，包括但不限于**项目中所描述的事实与内容过时或出现事实性错误、项目所指向的链接失效、项目的状态错误、项目的名称或图标等发生变化**等情况，您可以提交 [Issues](https://github.com/Jursin/Awesome-Class-Softwares/issues) 使我知晓或 [Pull Requests](https://github.com/Jursin/Awesome-Class-Softwares/pulls) 等待审核后合并。
- 如果提交 Issues 请确保在其中准确描述内容过时/错误的位置，并尽可能提供有关的最新数据和信息供作者更正。

## 优化排版
- 如果您在阅读本项目的过程中发现文档/网站的排版或格式不符合审美要求，或有其他更好的排版建议，您可以提交 [Issues](https://github.com/Jursin/Awesome-Class-Softwares/issues) 详细描述或 [Pull Requests](https://github.com/Jursin/Awesome-Class-Softwares/pulls) 等待审核后合并。

## 项目推荐
如果您想要推荐自己或他人的项目，请参考已有配置文件并按照以下模板提交 [Issues](https://github.com/Jursin/Awesome-Class-Softwares/issues) 或 Fork 后提交 [Pull Requests](https://github.com/Jursin/Awesome-Class-Softwares/pulls) 等待审核后合并。

::: note
配置文件目录 `docs/.vuepress/theme/data/class`
:::

:::: field-group
::: field name="id" type="string" required
唯一标识（即 `Repository name`）
:::

::: field name="name" type="string" required
软件名称
:::

::: field name="repo" type="string" required
软件仓库（即 `:owner/:repo`）
:::

::: field name="description" type="string" required
软件简介
:::

::: field name="author" type="string" required
主要作者（即 `User Name`）
:::

::: field name="tags" type="string[]" optional
标签列表
:::

::: field name="features" type="string[]" optional
功能简述列表
:::

::: field name="group.qqGroup" type="string" optional
QQ 群链接
:::

::: field name="group.qqChannel" type="string" optional
QQ 频道链接
:::

::: field name="website" type="string" optional
官网链接
:::

::: field name="docs" type="string" optional
文档链接
:::

::: field name="bvid" type="string[]" optional
哔哩哔哩视频 bv 号
:::
::::

::: warning **有关商业软件**  
如果您打算上传商业软件介绍，请确保在上传前已获得开发者的许可，未经授权的提交将被忽略或拒绝。
:::

::: tip **修改或移除内容**
如果您是项目开发者或被认可的主要维护者，希望修改或移除已经添加到本项目中的关于你们项目的内容，请提交 [Issues](https://github.com/Jursin/Awesome-Class-Softwares/issues) 使我知晓。
:::