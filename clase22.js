function Persona (nombre, apellido, altura){
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
  //   console.log('me ejecutaron')

}

Persona.prototype.saludar = ()=>console.log('Holaa')


Persona.prototype.soyAlto = ()=>this.altura >1.8
  

var sacha = new Persona('Sacha','Lifzyc',1.72)
sacha.saludar()