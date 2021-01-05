new Vue({
    el: '#projeto',
    data: {
        vjogador: 100,
        vmonstro: 100,
        jogar: true        
    },
    computed: {
        hasResult() {
            return this.vjogador == 0 || this.vmonstro == 0
        }
    },
    methods: {
        

    },
    watch: {

    }
})