var sacha = {
   nombre: 'sacha',
   apellido: 'lifzyc',
   edad: 28
}



// function imprimirNombreEnMayusculas(persona){
//   console.log(persona.nombre.toLocaleUpperCase())
// }

//De la siguiente forma solo tenemos que poner entre llaves los
//atributos que nos interesan del objeto

function imprimirNombreEnMayusculas({nombre}){
    console.log(nombre.toLocaleUpperCase())
  }
  

imprimirNombreEnMayusculas(sacha)

//podemos definir el ojeto al llamar a la funcion
imprimirNombreEnMayusculas({nombre : 'pepito'})
//lo siguiente nos daria un error porque estamos intentando acceder 
//a un atributo equivocado
// imprimirNombreEnMayusculas({apellido: 'Gomez'}) 
