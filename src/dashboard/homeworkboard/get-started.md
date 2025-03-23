---
title: 快速开始
icon: fa-solid fa-signs-post
category:
  - 快速开始
---

## 准备工作

- 你需要准备一台学校内网或公网的Windows电脑/服务器
- 在服务器上安装 [ Python3.8 及以上版本](https://mirrors.aliyun.com/python-release/windows/python-3.8.9.exe)，安装时请勾选“添加 Python 到环境变量”(Add Python To Path)
- 安装好Python后，双击运行解压 `Start-Deployment.zip` 后得到的 `install Flask.cmd` 文件

## 准备文件
- 下载 Releases，中最新版本的三个文件 `APIServer-release.py`  `ClientProject-release.zip` `SchoolProject-release.zip``Start-Deployment.zip` 
- 解压其中的 `ClientProject-release.zip` `SchoolProject-release.zip``Start-Deployment.zip` 

## 配置文件
- 推荐使用 VSCode 编辑
- 在解压后的 `SchoolProject-release` 文件夹中打开 `config.json` 内部有详细的注释可自行修改
- 在解压后的 `ClientProject-release` 文件夹中打开 `config.json` 内部有详细的注释可自行修改

## 部署服务端
将解压后得到的`startClient.cmd`、`StartSchool.cmd`、`start-APIServer.cmd` 文件移动到目录下
- 将`startClient.cmd`文件移动到 `SchoolProject-release` 所在目录下双击运行
- 将`StartSchool.cmd`文件移动到 `ClientProject-release` 所在目录下双击运行
- 将`start-APIServer.cmd`文件移动到 `APIServer-release.py` 所在目录下双击运行

#### 使用客户端
- 学校作业板: 浏览器访问 `http://localhost:17313`(若不在本地部署, 请将localhost换成服务器ip或域名)
- 查作业界面: 浏览器访问 `http://localhost:17314`(若不在本地部署, 请将localhost换成服务器ip或域名)