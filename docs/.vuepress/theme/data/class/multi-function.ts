import type { CategoryConfig } from './types';

export const MultiFunction: CategoryConfig = {
  name: '多功能类',
  route: 'Multi-Function',
  icon: 'fa6-solid:puzzle-piece',
  items: [
    {
      id: "ZongziTEK-Blackboard-Sticker",
      name: "ZongziTEK 黑板贴",
      icon: "/icon/ZongziTEK.png",
      repo: "STBBRD/ZongziTEK-Blackboard-Sticker",
      description: "用于白板一体机的桌面小部件",
      author: "STBBRD",
      avatar: "https://github.com/STBBRD.png",
      tags: ["课程表", "黑板贴", "粽子科技", "上下课提醒", "天气提醒", "快速黑板", "启动台"],
      features: [
        "适用于白板一体机的桌面小部件",
        "享受抬手即用的小黑板功能",
        "高效的信息展示方式",
        "便捷的课程管理工具",
        "多项实用功能，满足班级各种需求"
      ],
      group: "https://jq.qq.com/?_wv=1027&k=epb9KDPe",
      website: "https://zztek.top/",
      screenshots: [
        "/screenshots/ZongziTEK-Blackboard-Sticker/light.png",
        "/screenshots/ZongziTEK-Blackboard-Sticker/dark.png",
        "/screenshots/ZongziTEK-Blackboard-Sticker/simple.png",
      ]
    },
    {
      id: "Education-Clock",
      name: "Education Clock",
      icon: "/icon/Education-Clock.png",
      repo: "Return-Log/Education-Clock",
      description: "一个实用的班级信息看板",
      author: "Return-Log",
      avatar: "https://github.com/Return-Log.png",
      tags: ["桌面小组件", "课程表", "倒计日", "天气预报", "PyQt", "公告板", "桌面时钟软件"],
      features: [
        "桌面时钟",
        "课程表",
        "天气预报",
        "自动新闻联播",
        "定时关机",
        "消息通知栏",
        "随机点名",
        "新闻看板",
      ],
      screenshots: [
        "/screenshots/Education-Clock/banner.png",
      ]
    },
    {
      id: "VoiceHub",
      name: "校园广播站点歌系统",
      icon: "/icon/VoiceHub.png",
      repo: "laoshuikaixue/VoiceHub",
      description: "一个使用 Nuxt 3 全栈框架开发的现代化校园广播站点歌管理系统",
      author: "laoshuikaixue",
      avatar: "https://github.com/laoshuikaixue.png",
      tags: ["广播站", "点歌系统", "Nuxt3"],
      features: [
        "智能点歌系统：用户可以点歌或给已有歌曲投票，支持网易云音乐和QQ音乐搜索，可选择期望播出时段",
        "投稿限额管理：灵活配置用户投稿限制，支持按时间段、用户角色设置不同的投稿额度，有效控制系统负载",
        "歌曲去重功能：智能识别重复歌曲，优化歌曲库管理，避免重复播放",
        "歌曲管理：按热度排序，避免重复播放，动态URL防止链接过期，支持黑名单管理",
        "音乐播放器：内置音乐播放器，支持进度控制和音质实时切换",
        "音质切换：支持多种音质选择（标准、HQ、无损、Hi-Res等），动态获取最新播放链接",
        "音乐下载功能：支持管理员下载歌曲到本地，提供多种音质选择和批量下载",
      ],
      website: "https://voicehub.smart-teach.cn/",
      screenshots: [
        "/screenshots/VoiceHub/1.png",
        "/screenshots/VoiceHub/2.png",
        "/screenshots/VoiceHub/3.png",
        "/screenshots/VoiceHub/4.png",
        "/screenshots/VoiceHub/5.png",
        "/screenshots/VoiceHub/6.png",
      ]
    },
  ]
};