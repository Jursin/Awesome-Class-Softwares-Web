import { hopeTheme } from "vuepress-theme-hope";
import { zhNavbar } from "./navbar/index.js";
import { zhSidebar } from "./sidebar/index.js";

export default hopeTheme({
  hostname: "https://github.com/Jursin/Awesome-Class-Softwares-Web",

  author: {
    name: "Jursin",
    url: "https://github.com/Jursin",
  },

  iconAssets: "fontawesome-with-brands",

  logo: "https://theme-hope-assets.vuejs.press/logo.svg",

  repo: "Jursin/Awesome-Class-Softwares-Web",

  docsDir: "src",

  // 导航栏
  // navbar,

  // // 侧边栏
  // sidebar,

  // // 页脚
  
  displayFooter: true,
  copyright: false,

  locales: {
    "/": {
      // navbar
      navbar: zhNavbar,

      // sidebar
      sidebar: zhSidebar,

      //  autocorrect-disable
      footer: "Copyright (c) 2025 Jursin | " +
          '本文档以 CC BY-NC-SA 4.0 许可协议授权。',
      //  autocorrect-enable

      displayFooter: true,

      metaLocales: {
        editLink: "编辑此页面",
      },
    },
  },

  // 多语言配置
  metaLocales: {
    editLink: "在 GitHub 上编辑此页",
  },

  // 如果想要实时查看任何改变，启用它。注：这对更新性能有很大负面影响
  // hotReload: true,
  pure: true,
  // 在这里配置主题提供的插件
  plugins: {
    // // 注意：仅用于测试！你必须自行生成并在生产环境中使用自己的评论服务
    comment: {
      provider: "Giscus",
      repo: "Jursin/Awesome-Class-Softwares-Web",
      repoId: "R_kgDON6SdCw",
      category: "Announcements",
      categoryId: "DIC_kwDON6SdC84CnZcw",
      mapping: "pathname",
      inputPosition: "top",
      lightTheme: "light",
      darkTheme: "dark",
    },
    searchPro: {},
    shiki: {
      themes: {
        light: "one-light",
        dark: "one-dark-pro",
      },
      highlightLines: true,
      notationDiff: true,
      notationFocus: true,
      notationHighlight: true,
    },

    components: {
      components: ["BiliBili", "Badge", "Share", "VPCard"],
    },
    markdownTab: {
      // 启用代码选项卡
      codeTabs: true,
      // 启用选项卡
      tabs: true,
    },
    markdownHint: {
      // 启用提示容器，默认启用
      hint: true,
      // 启用 GFM 警告
      alert: true,
    },
    
    // 此处开启了很多功能用于演示，你应仅保留用到的功能。
    mdEnhance: {
      align: true,
      attrs: true,
      component: true,
      demo: true,
      include: true,
      mark: true,
      plantuml: true,
      spoiler: true,
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tasklist: true,
      vPre: true,

      // 在启用之前安装 chart.js
      chart: true,

      // insert component easily

      // 在启用之前安装 echarts
      echarts: true,

      // 在启用之前安装 flowchart.ts
      flowchart: true,

      // gfm requires mathjax-full to provide tex support
      gfm: true,

      // 在启用之前安装 katex
      // katex: true,

      // 在启用之前安装 mathjax-full
      // mathjax: true,

      // 在启用之前安装 mermaid
      mermaid: true,

      // playground: {
      //   presets: ["ts", "vue"],
      // },

      // 在启用之前安装 reveal.js
      // revealJs: {
      //   plugins: ["highlight", "math", "search", "notes", "zoom"],
      // },

      // 在启用之前安装 @vue/repl
      // vuePlayground: true,

      // install sandpack-vue3 before enabling it
      // sandpack: true,
    },

    // 如果你需要 PWA。安装 @vuepress/plugin-pwa 并取消下方注释
    // pwa: {
    //   favicon: "/favicon.ico",
    //   cacheHTML: true,
    //   cacheImage: true,
    //   appendBase: true,
    //   apple: {
    //     icon: "/assets/icon/apple-icon-152.png",
    //     statusBarColor: "black",
    //   },
    //   msTile: {
    //     image: "/assets/icon/ms-icon-144.png",
    //     color: "#ffffff",
    //   },
    //   manifest: {
    //     icons: [
    //       {
    //         src: "/assets/icon/chrome-mask-512.png",
    //         sizes: "512x512",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-mask-192.png",
    //         sizes: "192x192",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //     ],
    //     shortcuts: [
    //       {
    //         name: "Demo",
    //         short_name: "Demo",
    //         url: "/demo/",
    //         icons: [
    //           {
    //             src: "/assets/icon/guide-maskable.png",
    //             sizes: "192x192",
    //             purpose: "maskable",
    //             type: "image/png",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },
  },
});
