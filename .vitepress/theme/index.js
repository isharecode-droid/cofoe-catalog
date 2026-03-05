import DefaultTheme from 'vitepress/theme'
// 导入我们刚才定义的全局防护组件
import GlobalGuard from './components/GlobalGuard.vue'

export default {
  extends: DefaultTheme,
  // 使用 Layout 插槽，将 DefaultTheme 的所有页面包裹在 GlobalGuard 之下
  Layout: GlobalGuard 
}
