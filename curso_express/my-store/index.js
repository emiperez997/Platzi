const express = require('express');
const router = require('./routes/index.routes')

const app = express(); // Crear nuestera app
const PORT = 3000; // Defino mi puerto

// Configuracion del Servidor
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Endpoints
app.get('/', (req, res) => {
  res.send('<h1> Hello world </h1>');
});

app.get('/new-route', (req, res) => {
  res.send('<h1> Hello world from new route </h1>');
});

app.post('/', (req, res) => {
  console.log(req.body);
  res.json(req.body)
})

app.get('/holi', (req, res) => {
  res.send('<h1> Hello world </h1>');
});

// Me devuelve todos los productos
// req.params
// app.get('/products', (req, res) => {
//   res.json([
//     {
//       id: 1,
//       name: 'Keyboard',
//       price: 100,
//     },
//     {
//       id: 2,
//       name: 'Mouse',
//       price: 75,
//     },
//   ]);
// });

// Todo los endpoints especificos deben ir antes de los dinámicos

// app.get('/categories/:id/products/:productId', (req, res) => {
//   const { id, productId } = req.params;

//   res.json({
//     id,
//     products: [
//       {
//         id: productId,
//         name: `Product ${productId}`,
//         price: Math.floor(Math.random() * 1000)
//       }
//     ]
//   })
// })

// req.query
// app.get('/users', (req, res) => {
//   const { limit, offset } = req.query;
//   if(limit && offset) {
//     res.json({
//       info: {
//         limit,
//         offset
//       }
//     });
//   } else {
//     res.json({ info: 'No hay parametros'});
//   }
// })

router(app)

app.listen(PORT, () => console.log(`Server on port ${PORT}`)); // Mi app corre en el puerto 3000
