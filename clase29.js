const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

const opts = { crossDomain:true }

const onPeopleResponse =  function(persona){
    // console.log(arguments)//crea un array con todos los parametros que se le enviaron a la funcion
  //Esta funcion solo s ejecuta si el request es exitoso
    console.log(`Hola, yo soy ${persona.name}`)
}

function obtenerPersonaje(id){
    const url = `${API_URL}${PEOPLE_URL.replace(':id',id)}`
    $.get(url,opts, onPeopleResponse)
}

//Metodos asincronos, no sabemos en que orden nos van a llegar las respuestas
obtenerPersonaje(1)
obtenerPersonaje(2)
obtenerPersonaje(3)