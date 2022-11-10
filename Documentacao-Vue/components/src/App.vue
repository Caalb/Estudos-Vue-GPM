<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld v-for="post in posts" v-bind:key="post.id" v-bind:id="post.id" v-bind:title="post.title"></HelloWorld>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data() {
    return {
      posts: [
        { id: 1, title: 'Minha jornada com Vue' },
        { id: 2, title: 'Postagens com Vue' },
        { id: 3, title: 'Porque Vue é tão divertido' },
        { id: 4, title: "Teste"}
      ]
    }
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
