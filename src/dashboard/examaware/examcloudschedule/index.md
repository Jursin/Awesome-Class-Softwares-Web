---
title: ExamCloudSchedule
icon: 
category:
  - ExamAware
---

<div align="center">
[![stars](https://img.shields.io/github/stars/ExamAware/ExamCloudSechdule?label=Stars)](https://github.com/ExamAware/ExamCloudSechdule/stargazers) [![forks](https://img.shields.io/github/forks/ExamAware/ExamCloudSechdule?label=Forks)](https://github.com/ExamAware/ExamCloudSechdule/forks) [![Watchers](https://img.shields.io/github/watchers/ExamAware/ExamCloudSechdule?style=social)](https://github.com/ExamAware/ExamCloudSechdule/watchers) [![Downloads](https://img.shields.io/github/downloads/ExamAware/ExamCloudSechdule/total?style=social&label=Downloads&logo=github)](https://github.com/ExamAware/ExamCloudSechdule/releases) [![GitHub Issues](https://img.shields.io/github/issues-search/ExamAware/ExamCloudSechdule?query=is%3Aopen&style=flat&logo=github&label=Issues&color=%233fb950)](https://github.com/ExamAware/ExamCloudSechdule/issues) [![Created At](https://img.shields.io/github/created-at/ExamAware/ExamCloudSechdule)](https://github.com/ExamAware/ExamCloudSechdule) [![Github Last Commit](https://img.shields.io/github/last-commit/ExamAware/ExamCloudSechdule)](https://github.com/ExamAware/ExamCloudSechdule/commits/main) [![GitHub Language Count](https://img.shields.io/github/languages/count/ExamAware/ExamCloudSechdule)](https://github.com/ExamAware/ExamCloudSechdule) [![GitHub Top Language](https://img.shields.io/github/languages/top/ExamAware/ExamCloudSechdule)](https://github.com/ExamAware/ExamCloudSechdule) [![LICENSE]((https://img.shields.io/badge/License-MIT-red.svg "LICENSE")](https://github.com/ExamAware/ExamCloudSechdule/blob/main/LICENSE)

ExamCloudSechdule 是一个用于管理和查看考试安排的系统
</div>

## 功能
1. **考试看板配置查询**：用户可以通过输入配置 ID 来获取考试安排的详细信息。
2. **考试安排显示**：显示考试的详细安排，包括科目、开始时间和结束时间。
3. **管理员后台**：管理员可以登录后台管理考试配置文件，包括创建、编辑和删除配置文件。
4. **明暗色主题**: 随心所欲切换主题。

## 文件结构
- `/index.php`：考试看板配置查询页面。
- `/ExamCloudSchedule`：考试安排显示页面。
- `/admin/login.php`：管理员登录页面。
- `/admin/index.php`：管理员后台主页，显示所有配置文件。
- `/admin/edit.php`：编辑或创建新的考试配置文件。
- `/admin/detete.php`: 删除指定配置文件。
- `/includes`: 管理员认证目录。
- `/configs`: 安排存放目录。