// Junio 2021

// Numeric Separator
// const value = 100_000_000_000;
// console.log(value)

// Replace All
const string = "JavaScript es un maravilloso lenguaje de programación";
const replacedString = string.replace('JavaScript', 'TypeScript');

// console.log(replacedString);

// Promise.any
// const promise1 = new Promise((res, rej) => rej('Reject'));
// const promise2 = new Promise((res, rej) => res('Resolve'));
// const promise3 = new Promise((res, rej) => res('Resolve 2'));

// Promise.any([promise1, promise3, promise2]) // Captura el resultado del primero que resuelva bien
//   .then(res => console.log(res))

// Metodos privados
class User {
  #textoSecreto;

  constructor(texto){
    this.#textoSecreto = texto
  }

  getTextoPrivado(){
    return this.#textoSecreto
  }
}

const user = new User('Texto secreto')
console.log(user.getTextoPrivado())
// console.log(user.#textoSecreto); // No se puede acceder porque es privado