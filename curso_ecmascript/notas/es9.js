// Junio 2018

// Expresiones regulares
const regex = /(\d{4})-(\d{2})-(\d{2})/; // Formato de fecha
const match = regex.exec('2023-01-01')
// console.table(match) // Muestra una tabla 

// Spread operator
const user = { username: 'emi', age: 25, country: 'AR'};
const { username, ...values} = user // Crea una variable values con el resto de los datos del objeto
// console.log(username);
// console.log(values);

// Finally
const funcion = () => {
  return new Promise((res, rej) => {
    if(true && true) {
      res('Si funciona');
    } else {
      rej('No funciona');
    }
  })
}

// funcion()
//   .then((res) => console.log(res))
//   .catch(rej => console.log(rej))
//   .finally(() => console.log('Ya termino we'))

// Async
async function* generador(){
  yield await Promise.resolve(1);
  yield await Promise.resolve(2);
  yield await Promise.resolve(3);
}

const generador2 = generador();
// generador2.next()
//   .then((res) => console.log(res.value))

// generador2.next()
//   .then((res) => console.log(res.value))

// generador2.next()
//   .then((res) => console.log(res.value))

// generador2.next()
//   .then((res) => console.log(res.value))

async function arrayNames(array) {
  for await (let value of array) {
    console.log(value)
  }
}

const names = arrayNames(['Emi', 'Yessi', 'Nico', 'Mateo'])
console.log('Luego')