new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        botao() {
            alert("Você está sendo alertado")
        },
        armazenar(event) {
            this.valor = event.target.value
        },
        armazenar2(event) {
            this.valor = event.target.value
        }
    }
})