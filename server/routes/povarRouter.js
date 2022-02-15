const router = require('express').Router();
const { Povar, Likes, Cuisines } = require('../db/models');

router.get('/', async (req, res) => {
  const allPovars = await Povar.findAll(
    {
      include: [
        {
          model: Likes,
          attributes: ['like', 'dislike'],
        },
      ]
    });
  res.json({ allPovars });
})

router.get('/:id', async (req, res) => {
  const onePovar = await Povar.findOne({
    where: {
      id: req.params.id
    },
    include: [
      {
        model: Likes,
        attributes: ['like', 'dislike'],
      },
    ]
  });
  res.json({ onePovar });
})

module.exports = router;
