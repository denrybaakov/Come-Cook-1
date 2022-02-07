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

      const { email, name, password, role } = req.body
      const cryptPass = await bcrypt.hash(password, 10)

      if (req.body.role === 'client') {
        const client = await Client.create({ name, email, password: cryptPass })
        const user = { ...client, role: 'client' }

        req.session.user = { id: client.id, name: client.name, email: client.email, role: user.role }
        // console.log(req.session.user.role, '>>>>>>>>>>>>>>>>>>>');
        return res.json({ user })
      } else if (req.body.role === 'cook') {
        const cook = await Povar.create({ name, email, password: cryptPass })
        const user = { ...cook, role: 'cook' }

        req.session.user = { id: cook.id, name: cook.name, email: cook.email, role: user.role }
        // console.log(req.session);
        return res.json({ user })
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
          req.session.user = { id: currentClient.id, name: currentClient.name, role: currentUser.role }
          return res.json(req.session.user)
        }
      } catch (error) {
        console.log(error);
        return res.sendStatus(500)

      }
    } else if (email && password && role === 'cook') {
      try {
        const currentCook = await Povar.findOne({ where: { email } })
        console.log(currentCook)
        const currentUser = { ...currentCook, role: 'cook' }
        if (currentCook && await bcrypt.compare(password, currentCook.password)) {
          req.session.user = { id: currentCook.id, name: currentCook.name, role: currentUser.role }
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
