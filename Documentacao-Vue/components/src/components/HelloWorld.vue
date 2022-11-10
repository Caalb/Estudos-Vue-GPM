<template>
  <div>
    <input type="text" v-model="searchText" >
    <button @click="$emit('search-text', searchText)" style="margin: 1rem"  :style="`background: ${this.color};`">Enviar para o pai</button>
  </div>
</template>
<script>

export default {
  props: {
    color: {
      type: String,
    }
  },
  data () {
    return {
      searchText: '',
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
