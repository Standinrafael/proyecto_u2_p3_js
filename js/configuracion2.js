const numeros = [1, 2, 3, 4, 5]

console.log(numeros)

const frases = [{ texto: 'siuuuu', autor: 'el bicho' },
{ texto: 'anda pa alla bobo', autor: 'messi' },
{ texto: ' calla gordo', autor: 'cuortois' },
{ texto: 'bueno, vamo a jugar', autor: 'aguero' },
{ texto: 'perdon a todo el ecuador', autor: 'goat valencia' },
{ texto: 'ter stegen es mejor', autor: 'ibai' },
{ texto: 'aaaaaaaaaaa', autor: 'maradona' },
{ texto: 'carritos chocones', autor: 'hincapie' },]

console.log(frases)

console.log(Vue)

const app = Vue.createApp({

    data() {
        return {
            arreglo: frases
        }

    }

})

app.mount('#myApp2')