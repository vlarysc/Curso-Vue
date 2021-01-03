new Vue({
	el: '#desafio',
	data: {
		classe1: "destaque",
		classe2: "cor",
		aplicarGirar: true,
		aplicarClass: false,
		classeCSS: 'cor1'

	},
	methods: {
		iniciarEfeito() {
			setInterval(() => {
				this.classe1 = this.classe1 ==  'destaque' ? "encolher" : "destaque"
				
			}, 2000);

		},
		estilo1() {
			return {
				cor1: this.aplicarClass,
				cor2: !this.aplicarClass
			}
		},
		iniciarProgresso() {

		}
	}
})
