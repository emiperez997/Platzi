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

  // Enviar headers
  // res.writeHead(201, { 'Content-type': 'text/plain' });

  // res.write('Hola, estamos usando http') // Envia esto al cliente

  // res.end();
}

http.createServer(router).listen(3000);

console.log('Escuchando en el puerto 3000');