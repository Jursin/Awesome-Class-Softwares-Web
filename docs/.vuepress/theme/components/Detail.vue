<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { softwareList } from '../data/class/index'
import Swiper from './Swiper.vue'
import VPComment from '@theme/VPComment.vue'
const route = useRoute()
const router = useRouter()
const API_BASE = 'https://gh-api.jursin.top/api/github'

// 响应式数据
const software = ref(null)
const loading = ref(true)
const mediaItems = computed(() => {
  const items = []
  const vids = software.value?.bvid
  if (Array.isArray(vids)) {
    vids.filter(Boolean).forEach(v => items.push(`video:${v}`))
  }
  const shots = software.value?.screenshots || []
  return [...items, ...shots]
})

const hasGroupLinks = computed(() => {
  const group = software.value?.group
  if (!group) return false
  return Boolean(
    group.qqGroup ||
    group.qqChannel ||
    group.telegram ||
    group.discord ||
    group.facebook ||
    group.x
  )
})

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
    const date = new Date(dateString)
    if (Number.isNaN(date.getTime())) return dateString
    return date.toLocaleString('zh-CN', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      timeZone: 'Asia/Shanghai'
    })
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
const getAuthorAvatar = (repo, author) => {
  if (repo && repo.includes('/')) {
    const username = repo.split('/')[0]
    return `https://github.com/${username}.png?size=40`
  }
  return `https://ui-avatars.com/api/?name=${encodeURIComponent(author || 'Unknown')}&background=random&size=40`
}

// 从GitHub API获取仓库详细信息
const fetchRepoDetail = async (repoName) => {
  try {
    // 获取仓库基本信息
    const response = await fetch(`${API_BASE}/repos/${repoName}`)
    if (!response.ok) {
      throw new Error(`获取 ${repoName} 仓库失败: ${response.status}`)
    }

    const data = await response.json()

    // 从GitHub API获取所需字段
    const githubData = {
      stars: data.stargazers_count || 0,
      issues: data.open_issues_count || 0,
      language: data.language || '',
      license: data.license?.spdx_id || data.license?.name || '',
      createdAt: data.created_at || '',
      last_commit: '',
      defaultBranch: data.default_branch || ''
    }

    let lastCommitDate = ''

    try {
      if (githubData.defaultBranch) {
        const commitsResponse = await fetch(`${API_BASE}/repos/${repoName}/commits?per_page=1&sha=${githubData.defaultBranch}`)
        if (commitsResponse.ok) {
          const commitsData = await commitsResponse.json()
          const latestCommit = Array.isArray(commitsData) ? commitsData[0] : null
          const commitDate = latestCommit?.commit?.author?.date || latestCommit?.commit?.committer?.date
          if (commitDate) {
            lastCommitDate = commitDate
          }
        }
      }
    } catch (commitError) {
      console.warn(`获取 ${repoName} 的最新提交失败:`, commitError)
    }

    if (!lastCommitDate) {
      lastCommitDate = data.updated_at || ''
    }

    githubData.last_commit = lastCommitDate

    // 计算所有releases的所有assets下载量总和
    let downloads = '0'

    // 获取所有releases信息并计算总下载量
    try {
      const releasesResponse = await fetch(`${API_BASE}/repos/${repoName}/releases`)
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
      last_commit: lastCommitDate,
      downloads,
      status: 'success'
    }
  } catch (error) {
    console.warn(`获取 ${repoName} 数据失败:`, error)
    return {
      githubData: { stars: 0, issues: 0, language: '', license: '', createdAt: '', last_commit: '' },
      language: '',
      license: '',
      createdAt: '',
      last_commit: '',
      downloads: '未知',
      status: 'error'
    }
  }
}

