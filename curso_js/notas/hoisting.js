// Hoisting: Es cuando variables y funciones se procesan antes de ejecutarse o utilizarse
// ES6 en adelante usan let y const
// En ES6 no funciona

console.log(miNombre); // Al utilizar var, no tira error, pero devuelve undefined

var miNombre = "Diego";

// hey(); // esto funciona porque utilizamos la funcion declarativa

// function hey() {
//   console.log(`Hola ${miNombre}`);
// };

// --------------------------------------------------------------

// hey() // Esto no funciona porque utilizamos una funcion de expresion (o anonima)

// const hey = () => { // 
//   console.log(`Hola ${miNombre}`);
// };