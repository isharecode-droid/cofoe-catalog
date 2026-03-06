import { defineConfig } from 'vitepress'

export default defineConfig({
  // 🛡️ 核心防爆盾：允许空链接不报错，即使还没建网页，网站也能正常访问！
  ignoreDeadLinks: true, 
  
  title: "Cofoe Hub", 
  description: "可孚门店战术目录与产品手册",
  
  // 👇 1. 注入 CSS 魔法：强制放大菜单字体 + 强制顶部导航栏绝对固定吸顶！
  head: [
    ['meta', { name: 'robots', content: 'noindex, nofollow' }],
    ['style', {}, `
      /* 左侧大类标题（如：呼吸与供氧）放大加粗 */
      .VPSidebarItem.level-0 > .item > .text { font-size: 18px !important; font-weight: 800 !important; }
      /* 左侧具体产品（如：制氧机系列）放大 */
      .VPSidebarItem.level-1 > .item > .text { font-size: 16px !important; }
      /* 手机端弹出的菜单文字放大 */
      .VPNavScreenMenu { font-size: 18px !important; }
      
      /* 🚀 新增：强制顶部导航栏绝对固定，永不消失！ */
      .VPNav {
        position: fixed !important;
        top: 0 !important;
        width: 100% !important;
        z-index: 1000 !important;
        /* 添加一点高级的毛玻璃质感，让它更像一个原生 App */
        background-color: rgba(255, 255, 255, 0.85) !important;
        backdrop-filter: blur(10px) !important;
        -webkit-backdrop-filter: blur(10px) !important;
        border-bottom: 1px solid rgba(0, 0, 0, 0.05) !important;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05) !important;
      }
      /* 调整主体内容区域的顶部间距，防止被固定的导航栏遮挡文字 */
      .VPContent {
        padding-top: 64px !important; 
      }
    `]
  ],

  themeConfig: {
    // 🌐 顶部左侧专属标识 (益丰专版栏)
    siteTitle: '🔥 益丰战区专版', 

    // 👇 2. 把英文 Menu 汉化，并加上显眼的图标
    sidebarMenuLabel: '📑 菜单',
    returnToTopLabel: '⬆️ 返回顶部',
    outlineTitle: '📍 本页话术目录',
    darkModeSwitchLabel: '🌗 切换日夜模式',

    // 🌐 顶部右侧固定菜单栏 (Nav)
    nav: [
      { text: '首页 (Home)', link: '/' },
      { text: '产品手册 (Docs)', link: '/scsm' },
      { text: '🔥销售与利润武装(DS&P Arm)', link: '/sales-index' },
      { text: '‼️紧急客诉 (UCC)', link: '/urgent' },
      { text: '门店反馈 (Support)', link: '/feedback' }
    ],

    // 📑 左侧全品类文档树（店长的超级目录）
    sidebar: [
      {
        text: '🩺 核心监测设备',
        items: [
          { text: '🩸 TGU330-C 二合一测试仪', link: '/tgu330-c-intro' },
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
         text: '💰 销售与利润武装', // 进攻模块放在最上面，店员最爱看
         items: [
           { text: '🎯 二合一逼单与实操全案', link: '/tgu330-c-sales' },
           { text: '🏆 绝密：二合一会销爆单手册', link: '/conference-sales' },
           { text: '🔥 高毛利一句话话术', link: '/sales-pitch' },
           { text: '⚔️ 竞品优劣势终极对比', link: '/comparison' },
           { text: '💊 联合用药关联推荐', link: '/cross-selling' }
        ]
      },
        {
         text: '🚨 紧急客诉与售后 ',
         items: [
           { text: '🛠️ 高频故障秒查 (店员自查)', link: '/troubleshooting' },
           { text: '📦 售后/退换货标准判定', link: '/return-policy' },
           { text: '🆘 异常客诉一键上报通道', link: '/urgent' }
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
