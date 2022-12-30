// Scope: Ambiente o Contexto
let nombre = "Emi"; // -> Scope global

const funcion = () => {
  let apellido = "Perez"; // -> Scope local
  console.log(`${nombre} ${apellido}`);
}
