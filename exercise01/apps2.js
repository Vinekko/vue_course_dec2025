const app = Vue.createApp({
data() {
    return {
    nombre: 'Vincenzo',
    apellido: 'Fernandez',
    edad: 22,
    movie: 'https://www.wikidex.net/wiki/P20',
    favNumber: 10,
}
},
methods: {
    sumarEdad() {
        return this.edad + 5;
    },
    changeNumber() {
        this.favNumber = Math.floor(Math.random() * 100) + 1; // Generates a random number between 1 and 100
        return this.favNumber;
    },
}
})

app.mount('#yo')    