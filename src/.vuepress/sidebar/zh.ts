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
      children: [
        "index.md",
      ],
    },
  ],
  "/classschedule/": [
    {
      icon: "fa-solid fa-lightbulb",
      text: "课表类",
      children: [
        "classisland/index.md",
      ],
    },
  ],
});
