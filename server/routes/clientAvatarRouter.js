const router = require('express').Router();
const { Client } = require('../db/models')
const path = require('path')



router.route('/')
  .post(async (req, res) => {
    if (req.file === null) {
      return res.status(400).json({ msg: 'No file uploaded' })
    }
    const file = req.files.file
    const { id } = req.session.user

    const uplPath = path.join(process.env.PWD, `/public/uploads/${file.name}`)

    const avapath = await Client.update({ avatar: `/uploads/${file.name}` }, { where: { id } })

    file.mv(`${uplPath}`, (err) => {
      req.session.user.avatar = `/uploads/${file.name}`
      res.json({ fileName: file.name, filePath: `/uploads/${file.name}` })

    })

  })

router.route('/')
.post(async (req, res) => {
try {
  
} catch (error) {
  
}


}



module.exports = router;

