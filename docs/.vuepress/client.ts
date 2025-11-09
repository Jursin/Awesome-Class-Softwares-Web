import { defineClientConfig } from 'vuepress/client'
import Home from './theme/components/Home.vue'
import Detail from './theme/components/Detail.vue'

import './theme/styles/index.css'
import './theme/styles/custom.css'

export default defineClientConfig({
  enhance({ app }) {
    app.component('Home', Home)
    app.component('Detail', Detail)
  },
})
