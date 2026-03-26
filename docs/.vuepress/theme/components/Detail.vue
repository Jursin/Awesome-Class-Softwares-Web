<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { softwareList } from '../data/class/index'
import Swiper from './Swiper.vue'
import VPComment from '@theme/VPComment.vue'
const route = useRoute()
const router = useRouter()
const API_BASES = [
  'https://api.github.com'
]
const LANGUAGE_COLOR_URL = 'https://gh.llkk.cc/https://raw.githubusercontent.com/ozh/github-colors/master/colors.json'

// 响应式数据
const software = ref(null)
const loading = ref(true)
const avatarLoadStatus = ref({})
const languageColors = ref({})
const iconLoadStatus = ref('loading')
const mediaItems = computed(() => {
  const items = []
  const vids = software.value?.bvid
  if (Array.isArray(vids)) {
    vids.filter(Boolean).forEach(v => items.push(`video:${v}`))
  }
  const shots = software.value?.screenshots || []
  return [...items, ...shots]
})

const normalizeLinkList = (value) => {
  if (!value) return []
  return Array.isArray(value) ? value.filter(Boolean) : [value]
}

const groupLinks = computed(() => {
  const group = software.value?.group
  if (!group) {
    return {
      qqGroup: [],
      qqChannel: [],
      telegram: [],
      discord: [],
      facebook: [],
      x: []
    }
  }
  return {
    qqGroup: normalizeLinkList(group.qqGroup),
    qqChannel: normalizeLinkList(group.qqChannel),
    telegram: normalizeLinkList(group.telegram),
    discord: normalizeLinkList(group.discord),
    facebook: normalizeLinkList(group.facebook),
    x: normalizeLinkList(group.x)
  }
})

