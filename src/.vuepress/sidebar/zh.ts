import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
    {
      text: "首页",
      link: "index.md",
    },
  ],
  "/content/": [
    {
      icon: "fa-solid fa-lightbulb",
      text: "前言",
      link: "index.md",
      children: [
        {
          text: "目录",
          link: "content.md",
        },
      ],
    },
  ],
  "/classschedule/": [
    {
      icon: "fa-solid fa-calendar-days",
      text: "课表类",
      link: "index.md",
      children: [
        {
          text: "ClassIsland",
          link: "classisland/index.md",
          children: [
            "classisland/get-started.md",
          ],
        },
        {
          text: "Class-Widgets",
          link: "class-widgets/index.md",
          children: [
            "class-widgets/get-started.md",
          ],
        },
        {
          text: "ElectronClassSchedule",
          link: "electronclassschedule/index.md",
          children: [
            "electronclassschedule/get-started.md",
          ],
        },
      ],
    },
  ],
  "/multi-get-started/": [
    {
      icon: "fa-solid fa-puzzle-piece",
      text: "多功能类",
      link: "index.md",
      children: [
        {
          text: "Ris_Classtool",
          link: "ris_classtool/index.md",
          children: [
            "ris_classtool/get-started.md",
          ],
        },
        {
          text: "Zongzitek-Blackboard黑板贴",
          link: "zongzitek-blackboard-sticker/index.md",
          children: [
            "zongzitek-blackboard-sticker/get-started.md",
          ],
        },
      ],
    },
  ],
  "/dashboard/": [
    {
      icon: "fa-solid fa-chalkboard",
      text: "看板类",
      link: "index.md",
      children: [
        {
          text: "ExamAware",
          link: "examaware/index.md",
          children: [
            "examaware/get-started.md",
          ],
        },
        {
          text: "Sticky-attention",
          link: "sticky-attention/index.md",
          children: [
            "sticky-attention/get-started.md",
          ],
        },
        {
          text: "HomeworkBoard",
          link: "homeworkboard/index.md",
          children: [
            "homeworkboard/get-started.md",
          ],
        },
      ],
    },
  ],
  "/annotation/": [
    {
      icon: "fa-solid fa-pen",
      text: "批注类",
      link: "index.md",
      children: [
        {
          text: "Ink-Canvas",
          link: "ink-canvas/index.md",
          children: [
            "ink-canvas/get-started.md",
          ],
        },
        {
          text: "Ink-Canvas-Artistry",
          link: "ink-canvas-artistry/index.md",
          children: [
            "ink-canvas-artistry/get-started.md",
          ],
        },
        {
          text: "Ink-Canvas-Reborn",
          link: "ink-canvas-reborn/index.md",
          children: [
            "ink-canvas-reborn/get-started.md",
          ],
        },
        {
          text: "SketchNow",
          link: "sketchnow/index.md",
          children: [
            "sketchnow/get-started.md",
          ],
        },
        {
          text: "智绘教Inkeys",
          link: "inkeys/index.md",
          children: [
            "inkeys/get-started.md",
          ],
        },
        {
          text: "Inkways-Classic",
          link: "inkways-classic/index.md",
          children: [
            "inkways-classic/get-started.md",
          ],
        },
      ],
    },
  ],
  "/downloader/": [
    {
      icon: "fa-solid fa-download",
      text: "下载类",
      link: "index.md",
      children: [
        {
          text: "Sectionistool",
          link: "sectionistool/index.md",
          children: [
            "sectionistool/get-started.md",
          ],
        },
        {
          text: "SeewoHub",
          link: "seewohub/index.md",
          children: [
            "seewohub/get-started.md",
          ],
        },
      ],
    },
  ],
});