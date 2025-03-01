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
      icon: "fa-solid fa-book",
      text: "目录",
      link: "index.md",      
    },
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
    {
      icon: "fa-solid fa-calendar-days",
      text: "课表类",
      link: "index.md",
      children: [
        {
          text: "ClassIsland",
          link: "classisland/index.md",
          collapsible: true,
          collapsed: true,
          children: [
            "classisland/get-started.md",
          ],
        },
        {
          text: "Class-Widgets",
          link: "class-widgets/index.md",
          collapsible: true,
          collapsed: true,
          children: [
            "class-widgets/get-started.md",
          ],
        },
        {
          text: "ElectronClassSchedule",
          link: "electronclassschedule/index.md",
          collapsible: true,
          collapsed: true,
          children: [
            "electronclassschedule/get-started.md",
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
          text: "Ris_Classtool",
          link: "ris_classtool/index.md",
          collapsible: true,
          collapsed: true,
          children: [
            "ris_classtool/get-started.md",
          ],
        },
        {
          text: "Zongzitek-Blackboard黑板贴",
          link: "zongzitek-blackboard-sticker/index.md",
          collapsible: true,
          collapsed: true,
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
          collapsible: true,
          collapsed: true,
          children: [
            {
              text: "ExamShowboard",
              link: "examaware/exam-showboard/index.md",
              collapsible: true,
              collapsed: true,
              children: [
                "examaware/exam-showboard/get-started.md",
              ],
            },
            {
              text: "ExamAware 2 Desktop",
              link: "examaware/examaware2-desktop/index.md",
              collapsible: true,
              collapsed: true,
              children: [
                "examaware/examaware2-desktop/get-started.md",
              ],
            },
            {
              text: "ExamSchedule",
              link: "examaware/examschedule/index.md",
              collapsible: true,
              collapsed: true,
              children: [
                "examaware/examschedule/get-started.md",
              ],
            },
            {
              text: "ExamCloudSchedule",
              link: "examaware/examcloudschedule/index.md",
              collapsible: true,
              collapsed: true,
              children: [
                "examaware/examcloudschedule/get-started.md",
              ],
            },
          ],
        },
        {
          text: "Sticky-attention",
          link: "sticky-attention/index.md",
          collapsible: true,
          collapsed: true,
          children: [
            "sticky-attention/get-started.md",
          ],
        },
        {
          text: "HomeworkBoard",
          link: "homeworkboard/index.md",
          collapsible: true,
          collapsed: true,
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
          collapsible: true,
          collapsed: true,
          children: [
            "ink-canvas/get-started.md",
          ],
        },
        {
          text: "Ink-Canvas-Artistry",
          link: "ink-canvas-artistry/index.md",
          collapsible: true,
          collapsed: true,
          children: [
            "ink-canvas-artistry/get-started.md",
          ],
        },
        {
          text: "Ink-Canvas-Reborn",
          link: "ink-canvas-reborn/index.md",
          collapsible: true,
          collapsed: true,
          children: [
            "ink-canvas-reborn/get-started.md",
          ],
        },
        {
          text: "SketchNow",
          link: "sketchnow/index.md",
          collapsible: true,
          collapsed: true,
          children: [
            "sketchnow/get-started.md",
          ],
        },
        {
          text: "智绘教Inkeys",
          link: "inkeys/index.md",
          collapsible: true,
          collapsed: true,
          children: [
            "inkeys/get-started.md",
          ],
        },
        {
          text: "Inkways-Classic",
          link: "inkways-classic/index.md",
          collapsible: true,
          collapsed: true,
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
          collapsible: true,
          collapsed: true,
          children: [
            "sectionistool/get-started.md",
          ],
        },
        {
          text: "SeewoHub",
          link: "seewohub/index.md",
          collapsible: true,
          collapsed: true,
          children: [
            "seewohub/get-started.md",
          ],
        },
      ],
    },
  ],
});