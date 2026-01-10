import type { CategoryConfig } from './types';

export const Download: CategoryConfig = {
  name: '下载类',
  route: 'Download',
  icon: 'fa6-solid:download',
  items: [
    {
      id: "SectionIstool",
      name: "SectionIstool",
      icon: "/icon/SectionIstool.png",
      repo: "SECTL/SectionIstool",
      description: "一款方便、快捷下载适合班级一体机使用的各类软件的下载器",
      author: "lzy98276",
      avatar: "https://github.com/lzy98276.png",
      badge: [
        { type: "info", text: "长时间未更新" },
      ],
      tags: ["下载器"],
      features: [
        "自动获取已适配推荐的软件",
        "方便、快速地下载软件",
        "自定义添加 Github 项目中的软件",
        "自动安装已下载完成的软件",
      ],
      group: { qqGroup: "https://qm.qq.com/q/Y8tx1BxnmG" },
      screenshots: [
        "/screenshots/SectionIstool/1.png",
        "/screenshots/SectionIstool/2.png",
      ]
    },
    {
      id: "SeewoHUB",
      name: "SeewoHUB",
      icon: "/icon/SeewoHUB.png",
      repo: "CNwenwen/SeewoHUB",
      description: "一款方便、快捷下载适合班级一体机使用的各类软件的下载器",
      author: "CNwenwen",
      avatar: "https://github.com/CNwenwen.png",
      badge: [
        { type: "info", text: "长时间未更新" },
      ],
      tags: ["下载器"],
      features: [
        "下载与安装",
        "自动获取已适配推荐的软件",
        "方便、快速地下载软件",
        "设置",
        "自定义下载保存路径",
        "特点",
        "界面美观",
        "亮色主题",
        "使用方便"
      ],
      screenshots: [
        "/screenshots/SeewoHUB/1.png",
        "/screenshots/SeewoHUB/2.png",
      ]
    },
  ]
};