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
      icon: "fa-solid fa-book-open",
      text: "前言",
      link: "foreword.md",
    },
    {
      icon: "fa-solid fa-list",
      text: "快速导航",
      link: "navigation.md",
    },
    {
      icon: "fa-solid fa-link",
      text: "链接聚合",
      link: "gather.md",
    },
    {
      icon: "fa-solid fa-code-commit",
      text: "贡献指南",
      link: "contributing.md",
    },
  ],
  "/classschedule/": [
    "cses.md",
    {
      prefix: "classisland/",
      text: "ClassIsland",
      link: "index.md",
      collapsible: true,
      children: [
        "get-started.md",
        "extraisland.md",
      ],
    },
    {
      prefix: "class-widgets/",
      text: "Class-Widgets",
      link: "index.md",
      collapsible: true,
      children: [
        "get-started.md",
      ],
    },
    {
      prefix: "electronclassschedule/",
      text: "ElectronClassSchedule",
      link: "index.md",
      collapsible: true,
      children: [
        "get-started.md",
      ],
    },
    {
      prefix: "iclass/",
      text: "iClass",
      link: "index.md",
      collapsible: true,
      children: [
        "get-started.md",
      ],
    },
  ],
  "/multi-function/": [
    {
      prefix: "ris_classtool/",
      text: "Ris_Classtool",
      link: "index.md",
      collapsible: true,
      children: [
        "get-started.md",
      ],
    },
    {
      prefix: "zongzitek-blackboard-sticker/",
      text: "Zongzitek-Blackboard黑板贴",
      link: "index.md",
      collapsible: true,
      children: [
        "get-started.md",
      ],
    },
  ],
  "/dashboard/": [
    {
      prefix: "examaware/",
      text: "ExamAware",
      link: "index.md",
      collapsible: true,
      children: [
        {
          prefix: "exam-showboard/",
          text: "ExamShowboard",
          link: "index.md",
          collapsible: true,
          children: [
            "get-started.md",
          ],
        },
        {
          prefix: "examaware2-desktop/",
          text: "ExamAware 2 Desktop",
          link: "index.md",
          collapsible: true,
          children: [
            "get-started.md",
          ],
        },
        {
          prefix: "examschedule/",
          text: "ExamSchedule",
          link: "index.md",
          collapsible: true,
          children: [
            "get-started.md",
          ],
        },
        {
          prefix: "examcloudschedule/",
          text: "ExamCloudSchedule",
          link: "index.md",
          collapsible: true,
          children: [
            "get-started.md",
          ],
        },
      ],
    },
    {
      prefix: "sticky-attention/",
      text: "Sticky-attention",
      link: "index.md",
      collapsible: true,
      children: [
        "get-started.md",
      ],
    },
    {
      prefix: "homeworkboard/",
      text: "HomeworkBoard",
      link: "index.md",
      collapsible: true,
      children: [
        "get-started.md",
      ],
    },
  ],
  "/annotation/": [
    {
      prefix: "ink-canvas/",
      text: "Ink-Canvas",
      link: "index.md",
      collapsible: true,
      children: [
        "get-started.md",
      ],
    },
    {
      prefix: "ink-canvas-artistry/",
      text: "Ink-Canvas-Artistry",
      link: "index.md",
      collapsible: true,
      children: [
        "get-started.md",
      ],
    },
    {
      prefix: "inkcanvasforclass/",
      text: "InkCanvasForClass",
      link: "index.md",
      collapsible: true,
      children: [
        "get-started.md",
      ],
    },
    {
      prefix: "sketchnow/",
      text: "SketchNow",
      link: "index.md",
      collapsible: true,
      children: [
        "get-started.md",
      ],
    },
    {
      prefix: "inkeys/",
      text: "智绘教Inkeys",
      link: "index.md",
      collapsible: true,
      children: [
        "get-started.md",
      ],
    },
    {
      prefix: "inkways-classic/",
      text: "Inkways-Classic",
      link: "index.md",
      collapsible: true,
      children: [
        "get-started.md",
      ],
    },
  ],
  "/downloader/": [
    {
      prefix: "sectionistool/",
      text: "Sectionistool",
      link: "index.md",
      collapsible: true,
      children: [
        "get-started.md",
      ],
    },
    {
      prefix: "seewohub/",
      text: "SeewoHub",
      link: "index.md",
      collapsible: true,
      children: [
        "get-started.md",
      ],
    },
  ],
  "/miscellany/": [
    {
      prefix: "namepicker/",
      text: "NamePicker",
      link: "index.md",
      collapsible: true,
      children: [
        "get-started.md",
      ],
    },
  ],
});
