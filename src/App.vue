<template>
  <header class="header">
    <div class="logo-container">
      <img src="@/assets/logo.png" alt="系统Logo" class="logo" />
      <h1 class="system-name">客户管理系统</h1>
    </div>
    <!-- 使用 MainNavigation 组件 -->
    <MainNavigation />
  </header>
  <main class="content">
    <router-view />
  </main>
</template>

<script>
import MainNavigation from '@/components/navbar/main-navigation.vue';

export default {
  name: 'App',
  components: {
    MainNavigation,
  },
};
</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: #0b0101;
}

.logo-container {
  display: flex;
  align-items: center;
}

.logo {
  width: 40px;
  height: 40px;
  margin-right: 10px;
}

.system-name {
  font-size: 1.5em;
  font-weight: bold;
}

.content {
  padding: 20px;
}
</style>