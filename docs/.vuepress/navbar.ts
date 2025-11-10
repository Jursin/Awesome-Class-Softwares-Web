import { defineNavbarConfig } from 'vuepress-theme-plume'

export default defineNavbarConfig([
  { text: '首页', icon: 'octicon:home-16', link: '/' },
  { text: '关于', icon: 'octicon:info-16', link: '/about' },
  { text: '友链', icon: 'octicon:link-16', link: '/friends' },
])
