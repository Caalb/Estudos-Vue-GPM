<template>
  <div id="app">
    <div :style="{ fontSize: postFontSize + 'em'}">
      <HelloWorld v-for="post in posts" v-bind:key="post.id" v-bind:post="post" v-on:enlarge-text="postFontSize += $event" v-on:decrease-text="postFontSize -= $event"></HelloWorld>
    </div>
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
      postFontSize: 1,
      posts: [
        { id: 1, title: 'Minha jornada com Vue' },
        { id: 2, title: 'Postagens com Vue' },
        { id: 3, title: 'Porque Vue é tão divertido', content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo dolore alias consequatur porro! Sint autem culpa dolorum corrupti. Sit harum maxime veritatis ipsa soluta iste est saepe fugiat placeat vero." },
        { id: 4, title: "Teste", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo dolore alias consequatur porro! Sint autem culpa dolorum corrupti. Sit harum maxime veritatis ipsa soluta iste est saepe fugiat placeat vero."}
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
