function Persona (nombre, apellido){
      this.nombre = nombre
      this.apellido = apellido
    //   console.log('me ejecutaron')

}

Persona.prototype.saludar = function(){
    console.log('Holaa')
}



var sacha = new Persona('Sacha','Lifzyc')
sacha.saludar()