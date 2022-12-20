const estudiantes=[{nombre:'Jorge',apellido:'Sanchez', direccion:'Esmeraldas y Napo'},
{nombre:'Maria',apellido:'Andrade', direccion:'San Isidro'}]
console.log(Vue)
console.log(estudiantes)

const app = Vue.createApp({

    data() {
        return {
            arreglo: estudiantes,
            nombreNuevo:null,
            apellidoNuevo:null,
            direccionNueva:null
        }

    },
    methods:{
    
        agregarEstudiante(){

            const estudianteObjetoNuevo={
            nombre:this.nombreNuevo,
            apellido:this.apellidoNuevo,
            direccion:this.direccionNueva
           
           }
            this.arreglo.unshift(estudianteObjetoNuevo)
        }

    }
})

app.mount('#myApp3')