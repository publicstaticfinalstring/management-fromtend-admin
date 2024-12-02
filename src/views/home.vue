<template>
  <div>
    <h1>欢迎来到主页</h1>
  </div>

  <div class="map-container">
      <ChinaMap :onProvinceClick="filterCustomersByProvince" />
    </div>

</template>

<script>
import ChinaMap from '@/components/common/china-map.vue';

export default {
  name: 'HomePage',  // 将组件名改为多单词的形式
  components: {
    ChinaMap,
  },
};
</script>
<style scoped>


.map-container {
  flex: 0 0 30%;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}


</style>