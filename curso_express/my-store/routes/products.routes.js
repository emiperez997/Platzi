const { Router } = require('express');
const ProductsService = require('../services/product.service');

const router = Router();
const service = new ProductsService();

// GET

router.get('/', async (req, res) => {
  const products = await service.find();
  res.json(products)
})

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const product = await service.findOne(id);
  res.json(product);
});

// POST
router.post('/', async (req, res) => {
  console.log(req.body)
  const body = req.body;
  const newProduct = await service.create(body);
  res.status(201).json(newProduct);  
});

// PATCH
router.patch('/:id', async (req, res) => {
  try {

    const { id } = req.params;
    const body = req.body;

    const product = await service.update(id, body);
    res.json(product);
  } catch(error) {
    res.status(404).json({
      message: error.message
    })
  }
});

// DELETE
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const response = await service.delete(id);

  res.json(response);
});

module.exports = router;