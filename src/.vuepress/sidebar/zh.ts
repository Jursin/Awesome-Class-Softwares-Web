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
      link: "classisland/index.md",
      collapsible: true,
      expanded: true,
      children: [
        "get-started.md",
        "extraisland.md",
      ],
    },
    {
      prefix: "class-widgets/",
      text: "Class-Widgets",
      link: "class-widgets/index.md",
      collapsible: true,
      expanded: true,
      children: [
        "get-started.md",
      ],
    },
    {
      prefix: "lingyun-class-widgets/",
      text: "LingYun-Class-Widgets",
      link: "lingyun-class-widgets/index.md",
      collapsible: true,
      expanded: true,
      children: [
        "get-started.md",
      ],
    },
    {
      prefix: "electronclassschedule/",
      text: "ElectronClassSchedule",
      link: "electronclassschedule/index.md",
      collapsible: true,
      expanded: true,
      children: [
        "get-started.md",
      ],
    },
    {
      prefix: "iclass/",
      text: "iClass",
      link: "iclass/index.md",
      collapsible: true,
      expanded: true,
      children: [
        "get-started.md",
      ],
    },
  ],
  "/multi-function/": [
    {
      prefix: "ris_classtool/",
      text: "Ris_Classtool",
      link: "ris_classtool/index.md",
      collapsible: true,
      expanded: true,
      children: [
        "get-started.md",
      ],
    },
    {
      prefix: "zongzitek-blackboard-sticker/",
      text: "Zongzitek-Blackboard黑板贴",
      link: "zongzitek-blackboard-sticker/index.md",
      collapsible: true,
      expanded: true,
      children: [
        "get-started.md",
      ],
    },
  ],
  "/dashboard/": [
    {
      prefix: "examaware/",
      text: "ExamAware",
      link: "examaware/index.md",
      collapsible: true,
      expanded: true,
      children: [
        {
          prefix: "exam-showboard/",
          text: "ExamShowboard",
          link: "exam-showboard/index.md",
          collapsible: true,
          expanded: true,
          children: [
            "get-started.md",
          ],
        },
        {
          prefix: "examaware2-desktop/",
          text: "ExamAware 2 Desktop",
          link: "examaware2-desktop/index.md",
          collapsible: true,
          expanded: true,
          children: [
            "get-started.md",
          ],
        },
        {
          prefix: "examschedule/",
          text: "ExamSchedule",
          link: "examschedule/index.md",
          collapsible: true,
          expanded: true,
          children: [
            "get-started.md",
          ],
        },
        {
          prefix: "examcloudschedule/",
          text: "ExamCloudSchedule",
          link: "examcloudschedule/index.md",
          collapsible: true,
          expanded: true,
          children: [
            "get-started.md",
          ],
        },
      ],
    },
    {
      prefix: "sticky-attention/",
      text: "Sticky-attention",
      link: "sticky-attention/index.md",
      collapsible: true,
      expanded: true,
      children: [
        "get-started.md",
      ],
    },
    {
      prefix: "homeworkboard/",
      text: "HomeworkBoard",
      link: "homeworkboard/index.md",
      collapsible: true,
      expanded: true,
      children: [
        "get-started.md",
      ],
    },
    {
      prefix: "classworks/",
      text: "Classworks",
      link: "classworks/index.md",
      collapsible: true,
      expanded: true,
      children: [
        "get-started.md",
      ],
    },
  ],
  "/annotation/": [
    {
      prefix: "ink-canvas/",
      text: "Ink-Canvas",
      link: "ink-canvas/index.md",
      collapsible: true,
      expanded: true,
      children: [
        "get-started.md",
      ],
    },
    {
      prefix: "ink-canvas-plus/",
      text: "Ink-Canvas-Plus",
      link: "ink-canvas-plus/index.md",
      collapsible: true,
      expanded: true,
      children: [
        "get-started.md",
      ],
    },
    {
      prefix: "ink-canvas-artistry/",
      text: "Ink-Canvas-Artistry",
      link: "ink-canvas-artistry/index.md",
      collapsible: true,
      expanded: true,
      children: [
        "get-started.md",
      ],
    },
    {
      prefix: "inkcanvasforclass/",
      text: "InkCanvasForClass",
      link: "inkcanvasforclass/index.md",
      collapsible: true,
      expanded: true,
      children: [
        "get-started.md",
      ],
    },
    {
      prefix: "sketchnow/",
      text: "SketchNow",
      link: "sketchnow/index.md",
      collapsible: true,
      expanded: true,
      children: [
        "get-started.md",
      ],
    },
    {
      prefix: "inkeys/",
      text: "智绘教Inkeys",
      link: "inkeys/index.md",
      collapsible: true,
      expanded: true,
      children: [
        "get-started.md",
      ],
    },
    {
      prefix: "inkways-classic/",
      text: "Inkways-Classic",
      link: "inkways-classic/index.md",
      collapsible: true,
      expanded: true,
      children: [
        "get-started.md",
      ],
    },
    {
      prefix: "lemonxnote/",
      text: "LemonxNote",
      link: "lemonxnote/index.md",
      collapsible: true,
      expanded: true,
      children: [
        "get-started.md",
      ],
    },
  ],
  "/downloader/": [
    {
      prefix: "sectionistool/",
      text: "Sectionistool",
      link: "sectionistool/index.md",
      collapsible: true,
      expanded: true,
      children: [
        "get-started.md",
      ],
    },
    {
      prefix: "seewohub/",
      text: "SeewoHub",
      link: "seewohub/index.md",
      collapsible: true,
      expanded: true,
      children: [
        "get-started.md",
      ],
    },
  ],
  "/miscellany/": [
    {
      prefix: "namepicker/",
      text: "NamePicker",
      link: "namepicker/index.md",
      collapsible: true,
      expanded: true,
      children: [
        "get-started.md",
      ],
    },
    {
      prefix: "rand/",
      text: "Rand",
      link: "rand/index.md",
      collapsible: true,
      expanded: true,
      children: [
        "get-started.md",
      ],
    },
    {
      prefix: "secrandom/",
      text: "SecRandom",
      link: "secrandom/index.md",
      collapsible: true,
      expanded: true,
      children: [
        "get-started.md",
      ],
    },
  ],
});
