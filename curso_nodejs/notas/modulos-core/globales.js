// // console.log(global)
// // console.log(setInterval);
// let i = 0;
// let intervalo = setInterval(() => {
//   if(i === 3) {
//     clearInterval(intervalo);
//   }
//   i++;
//   console.log('Hola');
// }, 1000);

// setImmediate(() => { // Ejecuta el codigo inmediato
//   console.log('Hola')
// })

// // require(); // Para importar modulos
// // console.log(process)
// console.log(__dirname); // Lee el directorio actual
// console.log(__filename); // Lee la ruta el archivo actual

// Crear una variable global
global.miVariable = 'elValor';
console.log(miVariable)