// node --inspect <archivo>
const http = require('http');

function router(req, res) {
  console.log('Nueva peticion!');
  console.log(req.url);

  switch(req.url) {
    case '/hola':
      res.write('Hola, que tal?');
      res.end();
      break;
    
    default:
      res.write('Error 404');
      res.end();
      break;
  }
}

http.createServer(router).listen(3000);

console.log('Escuchando en el puerto 3000');