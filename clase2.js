var nombre = 'Miguel Angel',apellido = 'Fuentes '
var nombreEnMayusculas = nombre.toLocaleUpperCase()
var apellidoEnMinusculas = apellido.toLocaleLowerCase()

var primeraLetraDelNombre = nombre.charAt(0)
var cantidadDeLetrasDelNombre = nombre.length

//var nombreCompleto = nombre +' '+ apellido

//interpolacion de texto
var nombreCompleto =  `${nombre} ${apellido.toLocaleUpperCase()}`

// var str = nombre.charAt(1) + nombre.charAt(2)
var str =nombre.substr(1,2)//toma un string del caracter 1 al 2 