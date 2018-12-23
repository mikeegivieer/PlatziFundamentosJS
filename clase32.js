const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

const opts = { crossDomain:true }

function obtenerPersonaje(id){
    return new Promise((resolve, reject)=>{
        const url = `${API_URL}${PEOPLE_URL.replace(':id',id)}`
        $
        .get(url,opts,function(data){
          resolve(data)
        })
        .fail(()=> reject(id))
     })
}

function onError(id){
    console.log(`Sucedio un error con persona id:  ${id}`)
}


obtenerPersonaje(1)
  .then(function (personaje){
    console.log(`Hola, yo soy ${personaje.name}`)  
  })


.catch(onError)