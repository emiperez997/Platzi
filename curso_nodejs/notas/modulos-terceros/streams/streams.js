// Streams: Es el proceso de ir consumiendo datos al tiempo que se reciben 
const fs = require('fs');
const stream = require('stream');
const util = require('util')

let data = '';

let readableStream = fs.createReadStream(__dirname + '/input.txt');

readableStream.setEncoding('utf-8');
// Chunk -> Datos
// readableStream.on('data', (chunk) => {
//   data += chunk;
// });

// readableStream.on('end', () => {
//   console.log('Termino de leer')
//   console.log(data)
// });

// Buffer de escritura
// process.stdout.write('hola')
// process.stdout.write('que')
// process.stdout.write('tal')

const Transform = stream.Transform;

function Mayus(){
  Transform.call(this);
}

util.inherits(Mayus, Transform);

Mayus.prototype._transform = function(chunk, codif, cb) {
  chunkMayus = chunk.toString().toUpperCase();
  this.push(chunkMayus)
  cb();
}

let mayus = new Mayus();

readableStream
  .pipe(Mayus)
  .pipe(process.stdout);