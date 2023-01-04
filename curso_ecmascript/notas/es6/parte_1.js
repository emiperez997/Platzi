// Junio 2015

// var lastName = "Emi"; // Inicialización
// lastName = "Arturo"; // Reasingacion
// console.log(lastName)

// let fruit = 'Apple';
// fruit = 'Kiwi';
// console.log(fruit)

// const animal = "Dog";
// // animal = 'Cat'; No se puede reasingar
// console.log(animal);

// const fruits = () => { // Arrow Function
//   if(true) {
//     var fruit1 = 'Apple'; // Function scope
//     let fruit2 = 'Kiwi'; // Block Scope
//     const fruit3 = 'Banana'; // Block Scope
//   }
//   console.log(fruit1)
//   // console.log(fruit2) No entra en el scope
//   // console.log(fruit3)
// }

// fruits()

// // Arrow Function
// // function square(num) {
// //   return num * num
// // }

// const square = (num) => num * num

// // Strings
// let hello = 'Holi';
// let world = 'World'

// let epicPhrase = hello + ' ' + world + '!'; // Forma vieja de juntar textos 
// console.log(epicPhrase)

// // Template literals
// let epicPhrase2 = `${hello} ${world}!`

// // Multi-line strings
// let lorem = 'Esto es un string \n ' + 'Otra linea' // Forma vieja de salto de linea
// let lorem2 = `Esto es una frase epica
// Continuacion de frase epica
// `; // Se puede escribir el texto en varias lineas 

// console.log(lorem)
// console.log(lorem2)

// Default params
// function newUser(name, age, country) { // Manera vieja
//   var name = name || 'Oscar';
//   var age = age || 23;
//   var country = country || 'EEUU';
//   console.log(name, age, country);
// }

// newUser();
// newUser('Emi', 23);
// newUser('Emi', 25);

// function newAdmin(name = 'Oscar', age = 34, country = 'CL'){
//   console.log(name, age, country)
// }

// newAdmin();
// newAdmin('Emi', 23);
// newAdmin('Emi', 25);

// Array destructuring
let fruits = ['Apple', 'Banana'];
let [a, b] = fruits; // Destructuring
console.log(a, b)

// Object Destructuring
let user = { username: 'Emi', age: 25 };
let { username, age} = user
console.log(username, user.age);

// Spread Operator
let person = { name: 'Emi', age: 25};
let country = 'AR';

let data = {id: 1, ...person, country}  // Se convina los datos
console.log(data)

// Rest
function sum(num, ...values){ // Se crea un array del resto de elementos que le pase luego del primer parametro
  console.log(values)
  console.log(num + values[0])
  return num + values[0]
}

sum(1, 2, 3, 4, 5)