var victoria = {
    nombre: 'victoria',
    apellido: 'Zapata',
    altura: 1.56
}

var paula = {
    nombre: 'paula',
    apellido: 'Fuentes',
    altura: 1.34
}

var marcelo = {
    nombre: 'marcelo',
    apellido: 'Fuentes',
    altura: 1.34
}

const esAlta =({altura})=> altura > 1.4

var personas = [victoria, paula, marcelo]

//filter va iterar por nosotros el array
var personasAltas = personas.filter(esAlta)

// var personasAltas = personas.filter(function (persona){
//     return persona.altura > 1.4
// })


console.log(personasAltas)

