<script setup>
import DefaultTheme from 'vitepress/theme'
import { ref, onMounted } from 'vue'

const { Layout } = DefaultTheme

const isAuth = ref(false)
const password = ref('')

onMounted(() => {
  if (sessionStorage.getItem('yifeng_auth') === 'true') {
    isAuth.value = true
  }
})

const check = () => {
  if (password.value === '301087') { // ⚠️ 记得改回您的真实密码
    sessionStorage.setItem('yifeng_auth', 'true')
    isAuth.value = true
  } else {
    alert('密码错误，请联系总部获取最新通行码')
    password.value = ''
  }
}
</script>

<template>
  <div v-if="!isAuth" class="guard-wrapper">
    <div class="auth-card">
      
      <div class="icon-shield">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        </svg>
      </div>

      <h1 class="sys-title">Cofoe Hub</h1>
      <h2 class="sys-subtitle">可孚益丰门店战术大屏</h2>

      <div class="status-badge">
        <span class="dot"></span>
        内部加密专网
      </div>

      <div class="input-box">
        <input 
          v-model="password" 
          type="password" 
          placeholder="请输入系统授权码..." 
          @keyup.enter="check" 
        />
      </div>

      <button class="submit-btn" @click="check">
        安全登录
      </button>

      <div class="legal-footer">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
        机密系统，您的访问已被安全审计记录
      </div>

    </div>
  </div>

  <Layout v-else />
</template>

<style scoped>
/* 战术深色背景，带有科技感的渐变 */
.guard-wrapper {
  position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
  background: linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%);
  z-index: 99999; display: flex; justify-content: center; align-items: center;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
}

/* 拟物玻璃化卡片 */
.auth-card {
  background: rgba(255, 255, 255, 0.98);
  padding: 40px 30px;
  border-radius: 16px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
  text-align: center;
  width: 90%; 
  max-width: 380px;
  backdrop-filter: blur(10px);
}

/* 盾牌图标样式 */
.icon-shield {
  background: #f0fdf4;
  color: #16a34a;
  width: 56px; height: 56px;
  border-radius: 50%;
  display: flex; justify-content: center; align-items: center;
  margin: 0 auto 16px;
}
.icon-shield svg {
  width: 28px; height: 28px;
}

/* 标题排版 */
.sys-title {
  font-size: 22px; font-weight: 800; color: #111827; margin: 0 0 4px 0;
  letter-spacing: 0.5px;
}
.sys-subtitle {
  font-size: 15px; font-weight: 500; color: #4b5563; margin: 0 0 20px 0;
}

/* 呼吸灯状态标签 */
.status-badge {
  display: inline-flex; align-items: center;
  background: #f3f4f6; color: #374151;
  padding: 6px 12px; border-radius: 20px;
  font-size: 12px; font-weight: 600; margin-bottom: 24px;
}
.status-badge .dot {
  width: 8px; height: 8px; background: #10b981;
  border-radius: 50%; margin-right: 6px;
  box-shadow: 0 0 0 2px rgba(16, 185, 129, 0.2);
  animation: pulse 2s infinite;
}
@keyframes pulse {
  0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7); }
  70% { transform: scale(1); box-shadow: 0 0 0 6px rgba(16, 185, 129, 0); }
  100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(16, 185, 129, 0); }
}

/* 现代感输入框 */
.input-box input {
  width: 100%; padding: 14px 16px;
  background: #f9fafb;
  border: 2px solid #e5e7eb; border-radius: 10px;
  font-size: 15px; color: #1f2937; outline: none;
  box-sizing: border-box; transition: all 0.3s ease;
  text-align: center; font-weight: 500; letter-spacing: 2px;
}
.input-box input:focus {
  border-color: #10b981; background: #fff;
  box-shadow: 0 0 0 4px rgba(16, 185, 129, 0.1);
}

/* 高级感按钮 */
.submit-btn {
  width: 100%; padding: 14px; margin-top: 20px;
  background: #10b981; color: white; border: none;
  border-radius: 10px; font-size: 16px; font-weight: 600;
  cursor: pointer; transition: background 0.2s, transform 0.1s;
  letter-spacing: 1px;
}
.submit-btn:hover { background: #059669; }
.submit-btn:active { transform: scale(0.98); }

/* 底部警告条 */
.legal-footer {
  margin-top: 24px; font-size: 11px; color: #9ca3af;
  display: flex; align-items: center; justify-content: center; gap: 4px;
}
.legal-footer svg { width: 12px; height: 12px; }
</style>
