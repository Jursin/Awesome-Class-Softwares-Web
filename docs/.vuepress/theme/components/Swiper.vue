<script setup>
import { ref, computed } from 'vue'

// 定义组件的属性
const props = defineProps({
  items: {
    type: Array,
    required: true,
    default: () => []
  },
  autoplay: {
    type: Boolean,
    default: true
  },
  interval: {
    type: Number,
    default: 3000
  }
})

// 当前活动的索引
const currentIndex = ref(0)

// 计算总项目数
const itemsCount = computed(() => props.items.length)

// 计算当前项
const currentItem = computed(() => {
  return props.items[currentIndex.value] || ''
})

// 下一张图片
const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % itemsCount.value
}

// 上一张图片
const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + itemsCount.value) % itemsCount.value
}

// 跳转到指定索引
const goToSlide = (index) => {
  if (index >= 0 && index < itemsCount.value) {
    currentIndex.value = index
  }
}

// 设置自动播放
let autoplayTimer = null

const setupAutoplay = () => {
  if (props.autoplay && itemsCount.value > 1) {
    autoplayTimer = setInterval(() => {
      nextSlide()
    }, props.interval)
  }
}

const clearAutoplay = () => {
  if (autoplayTimer) {
    clearInterval(autoplayTimer)
    autoplayTimer = null
  }
}

// 鼠标悬停时暂停自动播放
const handleMouseEnter = () => {
  clearAutoplay()
}

// 鼠标离开时恢复自动播放
const handleMouseLeave = () => {
  setupAutoplay()
}

// 初始化时设置自动播放
setupAutoplay()

// 组件卸载时清理定时器
import { onUnmounted } from 'vue'
onUnmounted(() => {
  clearAutoplay()
})
</script>

<template>
  <div 
    class="swiper-container"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <!-- 轮播内容 -->
    <div class="swiper-wrapper" v-if="itemsCount > 0">
      <!-- 当前展示的图片 -->
      <div class="swiper-slide active">
        <img 
          :src="currentItem" 
          alt="轮播图片" 
          class="swiper-image"
          loading="lazy"
        />
      </div>
    </div>

    <!-- 导航按钮 -->
    <button 
      v-if="itemsCount > 1" 
      class="swiper-nav swiper-prev" 
      @click="prevSlide"
      aria-label="上一张"
    >
      <Icon name="mingcute:left-fill" size="2em" />
    </button>
    <button 
      v-if="itemsCount > 1" 
      class="swiper-nav swiper-next" 
      @click="nextSlide"
      aria-label="下一张"
    >
      <Icon name="mingcute:right-fill" size="2em" />
    </button>

    <!-- 指示器 -->
    <div class="swiper-pagination" v-if="itemsCount > 1">
      <span 
        v-for="(item, index) in items" 
        :key="index"
        class="pagination-dot"
        :class="{ active: index === currentIndex }"
        @click="goToSlide(index)"
        :aria-label="`跳转到第${index + 1}张图片`"
      ></span>
    </div>

    <!-- 计数器 -->
    <div class="swiper-counter" v-if="itemsCount > 0">
      {{ currentIndex + 1 }} / {{ itemsCount }}
    </div>
  </div>
</template>

<style scoped>
.swiper-container {
  position: relative;
  width: 100%;
  overflow: hidden;
  background: transparent;
  border-radius: 8px;
  border: 1px solid var(--vp-c-border);
  padding-bottom: 56.25%; /* 16:9 比例 (9/16 = 0.5625) */
  height: 0;
}

.swiper-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.swiper-slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.swiper-slide.active {
  opacity: 1;
}

.swiper-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
  background: transparent;
}

.swiper-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease;
  z-index: 10;
}

.swiper-nav:hover {
  background: rgba(0, 0, 0, 0.7);
}

.swiper-prev {
  left: 10px;
}

.swiper-next {
  right: 10px;
}

.nav-icon {
  font-size: 24px;
  font-weight: bold;
}

.swiper-pagination {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
  z-index: 10;
}

.pagination-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  transition: all 0.3s ease;
}

.pagination-dot.active {
  background: white;
  width: 24px;
  border-radius: 4px;
}

.swiper-counter {
  position: absolute;
  bottom: 10px;
  right: 10px;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  z-index: 10;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .swiper-nav {
    width: 30px;
    height: 30px;
  }
  
  .nav-icon {
    font-size: 18px;
  }
  
  .swiper-pagination {
    gap: 6px;
  }
  
  .pagination-dot {
    width: 6px;
    height: 6px;
  }
  
  .pagination-dot.active {
    width: 20px;
  }
}
</style>