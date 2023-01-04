const os = require('os');

// console.log(os.arch()) // Arquitectura (32 o 64 bits)
console.log(os.platform()); // Linux o Windows
// console.log(os.cpus) // Los nucleos
// console.log(os.constants)
// console.log(os.freemem()); // Muestra la memoria libre

const SIZE = 1024
function kb(bytes) {
  return bytes / SIZE
} 

function mb(bytes) {
  return kb(bytes) / SIZE
} 

function gb(bytes) {
  return mb(bytes) / SIZE
} 

console.log(kb(os.freemem()))
console.log(mb(os.freemem()))
console.log(gb(os.freemem()))

console.log(gb(os.totalmem()))

console.log(os.homedir()) // Ruta hogar
console.log(os.tmpdir()) // Ruta de archivos temporales
console.log(os.hostname()) // Nombre de host

console.log(os.networkInterfaces()) // Interfaces de red