<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { softwareList, categories as categoryData } from '../data/class/index'

const router = useRouter()

// 响应式数据
const searchQuery = ref('')
const activeCategory = ref('全部')
const softwareData = ref([])
const loading = ref(true)
const layoutMode = ref('default')
const sortMode = ref('default')

// 计算属性
const categories = computed(() => [
  { name: '全部', icon: 'material-symbols:select-all' },
  ...categoryData
])

// 计算每个分类的软件数量
const categoryCounts = computed(() => {
  const counts = { '全部': softwareList.length }
  softwareList.forEach(item => {
    counts[item.category] = (counts[item.category] || 0) + 1
  })
  return counts
})

const filteredSoftware = computed(() => {
  const filtered = softwareData.value.filter(item => {
    const matchesCategory = activeCategory.value === '全部' || item.category === activeCategory.value
    if (!searchQuery.value.trim()) return matchesCategory

    const query = searchQuery.value.toLowerCase().trim()
    return matchesCategory && (
      item.name.toLowerCase().includes(query) || 
      item.description.toLowerCase().includes(query) ||
      item.tags.some(tag => tag.toLowerCase().includes(query)) ||
      item.language.toLowerCase().includes(query)
    )
  })

  if (sortMode.value === 'alpha') {
    const collator = new Intl.Collator('zh-Hans-u-co-pinyin', { numeric: true, sensitivity: 'base' })
    return [...filtered].sort((a, b) => collator.compare(a.name, b.name))
  }

  return filtered
})

// 方法
const setCategory = (category) => {
  activeCategory.value = category
}

const clearFilters = () => {
  searchQuery.value = ''
  activeCategory.value = '全部'
}

const setLayout = (mode) => {
  layoutMode.value = mode
}

const setSort = (mode) => {
  sortMode.value = mode
}

const toggleLayout = () => {
  layoutMode.value = layoutMode.value === 'default' ? 'cozy' : 'default'
}

const toggleSort = () => {
  sortMode.value = sortMode.value === 'default' ? 'alpha' : 'default'
}

