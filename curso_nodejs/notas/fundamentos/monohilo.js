// El problema de que sea monohilo es que cuando falla algo durante el proceso de ejecución, se para todo el programa. Por eso cuidado de lo que haces
console.log('Hola Mundo!');

let i = 0;
setInterval(() => {
  console.log(i);
  i++;

  if(i === 5){
    var a = 3 + z; // Este error sale en momento de ejecucion
  }
}, 1000); // Espera un segundo para disparar el evento de console.log