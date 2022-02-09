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
    const order = await Order.findOne({ where: { id } })
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

router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const order = await Order.findOne({ where: { id } })
    if (req.session.user.role === 'cook') {
      if (!order.povar_id) {
        const updatedOrder = await Order.update({ povar_id: req.session.user.id, status_id: 2 }, { where: { id } });
        res.json({ updatedOrder })
      } else if (order.status_id === 2) {
        const updatedOrder = await Order.update({ status_id: 3 }, { where: { id } });
        res.json({ updatedOrder })
      } else {
        console.log('nonono');
      }
    } else if (req.session.user.role === 'client') {
      if (req.session.user.id === order.client_id) {
        const updatedOrder = await Order.update(req.body, { where: { id } })
        res.json({ updatedOrder })
      } else {
        console.log('nono');
      }
    }
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
})

router.get('/povar/new', async (req, res) => {
  const newOrdersPovar = await Order.findAll({
    where: { status_id: 1 },
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
  });
  console.log(newOrdersPovar);
  res.json({ newOrdersPovar });
})

router.get('/povar/:id/current', async (req, res) => {
  const povar = await Povar.findOne({ where: { id: req.params.id } });
  const currentOrdersPovar = await Order.findAll({
    where: { povar_id: povar.id, status_id: 2 },
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
  });
  res.json({ currentOrdersPovar });
})

router.get('/povar/:id/finished', async (req, res) => {
  const povar = await Povar.findOne({ where: { id: req.params.id } });
  const finishedOrdersPovar = await Order.findAll({
    where: { povar_id: povar.id, status_id: 3 },
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
  });
  res.json({ finishedOrdersPovar });
})

router.get('/client/:id/current', async (req, res) => {
  const client = await Client.findOne({ where: { id: req.params.id } });
  const currentOrdersClient = await Order.findAll({
    where: { client_id: client.id, status_id: 2 },
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
  });
  res.json({ currentOrdersClient });
})

router.get('/client/:id/finished', async (req, res) => {
  const client = await Client.findOne({ where: { id: req.params.id } });
  const finishedOrdersClient = await Order.findAll({
    where: { client_id: client.id, status_id: 3 },
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
  });
  res.json({ finishedOrdersClient });
})

module.exports = router;
