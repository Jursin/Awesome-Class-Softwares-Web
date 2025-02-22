---
title: ElectronClassSchedule
index: false
icon: 
category:
  - ElectronClassSchedule
---

<div align="center">

![screenshot](https://github.com/EnderWolf006/HomeworkBoard/blob/main/ReadMeImages/img.png)

[![stars](https://img.shields.io/github/stars/EnderWolf006/HomeworkBoard?label=Stars)](https://github.com/EnderWolf006/HomeworkBoard)
[![forks](https://img.shields.io/github/forks/EnderWolf006/HomeworkBoard?label=Forks)](https://github.com/EnderWolf006/HomeworkBoard)
[![Watchers](https://img.shields.io/github/watchers/EnderWolf006/HomeworkBoard?style=social)](https://github.com/EnderWolf006/HomeworkBoard/watchers)
[![Downloads](https://img.shields.io/github/downloads/EnderWolf006/HomeworkBoard/total?style=social&label=Downloads&logo=github)](https://github.com/EnderWolf006/HomeworkBoard/releases/latest)
[![GitHub Issues](https://img.shields.io/github/issues-search/EnderWolf006/HomeworkBoard?query=is%3Aopen&style=flat&logo=github&label=Issues&color=%233fb950)](https://github.com/EnderWolf006/HomeworkBoard/issues)
[![Release](https://img.shields.io/github/v/release/EnderWolf006/HomeworkBoard?style=flat&color=%233fb950&label=正式版)](https://github.com/EnderWolf006/HomeworkBoard/releases/latest)
[![Created At](https://img.shields.io/github/created-at/EnderWolf006/HomeworkBoard)](https://github.com/EnderWolf006/HomeworkBoard)
[![Github Last Commit](https://img.shields.io/github/last-commit/EnderWolf006/HomeworkBoard)](https://github.com/EnderWolf006/HomeworkBoard/commits/main)
![Update Status](https://img.shields.io/badge/%E7%8A%B6%E6%80%81-%E9%97%B2%E7%BD%AE-yellow)
[![GitHub Language Count](https://img.shields.io/github/languages/count/EnderWolf006/HomeworkBoard)](https://github.com/EnderWolf006/HomeworkBoard)
[![GitHub Top Language](https://img.shields.io/github/languages/top/EnderWolf006/HomeworkBoard)](https://github.com/EnderWolf006/HomeworkBoard)
[![LICENSE](https://img.shields.io/badge/License-GPL--3.0-red.svg "LICENSE")](https://github.com/EnderWolf006/HomeworkBoard/blob/main/LICENSE)
[![bilibili](https://img.shields.io/badge/-UP%E4%B8%BB%EF%BD%9CEnder_Wolf-%23FB7299?style=flat&logo=bilibili)](https://space.bilibili.com/3494364340816031)

一款支持云同步的作业展示板软件

[使用说明](https://github.com/EnderWolf006/HomeworkBoard?tab=readme-ov-file#%E9%A3%9F%E7%94%A8%E8%AF%B4%E6%98%8E)

GitHub仓库：[https://github.com/EnderWolf006/HomeworkBoard](https://github.com/EnderWolf006/HomeworkBoard)

</div>

#### 功能
- 学校作业板：`SchoolProject-release.zip`
  - 在班级内快捷输入并排版清晰地展示作业
  - 快捷记录并展示出勤情况(可选板块)
  - 在浏览器中运行，可以进行云同步
  - 关闭后打开自动恢复之前记录的作业（自动拉取以当天时间为文件名的`json`文件的内容）
  - 支持自定义科目排版顺序、学生列表
- 查作业界面：`ClientProject-release.zip`
  - 在任何设备的浏览器中运行(需部署在服务器上并通过ip或域名访问)
  - 可以方便查询当前作业以及历史作业
  - 可以查询出勤情况(可选板块)
- API服务端：`APIServer-release.py`
  - 在任何支持运行Python的服务器运行
  - 若部署在公网服务器，请放行17312端口
  - 若部署在学校内网，则上述内容均只能在学校内网访问
