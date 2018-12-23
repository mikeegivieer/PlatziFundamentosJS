class Persona {
    constructor (nombre, apellido, altura){
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura 
    }

    saludar(fn){
        console.log( `Hola me llamo ${this.nombre} ${this.apellido} `) 
        if(fn){
            
        }
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


function responderSaludo(nombre, apellido,esDev){
    console.log( `Buen dia  ${nombre} ${apellido} `) 

    if(esDev){
        console.log( `A mira no sabia que eras desarrollador `) 
    }
}



  

  
  var sacha = new Persona('Sacha', 'Lifzyc',1.72)
  var arturo = new Desarrollador('Arturo', 'Lifzyc',1.72)

  sacha.saludar(responderSaludo)