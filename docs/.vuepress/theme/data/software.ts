export interface Software {
  id: string;
  name: string;
  category: string;
  icon: string;
  githubRepo: string;
  tags: string[];
  description: string;
  author: string;
  review: string;
  groupLink: string;
  repoUrl: string;
  website: string;
  downloadUrl: string;
  screenshots: string[];
}

export const softwareList: Software[] = [
  {
    id: "ClassIsland",
    name: "ClassIsland",
    category: "课程表",
    icon: "https://github.com/ClassIsland/ClassIsland/raw/master/ClassIsland/Assets/AppLogo_AppLogo.svg",
    githubRepo: "ClassIsland/ClassIsland",
    tags: ["课表", "岛", "组件"],
    description: "一款适用于班级多媒体屏幕的课表信息显示工具",
    author: "HelloWRC",
    review: "",
    groupLink: "https://qm.qq.com/q/4NsDQKiAuQ",
    repoUrl: "https://github.com/ClassIsland/ClassIsland",
    website: "https://docs.classisland.tech/",
    downloadUrl: "https://github.com/ClassIsland/ClassIsland/releases",
    screenshots: [
      "https://github.com/awesome-iwb/awesome-iwb/raw/master/banner/classisland-banner.png",
    ]
  },
];