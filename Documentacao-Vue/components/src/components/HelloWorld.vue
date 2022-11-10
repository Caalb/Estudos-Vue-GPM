<template>
  <div>
    <h3>{{post.title}}</h3>
    <button @click="$emit('enlarge-text', 0.1)">Aumentar Fonte</button>
    <button @click="$emit('decrease-text', 0.1)">Diminuir Fonte</button>
    <p>Conteudo: {{post.content}}</p>
  </div>
</template>
<script>

export default {
  props: {
    post: Object,
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
