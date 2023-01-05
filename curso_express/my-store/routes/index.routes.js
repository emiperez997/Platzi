const { Router } = require('express');
const productRouter = require('./products.routes');
const userRouter = require('./users.routes');
const categoriesRouter = require('./categories.routes');

function routerApi(app) {
  const router = Router();
  app.use('/api/v1', router);
  router.use('/products', productRouter);
  router.use('/users', userRouter);
  router.use('/categories', categoriesRouter);
}

module.exports = routerApi;
