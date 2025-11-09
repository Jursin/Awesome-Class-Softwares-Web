/**
 * @see https://theme-plume.vuejs.press/config/navigation/ 查看文档了解配置详情
 *
 * Navbar 配置文件，它在 `.vuepress/plume.config.ts` 中被导入。
 */

import { defineNavbarConfig } from 'vuepress-theme-plume'

export default defineNavbarConfig([
  { text: '首页', icon: 'octicon:home-16', link: '/' },
  { text: '问题', icon: 'octicon:question-16', link: '/faq/' },
  { text: '关于', icon: 'octicon:info-16', link: '/about' },
  { text: '友链', icon: 'octicon:link-16', link: '/friends' },
])
