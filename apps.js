const app = Vue.createApp({
data() {
    return {
    tareasA: 'Lista de tareas',
    tareasB: 'Lista de compras',
    vueLink: 'https://vuejs.org',
    }
},
methods: {
    changeTareas() {    
        const randomNumber = Math.random();
        if (randomNumber < 0.5) {
            return this.tareasA;
        } else {
            return this.tareasB;
        }
    }
}
})

app.mount('#tareas')