import type { CategoryConfig } from './types';

export const Auxiliary: CategoryConfig = {
  name: '辅助类',
  route: 'Auxiliary',
  icon: 'fa7-solid:tools',
  items: [
    {
      id: "Seewo-HugoAura",
      name: "HugoAura",
      icon: "/icon/HugoAura.svg",
      repo: "HugoAura/Seewo-HugoAura",
      description: "下一代希沃管家注入式修改方案",
      author: "Minoricew",
      tags: ["希沃管家", "注入式修改"],
      group: { qqGroup: "https://qm.qq.com/q/buo7m9oHBK", telegram: "https://t.me/HugoAura_Chat" },
      docs: "https://docs.aurax.cc/",
      stcnSection: "https://forum.smart-teach.cn/t/hugoaura",
      screenshots: [
        "/screenshots/HugoAura/banner.png",
        "/screenshots/HugoAura/preview.png",
        "/screenshots/HugoAura/1.png",
        "/screenshots/HugoAura/2.png",
      ]
    },
    {
      id: "SecScore",
      name: "SecScore",
      icon: "/icon/SecScore.svg",
      repo: "SECTL/SecScore",
      description: "一个简单易用、优雅美观的班级个人积分管理软件",
      author: "Fox-block-offcial",
      badge: [
        { type: "info", text: "开发中" },
      ],
      tags: ["积分管理", "Electron"],
      group: { qqGroup: "https://qm.qq.com/q/Y8tx1BxnmG" },
      screenshots: [
        "/screenshots/SecScore/1.png",
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
      group: { qqGroup: "https://qm.qq.com/q/jBPeZyWi3K" },
      screenshots: [
        "/screenshots/ClassScreenLock/1.png",
        "/screenshots/ClassScreenLock/2.png",
      ]
    },
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
  ]
};