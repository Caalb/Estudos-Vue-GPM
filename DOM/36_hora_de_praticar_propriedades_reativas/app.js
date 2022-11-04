new Vue({
  el: "#desafio",
  data: {
    valor: 0,
  },
  computed: {
    resultado() {
      return (resultado =
        this.valor == 37 ? "Valor igual a 37" : "Valor diferente que 37");
    },
  },
  watch: {
    resultado() {
      setTimeout(() => {
        this.valor = 0;
      }, 5000);
    },
  },
});
