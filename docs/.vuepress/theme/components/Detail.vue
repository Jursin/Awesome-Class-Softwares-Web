<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { softwareList } from '../data/software'
import Swiper from './Swiper.vue'

const route = useRoute()
const router = useRouter()

// 响应式数据
const software = ref(null)
const loading = ref(true)

// 计算属性
const softwareId = computed(() => {
  const pathSegments = route.path.split('/')
  let id = pathSegments[pathSegments.length - 1]
  if (id.endsWith('.html')) {
    id = id.slice(0, -5)
  }
  return id
})

// 方法
const goBack = () => {
  router.back()
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
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'k'
  }
  return num.toString()
}

const handleImageError = (event) => {
  event.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSIjRjBGMEYwIi8+CjxwYXRoIGQ9Ik01MCAzMkM2MC40ODUzIDMyIDY5IDQwLjUxNDcgNjkgNTFDNjkgNjEuNDg1MyA2MC40ODUzIDcwIDUwIDcwQzM5LjUxNDcgNzAgMzEgNjEuNDg1MyAzMSA1MUMzMSA0MC41MTQ3IDM5LjUxNDcgMzIgNTAgMzJaIiBmaWxsPSIjOTk5OTk5Ii8+CjxwYXRoIGQ9Ik0zMCA2OEM3MCA2OCA3MCA2OCA3MCA2OEM3MCA2OCA3MCA3MiA3MCA3NkMzMCA3NiAzMCA3NiAzMCA3NkMzMCA3NiAzMCA3MiAzMCA2OFoiIGZpbGw9IiM5OTk5OTkiLz4KPC9zdmc+Cg=='
}

const getLanguageColor = (language) => {
  const colors = {
    'JavaScript': '#f1e05a',
    'TypeScript': '#2b7489',
    'Python': '#3572A5',
    'Java': '#b07219',
    'Go': '#00ADD8',
    'Rust': '#dea584',
    'C++': '#f34b7d',
    'C#': '#178600',
    'PHP': '#777bb3',
    'HTML': '#e34c26',
    'CSS': '#563d7c',
    'Vue': '#41b883',
    'React': '#61dafb'
  }
  return colors[language] || '#cccccc'
}

const getTagSize = (tag) => {
  const baseSize = 14
  const tagLength = tag.length
  if (tagLength <= 2) return `${baseSize}px`
  if (tagLength <= 4) return `${baseSize - 1}px`
  return `${baseSize - 2}px`
}

// 获取作者GitHub头像
const getAuthorAvatar = (githubRepo, author) => {
  // 尝试从githubRepo中提取用户名
  if (githubRepo && githubRepo.includes('/')) {
    const username = githubRepo.split('/')[0]
    return `https://github.com/${username}.png?size=40`
  }
  // 如果无法从githubRepo中提取，使用默认头像
  return `https://ui-avatars.com/api/?name=${encodeURIComponent(author || 'Unknown')}&background=random&size=40`
}

// 从GitHub API获取仓库详细信息
const fetchRepoDetail = async (repoName) => {
  try {
    // 获取仓库基本信息
    const response = await fetch(`https://api.github.com/repos/${repoName}`)
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
    let downloads = '未知'

    // 获取所有releases信息并计算总下载量
    try {
      const releasesResponse = await fetch(`https://api.github.com/repos/${repoName}/releases`)
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
      console.warn(`获取 ${repoName} 的releases信息失败:`, releaseError)
    }

    return {
      githubData,
      language: githubData.language,
      license: githubData.license,
      createdAt: githubData.createdAt,
      lastUpdated: githubData.updatedAt,
      downloads
    }
  } catch (error) {
    console.warn(`获取 ${repoName} 数据失败:`, error)
    return {
      githubData: { stars: 0, issues: 0, language: '', license: '', createdAt: '', updatedAt: '' },
      language: '',
      license: '',
      createdAt: '',
      lastUpdated: '',
      downloads: '未知'
    }
  }
}

onMounted(async () => {
  // 查找软件数据
  const foundSoftware = softwareList.find(item => item.id === softwareId.value)

  if (foundSoftware) {
    // 设置页面标题
    document.title = `${foundSoftware.name} - 开发者导航站`

    try {
        // 如果有GitHub仓库信息，则从API获取最新数据
        if (foundSoftware.githubRepo) {
          const githubData = await fetchRepoDetail(foundSoftware.githubRepo)
          // 使用API获取的字段覆盖本地数据
          software.value = {
            ...foundSoftware,
            ...githubData
          }
        } else {
          // 如果没有GitHub仓库信息，使用本地数据
          software.value = foundSoftware
        }
      } catch (error) {
        console.error('加载GitHub数据失败:', error)
        // 发生错误时使用本地数据
        software.value = foundSoftware
      } finally {
        loading.value = false
      }
  } else {
    // 添加一个错误信息以便在页面上显示
    software.value = {
        id: softwareId.value,
        name: '软件未找到',
        description: `无法找到ID为"${softwareId.value}"的软件信息。`,
        icon: '',
        githubData: {},
        downloads: '',
        createdAt: '',
        author: '',
        language: '',
        license: '',
        lastUpdated: '',
        category: '',
        features: [],

        website: '',
        downloadUrl: '',
        groupLink: '',
        screenshots: [],
        tags: []
      }
    loading.value = false
  }
})
</script>

