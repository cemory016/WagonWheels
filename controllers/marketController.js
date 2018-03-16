const express = require('express')
const Market = require('../models/MarketModel')
// const Farmer = require('../models/FarmerModel')
const router = express.Router({ mergeParams: true })

router.get('/', (req, res) => {
  Market.find().then((market) => {
    res.json(market)
    console.log(market)
  }).catch(err => {
    console.log(err)
    res.json("caught error")
  })
})

  router.get('/:marketId', (req, res) => {
    const marketId = req.params.marketId
    Market.findById(marketId)
      .then((market) => {
        //changed from save to json
        res.json(market)
      }).catch((err) => {
        res.status(500)
        res.send(err)
      })
  })

  router.post('/', async (req, res) => {
    try {
      const newMarket = req.body
      const savedMarket = await Market.create(newMarket)
      res.json(savedMarket)
    } catch { err } {
      console.log(err)
      res.status(500).json(err)
    }
  })

  router.put('/:id', async (req, res) => {
    try {
      const marketId = req.params.id
      const updatedMarket= req.body
      const savedMarket = await Market.findByIdAndUpdate(marketId, updatedMarket)
      res.json(savedMarket)
    } catch (err) {
      console.log(err)
      res.status(500).json(err)
    }
  })
module.exports = router