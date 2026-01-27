import { defineClientConfig } from 'vuepress/client'
import Home from './theme/components/Home.vue'
import Detail from './theme/components/Detail.vue'
import NavLink from './theme/components/NavLink.vue'
import NavLinks from './theme/components/NavLinks.vue'

import './theme/styles/custom.css'

export default defineClientConfig({
  enhance({ app }) {
    app.component('Home', Home)
    app.component('Detail', Detail)
    app.component('NavLink', NavLink)
    app.component('NavLinks', NavLinks)
  },
})
