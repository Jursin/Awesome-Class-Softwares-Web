import { defineThemeConfig } from 'vuepress-theme-plume'
import navbar from './navbar'

const currentYear = new Date().getFullYear()
export default defineThemeConfig({
  logo: '/icon/ACS.png',

  appearance: true,  // 配置 深色模式

  social: [
    { icon: 'github', link: 'https://github.com/Jursin/Awesome-Class-Softwares-Web' },
    {
      icon: {
        svg: '<svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 20 20"><g fill="currentColor"><path d="M 12.566406 3.507812 C 12.566406 3.507812 11.976562 3.175781 11.398438 3.339844 L 1.933594 6.023438 L 4.449219 1.535156 C 4.449219 1.535156 4.816406 0.800781 6.242188 0.832031 L 14.148438 0.851562 L 12.632812 3.550781 Z M 15.699219 1.691406 L 14.089844 4.558594 C 14.089844 4.558594 14.492188 4.933594 14.609375 5.367188 L 16.015625 10.867188 L 10.582031 12.550781 L 12.542969 9.359375 L 11.933594 6.949219 C 11.933594 6.949219 11.617188 6 10.683594 6.109375 C 10.667969 6.109375 10.648438 6.109375 10.640625 6.109375 C 9.675781 6.257812 0.734375 8.800781 0.734375 8.800781 C 0.734375 8.800781 0.0351562 9 0 9.714844 C 0 9.714844 -0.015625 10.492188 0.441406 11.199219 L 4.410156 18.160156 L 5.867188 15.558594 C 5.867188 15.558594 5.410156 15.132812 5.359375 14.917969 L 3.757812 9.074219 L 9.132812 7.507812 C 9.132812 7.507812 9.425781 7.359375 9.542969 7.617188 L 7.199219 10.617188 L 8 13.300781 C 8 13.300781 8.351562 13.890625 9.167969 13.890625 L 19.492188 11 C 19.492188 11 20.175781 10.867188 19.984375 9.808594 C 19.984375 9.808594 20.015625 9.417969 19.691406 8.765625 L 15.714844 1.675781 Z M 15.699219 1.691406 "/><path d="M 7.25 16.410156 C 7.25 16.410156 7.800781 16.648438 8.160156 16.632812 L 18.132812 13.832031 L 15.839844 17.917969 C 15.839844 17.917969 15.285156 19.058594 13.957031 19.058594 L 5.707031 19.175781 L 7.25 16.417969 Z M 7.25 16.410156 "/></g></svg>',
        name: 'STCN'
        },
      link: 'https://forum.smart-teach.cn/d/232'
    },
  ],
  navbarSocialInclude: ['github', 'STCN'], // 允许显示在导航栏的 social 社交链接
  // aside: true, // 页内侧边栏， 默认显示在右侧
  // outline: [2, 3], // 页内大纲， 默认显示 h2, h3

  /**
   * 文章版权信息
   * @see https://theme-plume.vuejs.press/guide/features/copyright/
   */
  // copyright: true,

  // prevPage: true,   // 是否启用上一页链接
  // nextPage: true,   // 是否启用下一页链接
  // createTime: true, // 是否显示文章创建时间

  /* 站点页脚 */
  footer: {
    message: `Powered by <a target="_blank" href="https://v2.vuepress.vuejs.org/">VuePress</a> & <a target="_blank" href="https://theme-plume.vuejs.press">vuepress-theme-plume</a> | Copyright © 2025-${currentYear} Jursin`,
    copyright: '<img src="/icon/miit.png" width="14" height="14" style="margin-right: 5px; display: inline-block; vertical-align: middle;"><a href="http://beian.miit.gov.cn/" target="_blank" >鄂ICP备2025157296号-1</a> | <img src="/icon/mps.png" width="14" height="14" style="margin-right: 5px; display: inline-block; vertical-align: middle;"><a href="https://beian.mps.gov.cn/#/query/webSearch" target="_blank">鄂公网安备42100302000228号</a>',
  },

  navbar,

  /**
   * 公告板
   * @see https://theme-plume.vuejs.press/guide/features/bulletin/
   */
  // bulletin: {
  //   layout: 'top-right',
  //   contentType: 'markdown',
  //   title: '公告板标题',
  //   content: '公告板内容',
  // },

  /* 过渡动画 @see https://theme-plume.vuejs.press/config/basic/#transition */
  transition: {
  //   page: true,        // 启用 页面间跳转过渡动画
  //   postList: true,    // 启用 博客文章列表过渡动画
    appearance: 'circle-clip',  // 启用 深色模式切换过渡动画, 或配置过渡动画类型
  },

})
