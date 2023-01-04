function hola(nombre) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log(`Hola ${nombre}`);
      res(nombre);
    }, 1000);
  });
}

function hablar(callback){
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log('Blah blah blah');
      rej('Hay un error')
    }, 1000)
  });
}

function adios(nombre){
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log(`Adios ${nombre}`);
      res();
    }, 1000);
  })
}

// --

console.log('Iniciando el proceso')

const main = async () => {
  await hola('Emi');
}

main()