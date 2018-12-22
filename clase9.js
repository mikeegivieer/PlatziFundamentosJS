var x = 4, y = '4'
//x == y regresa true los cambia al mismo tipo de dato y lo compara
// x === y regresa false porque  x es un numero y y es un caracter
//siempre que podamos utilicemos el triple igual

var sacha ={
    nomre = 'sacha'
}

// var otraPersona ={
//     nomre = 'sacha'
// }
//sacha == otraPersona da false, porque comprara objetos y cuando lo hacemos 
//js pregunta por la referencia a la variable y obviamente es distinta 
//lo mismo con el ===


var otraPersona ={
    //objeto literal
    ...sacha
}
//si comparamos sacha == otraPersona da false porque es otro lugar en memoria ram