<template>
  <div class="software-detail" v-if="software">
    <div class="detail-container">
      <!-- 返回按钮 -->
      <nav class="breadcrumb">
        <button class="back-btn" @click="goBack">
          <Icon name="material-symbols:arrow-back-rounded" size="1em" />
          返回列表
        </button>
        <span class="breadcrumb-separator">/</span>
        <span class="current-page">{{ software.name }}</span>
      </nav>

      <!-- 头部信息 -->
      <header class="detail-header">
        <div class="header-main">
          <img :src="software.icon" :alt="software.name" class="detail-icon" @error="handleImageError">
          <div class="header-content">
            <h1 class="software-title">{{ software.name }}</h1>
            <p class="software-description">{{ software.description }}</p>
          </div>
          <div class="header-stats">
            <div class="stat-badge">
              <span class="stat-title">
                <Icon name="octicon:star-fill-16" size="1.3em" color="#E3B341" /> 星标
              </span>
              <span class="stat-value">{{ formatNumber(software.githubData?.stars) }}</span>
            </div>
            <div class="stat-badge">
              <span class="stat-title">
                <Icon name="octicon:issue-opened-16" size="1.3em" color="#3FB950" /> 议题
              </span>
              <span class="stat-value">{{ formatNumber(software.githubData?.issues) }}</span>
            </div>
            <div class="stat-badge">
              <span class="stat-title">
                <Icon name="octicon:download-16" size="1.3em" color="#4493F8" /> 下载量
              </span>
              <span class="stat-value">{{ software.downloads }}</span>
            </div>
            <div class="stat-badge">
              <span class="stat-title">
                <Icon name="octicon:code-16" size="1.3em" /> 语言
              </span>
              <span class="stat-value language-tag" style="display: flex; align-items: center; gap: 4px;">
                <span class="language-dot" :style="{ backgroundColor: getLanguageColor(software.language) }"></span>
                {{ software.language }}
              </span>
            </div>
          </div>
        </div>
      </header>

      <!-- 主要内容区域 -->
      <div class="detail-content">
        <!-- 左侧主要内容 -->
        <main class="main-content">
          <!-- 项目信息卡片 -->
          <section class="info-card">
            <h2 class="section-title">
              <Icon name="codicon:github-project" size="1em" />
              项目信息
            </h2>
            <div class="info-grid">
              <div class="info-item">
                <label class="info-label">
                  <Icon name="octicon:clock-16" size="1em" /> 创建日期
                </label>
                <span class="info-value">{{ formatDate(software.createdAt) }}</span>
              </div>
              <div class="info-item">
                <label class="info-label">
                  <Icon name="material-symbols:update-rounded" size="1em" /> 上次更新
                </label>
                <span class="info-value">{{ formatDate(software.lastUpdated) }}</span>
              </div>
              <div class="info-item">
                <label class="info-label">
                  <Icon name="octicon:person-16" size="1em" /> 作者
                </label>
                <div class="author-info">
                  <img :src="software.avatar || getAuthorAvatar(software.githubRepo, software.author)"
                    :alt="software.author" class="author-avatar" />
                  <span class="info-value">{{ software.author }}</span>
                </div>
              </div>
              <div class="info-item">
                <label class="info-label">
                  <Icon name="lucide:scale" size="1.3em" /> 许可协议
                </label>
                <span class="info-value">{{ software.license }}</span>
              </div>
            </div>
          </section>

          <!-- 软件截图 -->
          <section class="info-card" v-if="software.screenshots && software.screenshots.length > 0">
            <h2 class="section-title">
              <Icon name="mingcute:pic-fill" size="1em" />
              软件截图
              <span class="screenshot-count">({{ software.screenshots.length }})</span>
            </h2>
            <div class="screenshots-container">
              <Swiper :items="software.screenshots" height="400px" />
            </div>
          </section>

          <!-- 简评卡片 -->
          <section class="info-card">
            <h2 class="section-title">
              <Icon name="octicon:list-unordered-16" size="1em" />
              功能简述
            </h2>
            <div class="features-content">
              <ul v-if="software.features && software.features.length > 0" class="features-list">
                <li v-for="(feature, index) in software.features" :key="index" class="feature-item">
                  {{ feature }}
                </li>
              </ul>
              <p v-else>暂无功能描述</p>
            </div>
          </section>
        </main>

        <!-- 右侧边栏 -->
        <aside class="sidebar">
          <!-- 快速链接 -->
          <div class="sidebar-card">
            <h3 class="sidebar-title">
              <Icon name="octicon:link-16" size="1em" />
              快速链接
            </h3>
            <div class="link-buttons">
              <a :href="`https://github.com/${software.githubRepo}`" target="_blank" class="link-btn github">
                <Icon name="octicon:repo-16" size="1em" />
                <span class="link-text">GitHub 仓库</span>
                <Icon name="octicon:arrow-right-16" size="1em" />
              </a>
              <a :href="software.website" target="_blank" class="link-btn website">
                <Icon name="octicon:book-16" size="1em" />
                <span class="link-text">官方文档</span>
                <Icon name="octicon:arrow-right-16" size="1em" />
              </a>
              <a :href="software.downloadUrl" target="_blank" class="link-btn download">
                <Icon name="octicon:download-16" size="1em" />
                <span class="link-text">下载地址</span>
                <Icon name="octicon:arrow-right-16" size="1em" />
              </a>
              <a v-if="software.groupLink" :href="software.groupLink" target="_blank" class="link-btn community">
                <Icon name="octicon:comment-discussion-16" size="1em" />
                <span class="link-text">交流群组</span>
                <Icon name="octicon:arrow-right-16" size="1em" />
              </a>
            </div>
          </div>

          <!-- 分类和标签 -->
          <div class="sidebar-card">
            <!-- 分类信息 -->
            <h3 class="sidebar-title">
              <Icon name="material-symbols:category-outline-rounded" size="1em" />
              分类
            </h3>
            <div class="category-container">
              <span class="tag">{{ software.category }}</span>
            </div>

            <!-- 标签信息 -->
            <h3 class="sidebar-title">
              <Icon name="octicon:tag-16" size="1em" />
              标签
            </h3>
            <div class="tags-cloud">
              <span v-for="tag in software.tags" :key="tag" class="tag" :style="{ fontSize: getTagSize(tag) }">
                {{ tag }}
              </span>
            </div>
          </div>

          <!-- 侧边栏结束 -->
        </aside>
      </div>
    </div>
  </div>

  <!-- 加载状态 -->
  <div v-else-if="loading" class="loading-state">
    <div class="loading-spinner"></div>
    <p>正在加载软件详情...</p>
  </div>

  <!-- 404状态 -->
  <div v-else class="not-found-state">
    <div class="not-found-content">
      <h2>😕 软件未找到</h2>
      <p>抱歉，没有找到对应的软件信息。</p>
      <button @click="goBack" class="back-home-btn">返回首页</button>
    </div>
  </div>
