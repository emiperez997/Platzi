const { Router } = require('express');

const router = Router();

router.get('/categories/:id/products/:productId', (req, res) => {
  const { id, productId } = req.params;

  res.json({
    id,
    products: [
      {
        id: productId,
        name: `Product ${productId}`,
        price: Math.floor(Math.random() * 1000)
      }
    ]
  })
})

module.exports = router;
