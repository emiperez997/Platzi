// Dos tipos de funciones:
// - Declarativas (Function declaration/statement)
function miFuncionDec() {
  return 3;
}

// - De Expresión (Function expression / funciones anónimas)
// a y b -> Son parametros que se envian a la hora de llamar a la funcion
var miFuncionVar = function(a, b){ return a + b }; // Vieja manera (asi lo muestran en platzi)

const miFuncionConst = (a, b) => a + b; // Manera actual de hacerlo. Tiene retorno implicito

// Llamado a la funcion 
console.log(miFuncionDec());

// Las de expresion se llama igual que una función normal
console.log(miFuncionVar(1, 2));
console.log(miFuncionConst(5, 6));

// Hoisting: Significa que podemos llamar a una funcion antes de declararla
// El hoisting funciona con funciones declarativas solamente, con las funciones de expresion no funciona