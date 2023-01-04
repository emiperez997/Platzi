const { callbackify } = require("util");
const { Z_ASCII } = require("zlib")

function asincrona(callback) {
  setTimeout(() => {
    try {
      let a = 3 + z;
      callback(null, a);
    } catch (err) {
      callback(err, null);
    }
  }, 1000);
}

asincrona((err, dato) => {
  if(err) { // De esta manera es mas practico para funciones asincronas
    console.error('Tenemos un error');
    console.error(err);
    return false;
    // throw err; // No va a funcionar
  }
  console.log('Todo salio bien!');
  console.log(dato);
})