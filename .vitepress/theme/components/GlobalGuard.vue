<template>
  <div v-if="!isAuth" class="guard-container">
    <div class="login-box">
      <h3>益丰内部防护区</h3>
      <input v-model="password" type="password" placeholder="请输入通行码" />
      <button @click="check">进入系统</button>
    </div>
  </div>
  <div v-else>
    <slot />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
const password = ref('')
const isAuth = ref(false)

const check = () => {
  if (password.value === '123456') { // 改成您的密码
    sessionStorage.setItem('isAuthed', 'true')
    isAuth.value = true
  } else {
    alert('密码错误')
  }
}

onMounted(() => {
  if (sessionStorage.getItem('isAuthed') === 'true') {
    isAuth.value = true
  }
})
</script>

<style scoped>
.guard-container {
  position: fixed; top:0; left:0; width:100vw; height:100vh;
  background: white; z-index: 9999; display:flex; 
  justify-content:center; align-items:center;
}
</style>
