const router = require('express').Router();
const { Cuisines } = require('../db/models')

router.get('/', async (req, res) => {
  const cuisines = await Cuisines.findAll();
  console.log(cuisines);
  res.json({ cuisines })
})

module.exports = router;
