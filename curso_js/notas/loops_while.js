// While 
const estudiantes = ['Maria', 'Sergio', 'Rosa', 'Daniel']

const saludarEstudiantes = (estudiante) => {
  console.log(`Hola, ${estudiante}`)
}

while(estudiantes.length > 0){
  let estudiante = estudiantes.shift()

  saludarEstudiantes(estudiante)
}