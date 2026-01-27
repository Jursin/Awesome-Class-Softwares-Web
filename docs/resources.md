---
title: 资源网站
pageLayout: page
---

<script setup>
import { NAV_DATA } from '/.vuepress/theme/data/resources'
</script>

<NavLinks v-for="{title, items} in NAV_DATA" :title="title" :items="items"/>