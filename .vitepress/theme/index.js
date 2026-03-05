// .vitepress/theme/index.js
import DefaultTheme from '.vitepress/theme'
import GlobalGuard from './components/GlobalGuard.vue'

export default {
  // 继承默认主题的所有配置（保持原有样式不变）
  extends: DefaultTheme,
  // 用我们的防盗门组件替换掉原本的全局布局
  Layout: GlobalGuard 
}
