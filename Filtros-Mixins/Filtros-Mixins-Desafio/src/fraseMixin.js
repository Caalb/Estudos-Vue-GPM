export default {
  computed: {
		fraseComVirgulas() {
			return this.input.replaceAll(" ", ",")
		},
		fraseComTamanhos() {
			return this.input.split(' ').map(p => `${p} (${p.length})`).join(' ')
		}
	}
}