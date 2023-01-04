function hola(nombre, callback) {
  setTimeout(() => {
    console.log(`Hola ${nombre}`);
    callback(nombre);
  }, 1000);
}

function hablar(callback){
  setTimeout(() => {
    console.log('Blah blah blah');
    callback()
  }, 1000)
}

function adios(nombre, callback){
  setTimeout(() => {
    console.log(`Adios ${nombre}`);
    callback();
  }, 1000);
}

// Funcion recursiva
function conversacion(nombre, veces, callback){
  if(veces > 0){
    hablar(() => {
      conversacion(nombre, --veces, callback);
    })
  } else {
    adios(nombre, callback);
  }
}

hola('Carlos', (nombre) => {
  conversacion(nombre, 3, () => {
    console.log('Proceso terminado')
  })
})

// --

console.log('Iniciando proceso');
// Callback hell
// hola('Emi', (nombre) => {
//   hablar(() => {
//     hablar(() => {
//       hablar(() => {
//         adios(nombre, () => console.log('Terminando proceso'));
//       })
//     })
//   })
// });