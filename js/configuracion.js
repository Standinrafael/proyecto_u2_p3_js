console.log(Vue)

//configuracion

//sentenciade Vue
//Option API
const app = Vue.createApp({
    // template:`
    // <h2>Hola Mundo!!</h2>
    // <p>{{1+1}}</p>
    // `

    data() {
        // propiedades reactivas
        return {
            mensaje: 'Hola estrellitas',
            nombre: 'Jorge',
            apellido: 'Sanchez'
        }

    },
    methods: {
        cambiarNombre(event) {
            console.log('event')
            console.log('Cambiar nombre')
            this.nombre = 'Stefany'
        },

        cambiarApellido(event) {
            console.log('event')
            this.apellido = 'Arciniega'
        }

    }
})

//dar identificador con el numeral
app.mount('#myApp')