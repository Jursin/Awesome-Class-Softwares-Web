export interface Software {
  id: string;
  name: string;
  category: string;
  icon: string;
  githubRepo: string;
  tags: string[];
  description: string;
  author: string;
  avatar: string;
  features: string[];
  groupLink: string;
  website: string;
  downloadUrl: string;
  screenshots: string[];
}

export const softwareList: Software[] = [
  {
    id: "ClassIsland",
    name: "ClassIsland",
    category: "课表与看板类软件",
    icon: "/icon/ClassIsland.svg",
    githubRepo: "ClassIsland/ClassIsland",
    tags: ["课程表", "单双周支持", "多行支持", "上下课提醒", "插件支持", "自动化", "提醒特效"],
    description: "一款适用于班级多媒体屏幕的课表信息显示工具",
    author: "HelloWRC",
    avatar: "https://github.com/HelloWRC.png",
    features: [
      "可显示当天的课表信息",
      "展示当前进行课程的详细信息",
      "在上下课等重要时间点发出提醒",
      "自选搭配音效、强调特效",
      "支持语音增强提醒功能"
    ],
    groupLink: "https://qm.qq.com/q/4NsDQKiAuQ",
    website: "https://docs.classisland.tech/",
    downloadUrl: "https://github.com/ClassIsland/ClassIsland/releases",
    screenshots: [
      "/screenshots/ClassIsland/banner.png",
    ]
  },
  {
    id: "ZongziTEK",
    name: "ZongziTEK",
    category: "课表与看板类软件",
    icon: "/icon/ZongziTEK.png",
    githubRepo: "STBBRD/ZongziTEK-Blackboard-Sticker",
    tags: ["课程表", "黑板贴", "粽子科技", "上下课提醒", "天气提醒", "快速黑板", "启动台"],
    description: "用于白板一体机的桌面小部件",
    author: "STBBRD",
    avatar: "https://github.com/STBBRD.png",
    features: [
      "适用于白板一体机的桌面小部件",
      "享受抬手即用的小黑板功能",
      "高效的信息展示方式",
      "便捷的课程管理工具",
      "多项实用功能，满足班级各种需求"
    ],
    groupLink: "https://jq.qq.com/?_wv=1027&k=epb9KDPe",
    website: "https://zztek.top/",
    downloadUrl: "https://github.com/STBBRD/ZongziTEK-Blackboard-Sticker/releases",
    screenshots: [
      "/screenshots/ZongziTEK/light.png",
      "/screenshots/ZongziTEK/dark.png",
      "/screenshots/ZongziTEK/simple.png",
    ]
  },
];