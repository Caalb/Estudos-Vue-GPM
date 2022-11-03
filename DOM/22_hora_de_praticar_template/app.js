new Vue({
  el: "#desafio",
  data: {
    nome: "Carlos",
    idade: 19,
    link: "https://positivethinking.tech/wp-content/uploads/2021/01/Logo-Vuejs.png"
  },
  methods: {
    numRandomico() {
      return Math.random();
    }
  }
}) 