onMounted(async () => {
  // 查找软件数据
  const foundSoftware = softwareList.find(item => item.id === softwareId.value)

  try {
    if (foundSoftware) {
      software.value = {
        ...foundSoftware,
        githubStatus: foundSoftware.repo ? 'loading' : 'error',
        downloads: foundSoftware.downloads ?? '0',
        last_commit: foundSoftware.last_commit || foundSoftware.lastUpdated || foundSoftware.lastCommit || ''
      }
      document.title = `${foundSoftware.name} | ACS`
      loading.value = false

      if (foundSoftware.repo) {
        const githubData = await fetchRepoDetail(foundSoftware.repo)

        software.value = githubData.status === 'success'
          ? { ...software.value, ...githubData, githubStatus: 'success' }
          : { ...software.value, githubStatus: 'error' }
      }
    } else {
      // 如果未找到软件或没有GitHub仓库信息，显示软件未找到
      software.value = {
        id: softwareId.value,
        name: '软件未找到',
        description: foundSoftware 
          ? `软件"${foundSoftware.name}"缺少必要的仓库信息。` 
          : `无法找到ID为"${softwareId.value}"的软件信息。`
      }
      loading.value = false
    }
  } catch (error) {
    console.error('加载数据失败:', error)
    // 发生错误时显示软件未找到
    software.value = {
      id: softwareId.value,
      name: '软件未找到',
      description: '加载软件数据时发生错误。',
      githubStatus: 'error'
    }
    loading.value = false
  } finally {
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
          <Icon name="material-symbols:arrow-back-rounded" size="1.2em" />
          返回主页
        </button>
        <span class="breadcrumb-separator">/</span>
        <span class="current-page">{{ software.category }}</span>
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
                <Icon name="octicon:star-fill-16" size="1.1em" color="#E3B341" /> 星标
              </span>
              <span class="stat-value">
                <template v-if="software.githubStatus === 'success'">{{ formatNumber(software.githubData?.stars) }}</template>
                <template v-else-if="software.githubStatus === 'error'">获取失败</template>
                <template v-else>加载中...</template>
              </span>
            </div>
            <div class="stat-badge">
              <span class="stat-title">
                <Icon name="octicon:issue-opened-16" size="1.1em" color="#3FB950" /> 议题
              </span>
              <span class="stat-value">
                <template v-if="software.githubStatus === 'success'">{{ formatNumber(software.githubData?.issues) }}</template>
                <template v-else-if="software.githubStatus === 'error'">获取失败</template>
                <template v-else>加载中...</template>
              </span>
            </div>
            <div class="stat-badge">
              <span class="stat-title">
                <Icon name="octicon:download-16" size="1.1em" color="#4493F8" /> 下载量
              </span>
              <span class="stat-value">
                <template v-if="software.githubStatus === 'success'">{{ software.downloads }}</template>
                <template v-else-if="software.githubStatus === 'error'">获取失败</template>
                <template v-else>加载中...</template>
              </span>
            </div>
            <div class="stat-badge">
              <span class="stat-title">
                <Icon name="octicon:code-16" size="1.1em" /> 语言
              </span>
              <span class="stat-value language-tag" style="display: flex; align-items: center; gap: 6px;">
                <template v-if="software.githubStatus === 'success'">
                  <span class="language-dot" :style="{ backgroundColor: getLanguageColor(software.language) }"></span>
                  {{ software.language }}
                </template>
                <template v-else-if="software.githubStatus === 'error'">获取失败</template>
                <template v-else>加载中...</template>
              </span>
            </div>
          </div>
        </div>
      </header>

      <!-- 主要内容区域 -->
      <div class="detail-content">
        <!-- 左侧主要内容 -->
        <main class="main-content">
          <!-- 软件截图 -->
          <section class="info-card" v-if="mediaItems.length > 0">
            <h2 class="section-title">
              <Icon name="mingcute:pic-fill" />
              软件截图
              <span class="screenshot-count">({{ (software.screenshots && software.screenshots.length) || 0 }})</span>
            </h2>
            <div class="screenshots-container">
              <Swiper
                :items="mediaItems"
                height="400px"
              />
            </div>
          </section>

          <!-- 简评卡片 -->
          <section class="info-card">
            <h2 class="section-title">
              <Icon name="octicon:list-unordered-16" />
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

          <!-- Star 历史 -->
           <section class="info-card">
              <h2 class="section-title">
                <Icon name="octicon:star-fill-16" color="#E3B341" />
                Star 历史
              </h2>
              <img
                v-if="software.repo"
                class="star-history-img"
                :src="`https://starchart.cc/${software.repo}.svg?variant=adaptive`"
                :alt="`${software.name} Star 历史`"
                loading="lazy"
              >
           </section>
        </main>

        <!-- 右侧边栏 -->
        <aside class="sidebar">
          <!-- 项目信息卡片 -->
          <section class="info-card">
            <h2 class="section-title">
              <Icon name="codicon:github-project" />
              项目信息
            </h2>
            <div class="info-grid">
              <div class="info-item">
                <label class="info-label">
                  <Icon name="octicon:clock-16" /> 创建于
                </label>
                <span class="info-value">
                  <template v-if="software.githubStatus === 'success'">{{ formatDate(software.createdAt) }}</template>
                  <template v-else-if="software.githubStatus === 'error'">获取失败</template>
                  <template v-else>加载中...</template>
                </span>
              </div>
              <div class="info-item">
                <label class="info-label">
                  <Icon name="material-symbols:update-rounded" /> 更新于
                </label>
                <span class="info-value">
                  <template v-if="software.githubStatus === 'success'">{{ formatDate(software.last_commit) }}</template>
                  <template v-else-if="software.githubStatus === 'error'">获取失败</template>
                  <template v-else>加载中...</template>
                </span>
              </div>
              <div class="info-item">
                <label class="info-label">
                  <Icon name="octicon:person-16" /> 贡献者
                </label>
                <div class="author-info">
                  <a v-if="software.author"
                    :href="`https://github.com/${software.author}`" target="_blank"
                    rel="noreferrer" class="author-link">
                    <img :src="software.avatar || getAuthorAvatar(software.repo, software.author)"
                      :alt="software.author" class="author-avatar" />
                    <span class="info-value">{{ software.author }}</span>
                  </a>
                  <a v-if="software.repo"
                    :href="`https://github.com/${software.repo}/graphs/contributors`" target="_blank"
                    rel="noreferrer" class="author-link more-link" aria-label="Contributors">
                    <Icon name="fluent:more-circle-16-regular" size="1.5em" />
                  </a>
                </div>
              </div>
              <div class="info-item">
                <label class="info-label">
                  <Icon name="lucide:scale" size="1.3em" /> 许可协议
                </label>
                <span class="info-value">
                  <template v-if="software.githubStatus === 'success'">{{ software.license }}</template>
                  <template v-else-if="software.githubStatus === 'error'">获取失败</template>
                  <template v-else>加载中...</template>
                </span>
              </div>
            </div>
          </section>

          <!-- 链接 -->
          <div class="sidebar-card">
            <h3 class="sidebar-title">
              <Icon name="octicon:link-16" />
              快速链接
            </h3>
            <div class="link-buttons">
              <a :href="`https://github.com/${software.repo}`" target="_blank" class="link-btn github">
                <Icon name="octicon:repo-16" />
                <span class="link-text">GitHub 仓库</span>
                <Icon name="octicon:arrow-right-16" />
              </a>
              <a v-if="software.website" :href="software.website" target="_blank" class="link-btn website">
                <Icon name="streamline-plump:web" />
                <span class="link-text">网站</span>
                <Icon name="octicon:arrow-right-16" />
              </a>
              <a v-if="software.docs" :href="software.docs" target="_blank" class="link-btn docs">
                <Icon name="qlementine-icons:book-16" />
                <span class="link-text">文档</span>
                <Icon name="octicon:arrow-right-16" />
              </a>
              <a v-if="software.repo" :href="`https://ghproxy.jursin.top/?url=https://github.com/${software.repo}&fetchReleases=true`" target="_blank" class="link-btn download">
                <Icon name="octicon:download-16" />
                <span class="link-text">发行版</span>
                <Icon name="octicon:arrow-right-16" />
              </a>
            </div>
            <div v-if="hasGroupLinks">
              <h3 class="sidebar-title">
                <Icon name="octicon:comment-discussion-16" />
                交流群组
              </h3>
              <div class="social-links">
                <a v-if="software.group?.qqGroup" :href="software.group.qqGroup" target="_blank" class="link-btn community">
                  <Icon name="simple-icons:qq" color="#369BCE" />
                  <span class="link-text">QQ 群</span>
                  <Icon name="octicon:arrow-right-16" />
                </a>
                <a v-if="software.group?.qqChannel" :href="software.group.qqChannel" target="_blank" class="link-btn community">
                  <Icon name="simple-icons:qq" color="#369BCE" />
                  <span class="link-text">QQ 频道</span>
                  <Icon name="octicon:arrow-right-16" />
                </a>
                <a v-if="software.group?.telegram" :href="software.group.telegram" target="_blank" class="link-btn community">
                  <Icon name="logos:telegram" />
                  <span class="link-text">Telegram</span>
                  <Icon name="octicon:arrow-right-16" />
                </a>
                <a v-if="software.group?.discord" :href="software.group.discord" target="_blank" class="link-btn community">
                  <Icon name="logos:discord-icon" />
                  <span class="link-text">Discord</span>
                  <Icon name="octicon:arrow-right-16" />
                </a>
                <a v-if="software.group?.facebook" :href="software.group.facebook" target="_blank" class="link-btn community">
                  <Icon name="logos:facebook" />
                  <span class="link-text">Facebook</span>
                  <Icon name="octicon:arrow-right-16" />
                </a>
                <a v-if="software.group?.x" :href="software.group.x" target="_blank" class="link-btn community">
                  <Icon name="logos:x" />
                  <span class="link-text">X</span>
                  <Icon name="octicon:arrow-right-16" />
                </a>
              </div>
            </div>
          </div>

          <!-- 分类和标签 -->
          <div class="sidebar-card">
            <!-- 分类信息 -->
            <h3 class="sidebar-title">
              <Icon name="material-symbols:category-outline-rounded" />
              分类
            </h3>
            <div class="category-container">
              <span class="tag">{{ software.category }}</span>
            </div>

            <!-- 标签信息 -->
            <h3 class="sidebar-title">
              <Icon name="octicon:tag-16" />
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
  <div class="comment-container">
    <VPComment />
  </div>
</template>

<style scoped>
.software-detail {
  max-width: 1460px;
  margin: 0 auto;
  padding: 0 0 2rem;
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
  gap: 2rem;
  flex-shrink: 0;
}

.stat-badge {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.stat-title {
  font-size: 1.1rem;
  color: var(--vp-c-text-3);
  display: flex;
  align-items: center;
  gap: 4px;
  padding-bottom: 0.25rem;
  white-space: nowrap;
}

.stat-value {
  font-size: 1.1rem;
  color: var(--vp-c-text-1);
}

/* 主要内容区域 */
.detail-content {
  display: grid;
  grid-template-columns: 2.8fr 1.2fr;
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

.screenshot-count {
  font-size: 1.1rem;
  color: var(--vp-c-text-3);
  margin-left: 0.25rem;
}

/* 截图容器 */
.screenshots-container {
  margin-top: 1rem;
}

.video-embed {
  margin-bottom: 1rem;
}

.video-iframe {
  width: 100%;
  height: 435px;
  border: none;
  border-radius: 12px;
  background: #000;
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

/* 信息网格 */
.info-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  row-gap: 1rem;
}

.info-item {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  font-size: 17px;
}

.author-info {
  display: flex;
  align-items: center;
  justify-content: center;
}

.author-link {
  display: inline-flex;
  align-items: center;
  color: inherit;
  text-decoration: none;
}

.author-link:hover .info-value {
  color: var(--vp-c-brand-1);
}

.more-link:hover {
  color: var(--vp-c-brand-1);
}

.author-avatar {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 8px;
}

.info-label {
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--vp-c-text-3);
  font-weight: 500;
  text-align: center;
  padding-bottom: 9px;
}

.info-value {
  color: var(--vp-c-text-1);
  text-align: center;
}

.language-tag {
  display: flex;
  align-items: center;
}

.language-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  display: inline-block;
}

/* 链接按钮 */
.link-buttons, .social-links {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.75rem;
}

.link-buttons {
  margin-bottom: 1rem;
}

.link-btn {
  display: flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.75rem;
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

/* 评论容器 */
.comment-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 0 2rem;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .screenshots-container {
    margin-top: 0.5rem;
  }

  .header-stats {
    gap: 1.5rem;
    justify-content: center;
    margin-top: 1rem;
  }

  .link-btn {
    font-size: 15px;
    padding: 0.5rem;
    gap: 0.25rem;
  }

  .detail-content {
    grid-template-columns: 1fr;
  }

  .sidebar {
    position: static;
    order: 1;
  }

  .main-content {
    order: 2;
  }

  .detail-header {
    flex-direction: column;
    text-align: center;
    align-items: center;
  }

  .header-main {
    flex-direction: column;
    text-align: center;
  }

  .info-grid {
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  }

  .stat-title, .stat-value {
    font-size: 16px;
  }

  .info-label, .info-value, .author-avatar, .author-link {
    font-size: 16px;
  }
}
</style>