const express = require('express')
const Market = require('../models/MarketModel')
const Farmer = require('../models/FarmerModel')
const router = express.Router()

router.get('/', (req, res) => {
  Market.find().then((Market) => {
    res.json(Market)
  })
})

router.post('/', (req, res) => {
  const newMarket = new Market({
   marketName: req.body.marketName,
   marketImg: req.body.marketImg,
   Location: req.body.Location,
   farmers: [ Farmers ]

  })

  newMarket.save().then(() => {
    res.redirect('/api/market')
  })
})

router.get('/:id', (req, res) => {
  Market.findById(req.params.id).then((market) => {
    res.json(market)
  }).catch((err) => {
    res.status(500)
    res.json(err)
  })
})

module.exports = router