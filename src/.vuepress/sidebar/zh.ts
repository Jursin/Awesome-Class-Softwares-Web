import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
    "",
    {
      text: "首页",
      link: "index.md",
    },
  ],
  "/content/": [
    {
      icon: "fa-solid fa-lightbulb",
      text: "目录",
      link: "index.md",
      children: [
        // 这里可以添加目录的子页面
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
          text: "Class Island",
          link: "classisland/index.md",
          children: [
            "classisland/function.md",
          ],
        },
        {
          text: "Class Widgets",
          link: "class-widgets/index.md",
          children: [
            "class-widgets/function.md",
          ],
        },
        {
          text: "Electron Class Schedule",
          link: "electronclassschedule/index.md",
          children: [
            "electronclassschedule/function.md",
          ],
        },
      ],
    },
  ],
  "/multi-function/": [
    {
      icon: "fa-solid fa-puzzle-piece",
      text: "多功能类",
      link: "index.md",
      children: [
        {
          text: "RIS Classtool",
          link: "ris_classtool/index.md",
          children: [
            "ris_classtool/function.md",
          ],
        },
        {
          text: "Zongzitek Blackboard Sticker",
          link: "zongzitek-blackboard-sticker/index.md",
          children: [
            "zongzitek-blackboard-sticker/function.md",
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
            "examaware/function.md",
          ],
        },
        {
          text: "Homework Board",
          link: "homeworkboard/index.md",
          children: [
            "homeworkboard/function.md",
          ],
        },
        {
          text: "Sticky Attention",
          link: "sticky-attention/index.md",
          children: [
            "sticky-attention/function.md",
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
          text: "Ink Canvas",
          link: "ink-canvas/index.md",
          children: [
            "ink-canvas/function.md",
          ],
        },
        {
          text: "Ink Canvas Artistry",
          link: "ink-canvas-artistry/index.md",
          children: [
            "ink-canvas-artistry/function.md",
          ],
        },
        {
          text: "Ink Canvas Reborn",
          link: "ink-canvas-reborn/index.md",
          children: [
            "ink-canvas-reborn/function.md",
          ],
        },
        {
          text: "InKeys",
          link: "inkeys/index.md",
          children: [
            "inkeys/function.md",
          ],
        },
        {
          text: "Inkways Classic",
          link: "inkways-classic/index.md",
          children: [
            "inkways-classic/function.md",
          ],
        },
        {
          text: "SketchNow",
          link: "sketchnow/index.md",
          children: [
            "sketchnow/function.md",
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
            "sectionistool/function.md",
          ],
        },
        {
          text: "SeewoHub",
          link: "seewohub/index.md",
          children: [
            "seewohub/function.md",
          ],
        },
      ],
    },
  ],
});