const { Router } = require('express');

const router = Router()

router.get('/users', (req, res) => {
  const { limit, offset } = req.query;
  if(limit && offset) {
    res.json({
      info: {
        limit,
        offset
      }
    });
  } else {
    res.json({ info: 'No hay parametros'});
  }
})

module.exports = router;
