<script setup lang="ts">
import { computed } from 'vue'


import { NavLinks } from '../data/types'

const props = defineProps<{
  noIcon?: boolean
  icon?: NavLinks['icon']
  iconBgColor?: NavLinks['iconBgColor']
  badge?: NavLinks['badge']
  title?: NavLinks['title']
  desc?: NavLinks['desc']
  link: NavLinks['link']
}>()

const svg = computed(() => {
  if (typeof props.icon === 'object') return props.icon.svg
  return ''
})

const formatBadge = computed(() => {
  if (typeof props.badge === 'string') {
    return { text: props.badge, type: 'info' }
  }
  return props.badge
})
</script>

<template>
  <a v-if="link" class="m-nav-link" :href="link" target="_blank" rel="noreferrer">
    <article class="box" :class="{ 'has-badge': formatBadge }">
      <div class="box-header">
        <template v-if="!noIcon">
          <div v-if="svg" class="icon" :style="iconBgColor ? { backgroundColor: iconBgColor } : {}" v-html="svg"></div>
          <div v-else-if="icon && typeof icon === 'string'" class="icon" :style="iconBgColor ? { backgroundColor: iconBgColor } : {}">
            <img :src="icon" :alt="title" onerror="this.parentElement.style.display='none'" />
          </div>
        </template>
        <div class="title-wrapper">
          <h5 v-if="title" class="title" :class="{ 'no-icon': noIcon }">
            {{ title }}
          </h5>
          <p v-if="desc" class="desc">{{ desc }}</p>
        </div>
      </div>
      <Badge v-if="formatBadge" class="badge" :type="formatBadge.type" :text="formatBadge.text" />
    </article>
  </a>
</template>

<style scoped>
.m-nav-link {
  --m-nav-icon-box-size: 58px;
  --m-nav-icon-size: 45px;
  --m-nav-box-gap: 20px;

  display: block;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  height: 100%;
  background-color: var(--vp-c-bg);
  transition: all 0.25s;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  text-decoration: none !important;
}

.m-nav-link:hover {
  box-shadow: var(--vp-shadow-2);
  border-color: var(--vp-c-brand-2);
  background-color: var(--vp-c-bg-soft);
  transform: translateY(-2px);
}

.m-nav-link .box {
  display: flex;
  flex-direction: column;
  position: relative;
  padding: var(--m-nav-box-gap);
  height: 100%;
  color: var(--vp-c-text-1);
}

.m-nav-link .box .has-badge {
  padding-top: calc(var(--m-nav-box-gap) + 2px);
}

.m-nav-link .box-header {
  display: flex;
  align-items: center;
  min-height: var(--m-nav-icon-box-size);
}

.m-nav-link .icon {
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: calc(var(--m-nav-box-gap) - 2px);
  border-radius: 8px;
  width: var(--m-nav-icon-box-size);
  height: var(--m-nav-icon-box-size);
  font-size: var(--m-nav-icon-size);
  background-color: var(--vp-c-bg-alt);
  transition: all 0.25s;
}

.m-nav-link:hover .icon {
  background-color: var(--vp-c-bg-soft);
}

.m-nav-link .icon svg {
  width: var(--m-nav-icon-size);
  fill: currentColor;
}

.m-nav-link .icon img {
  border-radius: 6px;
  width: var(--m-nav-icon-size);
}

.m-nav-link .title-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1;
  min-height: var(--m-nav-icon-box-size);
}

.m-nav-link .title {
  white-space: normal;
  word-wrap: break-word;
  font-size: 18px;
  font-weight: 600;
  color: var(--vp-c-text-1);
  text-decoration: none !important;
  margin: 0;
  line-height: 1.4;
}

.m-nav-link .badge {
  position: absolute;
  top: 2px;
  right: 0;
  transform: scale(0.95);
}

.m-nav-link .desc {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  margin: 4px 0 0;
  line-height: 1.5;
  font-size: 14px;
  color: var(--vp-c-text-2);
  overflow: hidden;
  text-overflow: ellipsis;
}

@media (max-width: 960px) {
  .m-nav-link {
    --m-nav-icon-box-size: 60px;
    --m-nav-icon-size: 60px;
    --m-nav-box-gap: 15px;
  }

  .m-nav-link .title {
    font-size: 18px;
  }
}
</style>
