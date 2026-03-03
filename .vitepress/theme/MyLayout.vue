<script setup>
import DefaultTheme from 'vitepress/theme'
import { onMounted, watch } from 'vue'
import { useRoute } from 'vitepress'

const { Layout } = DefaultTheme
const route = useRoute()

// 首次加载引入“不蒜子”数据统计脚本
onMounted(() => {
  const script = document.createElement('script')
  script.src = '//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js'
  script.async = true
  document.body.appendChild(script)
})

// 监听店长点击菜单，自动刷新阅读量
watch(() => route.path, () => {
  setTimeout(() => {
    if (window.bszCaller) {
      window.bszCaller.fetch()
    }
  }, 500)
})
</script>

<template>
  <Layout>
    <template #doc-after>
      <div style="margin-top: 40px; padding-top: 20px; border-top: 1px dashed var(--vp-c-divider); text-align: center; color: var(--vp-c-text-2); font-size: 14px; background-color: var(--vp-c-bg-soft); border-radius: 8px; padding-bottom: 20px;">
        📊 <strong>门店查阅数据看板</strong><br><br>
        🏢 大屏总访问：<span id="busuanzi_value_site_pv" style="font-weight: bold; color: var(--vp-c-brand); font-size: 16px;">...</span> 次
        <span style="margin: 0 15px; color: var(--vp-c-divider);">|</span>
        📖 本手册阅读：<span id="busuanzi_value_page_pv" style="font-weight: bold; color: var(--vp-c-brand); font-size: 16px;">...</span> 次
      </div>
    </template>
  </Layout>
</template>
