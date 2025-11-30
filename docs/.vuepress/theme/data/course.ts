import type { CategoryConfig } from './types';

export const course: CategoryConfig = {
  name: '课程表类',
  icon: 'fa6-solid:calendar-days',
  items: [
    {
      id: "ClassIsland",
      name: "ClassIsland",
      icon: "/icon/ClassIsland.svg",
      repo: "ClassIsland/ClassIsland",
      description: "一款适用于班级多媒体屏幕的课表信息显示工具",
      author: "HelloWRC",
      avatar: "https://github.com/HelloWRC.png",
      tags: ["课程表", "单双周支持", "多行支持", "上下课提醒", "插件支持", "自动化", "提醒特效"],
      features: [
        "可显示当天的课表信息",
        "展示当前进行课程的详细信息",
        "在上下课等重要时间点发出提醒",
        "自选搭配音效、强调特效",
        "支持语音增强提醒功能"
      ],
      group: "https://qm.qq.com/q/4NsDQKiAuQ",
      website: "https://www.classisland.tech/",
      docs: "https://docs.classisland.tech/",
      screenshots: [
        "/screenshots/ClassIsland/banner.png",
      ]
    },
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