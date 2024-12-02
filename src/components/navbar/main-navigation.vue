<template>
  <nav class="navigation">
    <ul>
      <li><router-link to="/">首页</router-link></li>
      <li><router-link to="/analyze-assistant">分析助手</router-link></li>
      <li><router-link to="/customer-index">客户管理</router-link></li>
      <li><router-link to="/contracts">合同管理</router-link></li>
      <li><router-link to="/projects">项目管理</router-link></li>
      <li><router-link to="/presales">售前项目</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "MainNavigation",
};
</script>

<style scoped>
.navigation ul {
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
}

.navigation ul li {
  margin-left: 20px;
}

.navigation ul li a {
  text-decoration: none;
  color: #fff;
  padding: 8px 16px;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.navigation ul li a:hover {
  background-color: #495057;
}
</style>
