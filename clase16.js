var signo = prompt('Cual es tu signo')
console.log  (signo)

switch(signo){
    case 'acuario':
    console.log ('Es acuario bla bla bla ')
    break

    case 'sagitario':
    console.log ('Es sagitario bla bla bla ')
    break

    //entra en ambos casos
    case 'géminis':
    case 'geminis':
    console.log ('Es geminis bla bla bla ')
    break

    default:
    console.log ('No es un signo Zodiacal valido')
    break

}


// if(signo === 'acuario'){
//     console.log ('Es acuario bla bla bla ')
// }

// if(signo === 'sagitario'){
//     console.log ('Es sagitario bla bla bla ')
// }