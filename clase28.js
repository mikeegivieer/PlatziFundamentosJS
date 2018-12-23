const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id',1)}`
const opts = { crossDomain:true }

const onPeopleResponse =  function(persona){
    // console.log(arguments)//crea un array con todos los parametros que se le enviaron a la funcion
  //Esta funcion solo s ejecuta si el request es exitoso
    console.log(`Hola yo soy, ${persona.name}`)
}

$.get(lukeUrl,opts, onPeopleResponse)