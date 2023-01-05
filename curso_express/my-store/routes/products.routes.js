const { Router } = require('express');
const faker = require('faker');

const router = Router();

// GET
router.get('/filter', (req, res) => {
  // Choca con products/:id
  res.send('Yo soy un filter');
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  if (Number(id) === 999) {
    res.status(404).json({
      message: 'Not found',
    });
  } else {
    res.json({
      id,
      name: `Product ${id}`,
      price: Math.floor(Math.random() * 1000),
    });
  }
});

router.get('/', (req, res) => {
  const { size } = req.query;
  const limit = size || 10;
  const products = [];
  for (let i = 0; i < limit; i++) {
    products.push({
      name: faker.commerce.productName(),
      price: Number(faker.commerce.price(), 10),
      image: faker.image.imageUrl(),
    });
  }

  res.json(products);
});

// POST
router.post('/', (req, res) => {
  const body = req.body;

  res.status(201).json({
    message: 'Created',
    data: body,
  });
});

// PATCH
router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;

  res.json({
    message: 'Updated',
    data: body,
    id,
  });
});

// DELETE
router.delete('/:id', (req, res) => {
  const { id } = req.params;

  res.json({
    message: 'Deleted',
    id,
  });
});

module.exports = router;
