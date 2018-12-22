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