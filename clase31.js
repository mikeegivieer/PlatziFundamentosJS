const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

const opts = { crossDomain:true }

function obtenerPersonaje(id, callback){
    const url = `${API_URL}${PEOPLE_URL.replace(':id',id)}`
    $.get(url,opts, callback).fail(function (){
        console.log(`Sucedio un error no se pudo obtener el personaje ${id}` )
    })
}

//Metodos asincronos, no sabemos en que orden nos van a llegar las respuestas
//Callback Hell el infierno de los callbacks
obtenerPersonaje(1,function(persona){
    console.log(`Hola, yo soy ${persona.name}`)
    
        obtenerPersonaje(2,function (persona){
            console.log(`Hola, yo soy ${persona.name}`)
                
                obtenerPersonaje(3, function(persona){
                    console.log(`Hola, yo soy ${persona.name}`)
                } )
                        
    })
})
// obtenerPersonaje(2)
// obtenerPersonaje(3)