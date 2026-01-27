---
title: 工具
pageLayout: page
---

<script setup>
import { NAV_DATA } from '/.vuepress/theme/data/tools'
</script>

<NavLinks v-for="{title, items} in NAV_DATA" :title="title" :items="items"/>