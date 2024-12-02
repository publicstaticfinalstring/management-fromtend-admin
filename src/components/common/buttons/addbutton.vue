<template>
  <a-button type="secondary" @click="$emit('click')" class="add-button">
    <template #icon>
      <icon-plus />
    </template>
    <template #default>新增</template>
  </a-button>
</template>

<script>
import { defineComponent } from "vue";
import { Button } from "@arco-design/web-vue";

export default defineComponent({
  name: "AddButton",
  components: {
    "a-button": Button,
  },
});
</script>

<style scoped>
.add-button {
  padding: 10px 15px;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.add-button:hover {
  background-color: #456ba0;
}
</style>
