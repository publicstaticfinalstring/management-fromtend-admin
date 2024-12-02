<template>
  <a-button type="primary" @click="$emit('click')" class="edit-button">
    <slot>编辑</slot>
  </a-button>
</template>

<script>
import { defineComponent } from 'vue';
import { Button } from '@arco-design/web-vue';

export default defineComponent({
  name: 'EditButton',
  components: {
    'a-button': Button,
  },
});
</script>

<style scoped>
.edit-button {
  padding: 5px 10px;
  background-color: #09760d;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.edit-button:hover {
  background-color: #45a049;
}
</style>
