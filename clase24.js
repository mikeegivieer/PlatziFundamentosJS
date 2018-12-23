function heredaDe(prototipoHijo,prototipoPadre){
  var fn = function(){
      fn.prototype =prototipoPadre.prototype
      prototipoHijo.prototype = new fn 
      prototipoHijo.prototype.constructor = prototipoHijo
  }
}


function Persona (nombre, apellido, altura){
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
  //   console.log('me ejecutaron')

}

Persona.prototype.saludar = function (){
    console.log('Holaa')
}

Persona.prototype.soyAlto =  function (){
  return  this.altura >1.8
}

function Desarrollador(nombre, apellido){
    this.nombre = nombre,
    this.apellido = apellido
  }
  
  Desarrollador.prototype.saludar = function(){
      console.log('Hola soy desarrollador')
  }


heredaDe(Desarrollador,Persona)



  
  var sacha = new Persona('Sacha','Lifzyc',1.72)
// sacha.saludar()