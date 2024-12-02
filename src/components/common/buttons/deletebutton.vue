<template>
  <a-button type="danger" @click="$emit('click')" class="delete-button">
    <slot>删除</slot>
  </a-button>
</template>

<script>
import { defineComponent } from 'vue';
import { Button } from '@arco-design/web-vue';

export default defineComponent({
  name: 'DeleteButton',
  components: {
    'a-button': Button,
  },
});
</script>

<style scoped>
.delete-button {
  padding: 5px 10px;
  background-color: #f44336;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.delete-button:hover {
  background-color: #e53935;
}
</style>
