const { Router } = require('express');
const productRouter = require('./products.routes');
const userRouter = require('./users.routes');
const categoriesRouter = require('./categories.routes');
const customersRouter = require('./customer.routes');

function routerApi(app) {
  const router = Router();

  app.use('/api/v1', router);

  router.use('/products', productRouter);

  router.use('/users', userRouter);

  router.use('/categories', categoriesRouter);
  router.use('/customers', customersRouter);
}

module.exports = routerApi;
