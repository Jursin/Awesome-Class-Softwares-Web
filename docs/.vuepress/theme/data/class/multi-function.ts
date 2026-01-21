import type { CategoryConfig } from './types';

export const MultiFunction: CategoryConfig = {
  name: '多功能类',
  route: 'Multi-Function',
  icon: 'fa6-solid:puzzle-piece',
  items: [
    {
      id: "ZongziTEK-Blackboard-Sticker",
      name: "ZongziTEK 黑板贴",
      icon: "/icon/ZongziTEK.png",
      repo: "STBBRD/ZongziTEK-Blackboard-Sticker",
      description: "用于白板一体机的桌面小部件",
      author: "STBBRD",

      tags: ["课程表", "黑板贴", "粽子科技", "上下课提醒", "天气提醒", "快速黑板", "启动台"],
      group: { qqGroup: "https://jq.qq.com/?_wv=1027&k=epb9KDPe" },
      website: "https://zztek.top/",
      screenshots: [
        "/screenshots/ZongziTEK-Blackboard-Sticker/light.png",
        "/screenshots/ZongziTEK-Blackboard-Sticker/dark.png",
        "/screenshots/ZongziTEK-Blackboard-Sticker/simple.png",
      ],
      bvid: ["BV1Lz4UeREEW"],
    },
    {
      id: "Ris_ClassTool",
      name: "课堂工具框架",
      icon: "/icon/Ris_ClassTool.png",
      repo: "Ris-Soft/Ris_ClassTool",
      description: "瑞思课堂工具",
      author: "PYLXU",

      tags: ["课堂工具", "瑞思"],
      group: { qqGroup: "https://qm.qq.com/q/nl64TDpnk6" },
      website: "https://3r60.top/",
      docs: "https://docs.3r60.top/",
      screenshots: [
        "/screenshots/Ris_ClassTool/banner.png",
      ],
      bvid: ["BV1A96SYHEnz"],
    },
    {
      id: "OrbiBoard",
      name: "课枢",
      icon: "/icon/OrbiBoard.png",
      repo: "OrbiBoard/OrbiBoard",
      description: "基于 Electron 的以 JavaScript 为核心的插件化大屏课堂辅助工具",
      author: "PYLXU",
      tags: ["课堂工具", "大屏辅助", "插件化", "Electron", "JavaScript"],
      group: { qqGroup: "https://qm.qq.com/q/yHZQ0LQipq" },
      website: "https://orbiboard.3r60.top/",
      screenshots: [
        "/screenshots/OrbiBoard/preview.png",
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
      id: "VoiceHub",
      name: "校园广播站点歌系统",
      icon: "/icon/VoiceHub.png",
      repo: "laoshuikaixue/VoiceHub",
      description: "一个使用 Nuxt 3 全栈框架开发的现代化校园广播站点歌管理系统",
      author: "laoshuikaixue",
      tags: ["广播站", "点歌系统", "Nuxt3"],
      website: "https://voicehub.smart-teach.cn/",
      screenshots: [
        "/screenshots/VoiceHub/1.png",
        "/screenshots/VoiceHub/2.png",
        "/screenshots/VoiceHub/3.png",
        "/screenshots/VoiceHub/4.png",
        "/screenshots/VoiceHub/5.png",
        "/screenshots/VoiceHub/6.png",
      ]
    },
  ]
};