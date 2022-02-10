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
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
})





module.exports = router;
