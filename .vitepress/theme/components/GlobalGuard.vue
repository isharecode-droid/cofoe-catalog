<script setup>
import DefaultTheme from 'vitepress/theme'
import { ref, onMounted } from 'vue'

// 继承官方默认布局
const { Layout } = DefaultTheme

const isAuth = ref(false)
const password = ref('')

// 每次刷新页面时，检查之前是否输入过正确密码
onMounted(() => {
  if (sessionStorage.getItem('yifeng_auth') === 'true') {
    isAuth.value = true
  }
})

// 验证密码逻辑
const check = () => {
  if (password.value === '123456') { // ⚠️ 这里修改为您想要的真实密码
    sessionStorage.setItem('yifeng_auth', 'true') // 记录登录状态
    isAuth.value = true
  } else {
    alert('密码错误，请联系总部获取最新通行码')
    password.value = '' // 清空输入框
  }
}
</script>

<template>
  <div v-if="!isAuth" class="guard-container">
    <div class="login-box">
      <h2 style="margin-bottom: 10px;">益丰售后战术中心</h2>
      <p style="color: #666; font-size: 14px;">内部专网，请输入通行码</p>
      
      <input 
        v-model="password" 
        type="password" 
        placeholder="请输入密码..." 
        @keyup.enter="check" 
      />
      <button @click="check">验证进入</button>
    </div>
  </div>

  <Layout v-else />
</template>

<style scoped>
/* 全屏遮罩层样式 */
.guard-container {
  position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
  background: #f3f4f6; z-index: 99999; display: flex; 
  justify-content: center; align-items: center;
}
/* 登录框样式 */
.login-box {
  background: white; padding: 40px; border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.05); text-align: center;
  width: 90%; max-width: 360px;
}
.login-box input {
  display: block; width: 100%; margin: 25px 0 20px; padding: 12px;
  border: 1px solid #ddd; border-radius: 6px; font-size: 16px;
  box-sizing: border-box; outline: none; transition: border 0.3s;
}
.login-box input:focus {
  border-color: #3eaf7c; /* 聚焦时变成 Vue/VitePress 经典绿 */
}
.login-box button {
  background: #3eaf7c; color: white; border: none; font-weight: bold;
  padding: 12px; border-radius: 6px; cursor: pointer; width: 100%;
  font-size: 16px; transition: background 0.3s;
}
.login-box button:hover {
  background: #33a06f;
}
</style>
