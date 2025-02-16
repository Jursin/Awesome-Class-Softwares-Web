// .vuepress/vuepress-pdf.config.ts
import { defineUserConfig } from "@condorhero/vuepress-plugin-export-pdf-v2";
import theme from "./theme.js";
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  outFile: "Awesome-Class-Softwares.pdf",
  outDir: "pdf",
  pdfOptions: {
    format: "A4",
    displayHeaderFooter: false,
    margin: {
      bottom: 70,
      left: 25,
      right: 25,
      top: 70,
    },
  },
  theme: theme,
  bundler: viteBundler({
    viteOptions: {},
    vuePluginOptions: {},
  }),
});