</template>

<style scoped>
.software-detail {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 1rem 2rem;
}

.detail-container {
  width: 100%;
}

/* 面包屑导航 */
.breadcrumb {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 2rem;
  padding: 1rem 0;
  font-size: 0.9rem;
  color: var(--vp-c-text-3);
}

.back-btn {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  background: none;
  border: 1px solid var(--vp-c-border);
  border-radius: 6px;
  padding: 0.5rem 1rem;
  color: var(--vp-c-text-1);
  cursor: pointer;
  transition: all 0.3s ease;
}

.back-btn:hover {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
}

.back-icon {
  font-size: 1.1rem;
}

.breadcrumb-separator {
  font-size: 1.2rem;
  color: var(--vp-c-text-3);
}

.current-page {
  font-size: 1.2rem;
  color: var(--vp-c-text-1);
}

/* 头部区域 */
.detail-header {
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-border);
  border-radius: 16px;
  padding: 2rem;
  margin-bottom: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 2rem;
}

.header-main {
  display: flex;
  gap: 1.5rem;
  flex: 1;
  align-items: center;
}

.detail-icon {
  width: 80px;
  height: 80px;
  border-radius: 12px;
  object-fit: cover;
  flex-shrink: 0;
}

.header-content {
  flex: 1;
  min-width: 0;
}

.software-title {
  font-size: 2.2rem;
  margin: 0 0 0.5rem 0;
  color: var(--vp-c-text-1);
  line-height: 1.2;
}

.software-description {
  font-size: 1.1rem;
  color: var(--vp-c-text-3);
  margin: 0;
  line-height: 1.5;
}

