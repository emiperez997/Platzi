// Object entries y Object Values
const countries = { MX: 'Mexico', CO: 'Colombia', CL: 'Chile', PE: 'Peru', AR: 'Argentina' }
// console.log(Object.entries(countries)) // Convierte el objeto en un array de 2 dimensiones
// console.log(Object.values(countries))

// String padding
const string = 'Hello';
 // El numero cuenta los elementos, si pongo 5 no agrega nada ya que la palabra tiene 5 letras, si pongo mas de 5, va a rellenar el espacio vacio con lo que yo agregue
// console.log(string.padStart(10, 'Hi'))
// console.log(string.padEnd(10, 'Hi')) // Rellena el espacio de caracteres (En este caso sobran 5)

// Trailing commas
const ages = [23, 24, 25, 34, 54, , , ]; // Son posiciones que se crean en el array, por defecto estan vacios
// console.log(ages)
// console.log(ages.length)

// Funciones asincronas
const funcion = () => {
  return new Promise((res, rej) => {
    (true) ? setTimeout(() => res('Se resolvio'), 2000 ) : rej(new Error('No se resolvio'));
  })
}

const anotherFn = async () => {
  const algo = await funcion();
  console.log(algo);
  console.log('Hello');
}

console.log('Antes');
anotherFn()
console.log('Despues')