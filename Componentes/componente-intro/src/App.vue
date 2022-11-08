<template>
 <div id="app">
  <button @click="contador++">Add 1</button>
  <h1>Contadores</h1>
  {{contador}}
 </div>
</template>

<script>
export default ({
  data() {
    return {
      contador:0
    }
  }
})
</script>

<style scoped>

</style>