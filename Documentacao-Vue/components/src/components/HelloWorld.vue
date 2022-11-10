<template>
  <div class="button">
    {{count}}
    <button @click="aumentar">Aumentar 1</button>
  </div>
</template>

<script>
export default {
  props: {

  },
  data: function () {
    return {
      count: 0
    }
  },
  methods: {
    aumentar() {
      this.count++;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
