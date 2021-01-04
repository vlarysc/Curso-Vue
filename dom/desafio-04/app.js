new Vue({
	el: '#desafio',
	data: {
		classe1: "destaque",
		classe2: "cor",
		aplicarGirar: true,
		aplicarClass: false,
		classeCSS: 'cor1',
		cor: 'red',
		classe3: '',
		classe4: '',
		cor1: '',
		estilo2: {
			width: '100px',
			height: '100px'
		},
		width: '0'

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
		set(event) {
			if (event.target.value == 'true') {
				this.aplicarGirar = true
			} else if (event.target.value == 'false') {
				this.aplicarGirar = false
			}
		},
		iniciarProgresso() {
			let valor = 0
			const temporizador = setInterval(() => {
				valor += 5
				this.width = `${valor}%`
				if(valor == 100) clearInterval(temporizador)
			}, 1000)			
		}
	}
})
