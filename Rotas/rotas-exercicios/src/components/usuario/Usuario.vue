<template>
  <div class="usuario">
    <h2>Usúarios</h2>
    <hr>
    <router-view />
    <button sucesso @click="irParaInicio">Voltar</button>
  </div>
</template>

<script>
export default {
  methods: {
    irParaInicio() {
      this.$router.push('/')
    }
  }
}
</script>

<style>

</style>