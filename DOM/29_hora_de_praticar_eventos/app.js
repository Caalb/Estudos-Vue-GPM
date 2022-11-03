new Vue({
  el: "#desafio",
  data: {
    valor: "Valor inical",
  },
  methods: {
    mostrarAlerta() {
      alert("Você está sendo alertado!");
    },
    armazenarValor(e) {
      this.valor = e.target.value;
    }
  },
});
