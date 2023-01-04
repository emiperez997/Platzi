const { exec, spawn } = require('child_process');

// stdout -> Standard output
// sterr -> Standard error
// exec('ls -la', (err, stdout, sterr) => {
//   if(err) {
//     console.log(err);
//     return false;
//   }

//   console.log(stdout); 
// })

// exec('node consola.js', (err, stdout, sterr) => {
//   if(err) {
//     console.log(err);
//     return false;
//   }

//   console.log(stdout);
// })

// spawn -> comando, [argumentos]
let proceso = spawn('ls', ['-la']);
console.log(proceso.pid); // Id del proceso
console.log(proceso.connected) // Si el evento esta en linea
proceso.stdout.on('data', (dato) => { // Cuando salga algun dato, lo muestra
  console.log('¿Está muerto?');
  console.log(proceso.killed);
  console.log(dato.toString());
});
proceso.on('exit', () => {  // Cuando el proceso termine, sale un mensaje
  console.log('El proceso termino')
})