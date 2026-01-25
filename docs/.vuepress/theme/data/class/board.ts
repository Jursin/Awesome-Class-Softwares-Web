import type { CategoryConfig } from './types';

export const Board: CategoryConfig = {
  name: '看板类',
  route: 'Board',
  icon: 'fa6-solid:chalkboard',
  items: [
    {
      id: "ExamAware2",
      name: "ExamAware2 知试",
      icon: "/icon/ExamAware.png",
      repo: "ExamAware/ExamAware2",
      description: "一款易用、跨平台的大屏考试信息展示工具",
      author: "hello8693",
      badge: [
        { type: "danger", text: "推荐" },
      ],
      tags: ["考试看板", "多平台支持", "Electron"],
      group: { qqGroup: "https://qm.qq.com/q/zDiEipHsaI" },
      docs: "https://docs.examaware.tech/",
      stcnSection: "https://forum.smart-teach.cn/t/examaware",
      screenshots: [
        "/screenshots/ExamAware2/1.png",
        "/screenshots/ExamAware2/2.png",
        "/screenshots/ExamAware2/3.png",
      ]
    },
    {
      id: "ExamShowboard",
      name: "ExamShowboard",
      icon: "/icon/ExamAware.png",
      repo: "ExamAware/ExamShowboard-Legacy",
      description: "旧版考试看板",
      author: "hello8693",
      tags: ["考试看板", "多平台支持", "Electron"],
      group: { qqGroup: "https://qm.qq.com/q/zDiEipHsaI" },
      docs: "https://docs.examaware.tech/",
      stcnSection: "https://forum.smart-teach.cn/t/examaware",
      screenshots: [
        "/screenshots/Exam-Showboard/HomePage.png",
        "/screenshots/Exam-Showboard/InfoPage.png",
      ]
    },
    {
      id: "ExamSchedule",
      name: "ExamSchedule",
      icon: "/icon/ExamSchedule.png",
      repo: "ExamAware/ExamSchedule",
      description: "静态网页版本的考试看板，可自行部署",
      author: "MKStoler1024",
      tags: ["考试看板", "电子钟表", "Web"],
      group: { qqGroup: "https://qm.qq.com/q/zDiEipHsaI" },
      website: "https://es.examaware.tech/",
      docs: "https://docs.examaware.tech/",
      stcnSection: "https://forum.smart-teach.cn/t/examaware",
      screenshots: [
        "/screenshots/ExamSchedule/home.png",
        "/screenshots/ExamSchedule/light.png",
        "/screenshots/ExamSchedule/dark.png",
      ]
    },
    {
      id: "StickyHomeworks2",
      name: "StickyHomeworks2",
      icon: "/icon/StickyHomeworks2.png",
      repo: "StickyHomeworks2/StickyHomeworks2",
      description: "一款支持富文本的桌面作业贴工具",
      author: "jizilin6732",
      badge: [
        { type: "danger", text: "推荐" },
      ],
      tags: ["作业展示", "富文本支持"],
      group: { qqGroup: "https://qm.qq.com/q/neHPnfBSJq" },
      docs: "https://sh2.xn--fjqu59cvx0aoqi.icu/",
      stcnSection: "https://forum.smart-teach.cn/t/stickyhomeworks2",
      screenshots: [
        "/screenshots/StickyHomeworks2/1.png",
        "/screenshots/StickyHomeworks2/2.png",
        "/screenshots/StickyHomeworks2/3.png",
      ],
      bvid: ["BV1YJ4Fe5EgD"],
    },
    {
      id: "Zooni",
      name: "Zooni",
      icon: "/icon/flutter.png",
      repo: "Xwei1645/zooni",
      description: "一个 Previous Gen 的教室大屏作业看板",
      author: "Xwei1645",
      tags: ["左右看板", "多平台支持", "Flutter"],
      screenshots: [
        "/screenshots/Zooni/1.png",
        "/screenshots/Zooni/2.png",
      ]
    },
    {
      id: "Classworks",
      name: "Classworks",
      icon: "/icon/Classworks.png",
      repo: "ZeroCatDev/Classworks",
      description: "基于 Vue 3 + Vuetify 的现代化作业管理系统前端项目",
      author: "Sunwuyuan",
      badge: [
        { type: "danger", text: "推荐" },
      ],
      tags: ["作业看板", "出勤看板", "随机点名", "Web", "Vue"],
      group: { qqGroup: "https://qm.qq.com/q/AdQJCgNOsS", telegram: "https://t.me/zerocatdev", discord: "https://discord.gg/YmW2JWnbdy" },
      website: "https://zerocat.dev/",
      stcnSection: "https://forum.smart-teach.cn/t/classworks",
      screenshots: [
        "/screenshots/Classworks/banner.png",
      ]
    },
    {
      id: "HomeworkBoard",
      name: "作业板",
      icon: "/icon/vite.svg",
      repo: "EnderWolf006/HomeworkBoard",
      description: "一款支持云同步的作业展示板软件",
      author: "EnderWolf006",
      badge: [
        { type: "info", text: "已停更" },
      ],
      tags: ["作业展示", "云同步"],
      group: { qqGroup: "https://qm.qq.com/q/9nRFURLYJ2" },
      screenshots: [
        "/screenshots/HomeworkBoard/banner.png",
      ]
    },
    {
      id: "Immersive-clock",
      name: "沉浸式时钟",
      icon: "/icon/Immersive-clock.svg",
      repo: "QQHKX/Immersive-clock",
      description: "一款基于 React + TypeScript + Vite 构建的轻量化桌面 / 网页时钟应用",
      author: "QQHKX",
      tags: ["时钟", "Web"],
      group: { qqGroup: "https://qm.qq.com/q/xmTWgMPFio" },
      website: "https://clock.qqhkx.com/",
      screenshots: [
        "/screenshots/Immersive-clock/1.png",
        "/screenshots/Immersive-clock/2.png",
        "/screenshots/Immersive-clock/3.png",
      ]
    },
    {
      id: "Education-Clock",
      name: "Education Clock",
      icon: "/icon/Education-Clock.png",
      repo: "Return-Log/Education-Clock",
      description: "一个实用的班级信息看板",
      author: "Return-Log",
      tags: ["桌面小组件", "课程表", "倒计日", "天气预报", "PyQt", "公告板", "桌面时钟软件"],
      screenshots: [
        "/screenshots/Education-Clock/banner.png",
      ]
    },
    {
      id: "ClassBoard",
      name: "ClassBoard",
      icon: "/icon/ClassBoard.png",
      repo: "Candlest/ClassBoard",
      description: "一款高自由度的，用于显示教学信息的壁纸软件，功能包括高考倒计时、公告栏、以及能够提示当前课程的课程表",
      author: "Candlest",
      tags: ["桌面小组件", "课程表", "倒计日", "作业发布", "动态壁纸"],
      screenshots: [
        "/screenshots/ClassBoard/preview.png",
      ]
    },
    {
      id: "LockTime",
      name: "时钟锁屏",
      icon: "/icon/LockTime.png",
      repo: "cjhdevact/LockTime",
      description: "一个具有深/浅色主题，云母/亚克力背景，Fluent UI 2界面的时钟锁屏（屏保），可以作为屏保使用，也可以自习时在教学白板上使用",
      author: "cjhdevact",
      tags: ["时钟", "锁屏", "屏保"],
      screenshots: [
        "/screenshots/LockTime/MainUI.png",
      ]
    },
    {
      id: "ClassWindow",
      name: "ClassWindow",
      icon: "/icon/ClassWindow.png",
      repo: "xinghai-smartedu/classwindow",
      description: "一个美丽、精巧的用于班级的桌面悬浮窗软件，基于Electron构建，用于显示信息等",
      author: "yeying-xingchen",
      tags: ["桌面小组件", "信息展示", "Electron"],
      group: { qqGroup: "https://qm.qq.com/q/PRsFaOVk4u" },
      stcnSection: "https://forum.smart-teach.cn/t/classwindow",
      screenshots: [
        "/screenshots/ClassWindow/main.png",
      ]
    },
  ]
};