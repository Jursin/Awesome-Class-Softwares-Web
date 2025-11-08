<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { softwareList } from '../data/software'

const router = useRouter()

// 响应式数据
const searchQuery = ref('')
const activeCategory = ref('全部')
const softwareData = ref([])
const loading = ref(true)

// 计算属性
const categories = computed(() => ['全部', ...new Set(softwareList.map(item => item.category))])

const filteredSoftware = computed(() => {
  return softwareData.value.filter(item => {
    // 分类筛选
    const matchesCategory = activeCategory.value === '全部' || item.category === activeCategory.value
    
    // 搜索筛选
    if (!searchQuery.value.trim()) return matchesCategory
    
    const query = searchQuery.value.toLowerCase().trim()
    return matchesCategory && (
      item.name.toLowerCase().includes(query) || 
      item.description.toLowerCase().includes(query) ||
      item.tags.some(tag => tag.toLowerCase().includes(query)) ||
      item.language.toLowerCase().includes(query)
    )
  })
})

// 方法
const setCategory = (category) => {
  activeCategory.value = category
}

const clearFilters = () => {
  searchQuery.value = ''
  activeCategory.value = '全部'
}

const goToDetail = (id) => {
  router.push(`/software/${id}`)
}

const formatDate = (dateString) => {
  try {
    return new Date(dateString).toLocaleDateString('zh-CN')
  } catch {
    return dateString
  }
}

const formatNumber = (num) => {
  if (!num) return '0'
  if (num >= 1000) return (num / 1000).toFixed(1) + 'k'
  return num.toString()
}

const handleImageError = (event) => {
  event.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHZpZXdCb3g9IjAgMCA1MCA1MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBmaWxsPSIjRjBGMEYwIi8+CjxwYXRoIGQ9Ik0yNSAxNkMyOC44NjYgMTYgMzIgMTkuMTM0IDMyIDIzQzMyIDI2Ljg2NiAyOC44NjYgMzAgMjUgMzBDMjEuMTM0IDMwIDE4IDI2Ljg2NiAxOCAyM0MxOCAxOS4xMzQgMjEuMTM0IDE2IDI1IDE2WiIgZmlsbD0iIzk5OTk5OSIvPgo8cGF0aCBkPSJNMTUgMzRDMzUgMzQgMzUgMzQgMzUgMzRDMzUgMzQgMzUgMzYgMzUgMzhDMTUgMzggMTUgMzggMTUgMzhDMTUgMzggMTUgMzYgMTUgMzRaIiBmaWxsPSIjOTk5OTk5Ii8+Cjwvc3ZnPgo='
}

