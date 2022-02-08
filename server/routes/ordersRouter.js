const router = require('express').Router();

const { Order, Client, Status, Povar, Cuisines } = require('../db/models');

router.get('/', async (req, res) => {
  try {
    const allOrders = await Order.findAll(
      {
        include: [
          {
            model: Client,
            attributes: ['name', 'surname', 'email', 'about', 'phone', 'avatar'],
          },
          {
            model: Status,
            attributes: ['name'],
          },
        ]
      });
    res.json({ allOrders })
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
})

router.post('/', async (req, res) => {
  try {
    const { date, address, title, text, numOfPeople, price } = req.body;
    const newOrder = await Order.create({
      date,
      address,
      title,
      text,
      numOfPeople,
      price,
      client_id: req.session.user.id,
      status_id: 1
    });
    console.log('new order ------------>', newOrder);
    res.json({ newOrder });
  } catch (error) {
    console.log('create order error', error);
    res.sendStatus(500)
  }
})

router.get('/:id', async (req, res) => {
  try {
    const orderItem = await Order.findOne({
      where: {
        id: req.params.id
      },
      include: [
        {
          model: Client,
          attributes: ['name', 'surname', 'email', 'about', 'phone', 'avatar'],
        },
        {
          model: Status,
          attributes: ['name'],
        },
        {
          model: Povar,
          attributes: ['name', 'surname', 'email', 'about', 'phone', 'experience', 'avatar'],
        },
      ]
    })
    res.json({ orderItem })
  } catch (error) {
    console.log(error);
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const order = await Order.findOne({ where: { id: req.params.id } })
    if (req.session.user.id === order.client_id) {
      await Order.destroy({ where: { id } })
      res.sendStatus(200);
    } else {
      console.log('no')
    }
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
})

module.exports = router;
