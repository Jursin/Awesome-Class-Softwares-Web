---
home: true
icon: home
title: 首页
heroImage: https://theme-hope-assets.vuejs.press/logo.svg
heroImageStyle:
  scale: 0.75
# bgImage: 
# bgImageDark: https://theme-hope-assets.vuejs.press/bg/6-dark.svg
bgImageStyle:
  background-attachment: fixed
heroText: Awesome-Class-Softwares
tagline: 适用于班级一体机的优质软件合集
actions:
  - text: 前言
    icon: book-open
    link: ./content/foreword.md
    type: primary

  - text: GitHub 仓库
    icon: fab fa-github
    link: https://github.com/Jursin/Awesome-Class-Softwares-Web

  - text: 本站文档
    icon: fab fa-github
    link: https://github.com/Jursin/Awesome-Class-Softwares

---

欢迎来到 Awesome-Class-Softwares 网站。
<share :networks="['email', 'qq', 'qrcode']" />

## 目录

本网站包含以下各类型软件：

<div class="vp-card-container">
  <VPCard
    logo="/calendar-days-solid.svg"
    title="课表类"
    desc="课表类软件"
    link="./classschedule/"
  />
  <VPCard
    logo="/puzzle-piece-solid.svg"
    title="多功能类"
    desc="多功能类软件"
    link="./multi-function/"
  />
  <VPCard
    logo="/chalkboard-solid.svg"
    title="看板类"
    desc="看板类软件"
    link="./dashboard/"
  />
  <VPCard
    logo="/pen-solid.svg"
    title="批注类"
    desc="批注类软件"
    link="./annotation/"
  />
  <VPCard
    logo="/download-solid.svg"
    title="下载类"
    desc="下载类软件"
    link="./downloader/"
  />
</div>
