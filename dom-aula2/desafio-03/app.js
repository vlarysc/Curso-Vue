new Vue({
  el: "#desafio",
  data: {
    valor: 0
  },
  watch: {
    valor(novo, antigo) {
      console.log(novo, antigo);
      setTimeout(() => {
        this.valor = 0;
      }, 5000);
    }
  },
  computed: {
    resultado() {
      return this.valor == 37 ? "Valor igual" : "Valor diferente";
    }
  },
  methods: {
    valor5() {
      this.valor += 5;
    },
    valor1() {
      this.valor++;
    }
  }
});
