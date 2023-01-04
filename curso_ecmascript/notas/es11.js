// Junio 2020

// Optional Chaining
// Es opcional, se debe utilizar cuando probablemente un valor no exista

const users = {
  emi: {
    country: 'AR'
  },
  yessi: {
    country: 'AR'
  }
}

// console.log(users.emi.country);
// console.log(users.bebeloper?.country); // Si existe bebeloper en users

// BigInt
const aBigNumber = 32423553223522312321n; // La n significa representa un numero grande
const anotherBigNumber = BigInt(32423553223522312321)
// console.log(aBigNumber)
// console.log(anotherBigNumber)

// Nullish
const num = null;
const validate = num ?? 5;
// console.log(validate)

// Promise.allSettled
// const promise1 = new Promise((res, rej) => rej('Reject'))
// const promise2 = new Promise((res, rej) => res('Resolve'))
// const promise3 = new Promise((res, rej) => res('Resolve 2'))

// Promise.allSettled([promise1, promise2, promise3])
//   .then(res => console.log(res))
//   .catch(err => console.log(err))

// Global This
// console.log(window);
// console.log(global) // Node
// console.log(self) // Webworker
// console.log(globalThis); // Sirve para cualquier contexto

// Match All
const regex = /\b(Apple)+\b/g;

const fruits = 'Apple, Banana, Kiwi, Orange, Apple, Pinapple';

for(const match of fruits.matchAll(regex)){ // Devuelve un array con el index y el texto
  // console.log(match)
}

// Dynamic Import: Se utiliza async await para importar el modulo