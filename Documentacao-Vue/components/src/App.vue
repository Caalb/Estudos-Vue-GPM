<template>
  <div id="app">
    <input type="color" v-model="color">
      <HelloWorld @search-text="searchText" :color="color"></HelloWorld>
      <p>{{text}}</p>
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
      text: '',
      color: ''
    }
  },
  methods: {
    searchText(data) {
      this.text = data;
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
