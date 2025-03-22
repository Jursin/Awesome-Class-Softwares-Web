---
title: InkCanvas
icon: 
category:
  - 批注类
---

<div align="center">

![screen](images/screen.png)
![board](images/board.png)

[![stars](https://img.shields.io/github/stars/WXRIW/Ink-Canvas?label=Stars)](https://github.com/WXRIW/Ink-Canvas) [![forks](https://img.shields.io/github/forks/WXRIW/Ink-Canvas?label=Forks)](https://github.com/WXRIW/Ink-Canvas) [![Watchers](https://img.shields.io/github/watchers/WXRIW/Ink-Canvas?style=social)](https://github.com/WXRIW/Ink-Canvas/watchers) [![Downloads](https://img.shields.io/github/downloads/WXRIW/Ink-Canvas/total?style=social&label=Downloads&logo=github)](https://github.com/WXRIW/Ink-Canvas/releases/latest) [![GitHub Issues](https://img.shields.io/github/issues-search/WXRIW/Ink-Canvas?query=is%3Aopen&style=flat&logo=github&label=Issues&color=%233fb950)](https://github.com/WXRIW/Ink-Canvas/issues) [![Release](https://img.shields.io/github/v/release/WXRIW/Ink-Canvas?style=flat&color=%233fb950&label=正式版)](https://github.com/WXRIW/Ink-Canvas/releases/latest) [![Created At](https://img.shields.io/github/created-at/WXRIW/Ink-Canvas)](https://github.com/WXRIW/Ink-Canvas) [![Github Last Commit](https://img.shields.io/github/last-commit/WXRIW/Ink-Canvas)](https://github.com/WXRIW/Ink-Canvas/commits/master/) ![C#](https://img.shields.io/badge/C%23-blue?logo=data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjI4OCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQiIHZpZXdCb3g9IjAgMCAyNTYgMjg4IiB3aWR0aD0iMjU2IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Im0yNTUuNTY5IDg0LjQ1MjM3NmMtLjAwMi00LjgzLTEuMDM1LTkuMDk4LTMuMTI0LTEyLjc2MS0yLjA1Mi0zLjYwMi01LjEyNS02LjYyMS05LjI0Ny05LjAwOC0zNC4wMjUtMTkuNjE5LTY4LjA4My0zOS4xNzgtMTAyLjA5Ny01OC44MTY5OTk5NS05LjE3LTUuMjk0LTE4LjA2MS01LjEwMS0yNy4xNjMuMjY5LTEzLjU0MyA3Ljk4Njk5OTk1LTgxLjM0OCA0Ni44MzM5OTk5NS0xMDEuNTUzIDU4LjUzNjk5OTk1LTguMzIxIDQuODE3LTEyLjM3IDEyLjE4OS0xMi4zNzIgMjEuNzcxLS4wMTMgMzkuNDU1IDAgNzguOTA5LS4wMTMgMTE4LjM2NSAwIDQuNzI0Ljk5MSA4LjkwOSAyLjk4OCAxMi41MTcgMi4wNTMgMy43MTEgNS4xNjkgNi44MTMgOS4zODYgOS4yNTQgMjAuMjA2IDExLjcwMyA4OC4wMiA1MC41NDcgMTAxLjU2IDU4LjUzNiA5LjEwNiA1LjM3MyAxNy45OTcgNS41NjUgMjcuMTcuMjY5IDM0LjAxNS0xOS42NCA2OC4wNzUtMzkuMTk4IDEwMi4xMDUtNTguODE3IDQuMjE3LTIuNDQgNy4zMzMtNS41NDQgOS4zODYtOS4yNTIgMS45OTQtMy42MDggMi45ODctNy43OTMgMi45ODctMTIuNTE4IDAgMCAwLTc4Ljg4OS0uMDEzLTExOC4zNDUiIGZpbGw9IiNhMTc5ZGMiLz48cGF0aCBkPSJtMTI4LjE4MiAxNDMuMjQxMzc2LTEyNS4xOTQgNzIuMDg0YzIuMDUzIDMuNzExIDUuMTY5IDYuODEzIDkuMzg2IDkuMjU0IDIwLjIwNiAxMS43MDMgODguMDIgNTAuNTQ3IDEwMS41NiA1OC41MzYgOS4xMDYgNS4zNzMgMTcuOTk3IDUuNTY1IDI3LjE3LjI2OSAzNC4wMTUtMTkuNjQgNjguMDc1LTM5LjE5OCAxMDIuMTA1LTU4LjgxNyA0LjIxNy0yLjQ0IDcuMzMzLTUuNTQ0IDkuMzg2LTkuMjUyeiIgZmlsbD0iIzI4MDA2OCIvPjxwYXRoIGQ9Im0yNTUuNTY5IDg0LjQ1MjM3NmMtLjAwMi00LjgzLTEuMDM1LTkuMDk4LTMuMTI0LTEyLjc2MWwtMTI0LjI2MyA3MS41NSAxMjQuNDEzIDcyLjA3NGMxLjk5NC0zLjYwOCAyLjk4NS03Ljc5MyAyLjk4Ny0xMi41MTggMCAwIDAtNzguODg5LS4wMTMtMTE4LjM0NSIgZmlsbD0iIzM5MDA5MSIvPjxnIGZpbGw9IiNmZmYiPjxwYXRoIGQ9Im0yMDEuODkyMzI2IDExNi4yOTQwMDh2MTMuNDczNjg0aDEzLjQ3MzY4NHYtMTMuNDczNjg0aDYuNzM2ODQydjEzLjQ3MzY4NGgxMy40NzM2ODV2Ni43MzY4NDJoLTEzLjQ3MzY4NXYxMy40NzM2ODRoMTMuNDczNjg1djYuNzM2ODQyaC0xMy40NzM2ODV2MTMuNDczNjg0aC02LjczNjg0MnYtMTMuNDczNjg0aC0xMy40NzM2ODR2MTMuNDczNjg0aC02LjczNjg0MnYtMTMuNDczNjg0aC0xMy40NzM2ODR2LTYuNzM2ODQyaDEzLjQ3MzY4NHYtMTMuNDczNjg0aC0xMy40NzM2ODR2LTYuNzM2ODQyaDEzLjQ3MzY4NHYtMTMuNDczNjg0em0xMy40NzM2ODQgMjAuMjEwNTI2aC0xMy40NzM2ODR2MTMuNDczNjg0aDEzLjQ3MzY4NHoiLz48cGF0aCBkPSJtMTI4LjQ1Njc1MiA0OC42MjU4NzZjMzUuMTQzNzcxIDAgNjUuODI3MTMzIDE5LjA4NjI5ODEgODIuMjYxODEgNDcuNDU2MDY3NWwtLjE2MDM3LS4yNzMwNjc1LTQxLjM0ODU3NyAyMy44MDgyODNjLTguMTQ2NjU2LTEzLjc5MzYwNS0yMy4wODE0NzktMjMuMTAyMDg3My00MC4yMTMyMzItMjMuMjkzNzg2OGwtLjUzOTYzMS0uMDAzMDE3OGMtMjYuMTI1NTc0IDAtNDcuMzA2MDgxNSAyMS4xNzkzODg2LTQ3LjMwNjA4MTUgNDcuMzA0OTYxNiAwIDguNTQzNjE1IDIuMjc3Nzc0OCAxNi41NTIyMDQgNi4yMzg5NzY0IDIzLjQ2OTQ3NiA4LjE1NDA5ODEgMTQuMjM1MjUzIDIzLjQ4MjkwNzEgMjMuODM2NjA2IDQxLjA2NzEwNTEgMjMuODM2NjA2IDE3LjY5Mjc3IDAgMzMuMTA4ODg0LTkuNzIzMzU3IDQxLjIyMTU2OC0yNC4xMTA4MzVsLS4xOTcxMjguMzQ1MzEzIDQxLjI4NjQ4NiAyMy45MTgwMzdjLTE2LjI1NDM5OCAyOC4xMjk1NTctNDYuNTE3NDA4IDQ3LjE1Njk0OC04MS4yNTI3MDEgNDcuNTM2MTg5bC0xLjA1ODIyNS4wMDU3NzRjLTM1LjI1NDU4MTkgMC02Ni4wMjUyNDkyLTE5LjIwMzgyNC04Mi40MTg1MTIyLTQ3LjcyMzU4LTguMDAyOTkyNy0xMy45MjI5NjktMTIuNTgyMDQ3Ni0zMC4wNjQzODktMTIuNTgyMDQ3Ni00Ny4yNzY5OCAwLTUyLjQ2NjA1MjQgNDIuNTMyMjY4Mi05NC45OTk0NCA5NS4wMDA1NTk4LTk0Ljk5OTQ0eiIvPjwvZz48L3N2Zz4=) [![LICENSE](https://img.shields.io/badge/License-GPL--3.0-red.svg "LICENSE")](https://github.com/WXRIW/Ink-Canvas/blob/master/LICENSE) [![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2FWXRIW%2FInk-Canvas.svg?type=shield)](https://app.fossa.com/projects/git%2Bgithub.com%2FWXRIW%2FInk-Canvas?ref=badge_shield) [![QQ群](https://img.shields.io/badge/-QQ%E7%BE%A4%EF%BD%9C891913576-blue?style=flat&logo=QQ)](https://jq.qq.com/?_wv=1027&k=NvlM1Rgg)

Ink Canvas 画板是一款轻量级画板软件，基于WPF/C#，其针对希沃一体机进行了特别优化，与预装的“希沃白板 5”软件相比，启动速度大幅度提升（提升5-10 倍），系统资源占用更小，使用体验更佳。

[使用指南](https://github.com/WXRIW/Ink-Canvas/blob/master/Manual.md/) | [常见问题](https://github.com/WXRIW/Ink-Canvas?tab=readme-ov-file#-faq)

GitHub仓库：[https://github.com/WXRIW/Ink-Canvas](https://github.com/WXRIW/Ink-Canvas) 

</div>

## 模式
- 幻灯片模式
- 画板模式（黑/白板模式）
- 屏幕画笔模式

## 小工具
- 倒计时
  - 美观的 UI，并可以以接近全屏的大小显示
- 抽奖
  - 可导入名单（建议搭配 Excel 使用），可设置抽取人数
- 保存墨迹
  - 默认保存至 `文档\Ink Canvas Strokes`
- 截图
  - 任意模式模式下（包括鼠标）下点击相机图标截图并自动保存至 `图片\Ink Canvas Screenshots`，可在设置中开启“截图时自动保存墨迹”
- 幻灯片自动保存墨迹
  - 默认保存至 `文档\Ink Canvas Strokes`
- 墨迹回放
  - 从头自动书写一遍屏中墨迹
