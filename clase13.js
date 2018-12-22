var sacha = {

    nombre: 'sacha',
    apellido: 'Perex',
    edad:28,
    peso:75
}

console.log( `AL inicio del año  ${sacha.nombre}  pesa ${sacha.peso}kg` )

const INCREMENTO_PESO = 0.2
const DIAS_DEL_ANO = 365

// function aumentarDePeso (persona){
// return persona.peso += 200
// } Esto es lo mismo que :
const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO
const adelgazar = persona => persona.peso -= INCREMENTO_PESO


for(var i=1; i<=DIAS_DEL_ANO;i++){

    var random = Math.random()
    if(random < 0.25){
        //aumenta de peso 
        aumentarDePeso(sacha)
    }else if (random < 0.5){
        //adelgazar
        adelgazar(sacha)
    }
}

console.log( `AL final del año  ${sacha.nombre}  pesa ${sacha.peso.toFixed(2)}kg`) 