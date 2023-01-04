// const process = require('process');

process.on('beforeExit', () => console.log('Ya casi me voy')) // Antes de terminar

process.on('uncaughtException', (error) => console.error('Sucedio un error:', error)) // Capturar Errores
process.on('uncaughtRejection', (error) => console.error('Sucedio un error en la promesa', error)) // Capturar Rejects

// En el exit debo usar metodos sincronos, ya que son los ultimos que se ejecutan
process.on('exit', () => console.log('Adios')) // Cuando termina

funcitonInexistente()