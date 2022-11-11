<template>
  <div class="tasks-grid">
    <template v-if="tasks.length">
      <Task v-for="(task, index) in tasks" :key="task.name" :task="task" @taskDeleted="$emit('taskDeleted', index)" @taskStateChanged="$emit('taskStateChanged', index)">{{ task.name }}</Task>
    </template>
    <p v-else class="no-task">Sua vida está em dia :)</p>
  </div>
</template>

<script>
import Task from './Task.vue'

export default {
  components: { Task },
  props: {
    tasks: {
      type: Array,
      requered: true
    }
  }
}
</script>

<style>
  .tasks-grid {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  .tasks-grid .task {
    margin: 10px
  }

  .no-task {
    color: #AAA;
    font-size: 1.7rem;
  }
</style>