import { defineUserConfig, Plugin } from "vuepress";
import { searchProPlugin } from "vuepress-plugin-search-pro";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/Awesome-Class-Softwares-Web/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "Awesome-Class-Softwares-Web",
      description: "Awesome-Class-Softwares-Web 网站",
    },
    "/en-us/": {
      lang: "en-US",
      title: "Awesome-Class-Softwares-Web",
      description: "Website of Awesome-Class-Softwares-Web",
    },
  },
  theme
  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
