// Benchmark: Prueba de rendimiento o camparativa
let suma = 0
console.time('bucle') // Inicia a tomar el tiempo
for(let i = 0; i < 100000000; i++){
  suma += 1;
}
console.timeEnd('bucle') // Termina

function asincrona() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log('Termino el proceso asincrono');
      res()
    })
  })
}

console.time('Asincrono');
asincrona()
  .then(() => console.timeEnd('Asincrono'))
