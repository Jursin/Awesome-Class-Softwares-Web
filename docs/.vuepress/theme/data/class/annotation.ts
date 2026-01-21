import type { CategoryConfig } from './types';

export const Annotation: CategoryConfig = {
  name: '批注类',
  route: 'Annotation',
  icon: 'fa6-solid:pen',
  items: [
    {
      id: "Inkeys",
      name: "智绘教Inkeys",
      icon: "/icon/Inkeys.png",
      repo: "Alan-CRL/Inkeys",
      description: "Windows 屏幕批注工具，拥有批注高效和功能丰富等特点，适用于触摸设备和PC端",
      author: "Alan-CRL",
      badge: [
        { type: "danger", text: "🔥 推荐" },
      ],
      tags: ["屏幕批注", "C++", "EasyX", "多指书写", "屏幕画板", "桌面批注", "荧光笔", "PPT批注"],
      group: { qqGroup: "https://qm.qq.com/q/iEDzSL0Wn" },
      docs: "https://www.inkeys.top/",
      screenshots: [
        "/screenshots/Inkeys/banner.png",
      ],
      bvid: ["BV17duZzYEsE"],
    },
    {
      id: "Ink-Canvas",
      name: "Ink-Canvas",
      icon: "/icon/Ink-Canvas.png",
      repo: "WXRIW/Ink-Canvas",
      description: "一款轻量级画板软件，基于WPF/C#，其针对希沃一体机进行了特别优化，与预装的“希沃白板 5”软件相比，启动速度大幅度提升（提升5-10 倍），系统资源占用更小，使用体验更佳",
      author: "WXRIW",
      tags: ["屏幕批注", "屏幕画板", "形状识别"],
      badge: [
        { type: "info", text: "已停更" },
      ],
      group: { qqGroup: "https://qm.qq.com/q/DmsQH58eqc" },
      screenshots: [
        "/screenshots/Ink-Canvas/screen.png",
        "/screenshots/Ink-Canvas/board.png",
      ]
    },
    {
      id: "Ink-Canvas-Plus",
      name: "Ink-Canvas-Plus",
      icon: "/icon/Ink-Canvas-Plus.png",
      repo: "clover-yan/Ink-Canvas-Plus",
      description: "一款复刻自 WXRIW/Ink Canvas 的 Windows 画板应用，旨在优化各方面的使用体验，并尽可能保留原版 Ink Canvas 的操作体验",
      author: "clover-yan",
      tags: ["屏幕批注", "屏幕画板", "形状识别", "Ink-Canvas"],
      group: { qqGroup: "https://qm.qq.com/q/yVzprKLfbi" },
      website: "https://www.khyan.top/apps/Ink-Canvas-Plus/",
      screenshots: [
        "/screenshots/Ink-Canvas-Plus/toolbar.png",
        "/screenshots/Ink-Canvas-Plus/board.png",
      ]
    },
    {
      id: "Ink-Canvas-Artistry",
      name: "Ink-Canvas-Artistry",
      icon: "/icon/Ink-Canvas-Artistry.png",
      repo: "WuChanging/Ink-Canvas",
      description: "基于Ink Canvas二次开发，优化了界面 UI，是一款好用的屏幕批注/板书/PPT批注工具",
      author: "WuChanging",
      badge: [
        { type: "info", text: "已停更" },
      ],
      tags: ["屏幕批注", "屏幕画板", "形状识别", "Ink-Canvas"],
      group: { qqGroup: "https://qm.qq.com/q/AC777tzmEw" },
      screenshots: [
        "/screenshots/Ink-Canvas-Artistry/1.png",
        "/screenshots/Ink-Canvas-Artistry/2.png",
        "/screenshots/Ink-Canvas-Artistry/3.png",
      ]
    },
    {
      id: "Ink-Canvas-Better",
      name: "Ink-Canvas-Better",
      icon: "/icon/Ink-Canvas-Better.png",
      repo: "BaiYang2238/Ink-Canvas-Better",
      description: "一款在 Ink-Canvas-Artistry 的基础上对 Ink-Canvas 进行了二次修改的软件，且移除了点名和计时器工具等非画板软件的核心功能",
      author: "BaiYang2238",
      tags: ["屏幕批注", "屏幕画板", "形状识别", "Ink-Canvas-Artistry"],
      screenshots: [
        "/screenshots/Ink-Canvas-Better/preview.png",
      ]
    },
    {
      id: "InkCanvasForClass",
      name: "InkCanvasForClass",
      icon: "/icon/InkCanvasForClass.png",
      repo: "InkCanvas/InkCanvasForClass",
      description: "一款开源易用的电子教鞭软件，专为课堂教学场景优化设计，这将会是最后一次基于 InkCanvas 控件的倔强",
      author: "segf4ultk1nger",
      badge: [
        { type: "info", text: "已停更" },
      ],
      tags: ["屏幕批注", "屏幕画板", "形状识别", "Ink-Canvas-Artistry"],
      screenshots: [
        "/screenshots/InkCanvasForClass/toolbar.png",
        "/screenshots/InkCanvasForClass/board.png",
      ]
    },
    {
      id: "InkCanvasForClass-Community-Edition",
      name: "InkCanvasForClass Community Edition",
      icon: "/icon/ICC-CE.png",
      repo: "InkCanvasForClass/community",
      description: "InkCanvasForClass 社区版",
      author: "",
      tags: ["屏幕批注", "屏幕画板", "形状识别", "InkCanvasForClass"],
      group: { qqGroup: "https://qm.qq.com/q/qo32AclNh6", discord: "https://discord.gg/XzwQWcBqTK" },
      website: "https://www.iccce.dpdns.org/",
      docs: "https://inkcanvasforclass.github.io/website",
      screenshots: [
        "/screenshots/ICC-CE/banner.png",
      ],
      bvid: ["BV1yH8ezcEKk"],
    },
    {
      id: "Kazuha",
      name: "Kazuha",
      icon: "/icon/Kazuha.svg",
      repo: "Yunofactory/Kazuha",
      description: "适用于智慧黑板/交互智能平板的演示助手工具",
      author: "Haraguse",
      tags: ["屏幕批注", "重点框选"],
      group: { qqGroup: "https://qm.qq.com/q/ikLWTHv39e" },
      screenshots: [
        "/screenshots/Kazuha/1.png",
        "/screenshots/Kazuha/2.png",
        "/screenshots/Kazuha/3.png",
        "/screenshots/Kazuha/4.png",
      ]
    },
    {
      id: "LemonxNote",
      name: "LemonxNote",
      icon: "/icon/LemonxNote.png",
      repo: "lh11117/LemonxNote",
      description: "一款用 C++ 和 Qt 开发的轻量白板软件",
      author: "lh11117",
      badge: [
        { type: "info", text: "已停更" },
      ],
      tags: ["C++", "Qt", "屏幕画板", "轻量"],
      screenshots: [
        "/screenshots/LemonxNote/main.png",
      ]
    },
  ]
};