const goToDetail = (categorySlug, id) => {
  router.push(`/Class/${categorySlug}/${id}`)
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
          const response = await fetch(`https://api.github.com/repos/${software.repo}`)
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
            const releasesResponse = await fetch(`https://api.github.com/repos/${software.repo}/releases`)
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
            console.warn(`获取 ${software.repo} 的releases信息失败:`, releaseError)
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
          console.warn(`获取 ${software.repo} 数据失败:`, error)
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
      <img src="/icon/ACS.png" alt="ACS" class="home-logo">
      <h1 class="home-title">Awesome-Class-Softwares</h1>
      <p class="home-subtitle">适用于班级一体机的<mark class="vp-mark-visible">优质软件合集</mark>🌟</p>
      <div class="home-controls">
        <input 
          v-model="searchQuery" 
          type="text" 
          placeholder="🔍 搜索软件名称、描述或标签..." 
          class="search-input"
        >
        
        <div class="category-buttons">
          <button 
            v-for="cat in categories" 
            :key="cat.name"
            :class="['category-btn', activeCategory === cat.name ? 'active' : '']"
            @click="setCategory(cat.name)"
          >
            <Icon :name="cat.icon" size="1.1em" />
            {{ cat.name }}
            <span>({{ categoryCounts[cat.name] }})</span>
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
    
    <div v-else>
      <div class="grid-toolbar">
        <div class="toggle-chip layout-toggle" @click="toggleLayout">
          <span :class="['toggle-option', layoutMode === 'default' && 'active']">默认</span>
          <span :class="['toggle-option', layoutMode === 'cozy' && 'active']">宽松</span>
        </div>
        <div class="toggle-chip" @click="toggleSort">
          <span :class="['toggle-option', sortMode === 'default' && 'active']">原顺序</span>
          <span :class="['toggle-option', sortMode === 'alpha' && 'active']">首字母</span>
        </div>
      </div>

      <div :class="['software-grid', layoutMode === 'cozy' ? 'grid-cozy' : 'grid-default']">
        <article 
          v-for="software in filteredSoftware" 
          :key="software.id"
          class="software-card"
          @click="goToDetail(software.categorySlug, software.id)"
        >
          <div class="card-badges" v-if="software.badge && software.badge.length > 0">
            <Badge 
              v-for="(badge, index) in software.badge" 
              :key="index"
              :type="badge.type"
              :text="badge.text"
              :color="badge.color"
              :bg-color="badge.bgColor"
              :border-color="badge.borderColor"
            />
          </div>
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
              <Icon name="material-symbols:update-rounded" size="1.3em" />
              更新于: {{ formatDate(software.lastUpdated) }}
            </span>
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
  </div>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Google+Sans+Code:ital,wght@0,300..800;1,300..800&amp;family=Google+Sans+Flex:opsz,wght@6..144,1..1000&amp;display=swap" rel="stylesheet">
</template>

<style scoped>
/* 主容器与头部 */
.software-home {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 1.5rem;
  background: var(--vp-c-bg);
}

.home-header {
  text-align: center;
  padding-top: 2rem 0;
  background: var(--vp-c-bg);
}

.home-logo {
  display: block;
  margin: 0 auto 0;
  width: 200px;
  height: auto;
}

.home-title {
  font-family: 'Google Sans Code', sans-serif;
  font-size: 2.5rem;
  font-weight: 500;
  line-height: 2rem;
  padding-bottom: 10px;
  color: var(--vp-c-text-1);
}

.home-subtitle {
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 1.5;
  color: var(--vp-c-text-2);
  margin-bottom: 1rem;
}

/* 搜索与分类 */
.home-controls {
  max-width: 1200px;
  margin: 0 auto;
}

.search-input {
  width: 100%;
  max-width: 600px;
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

.category-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
  padding-top: 1rem;
  padding-bottom: 1.5rem;
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
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex: 0 1 160px;
  justify-content: center;
  text-align: center;
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

/* 状态与空态 */
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

.clear-filters-btn {
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background: var(--vp-c-brand-1);
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

/* 工具栏与切换 */
.grid-toolbar {
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  align-items: center;
  margin-bottom: 0.75rem;
}

.toggle-chip {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.25rem;
  border: 1px solid var(--vp-c-border);
  background: var(--vp-c-bg);
  border-radius: 999px;
  cursor: pointer;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.toggle-chip:hover {
  border-color: var(--vp-c-brand-1);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.06);
}

.toggle-option {
  padding: 0.35rem 0.9rem;
  border-radius: 999px;
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
  transition: all 0.2s ease;
}

.toggle-option.active {
  background: var(--vp-c-brand-1);
  color: #fff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  animation: toggle-activate 0.22s ease;
}

@keyframes toggle-activate {
  from {
    transform: translateY(4px) scale(0.97);
    opacity: 0.5;
  }
  to {
    transform: translateY(0) scale(1);
    opacity: 1;
  }
}

/* 软件网格与卡片 */
.software-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.grid-cozy {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

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
  position: relative;
}

.card-badges {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  display: flex;
  gap: 0.25rem;
  flex-wrap: wrap;
  justify-content: flex-end;
  z-index: 1;
}

.card-badges .vp-badge {
  font-size: 13px !important;
  padding: 2px 8px !important;
}

.software-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  border-color: var(--vp-c-brand-1);
}

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

.github-stats {
  display: flex;
  gap: 1rem;
}

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

.software-description {
  color: var(--vp-c-text-2);
  margin: 0;
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  line-clamp: 2;
  overflow: hidden;
}

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
  border-radius: 8px;
  font-size: 0.75rem;
  font-weight: 500;
}

/* 响应式 */
@media (max-width: 768px) {
  .layout-toggle {
    display: none;
  }

  .software-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .home-title {
    font-size: 28px;
  }

  .home-subtitle {
    font-size: 20px;
  }
  
  .category-buttons {
    justify-content: flex-start;
    overflow-x: auto;
    padding-bottom: 0.5rem;
  }
}
</style>