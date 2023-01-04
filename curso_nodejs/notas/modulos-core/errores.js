function otraFuncion() {
  return seRompe()
}

function seRompe(){
  return 3 + z;
}

function seRompeAsincrona(cb) {
  setTimeout(() => {
    try {
      return 3 + z;
    } catch(err) {
      console.error('Error en mi funcion asincrona');
      cb(err);
    }
  })
}

try {
  // seRompe();
  // otraFuncion();
  seRompeAsincrona((err) => {
    console.log(`Hay un error: ${err.message}`);
  });
} catch(err) {
  console.error(`Vaya algo se rompió: ${err}`);
}

console.log('Final del programa');