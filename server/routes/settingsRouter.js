const router = require('express').Router();


const { Client, Povar } = require('../db/models')

// router.get('/povar/:id', async (req, res) => {
//   const onePovar = await Povar.findOne({ where: { id: req.params.id } });
//   res.json({ onePovar });
// })

router.put('/povar', async (req, res) => {
  try {
    const { id } = req.session.user
    const povar = await Povar.update(req.body, { where: { id } });
    // const povar = await Povar.findOne({ where: { id } })


    req.session.user = {name: povar.name, surname: povar.surname, email: povar.email, password: povar.password, about: povar.about, phone: povar.phone, experience: povar.experience, servicePrice: povar.servicePrice}
    res.json(req.session.user);

const { Client } = require('../db/models')

router.get('/client/:id', async (req, res) => {
  const oneClient = await Client.findOne({ where: { id: req.params.id } });
  res.json({ oneClient });
})

router.put('/client/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Client.update(req.body, { where: { id } });
    const client = await Client.findOne({ where: { id } })
    // req.session.user = {name: client.name, surname: client.surname, email: client.email, password: client.password, about: client.about, phone: client.about, phone: client.phone}
    res.json({ client });

  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
})

module.exports = router;
