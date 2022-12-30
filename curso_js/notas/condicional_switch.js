// Switch: Funciona con "casos" (case)

const numero = Math.floor(Math.random() * 20)

switch(numero){
  case 1:
    console.log('Es uno')
    break;

  case 12:
    console.log('Es 12, el dia en que me caso')
    break;

  case 13:
    console.log('Es 13 (El año de la madurez)')
    break;

  default:
    console.log(`Numero fuera de mi interes: ${numero}`)
}