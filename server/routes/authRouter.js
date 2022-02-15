const router = require('express').Router();
const bcrypt = require('bcrypt');
const { Client, Povar } = require('../db/models')

router.route('/check')
  .post((req, res) => {
    if (req.session.user) {
      return res.status(200).json({ user: req.session.user })
    }
    res.sendStatus(401)
  })

router.route('/signup')
  .post(async (req, res) => {
    try {

      const { email, name, password, role, avatar } = req.body
      console.log(req.body)
      const cryptPass = await bcrypt.hash(password, 10)

      if (req.body.role === 'client') {
        const client = await Client.create({ name, email, password: cryptPass })
        const user = { ...client, role: 'client' }

        req.session.user = { id: client.id, name: client.name, surname: client.surname,  email: client.email, role: user.role, avatar: client.avatar, phone: client.phone, experience: client.experience, servicePrice: client.servicePrice, about: client.about }

        return res.json({ user: req.session.user })
      } else if (req.body.role === 'cook') {
        const cook = await Povar.create({ name, email, password: cryptPass })
        const user = { ...cook, role: 'cook' }

        req.session.user = { id: cook.id, name: cook.name, email: cook.email, role: user.role, avatar: cook.avatar, surname: cook.name, phone: cook.phone, experience: cook.experience, servicePrice: cook.servicePrice, about: cook.about }

        return res.json({ user: req.session.user })
      }

    } catch (error) {
      console.log(error);
      console.log(500);

    }
  })

router.route('/signin')
  .post(async (req, res) => {
    const role = req.body.role
    const { email, password } = req.body;
    if (email && password && role === 'client') {
      try {
        const currentClient = await Client.findOne({ where: { email } })
        const currentUser = { ...currentClient, role: 'client' }
        if (currentClient && await bcrypt.compare(password, currentClient.password)) {
          
          req.session.user = { id: currentClient.id, name: currentClient.name, role: currentUser.role, avatar: currentClient.avatar, surname: currentClient.surname, phone: currentClient.phone, experience: currentClient.experience, servicePrice: currentClient.servicePrice, about: currentClient.about  }
          return res.json(req.session.user)
        }
      } catch (error) {
        console.log(error);
        return res.sendStatus(500)

      }
    } else if (email && password && role === 'cook') {
      try {
        const currentCook = await Povar.findOne({ where: { email } })
        const currentUser = { ...currentCook, role: 'cook' }
        if (currentCook && await bcrypt.compare(password, currentCook.password)) {
          req.session.user = { id: currentCook.id, name: currentCook.name, role: currentUser.role, avatar: currentCook.avatar, surname: currentCook.surname, phone: currentCook.phone, experience: currentCook.experience, servicePrice: currentCook.servicePrice, about: currentCook.about }
          return res.json(req.session.user)
        }
      } catch (error) {
        console.log(error)
        return res.sendStatus(500)
      }
    } else {
      return res.sendStatus(500)
    }
  })

router.route('/logout')
  .post((req, res) => {
    req.session.destroy()
    res.clearCookie('sid').sendStatus(200)
  })

module.exports = router
