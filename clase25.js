class Persona {
    constructor (nombre, apellido, altura){
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura 
    }

    saludar(){
        console.log('Holaa')  
    }

    soyAlto(){
        return  this.altura >1.8    
    }
}

class Desarrollador extends Persona {

    constructor (nombre, apellido, altura){
        super(nombre, apellido,altura)
      }

      saludar(){
        console.log('Hola soy desarrollador')      
      }
  
}



  

  
  