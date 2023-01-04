function hola(nombre, callback) {
  setTimeout(() => {
    console.log(`Hola ${nombre}`);
    callback(nombre);
  }, 1000);
}

function adios(nombre, callback){
  setTimeout(() => {
    console.log(`Adios ${nombre}`);
    callback();
  }, 1000);
}

console.log('Iniciando proceso');
hola('Emi', (nombre) => {
  adios(nombre, () => console.log('Terminando proceso'));
});