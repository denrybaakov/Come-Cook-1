const router = require('express').Router();
const { Client, Povar } = require('../db/models')


router.put('/povar', async (req, res) => {
  try {
    const { id } = req.session.user
     await Povar.update(req.body, { where: { id } });
     const povar = await Povar.findOne({where: {id}})
    
    req.session.user = {...req.session.user,id: povar.id, name: povar.name, surname: povar.surname, email: povar.email, password: povar.password, about: povar.about, phone: povar.phone, experience: povar.experience, servicePrice: povar.servicePrice}
    res.json(req.session.user);
  } catch (error) {
    console.log(error);
    res.sendStatus(500)
  }
})

  
router.put('/client', async (req, res) => {
  try {
    const { id } = req.session.user
     await Client.update(req.body, { where: { id } });
     const client = await Client.findOne({where: {id}})
     
    req.session.user = {...req.session.user,id: client.id, name: client.name, surname: client.surname, email: client.email, password: client.password, about: client.about, phone: client.phone}
    // console.log(req.session.user);
    res.json(req.session.user);
  } catch (error) {
    console.log(error);
    res.sendStatus(500)
  }
})



module.exports = router;