const hasGroupLinks = computed(() => {
  return Boolean(
    groupLinks.value.qqGroup.length ||
    groupLinks.value.qqChannel.length ||
    groupLinks.value.telegram.length ||
    groupLinks.value.discord.length ||
    groupLinks.value.facebook.length ||
    groupLinks.value.x.length
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
const fetchWithFallback = async (path, options = {}) => {
  let lastError
  for (const base of API_BASES) {
    try {
      const response = await fetch(`${base}${path}`, options)
      if (!response.ok) {
        lastError = new Error(`请求失败 ${response.status}`)
        continue
      }
      return await response.json()
    } catch (error) {
      lastError = error
    }
  }
  throw lastError || new Error('请求失败')
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

const handleIconLoad = () => {
  iconLoadStatus.value = 'success'
}

const handleIconError = () => {
  iconLoadStatus.value = 'error'
}

const handleAvatarLoad = (author) => {
  avatarLoadStatus.value[author] = 'success'
}

const handleAvatarError = (author) => {
  avatarLoadStatus.value[author] = 'error'
}

const getAvatarLoadStatus = (author) => {
  return avatarLoadStatus.value[author] || 'loading'
}

const getLanguageColor = (language) => {
  if (!language) return '#cccccc'
  return languageColors.value[language] || '#cccccc'
}

// 加载 GitHub 语言颜色映射
const loadLanguageColors = async () => {
  try {
    const res = await fetch(LANGUAGE_COLOR_URL)
    if (!res.ok) throw new Error(`语言颜色请求失败 ${res.status}`)
    const data = await res.json()
    const map = {}
    for (const [lang, info] of Object.entries(data)) {
      if (info && typeof info === 'object' && info.color) {
        map[lang] = info.color
      }
    }
    languageColors.value = map
  } catch (e) {
    console.warn('加载语言颜色失败，使用默认颜色:', e)
    languageColors.value = {}
  }
}

const getTagSize = (tag) => {
  const baseSize = 14
  const tagLength = tag.length
  if (tagLength <= 2) return `${baseSize}px`
  if (tagLength <= 4) return `${baseSize - 1}px`
  return `${baseSize - 2}px`
}

// 拼接作者头像 URL
const getAvatarUrl = (author) => {
  return `https://github.com/${author}.png`
}

// 从GitHub API获取仓库详细信息
const fetchRepoDetail = async (repoName) => {
  try {
    // 获取仓库基本信息
    const data = await fetchWithFallback(`/repos/${repoName}`)

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
        const commitsData = await fetchWithFallback(`/repos/${repoName}/commits?per_page=1&sha=${githubData.defaultBranch}`)
        const latestCommit = Array.isArray(commitsData) ? commitsData[0] : null
        const commitDate = latestCommit?.commit?.author?.date || latestCommit?.commit?.committer?.date
        if (commitDate) {
          lastCommitDate = commitDate
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
      const releasesData = await fetchWithFallback(`/repos/${repoName}/releases`)

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
      stars: 0,
      issues: 0,
      language: '',
      license: '',
      createdAt: '',
      last_commit: '',
      downloads: '',
      status: 'error'
    }
  }
}

onMounted(async () => {
  // 并行加载语言颜色映射（不阻塞页面）
  loadLanguageColors()
  // 查找软件数据
  const foundSoftware = softwareList.find(item => item.id === softwareId.value)

  try {
    if (foundSoftware) {
      iconLoadStatus.value = 'loading'
      software.value = {
        ...foundSoftware,
        avatar: getAvatarUrl(foundSoftware.author),
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
      <nav class="breadcrumb">
        <button class="home-btn" @click="router.push('/')">
          <Icon name="octicon:home-16" size="1em" />
          主页
        </button>
        <span class="breadcrumb-separator">/</span>
        <span class="current-page">{{ software.category }}</span>
        <span class="breadcrumb-separator">/</span>
        <span class="current-page">{{ software.name }}</span>
      </nav>

      <!-- 头部信息 -->
      <header class="detail-header">
        <div class="header-main">
          <img v-if="iconLoadStatus !== 'error'" 
            :src="software.icon" 
            :alt="software.name" 
            class="detail-icon" 
            @load="handleIconLoad"
            @error="handleIconError">
          <svg v-else xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 100 100" fill="none" class="detail-icon">
            <rect width="100" height="100" fill="#F0F0F0"/>
          </svg>
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

          <!-- 功能简述 -->
          <section class="info-card">
            <h2 class="section-title">
              <Icon name="octicon:list-unordered-16" />
              功能简述
            </h2>
            <Content class="vp-doc plume-content" vp-content />
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
                    <img v-if="getAvatarLoadStatus(software.author) !== 'error'"
                      :src="software.avatar"
                      :alt="software.author" class="author-avatar"
                      @load="handleAvatarLoad(software.author)"
                      @error="handleAvatarError(software.author)" />
                    <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="author-avatar">
                      <path fill="currentColor" d="M12 19.2c-2.5 0-4.71-1.28-6-3.2c.03-2 4-3.1 6-3.1s5.97 1.1 6 3.1a7.23 7.23 0 0 1-6 3.2M12 5a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m0-3A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10c0-5.53-4.5-10-10-10" />
                    </svg>
                    <span class="info-value">{{ software.author }}</span>
                  </a>
                  <a v-if="software.repo"
                    :href="`https://github.com/${software.repo}/graphs/contributors`" target="_blank"
                    rel="noreferrer" class="author-link more-link" aria-label="Contributors">
                    <Icon name="fluent:more-circle-16-regular" size="1.5em" />
                  </a>
                </div>
              </div>
              <div class="info-item" v-if="software.githubStatus !== 'success' || software.license">
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
              <a v-if="software.repo" :href="`https://ghproxy.jursin.top/?url=https://github.com/${software.repo}&fetchReleases=true`" target="_blank" class="link-btn download">
                <Icon name="octicon:download-16" />
                <span class="link-text">发行版下载</span>
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
              <a v-if="software.stcnSection" :href="software.stcnSection" target="_blank" class="link-btn docs">
                <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 20 20" style="margin: 0 4.8px;"><g fill="currentColor"><path d="M 12.566406 3.507812 C 12.566406 3.507812 11.976562 3.175781 11.398438 3.339844 L 1.933594 6.023438 L 4.449219 1.535156 C 4.449219 1.535156 4.816406 0.800781 6.242188 0.832031 L 14.148438 0.851562 L 12.632812 3.550781 Z M 15.699219 1.691406 L 14.089844 4.558594 C 14.089844 4.558594 14.492188 4.933594 14.609375 5.367188 L 16.015625 10.867188 L 10.582031 12.550781 L 12.542969 9.359375 L 11.933594 6.949219 C 11.933594 6.949219 11.617188 6 10.683594 6.109375 C 10.667969 6.109375 10.648438 6.109375 10.640625 6.109375 C 9.675781 6.257812 0.734375 8.800781 0.734375 8.800781 C 0.734375 8.800781 0.0351562 9 0 9.714844 C 0 9.714844 -0.015625 10.492188 0.441406 11.199219 L 4.410156 18.160156 L 5.867188 15.558594 C 5.867188 15.558594 5.410156 15.132812 5.359375 14.917969 L 3.757812 9.074219 L 9.132812 7.507812 C 9.132812 7.507812 9.425781 7.359375 9.542969 7.617188 L 7.199219 10.617188 L 8 13.300781 C 8 13.300781 8.351562 13.890625 9.167969 13.890625 L 19.492188 11 C 19.492188 11 20.175781 10.867188 19.984375 9.808594 C 19.984375 9.808594 20.015625 9.417969 19.691406 8.765625 L 15.714844 1.675781 Z M 15.699219 1.691406 "/><path d="M 7.25 16.410156 C 7.25 16.410156 7.800781 16.648438 8.160156 16.632812 L 18.132812 13.832031 L 15.839844 17.917969 C 15.839844 17.917969 15.285156 19.058594 13.957031 19.058594 L 5.707031 19.175781 L 7.25 16.417969 Z M 7.25 16.410156 "/></g></svg>
                <span class="link-text">STCN 分区</span>
                <Icon name="octicon:arrow-right-16" />
              </a>
            </div>
            <div v-if="hasGroupLinks">
              <h3 class="sidebar-title">
                <Icon name="octicon:comment-discussion-16" />
                交流群组
              </h3>
              <div class="social-links">
                <a v-for="link in groupLinks.qqGroup" :key="`qq-group-${link}`" :href="link" target="_blank" class="link-btn community">
                  <Icon name="simple-icons:qq" color="#369BCE" />
                  <span class="link-text">QQ 群</span>
                  <Icon name="octicon:arrow-right-16" />
                </a>
                <a v-for="link in groupLinks.qqChannel" :key="`qq-channel-${link}`" :href="link" target="_blank" class="link-btn community">
                  <Icon name="simple-icons:qq" color="#369BCE" />
                  <span class="link-text">QQ 频道</span>
                  <Icon name="octicon:arrow-right-16" />
                </a>
                <a v-for="link in groupLinks.telegram" :key="`telegram-${link}`" :href="link" target="_blank" class="link-btn community">
                  <Icon name="logos:telegram" />
                  <span class="link-text">Telegram</span>
                  <Icon name="octicon:arrow-right-16" />
                </a>
                <a v-for="link in groupLinks.discord" :key="`discord-${link}`" :href="link" target="_blank" class="link-btn community">
                  <Icon name="logos:discord-icon" />
                  <span class="link-text">Discord</span>
                  <Icon name="octicon:arrow-right-16" />
                </a>
                <a v-for="link in groupLinks.facebook" :key="`facebook-${link}`" :href="link" target="_blank" class="link-btn community">
                  <Icon name="logos:facebook" />
                  <span class="link-text">Facebook</span>
                  <Icon name="octicon:arrow-right-16" />
                </a>
                <a v-for="link in groupLinks.x" :key="`x-${link}`" :href="link" target="_blank" class="link-btn community">
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
  margin: 1.8rem 0;
}

.home-btn {
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  color: var(--vp-c-text-1);
}

.home-btn:hover {
  color: var(--vp-c-brand-1);
}

.breadcrumb-separator {
  font-size: 1.1rem;
  color: var(--vp-c-text-3);
}

.current-page {
  font-size: 1.1rem;
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