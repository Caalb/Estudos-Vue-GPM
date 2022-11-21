<template>
  <div id="app">
    <p>{{$store.state.user.first_name}}</p>
    <input type="text" v-model="myName">
    <button @click="saveName">Save</button>
    <HelloWorld msg="Welcome to Your Vue.js App" />
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
      myName: ''
    }
  },
  methods: {
    saveName() {
      // Action
      this.$store.dispatch('saveFistName', this.myName)


      // Muttation
      // this.$store.commit()
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
