import type { CategoryConfig } from './types';

export const Auxiliary: CategoryConfig = {
  name: '辅助类',
  route: 'Auxiliary',
  icon: 'fa7-solid:tools',
  items: [
    {
      id: "sidebar-for-class",
      name: "Sidebar for Class",
      icon: "",
      repo: "PANDAJSR/sidebar-for-class",
      description: "一个基于 Electron 开发的侧边栏应用程序",
      author: "PANDAJSR",
      badge: [
        { type: "info", text: "开发中" },
      ],
      tags: ["侧边栏", "Electron"],
      screenshots: [
        "/screenshots/sidebar-for-class/1.png",
        "/screenshots/sidebar-for-class/2.png",
      ]
    },
    {
      id: "ClassScreenLock",
      name: "ClassScreenLock",
      icon: "/icon/CSL.png",
      repo: "jiugulixiaoniu/ClassScreenLock",
      description: "一个 Windows 系统课堂屏幕锁定软件",
      author: "jiugulixiaoniu",
      tags: ["锁屏"],
      screenshots: [
        "/screenshots/ClassScreenLock/1.png",
        "/screenshots/ClassScreenLock/2.png",
      ]
    },
  ]
};