import type { CategoryConfig } from './types';

export const Selection: CategoryConfig = {
  name: '抽选类',
  route: 'Selection',
  icon: 'fa6-solid:cubes',
  items: [
    {
      id: "SecRandom",
      name: "SecRandom",
      icon: "/icon/SecRandom.png",
      repo: "SECTL/SecRandom",
      description: "一款能以多种方式进行完全公平的随机抽取的软件",
      author: "lzy98276",
      badge: [
        { type: "danger", text: "推荐" },
      ],
      tags: ["随机抽取", "语音提示", "历史记录"],
      group: { qqGroup: "https://qm.qq.com/q/Y8tx1BxnmG", qqChannel: "https://pd.qq.com/s/ddy1ie3e9", discord: "https://discord.gg/aRYzV5ZUZ2" },
      docs: "https://secrandom-docs.netlify.app/",
      screenshots: [
        "/screenshots/SecRandom/1.png",
        "/screenshots/SecRandom/2.png",
      ],
      bvid: ["BV17JvfB7EQu"],
    },
    {
      id: "NamePicker",
      name: "NamePicker",
      icon: "/icon/NamePicker.png",
      repo: "NamePickerOrg/NamePicker",
      description: "一款简洁的点名软件",
      author: "LHGS-github",
      tags: ["点名", "Flutter"],
      group: { qqGroup: "https://qm.qq.com/q/WzhU4u6nYG" },
      docs: "https://namepicker-docs.netlify.app/",
      screenshots: [
        "/screenshots/NamePicker/banner.png",
        "/screenshots/NamePicker/main.png",
      ],
      bvid: ["BV1tZGwzvEra"],
    },
    {
      id: "Rand",
      name: "Rand",
      icon: "/icon/Rand.png",
      repo: "LuoYunXi0407/Rand",
      description: "一款美观、易用、强大的抽号软件",
      author: "LuoYunXi0407",
      badge: [
        { type: "info", text: "长时间未更新" },
      ],
      tags: ["随机", "抽号", "点名"],
      screenshots: [
        "/screenshots/Rand/main.png",
      ]
    },
    {
      id: "ex-caller",
      name: "ex-caller",
      icon: "/icon/ex-caller.png",
      repo: "typed-sigterm/ex-caller",
      description: "一个简约风格的随机点名工具",
      author: "typed-sigterm",
      tags: ["随机点名", "网页"],
      website: "https://ex-caller.by-ts.top/",
      screenshots: [
        "/screenshots/ex-caller/demo.png",
      ]
    },
  ]
};