.header-stats {
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
  flex-shrink: 0;
}

.stat-badge {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
}

.stat-title {
  font-size: 1.1rem;
  color: var(--vp-c-text-3);
  display: flex;
  align-items: center;
  gap: 4px;
  padding-bottom: 0.25rem;
}

.stat-value {
  font-size: 1.1rem;
  color: var(--vp-c-text-1);
}

/* 主要内容区域 */
.detail-content {
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 2rem;
}

.main-content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 0;
}

/* 信息卡片 */
.info-card,
.sidebar-card {
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-border);
  border-radius: 12px;
  padding: 1.5rem;
}

.section-title,
.sidebar-title {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--vp-c-text-1);
  margin: 0;
}

.section-title {
  font-size: 1.3rem;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid var(--vp-c-brand-1);
}

.section-icon {
  font-size: 1.2rem;
}

.screenshot-count {
  font-size: 1.1rem;
  color: var(--vp-c-text-3);
  margin-left: 0.25rem;
}

/* 信息网格 */
.info-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 1rem;
}

.info-item {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.author-info {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.author-avatar {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  object-fit: cover;
}

.info-label {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  color: var(--vp-c-text-3);
  font-weight: 500;
  text-align: center;
  padding-bottom: 0.25rem;
}

.info-value {
  font-size: 1.2rem;
  color: var(--vp-c-text-1);
  text-align: center;
}

.language-tag {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.language-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  display: inline-block;
}

/* 简评内容 */
.features-content {
  line-height: 1.7;
  color: var(--vp-c-text-1);
}

.features-content p {
  margin: 0;
}

.features-content ul.features-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.features-content li.feature-item {
  position: relative;
  padding-left: 1.5rem;
  margin-bottom: 0.75rem;
  line-height: 1.6;
}

.features-content li.feature-item::before {
  content: '•';
  color: var(--vp-c-brand-1);
  font-size: 1.5em;
  position: absolute;
  left: 0;
  top: -0.25em;
}

/* 截图容器 */
.screenshots-container {
  margin-top: 1rem;
}

/* 响应式调整 */
@media (max-width: 768px) {
  .screenshots-container {
    margin-top: 0.5rem;
  }
}

/* 侧边栏 */
.sidebar {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  position: static;
  height: auto;
}

.sidebar-card {
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-border);
  border-radius: 12px;
  padding: 1.5rem;
}

.sidebar-title {
  font-size: 1.1rem;
  margin-bottom: 1rem;
}

.sidebar-icon {
  font-size: 1rem;
}

/* 链接按钮 */
.link-buttons {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.link-btn {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-border);
  border-radius: 8px;
  text-decoration: none;
  color: var(--vp-c-text-1);
  transition: all 0.3s ease;
}

.link-btn:hover {
  border-color: var(--vp-c-brand-1);
  transform: translateX(4px);
}

.link-icon {
  font-size: 1.1rem;
}

.link-text {
  flex: 1;
  font-weight: 500;
}

.link-arrow {
  color: var(--vp-c-text-3);
  transition: transform 0.3s ease;
}

.link-btn:hover .link-arrow {
  transform: translateX(2px);
}

/* 标签云 */
.category-container,
.tags-cloud {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.5rem;
}

.category-container {
  margin-bottom: 1.5rem;
}

.tag {
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-text-2);
  padding: 0.4rem 0.8rem;
  border-radius: 20px;
  font-size: 14px;
  transition: all 0.3s ease;
  cursor: pointer;
  display: inline-block;
  line-height: 1.4;
}

.tag:hover {
  transform: translateY(-1px);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

/* 加载状态 */
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
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

/* 404状态 */
.not-found-state {
  text-align: center;
  padding: 4rem 0;
}

.not-found-content h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: var(--vp-c-text-2);
}

.not-found-content p {
  color: var(--vp-c-text-3);
  margin-bottom: 2rem;
}

.back-home-btn {
  background: var(--vp-c-brand-1);
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1rem;
}

/* 响应式设计 */
@media (max-width: 968px) {
  .detail-content {
    grid-template-columns: 1fr;
  }

  .sidebar {
    position: static;
  }

  .detail-header {
    flex-direction: column;
    text-align: center;
  }

  .header-main {
    flex-direction: column;
    text-align: center;
  }

  .header-stats {
    justify-content: center;
    margin-top: 1rem;
  }
}

@media (max-width: 768px) {
  .info-grid {
    grid-template-columns: 1fr;
  }

  .lightbox-nav {
    width: 50px;
    height: 50px;
    font-size: 1.5rem;
  }

  .lightbox-prev {
    left: 1rem;
  }

  .lightbox-next {
    right: 1rem;
  }
}
</style>