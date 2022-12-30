// Array: Lista de datos
const frutas = ['Manzana', 'Platano', 'Cereza', 'Fresa'];

console.log(frutas)
console.log(frutas.length) // Longitud del array
console.log(frutas[3]) // Acceder a un elemento

// Mutacion del array
const masFrutas = frutas.push('Uvas') // Agrega un elemento al final
console.log(frutas)
console.log(masFrutas)

const ultimo = frutas.pop() // Elimina el ultimo elemento | Devuelve el elemento eliminado
console.log(ultimo)

const nuevaLongitud = frutas.unshift('Pera') // Agrega un elemento al inicio
console.log(frutas)
console.log(nuevaLongitud)

const primero = frutas.shift('Pera') // Agrega un elemento al inicio
console.log(frutas)
console.log(primero)

const posicion = frutas.indexOf('Platano') // Devuelve el numero de la posicion
console.log(frutas)
console.log(posicion)