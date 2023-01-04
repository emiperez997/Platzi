// Object Literals
// function newUser(user, age, country, uId){
//   return {
//     user, // Forma nueva 
//     age,
//     country,
//     id: uId // Forma vieja
//   }
// }

// console.log(newUser('misqg', 34, 'AR', 1))

// Promises
// const anotherFunction = () => {
//   return new Promise((res, rej) => {
//     if(true && false) {
//       res('Se logro we');
//     } else {
//       rej('NO se logro we')
//     }
//   })
// }

// anotherFunction()
//   .then(res => console.log(res))
//   .catch(err => console.log(err))

// Clases
// class User {
//   // Constructor
//   constructor(name) {
//     // this
//     this.name = name
//     console.log('Nuevo usuario')
//   }

//   // Metodos
//   saludo(){
//     return `Holi ${this.name}`

//   }

//   // Get y Set
//   // No se debe llamar igual que la propiedad a cambiar
//   get uName() {
//     return this.name
//   }

//   set uName(newName){
//     this.name = newName
//   }

// }

// const newUser = new User('Emi')

// console.log(newUser.saludo())
// newUser.uName = 'Nico'

// console.log(newUser.saludo())

// Module
// Es necesario usar la extension .mjs o configurar el package.json
// import hello from './module.mjs'

// hello()

// Generadores
// function* iterate(array){ // * -> Lo identifica como generador
//   for(let value of array) {
//     yield value; // Pausa y devuelve el siguiente valor del generador 
//   }
// }

// const it = iterate(['Emi', 'Yessi', 'Mateo', 'Alberto'])
// console.log(it.next().value)
// console.log(it.next().value)
// console.log(it.next().value)
// console.log(it.next().value)
// console.log(it.next().value)

// Set - Add
const list = new Set(); // Es una coleccion de valores

list.add('Item 1');
list.add('Item 2').add('Item 3');
console.log(list);