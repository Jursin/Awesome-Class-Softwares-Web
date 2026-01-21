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
      badge: [
        { type: "info", text: "长时间未更新" },
      ],
      tags: ["下载器"],
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
      badge: [
        { type: "info", text: "长时间未更新" },
      ],
      tags: ["下载器"],
      screenshots: [
        "/screenshots/SeewoHUB/1.png",
        "/screenshots/SeewoHUB/2.png",
      ]
    },
  ]
};