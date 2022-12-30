// If
const edad = 25;

if (edad === 18) {
  console.log("Puede votar");
} else if (edad > 18) {
  console.log("Puede votar otra vez");
} else {
  console.log("No puede votar");
}

// Operador ternario
// condicion ? true : false
console.log(5 < 6 ? "Es true" : "Es false");

// Juego Piedra Papel o Tijera
const piedra = "Piedra";
const papel = "Papel";
const tijera = "Tijera";

const juego = (usuario, cpu) => {
  if (usuario !== cpu) {
    if (
      (usuario === piedra && cpu === tijera) ||
      (usuario === papel && cpu === piedra) ||
      (usuario === tijera && cpu === papel)
    ) {
      return `Gana usuario: ${usuario} - ${cpu}`;
    } else if(
      (cpu === piedra && usuario === tijera) ||
      (cpu === papel && usuario === piedra) ||
      (cpu === tijera && usuario === papel)
    ){
      return `Gana cpu: ${usuario} - ${cpu}`;
    }
  } else {
    return "Empate";
  }
};

console.log(juego(piedra, tijera))
console.log(juego(papel, tijera))
console.log(juego(tijera, tijera))
console.log(juego(piedra, papel))
console.log(juego(tijera, papel))