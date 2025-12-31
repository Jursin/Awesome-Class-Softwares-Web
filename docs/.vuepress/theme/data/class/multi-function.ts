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
      avatar: "https://github.com/STBBRD.png",
      tags: ["课程表", "黑板贴", "粽子科技", "上下课提醒", "天气提醒", "快速黑板", "启动台"],
      features: [
        "适用于白板一体机的桌面小部件",
        "享受抬手即用的小黑板功能",
        "高效的信息展示方式",
        "便捷的课程管理工具",
        "多项实用功能，满足班级各种需求"
      ],
      group: "https://jq.qq.com/?_wv=1027&k=epb9KDPe",
      website: "https://zztek.top/",
      screenshots: [
        "/screenshots/ZongziTEK/light.png",
        "/screenshots/ZongziTEK/dark.png",
        "/screenshots/ZongziTEK/simple.png",
      ]
    }
  ]
};