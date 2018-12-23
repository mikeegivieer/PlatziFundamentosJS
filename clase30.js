const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

const opts = { crossDomain:true }

function obtenerPersonaje(id, callback){
    const url = `${API_URL}${PEOPLE_URL.replace(':id',id)}`
    $.get(url,opts,  function(persona){
       console.log(`Hola, yo soy ${persona.name}`)

       if(callback){
           callback()
       }
    })
}

//Metodos asincronos, no sabemos en que orden nos van a llegar las respuestas
//Callback Hell el infierno de los callbacks
obtenerPersonaje(1,function(){
    obtenerPersonaje(2,function (){
        obtenerPersonaje(3)        
    })
})
// obtenerPersonaje(2)
// obtenerPersonaje(3)