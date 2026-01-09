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
      avatar: "https://github.com/Alan-CRL.png",
      tags: ["屏幕批注", "C++", "EasyX", "多指书写", "屏幕画板", "桌面批注", "荧光笔", "PPT批注"],
      features: [
        "动态画板背景、窗口定格与穿透",
        "智能直线绘制/直线吸附/矩形吸附/平滑笔迹/智能粗细橡皮擦",
        "炫彩全 RGBA 绘图，1-500 粗细调节",
        "全新 UI 与可打断动画",
        "PPT 联动，翻页/笔迹保留/插件",
        "标准笔迹/荧光笔迹",
        "撤回和超级恢复",
        "画板绘制内容自动保存本地",
        "PPT 演示组件",
        "超级置顶",
        "同类软件悬浮窗拦截助手 快捷方式保障助手",
        "支持多指绘制以及模拟笔锋",
        "快捷键"
      ],
      group: { qqGroup: "https://qm.qq.com/q/iEDzSL0Wn" },
      docs: "https://www.inkeys.top/",
      screenshots: [
        "/screenshots/Inkeys/banner.png",
      ],
      bvid: ["BV17duZzYEsE"],
    }
  ]
};