import type { CategoryConfig } from './types';

export const Schedule: CategoryConfig = {
  name: '课程表类',
  route: 'Schedule',
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
  ]
};