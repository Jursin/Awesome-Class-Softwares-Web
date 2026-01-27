import type { CategoryConfig } from './types';

export const Auxiliary: CategoryConfig = {
  name: '辅助类',
  route: 'Auxiliary',
  icon: 'fa7-solid:tools',
  items: [
    {
      id: "Seewo-HugoAura",
      name: "HugoAura",
      icon: "/icon/HugoAura.svg",
      repo: "HugoAura/Seewo-HugoAura",
      description: "下一代希沃管家注入式修改方案",
      author: "Minoricew",
      tags: ["希沃管家", "注入式修改"],
      group: { qqGroup: "https://qm.qq.com/q/buo7m9oHBK", telegram: "https://t.me/HugoAura_Chat" },
      docs: "https://docs.aurax.cc/",
      stcnSection: "https://forum.smart-teach.cn/t/hugoaura",
      screenshots: [
        "/screenshots/HugoAura/banner.png",
        "/screenshots/HugoAura/preview.png",
        "/screenshots/HugoAura/1.png",
        "/screenshots/HugoAura/2.png",
      ]
    },
    {
      id: "Seewo-Custom_Start",
      name: "希沃·定制启动器",
      icon: "/icon/Seewo-Custom_Start.png",
      repo: "SRInternet-Studio/Seewo-Custom_Start",
      description: "用定制启动器点缀万物！",
      author: "RBC-AE3803",
      tags: ["希沃白板", "定制启动页"],
      screenshots: [
        "/screenshots/Seewo-Custom_Start/seewopro.png",
      ],
      bvid: ["BV1eC4y1D73H"],
    },
    {
      id: "Class_Hot_Search",
      name: "班级热搜排行",
      icon: "/icon/Class_Hot_Search.png",
      repo: "SRInternet-Studio/Class_Hot_Search",
      description: "适用于班级大屏等其他环境中展示一个以排行榜和排名的公共投票小工具",
      author: "SRInternet",
      tags: ["班级热搜", "排行榜"],
      group: { qqGroup: "https://qm.qq.com/q/f3QGDkdp6M" },
      screenshots: [
        "/screenshots/Class_Hot_Search/banner.jpg",
      ],
      bvid: ["BV1SoiyYuEtt"],
    },
    {
      id: "EasiAuto",
      name: "EasiAuto",
      icon: "/icon/EasiAuto.png",
      repo: "hxabcd/EasiAuto",
      description: "一款自动登录希沃白板的小工具",
      author: "hxabcd",
      tags: ["希沃白板", "自动登录"],
      stcnSection: "https://forum.smart-teach.cn/d/1039",
      screenshots: [
        "/screenshots/EasiAuto/banner.png",
        "/screenshots/EasiAuto/settings.png",
        "/screenshots/EasiAuto/ciautoedit.png",
        "/screenshots/EasiAuto/update.png",
      ]
    },
    {
      id: "PowerPoint-Touch-Assist",
      name: "PPT触屏辅助",
      icon: "/icon/PowerPoint-Touch-Assist.png",
      repo: "RinLit-233-shiroko/PowerPoint-Touch-Assist",
      description: "在 Windows 10/11 中更高效地以“单击”动作翻页",
      author: "RinLit-233-shiroko",
      tags: ["PPT翻页", "触屏辅助"],
      website: "https://pptfortouch.framer.website/",
      screenshots: [
        "/screenshots/PowerPoint-Touch-Assist/splashScreen.png",
      ]
    },
    {
      id: "ClassScreenLock",
      name: "ClassScreenLock",
      icon: "/icon/CSL.png",
      repo: "jiugulixiaoniu/ClassScreenLock",
      description: "一个 Windows 系统课堂屏幕锁定软件",
      author: "jiugulixiaoniu",
      tags: ["锁屏"],
      group: { qqGroup: "https://qm.qq.com/q/jBPeZyWi3K" },
      screenshots: [
        "/screenshots/ClassScreenLock/1.png",
        "/screenshots/ClassScreenLock/2.png",
      ]
    },
    {
      id: "SecScore",
      name: "SecScore",
      icon: "/icon/SecScore.svg",
      repo: "SECTL/SecScore",
      description: "一个简单易用、优雅美观的班级个人积分管理软件",
      author: "Fox-block-offcial",
      badge: [
        { type: "info", text: "早期开发中" },
      ],
      tags: ["积分管理", "Electron"],
      group: { qqGroup: "https://qm.qq.com/q/Y8tx1BxnmG" },
      screenshots: [
        "/screenshots/SecScore/1.png",
      ]
    },
  ]
};