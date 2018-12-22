var sacha = {
    nombre: 'sacha',
    apellido: 'lifzyc',
    edad: 28
  }

  function imprimirNombreEnMayusculas(persona) {
    //var nombre = persona.nombre 
    //es igual a la de abajo
    var { nombre } = persona
    console.log(nombre.toLocaleUpperCase())
  }
  
  
  imprimirNombreEnMayusculas(sacha)

//Cuando pasamos objetos las funciones son por referencia
//Cambian los atributos del objeto que esta fuera de la funcion
  function cumpleanos(persona){
    persona.edad+=1
  }

// la siguiente funcion devuelve un nuevo objeto para no modificar el otro
function cumpleanos(persona){
    return{
       //para copiar todo lo que tenia el objeto anterior
       ...persona,
       edad: persona.edad+1 

    }
}

  cumpleanos(sacha)