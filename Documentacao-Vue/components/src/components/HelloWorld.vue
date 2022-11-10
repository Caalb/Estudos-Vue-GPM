<template>
  <div>
    <h3>{{title}}</h3>
    <h6>ID: {{id}}</h6>
  </div>
</template>
<script>

export default {
  props: {
    id: Number,
    title: String,
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
