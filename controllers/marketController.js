const express = require('express')
const Market = require('../models/MarketModel')
const Farmer = require('../models/FarmerModel')
const router = express.Router({ mergeParams: true })

router.get('/', (req, res) => {
  Market.find().then((Market) => {
    res.json(Market)
  })
})

router.post('/', (req, res) => {
  const newMarket = new Market({
   marketName: req.body.marketName,
   marketImg: req.body.marketImg,
   farmLocation: req.body.farmLocation,
   about: req.body.About,
   farmers: [ Farmer ]
  })

  newMarket.save().then(() => {
    res.redirect('/api/markets')
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