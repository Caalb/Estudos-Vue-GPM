<template>
  <div id="app">
    <div class="container mt-10">
      <p>{{ $store.state.user.first_name }}</p> <br>
      <label for="">Primeiro nome</label>
      <input type="text" v-model="firstName" class="form-control">
      <button @click="saveName" class="btn btn-primary">Save</button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      myName: ''
    }
  },
  computed: {
    firstName: {
      get() {
        return this.$store.state.user.first_name
      },
      set(value) {
        this.$store.commit('saveFirstName', value)
      }
    }
  },
  methods: {
    saveName() {
      // Action
      // this.$store.dispatch('saveFistName', this.myName)

      // Muttation
      this.$store.commit('saveFirstName', this.myName)
    }
  }
}
</script>

<style>

</style>
