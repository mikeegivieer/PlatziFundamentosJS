var sacha = {
    nombre: 'sacha',
    apellido: 'lifzyc',
    edad: 28
  }

  function imprimirNombreEnMayusculas({ persona }) {
    //var nombre = persona.nombre es igual a la de abajo
    var {nombre}= persona
    console.log(nombre.toLocaleUpperCase())
  }
  
  
  imprimirNombreEnMayusculas(sacha)
