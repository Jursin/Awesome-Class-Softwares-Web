import { defineNavbarConfig } from 'vuepress-theme-plume'

export default defineNavbarConfig([
  { text: '首页', icon: 'octicon:home-16', link: '/' },
  { text: '工具', icon: "mdi:tools", link: '/tools' },
  { text: '资源网站', icon: "uis:layer-group", link: '/resources' },
  { text: '贡献指南', icon: 'octicon:git-branch-16', link: '/contributing' },
  { text: '友情链接', icon: 'octicon:link-16', link: '/friends' }
])
