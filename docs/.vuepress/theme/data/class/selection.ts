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
      features: [
        "抽单人/抽多人/抽小组/抽性别 等抽取方式",
        "结果语音提示功能",
        "可开关的历史记录",
        "带时间戳的详细抽取记录",
        "多名单管理",
        "独立抽取与设置界面",
        "便捷悬浮窗设计",
        "自动清除抽取记录",
        "抽取动态权重系统",
        "公平抽取的概率可视化",
        "抽取结果播报支持更多功能",
        "开机自启动支持",
        "现代化UI设计",
        "插件支持"
      ],
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
      features: [
        "基础的点名功能",
        "人性化的配置修改界面",
        "从外部读取名单",
        "特殊点名规则",
        "悬浮窗（点击展开主界面）",
        "软件内更新",
        "支持非二元性别",
        "同时抽选多个",
        "与 ClassIsland/Class-Widgets 联动"
      ],
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
      features: [
        "可开启不重复设置",
        "个性化主题、显示",
        "不同的平衡设置、抽号模式",
      ],
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
      features: [
        "🔄️ 随机点名，可自定义过号时间",
        "📓 多个名单，自由切换",
        "🔧 名单批量导入/导出",
        "🎉 彩带特效",
        "🧩 自定义背景图片",
        "🤫 点名计划",
      ],
      website: "https://ex-caller.by-ts.top/",
      screenshots: [
        "/screenshots/ex-caller/demo.png",
      ]
    },
  ]
};