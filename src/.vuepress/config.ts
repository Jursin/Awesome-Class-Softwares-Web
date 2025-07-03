import { defineUserConfig, Plugin } from "vuepress";
import { searchProPlugin } from "vuepress-plugin-search-pro";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/Awesome-Class-Softwares-Web/",
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: 'https://theme-hope-assets.vuejs.press/logo.svg' }]
  ],
  locales: {
    "/": {
      lang: "zh-CN",
      title: "Awesome-Class-Softwares",
      description: "Awesome-Class-Softwares 网站",
    },
    "/en-us/": {
      lang: "en-US",
      title: "Awesome-Class-Softwares",
      description: "Website of Awesome-Class-Softwares Website",
    },
  },
  theme
  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
