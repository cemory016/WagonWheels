const express = require('express')
const Farmer = require('../models/FarmerModel')
const router = express.Router()

router.get('/', (req, res) => {
  Farmer.find().then((Farmer) => {
    res.send(farmer)
  })
})

router.post('/', (req, res) => {
  const newFarmer = new Farmer({
    name: req.body.name
  })

  newFarmer.save().then(() => {
    res.redirect('/api/farmer')
  })
})

router.get('/:id', (req, res) => {
  Farmer.findById(req.params.id).then((farmer) => {
    res.send(farmer)
  }).catch((err) => {
    res.status(500)
    res.send(err)
  })
})

module.exports = router
