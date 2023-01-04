// Flat
// const array = [1, 2, 3, 4, [1, 2, 3, [1, 2, 3]]];
// console.log(array.flat(3)) // Recibe la profundidad

// Flat Map
const array = [1, 2, 3, 4, 5];
// console.log(array.flatMap((v) => [v, v * 2] ))

// TrimStart
const hello = '                Hello World!               '
// console.log(hello.trimStart())
// console.log(hello.trimEnd())

// Try y Catch
// try {
//   hello();
// } catch (error) {
//   console.log(error)
// }

// try {
//   anotherFn();
// } catch(error) {
//   console.log('Salto error pa!')
// }

// From Entries
const entries = new Map([['name', 'emi'], ['age', 24]]); // Map genera un objeto desde un array
console.log(entries)
console.log(Object.fromEntries(entries));
