import { defineConfig } from 'vitepress'

export default defineConfig({
  // 🛡️ 核心防爆盾：允许空链接不报错，即使还没建网页，网站也能正常访问！
  ignoreDeadLinks: true, 
  
  title: "Cofoe Hub （益丰专版）", 
  description: "可孚门店战术目录与产品手册",
  
    // 👇 1. 注入 CSS 魔法，强制放大所有菜单字体
  head: [
    ['style', {}, `
      /* 左侧大类标题（如：呼吸与供氧）放大加粗 */
      .VPSidebarItem.level-0 > .item > .text { font-size: 18px !important; font-weight: 800 !important; }
      /* 左侧具体产品（如：制氧机系列）放大 */
      .VPSidebarItem.level-1 > .item > .text { font-size: 16px !important; }
      /* 手机端弹出的菜单文字放大 */
      .VPNavScreenMenu { font-size: 18px !important; }
    `]
    // 👇 就在下面加这一行！这就是 Vercount 的统计芯片
    ['script', { defer: true, src: 'https://cn.vercount.one/js' }]
  ],

  
  themeConfig: {
    // 🌐 顶部导航栏

    // 👇 2. 把英文 Menu 汉化，并加上显眼的图标
    sidebarMenuLabel: '📑 菜单',
    returnToTopLabel: '⬆️ 返回顶部',
    outlineTitle: '📍 本页话术目录',
    darkModeSwitchLabel: '🌗 切换日夜模式',

    nav: [
      { text: '首页 (Home)', link: '/' },
      { text: '产品手册 (Docs)', link: '/scsm' },
      { text: '门店反馈 (Support)', link: '/feedback' }
    ],

    // 📑 左侧全品类文档树（店长的超级目录）
    sidebar: [
      {
        text: '🩺 核心监测设备',
        items: [
          { text: '血压计系列', link: '/xyj' },
          { text: '血糖仪系列', link: '/xty' },
          { text: '体温计系列', link: '/twj' }
        ]
      },
      {
        text: '💨 呼吸与供氧',
        items: [
          { text: '制氧机系列', link: '/zyj' },
          { text: '雾化器系列', link: '/whq' },
          { text: '呼吸机系列', link: '/hxj' }
        ]
      },
      {
        text: '🦽 康复与护理',
        items: [
          { text: '轮椅系列', link: '/ly' },
          { text: '坐厕椅系列', link: '/zcy' },
          { text: '护具系列', link: '/hj' },
          { text: '耗材与护理小件', link: '/hc' }
        ]
      },
      {
        text: '🛠️ 门店工具箱',
        items: [
          { text: '缺货与异常反馈', link: '/feedback' }
        ]
      }
    ],

    // 📖 右侧页面大纲提取（自动生成页面内的小标题索引）
    outline: {
      label: '本页索引',
      level: [2, 3]
    },
    
    // 翻页按钮汉化
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },

    // 🔍 开启本地搜索功能（店长找资料的神器）
    search: {
      provider: 'local'
    }
  }
})
