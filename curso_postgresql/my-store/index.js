const express = require('express');
const router = require('./routes/index.routes');
const {
  errorHandler,
  logErrors,
  boomErrorHandler,
  ormErrorHandler,
} = require('./middlewares/error.handler');
const cors = require('cors');

const app = express(); // Crear nuestera app
const PORT = 3000; // Defino mi puerto

// Configuracion del Servidor
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Endpoints
app.get('/', (req, res) => {
  res.send('<h1> Hello world </h1>');
});

app.get('/new-route', (req, res) => {
  res.send('<h1> Hello world from new route </h1>');
});

app.post('/', (req, res) => {
  console.log(req.body);
  res.json(req.body);
});

app.get('/holi', (req, res) => {
  res.send('<h1> Hello world </h1>');
});

router(app);

// Middlewares
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);
app.use(ormErrorHandler)

app.listen(PORT, () => console.log(`Server on port ${PORT}`)); // Mi app corre en el puerto 3000
