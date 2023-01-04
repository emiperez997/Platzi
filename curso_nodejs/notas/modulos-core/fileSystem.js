const fs = require('fs')

function leer(ruta, cb) {
  fs.readFile(ruta, (err, data) => {
    // console.log(data);
    cb(data.toString());
  });
}

function escribir(ruta, contenido, cb) {
  fs.writeFile(ruta, contenido, (err) => {
    if(err) {
      console.log('No he podido escribir el archivo', err);
    } else {
      console.log('Se ha escrito correctamente')
    }
  });
}

function borrar(ruta, cb) {
  fs.unlink(ruta, cb);
}

// leer(`${__dirname}/archivo.txt`, console.log)
// escribir(`${__dirname}/archivo_1.txt`, 'Soy un archivo nuevo', console.log)
borrar(`${__dirname}/archivo_1.txt`, console.log)