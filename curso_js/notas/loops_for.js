// For y For... of
const estudiantes = ['Maria', 'Sergio', 'Rosa', 'Daniel']

const saludarEstudiantes = (estudiante) => {
  console.log(`Hola, ${estudiante}`)
}

// for(let i = 0; i < estudiantes.length; i++){
//   saludarEstudiantes(estudiantes[i])
// }

for(let estudiante of estudiantes){
  console.log(`Hola, ${estudiante}`)
}