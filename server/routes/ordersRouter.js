const router = require('express').Router();

const { Order } = require('../db/models')

router.get('/', async (req, res) => {
  try {
    const allOrders = await Order.findAll();
    res.json({ allOrders })
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
})

router.post('/', async (req, res) => {
  try {
    const newOrder = await Order.create(req.body);
    res.json({ newOrder })
  } catch (error) {
    console.log('create order error', error);
    res.sendStatus(500)
  }
})

// router.get('/:id', async (req, res) => {
//   const orderItem = await Order.findOne({ where: { id: req.params.id } })
//   res.json({ orderItem })
// })

module.exports = router;
