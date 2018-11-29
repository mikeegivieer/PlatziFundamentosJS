var edad = 27

//edad = edad +1
edad+=1

var peso = 75
 //peso = peso -2
 peso -=2 

 var precioDeVino = 200.3
//  var total = precioDeVino * 100 * 3 / 100 //para quitarle los decimales
var total = Math.round(precioDeVino * 100 * 3 )/100 
var totalStr = total.toFixed(2)// siempre ten en cuanta 2 decimales despues de la coma 
var total2 = parseFloat(totalStr)