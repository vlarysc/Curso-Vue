new Vue({
    el: '#desafio',
    data: {
        title: 'Usando VueJS:',
        titulo: ' Manoel Neto ',
        idade: '26',
        titulo2: 'anos',
        link: 'https://ichef.bbci.co.uk/news/640/cpsprodpb/F403/production/_109476426_jheison3.png'        
    },
    methods: {
        alterarTitulo(event) {
            this.titulo = event.target.value
        }
        
       
    }
})