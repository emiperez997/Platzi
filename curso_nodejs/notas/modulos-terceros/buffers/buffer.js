// Buffer: Espacio en memoria (ram) en el que se almacenan los datos de manera temporal

let buffer = Buffer.alloc(1);
let buffer1 = Buffer.from([1, 2, 3]); // Reserva 3 espacios en memoria
let buffer2 = Buffer.from('Hola');

// console.log(buffer)
// console.log(buffer1)
// console.log(buffer2)

// --
let abc = Buffer.alloc(26);

console.log(abc)

for(let i = 0; i < 26; i++){
  abc[i] = i + 97;  
}

console.log(abc)
console.log(abc.toString())