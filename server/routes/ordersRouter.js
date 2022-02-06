const router = require('express').Router();

const { Order } = require('../db/models')

router.get('/', async (req, res) => {
  const allOrders = await Order.findAll();
  res.json({ allOrders })
})

router.get('/:id', async (req, res) => {
  const orderItem = await Order.findOne({ where: { id: req.params.id } })
  res.json({ orderItem })
})

module.exports = router;
