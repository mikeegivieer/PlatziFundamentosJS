var sacha = {
    nombre: 'sacha',
    apellido: 'Lifzyc',
    edad: 28,
    ingeniero: true,
    cocinero: false
}

function imprimirProfesiones(persona){
    console.log(`${persona.nombre} es: `)
   if(persona.ingeniero){
       console.log('Ingeniero');
   }   
}

const MAYORIA_DE_EDAD = 18

function esMayorDeEdad(persona){
 return persona.edad >=MAYORIA_DE_EDAD
}


function imprimirSiEsMayorEdad(persona){
 if(esMayorDeEdad(persona)){
     console.log(`${persona.nombre} es mayor de edad`)
 }else{
     console.log(`${persona.nombre} es menor de edad`)
 }

}