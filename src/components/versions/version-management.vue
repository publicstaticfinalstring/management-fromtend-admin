<template>
  <div>
    <ganttastic
      :tasks="tasks"
      :start-date="startDate"
      :end-date="endDate"
    />
  </div>
</template>

<script>
import Ganttastic from 'vue-ganttastic';

export default {
  components: { Ganttastic },
  data() {
    return {
      tasks: [
        { id: 1, label: 'Version Release', startDate: '2024-11-01', endDate: '2024-11-10' }
      ],
      startDate: '2024-11-01',
      endDate: '2024-11-30'
    };
  }
};
</script>