// 初始化
onMounted(async () => {
  loading.value = true
  try {
    // 为每个软件获取GitHub数据
    softwareData.value = await Promise.all(
      softwareList.map(async (software) => {
        try {
          const response = await fetch(`https://api.github.com/repos/${software.githubRepo}`)
          const data = await response.json()
          
          // 从GitHub API获取所需字段
          const githubData = {
            stars: data.stargazers_count || 0,
            issues: data.open_issues_count || 0,
            language: data.language || '',
            license: data.license?.spdx_id || data.license?.name || '',
            createdAt: data.created_at || '',
            updatedAt: data.updated_at || ''
          }
          
          // 计算所有releases的所有assets下载量总和
          let downloads = software.downloads || '未知'
          
          // 获取所有releases信息并计算总下载量
          try {
            const releasesResponse = await fetch(`https://api.github.com/repos/${software.githubRepo}/releases`)
            const releasesData = await releasesResponse.json()
            
            if (releasesData && Array.isArray(releasesData) && releasesData.length > 0) {
              // 统计所有releases中所有assets的下载量总和
              let totalDownloads = 0;
              
              for (const release of releasesData) {
                if (release && release.assets && Array.isArray(release.assets)) {
                  for (const asset of release.assets) {
                    totalDownloads += asset.download_count || 0;
                  }
                }
              }
              
              if (totalDownloads > 0) {
                downloads = formatNumber(totalDownloads)
              } else if (githubData.stars > 0) {
                // 如果没有下载数据，基于star数估算
                downloads = formatNumber(Math.floor(githubData.stars * 1.5))
              }
            }
          } catch (releaseError) {
            console.warn(`获取 ${software.githubRepo} 的releases信息失败:`, releaseError)
          }
          
          return { 
            ...software, 
            githubData,
            // 使用API获取的字段覆盖本地数据
            language: githubData.language || software.language,
            license: githubData.license || software.license,
            createdAt: githubData.createdAt || software.createdAt,
            lastUpdated: githubData.updatedAt || software.lastUpdated,
            downloads
          }
        } catch (error) {
          console.warn(`获取 ${software.githubRepo} 数据失败:`, error)
          return { ...software, githubData: { stars: 0, issues: 0, language: '', license: '', createdAt: '', updatedAt: '' } }
        }
      })
    )
  } catch (error) {
    console.error('初始化失败:', error)
    softwareData.value = softwareList // 使用基础数据
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <div class="software-home">
    <header class="home-header">
      <img src="/Aiwb.png" alt="Awesome Iwb" class="home-logo">
      <h1 class="home-title">Awesome Iwb</h1>
      <p class="home-subtitle">一站式软件推荐清单和实用知识手册，助你在新学期快速上手班级一体机新玩法！<br/>为广大电教倾情撰写，让班级大屏更好用！<br/>🌟 风带来故事的种子，时间使之发芽 🌟</p>
      <div class="home-controls">
        <input 
          v-model="searchQuery" 
          type="text" 
          placeholder="🔍 搜索软件名称、描述或标签..." 
          class="search-input"
        >
        
        <div class="category-buttons">
          <button 
            v-for="category in categories" 
            :key="category"
            :class="['category-btn', activeCategory === category ? 'active' : '']"
            @click="setCategory(category)"
          >
            {{ category }}
          </button>
        </div>
      </div>
    </header>

    <div v-if="loading" class="loading-state">
      <div class="loading-spinner"></div>
      <p>正在加载软件数据...</p>
    </div>
    
    <div v-else-if="filteredSoftware.length === 0" class="empty-state">
      <p>😔 没有找到匹配的软件</p>
      <button @click="clearFilters" class="clear-filters-btn">清除筛选条件</button>
    </div>
    
    <div v-else class="software-grid">
      <article 
        v-for="software in filteredSoftware" 
        :key="software.id"
        class="software-card"
        @click="goToDetail(software.id)"
      >
        <div class="card-header">
          <img :src="software.icon" :alt="software.name" class="software-icon" @error="handleImageError">
          <div class="card-title-section">
            <h3 class="software-name">{{ software.name }}</h3>
            <div class="github-stats">
              <span class="stat-item">
                <Icon name="octicon:star-fill-16" size="1.3em" color="#E3B341" /> 
                {{ formatNumber(software.githubData?.stars) }}
              </span>
              <span class="stat-item">
                <Icon name="octicon:issue-opened-16" size="1.3em" color="#3FB950" />
                {{ formatNumber(software.githubData?.issues) }}
              </span>
              <span class="stat-item">
                <Icon name="octicon:download-16" size="1.3em" color="#4493F8" />
                {{ software.downloads }}
              </span>
            </div>
          </div>
        </div>
        
        <p class="software-description">{{ software.description }}</p>
        
        <div class="software-meta">
          <span class="meta-item">
            <Icon name="octicon:code-16" size="1.3em" />
            {{ software.language }}
          </span>
          <span class="meta-item">
            <Icon name="lucide:scale" size="1.3em" />
            {{ software.license }}
          </span>
          <span class="meta-item">
            更新于: {{ formatDate(software.lastUpdated) }}
          </span>
          <span class="tag">{{ software.category }}</span>
        </div>
        
        <div class="software-tags">
          <span 
            v-for="tag in software.tags" 
            :key="tag"
            class="tag"
          >
            {{ tag }}
          </span>
        </div>
      </article>
    </div>
  </div>
</template>

<style scoped>
/* 主容器样式 */
.software-home {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 1.5rem;
  background: var(--vp-c-bg);
}

/* 页面头部样式 */
.home-header {
  text-align: center;
  padding: 2rem 0;
  background: var(--vp-c-bg);
}

.home-logo {
  display: block;
  margin: 0 auto 1rem;
  width: 80px;
  height: auto;
}

.home-title {
  font-size: 2.5rem;
  color: var(--vp-c-brand-1);
  padding-bottom: 1rem;
}

.home-subtitle {
  font-size: 1.2rem;
  color: var(--vp-c-text-3);
  margin-bottom: 2rem;
}

/* 搜索和过滤样式 */
.home-controls {
  max-width: 800px;
  margin: 0 auto;
}

.search-input {
  width: 100%;
  max-width: 500px;
  padding: 0.75rem 1rem;
  border: 2px solid var(--vp-c-border);
  border-radius: 25px;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  font-size: 1rem;
  transition: all 0.3s ease;
}

.search-input:focus {
  outline: none;
  border-color: var(--vp-c-brand-1);
  box-shadow: 0 0 0 3px var(--vp-c-brand-soft);
}

/* 类别按钮样式 */
.category-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
  padding-top: 1rem;
}

.category-btn {
  padding: 0.5rem 1rem;
  border-color: var(--vp-button-alt-border);
  border-radius: 20px;
  background: var(--vp-button-alt-bg);
  color: var(--vp-button-alt-text);
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.9rem;
}

.category-btn:hover {
  border-color: var(--vp-c-brand-1);
  transform: translateY(-1px);
}

.category-btn.active {
  background: var(--vp-c-brand-1);
  color: white;
  border-color: var(--vp-c-brand-1);
}

.category-btn.active:hover {
  background: var(--vp-c-brand-3);
  border-color: var(--vp-c-brand-3);
}

/* 状态显示样式 */
.loading-state {
  text-align: center;
  padding: 4rem 0;
}

.loading-spinner {
  width: 40px;
  height: 40px;
  border: 4px solid var(--vp-c-border);
  border-left: 4px solid var(--vp-c-brand-1);
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: 0 auto 1rem;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* 清除筛选按钮 */
.clear-filters-btn {
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background: var(--vp-c-brand-1);
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

/* 软件卡片网格 */
.software-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

/* 软件卡片样式 */
.software-card {
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-border);
  border-radius: 12px;
  padding: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.software-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  border-color: var(--vp-c-brand-1);
}

/* 卡片头部样式 */
.card-header {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
}

.software-icon {
  width: 50px;
  height: 50px;
  border-radius: 10px;
  object-fit: cover;
  flex-shrink: 0;
}

.card-title-section {
  flex: 1;
  min-width: 0;
}

.software-name {
  font-size: 1.3rem;
  margin: 0 0 0.5rem 0;
  color: var(--vp-c-text-1);
  line-height: 1.3;
}

/* 统计信息样式 */
.github-stats {
  display: flex;
  gap: 1rem;
}

/* 统计项目和元数据项目样式 */
.stat-item,
.meta-item {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  color: var(--vp-c-text-3);
}

.stat-item {
  font-size: 0.85rem;
}

.meta-item {
  font-size: 0.8rem;
}

.stat-icon,
.meta-icon {
  font-size: 0.9rem;
}

/* 软件描述样式 */
.software-description {
  color: var(--vp-c-text-2);
  margin: 0;
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* 元数据和标签样式 */
.software-meta,
.software-tags {
  display: flex;
  flex-wrap: wrap;
}

.software-meta {
  gap: 1rem;
}

.software-tags {
  gap: 0.5rem;
}

.tag {
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-text-2);
  padding: 0.2rem 0.6rem;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 500;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .software-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .home-title {
    font-size: 2rem;
  }
  
  .category-buttons {
    justify-content: flex-start;
    overflow-x: auto;
    padding-bottom: 0.5rem;
  }
}
</style>