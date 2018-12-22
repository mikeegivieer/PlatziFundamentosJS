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

//funcion anonima
// const esMayorDeEdad = function(persona){
//  return persona.edad >=MAYORIA_DE_EDAD
// } 

//arrow function
// const esMayorDeEdad = (persona)=> {
//     return persona.edad >=MAYORIA_DE_EDAD
//    }
//cuando tenemos 1 solo arametro podemos obviar los parentesis 
// const esMayorDeEdad = persona => {
//     return persona.edad >=MAYORIA_DE_EDAD
//    }
//si una funcion solo regresa algo podemos borrar el rerurn y las llaves
// const esMayorDeEdad = persona => persona.edad >=MAYORIA_DE_EDAD

//Desestructurar el objeto 
//le pasamos un objeto que tiene una edad 
const esMayorDeEdad = ({edad}) => edad >=MAYORIA_DE_EDAD
   



function imprimirSiEsMayorEdad(persona){
 if(esMayorDeEdad(persona)){
     console.log(`${persona.nombre} es mayor de edad`)
 }else{
     console.log(`${persona.nombre} es menor de edad`)
 }

}