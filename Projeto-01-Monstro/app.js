new Vue({
    el: '#app',
    data: {
        playerLife: 100,
        monsterLife: 100,
        iniciarGame: false,
        logAtaque:[],
        logCura: [],
    },
    computed: {

    },
    methods: {
        iniciar() {
            this.iniciarGame = true;
            this.playerLife = 100;
            this.monsterLife = 100;
        },
        encerrar() {
            window.location.reload()
            this.logs = []
        },
        ataque() {
            const numPlayer = Math.floor(Math.random() * 10 + 1)
            const numMoster = Math.floor(Math.random() * 6 + 1)
            this.playerLife -= numPlayer
            this.monsterLife -= numMoster
            this.logAtaque.push([numPlayer, numMoster])
        },
        ataqueEspecial() {
            const numPlayer = Math.floor(Math.random() * 7 + 1)
            const numMoster = Math.floor(Math.random() * 10 + 1)
            this.playerLife -= numPlayer
            this.monsterLife -= numMoster
            this.logAtaque.push([numPlayer, numMoster])
        },
        curar() {
            const numPlayer = Math.floor(Math.random() * 5 + 1)
            const numCura = Math.floor(Math.random() * 10 + 1)
            this.playerLife -= numPlayer
            this.playerLife += numCura
            this.logCura.push([numPlayer, numCura])
        }
    },
})