const express = require('express')
const Farmer = require('../models/FarmerModel')
const router = express.Router()

router.get('/', (req, res) => {
  Farmer.find().then((Farmer) => {
    res.json(farmer)
  })
})

router.post('/', (req, res) => {
  const newFarmer = new Farmer({
   farmerUserName: req.body.farmerUserName,
   farmerImg: req.body.farmerImg,
   FarmName: req.body.FarmName,
   Location: req.body.Location,
   About: req.body.About,

  })

  newFarmer.save().then(() => {
    res.redirect('/api/farmer')
  })
})

router.get('/:id', (req, res) => {
  Farmer.findById(req.params.id).then((farmer) => {
    res.json(farmer)
  }).catch((err) => {
    res.status(500)
    res.json(err)
  })
})

module.exports = router
