// Coerción: es la forma en la que podemos cambiar un tipo de valor a otro
// Dos tipos de coerción:
// - Implicita: El lenguaje nos ayuda y cambia el tipo de valor
// - Explicita: Es cuando obligamos a que cambie el tipo de valor 

// Coerción implicita
const a = 4 + "7" // String
const b = 4 * "7" // Number

// Coreción explicita
const c = 6 // Number
const d = String(c) // String
const e = "75" // String
const f = Number(e) // Number