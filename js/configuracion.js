console.log(Vue)

//configuracion

//sentenciade Vue
const app= Vue.createApp({
    template:`
    <h2>Hola Mundo!!</h2>
    {{1+1}}
    `
})

//dar identificador con el numeral
app.mount('#myApp')