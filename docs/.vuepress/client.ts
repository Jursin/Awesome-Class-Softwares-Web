import { defineClientConfig } from 'vuepress/client'
import SoftwareHome from './theme/components/SoftwareHome.vue'
import SoftwareDetail from './theme/components/SoftwareDetail.vue'

import './theme/styles/index.css'
import './theme/styles/custom.css'

export default defineClientConfig({
  enhance({ app }) {
    app.component('SoftwareHome', SoftwareHome)
    app.component('SoftwareDetail', SoftwareDetail)
  },
})
