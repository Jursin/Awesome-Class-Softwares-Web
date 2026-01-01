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
      tags: ["下载器"],
      features: [
        "自动获取已适配推荐的软件",
        "方便、快速地下载软件",
        "自定义添加 Github 项目中的软件",
        "自动安装已下载完成的软件",
      ],
      group: "https://qm.qq.com/q/Y8tx1BxnmG",
      screenshots: [
        "/screenshots/SectionIstool/1.png",
        "/screenshots/SectionIstool/2.png",
      ]
    },
  ]
};