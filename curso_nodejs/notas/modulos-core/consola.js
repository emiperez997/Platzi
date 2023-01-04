// Diferentes logs
// console.log('Log');
// console.info('Info');
// console.error('Error');
// console.warn('Warn')

const tabla = [
  { a: 1, b: 'z', },
  { a: 2, b: 's'}
]
// console.log(tabla)
// console.table(tabla) // Genera una tabla con los datos

// console.group('Conversacion'); // Agrupo los logs
// console.log('Hola');
// console.log('Blah blah blah');
// console.log('Blah blah blah');
// console.log('Adios');
// console.groupEnd('Conversacion');

// console.log('Otra funcion...');

// --

function funcion1() {
  console.group('Funcion 1')
  console.log('Funcion 1 en ejecucion')
  console.log('Funcion 1 sigue en ejecucion')
  funcion2();
  console.groupEnd('Funcion 1')
}

function funcion2(){
  console.group('Funcion 2')
  console.log('Funcion 2 en ejecucion')
  console.log('Funcion 2 sigue en ejecucion')
  console.groupEnd('Funcion 2')
}

// console.log('Empezamos')
// funcion1()

console.count('veces');
console.count('veces');
console.count('veces');
console.count('veces');
console.count('veces');
// Output: veces 1 veces 2...