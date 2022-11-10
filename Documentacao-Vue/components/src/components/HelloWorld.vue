<template>
  <div>
    <h3>{{post.title}}</h3>
    <h6>ID: {{post.id}}</h6>
  </div>
</template>
<script>

export default {
  props: ['post'],
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
