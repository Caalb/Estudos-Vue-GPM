new Vue({
	el: '#desafio',
	data: {
		classe1: 'destaque',
		aplicarDestaque: false,
		classeInformada: '',
		classeInformadaTrueOrFalse: '',
		trueOrFalse: '',
		cor5: '',
		estilo5: {
			width: '100px',
		},
		estilo5_2: {
			height:'100px',
		},
		width: '0',
	},
	methods: {
		iniciarEfeito() {
			setInterval(() => {
				this.classe1 = this.classe1 == 'destaque' ? 'encolher' : 'destaque'
			}, 1000)
		},
		iniciarProgresso() {
			let valor = 0
			const temporatizador = setInterval(() => {
				valor+=5
				this.width = `${valor}%`
				if(valor == 100) valor = 0
			}, 200)
		}
	}
})
