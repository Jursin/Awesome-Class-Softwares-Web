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
      avatar: "https://github.com/lzy98276.png",
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
      group: "https://qm.qq.com/q/Y8tx1BxnmG",
      docs: "https://secrandom-docs.netlify.app/",
      screenshots: [
        "/screenshots/SecRandom/1.png",
        "/screenshots/SecRandom/2.png",
      ]
    },
  ]
};