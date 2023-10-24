/*Freezing
Can't move at all
Screaming
Can't hear my call
I am dying to live
Cry out
I'm trapped under ice */

var data = new Date()
var semana = data.getDay()

switch(semana) {
    case 0:
        console.log('Domingo')
    break
    case 1:
        console.log('Segunda')
    break
    case 2:
        console.log('Terça')
    break
    case 3:
        console.log('Quarta')
    break
    case 4:
        console.log('Quinta')
    break
    case 5:
        console.log('Sexta')
    break
    case 6:
        console.log('Sábado')
    break
    default:
        console.log('comando invalido fdp')
    break
};