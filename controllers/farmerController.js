const express = require('express')
const Farmer = require('../models/FarmerModel')
const router = express.Router({ mergeParams: true })

router.get('/', (req, res) => {
  Farmer.find().then((farmer) => {
    res.json(farmer)
    console.log(farmer)
  }).catch(err => {
    console.log(err)
    res.json("caught error")
  })
})

router.get('/:farmerId', (req, res) => {
  const farmerId = req.params.farmerId
  Farmer.findById(farmerId)
    .then((farmer) => {
      //changed from save to json
      res.json(farmer)
    }).catch((err) => {
      res.status(500)
      res.send(err)
    })
})

router.post('/', async (req, res) => {
  try {
    const newFarmer = req.body
    const savedFarmer = await Farmer.create(newFarmer)
    res.json(savedFarmer)
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
})

router.put('/:id', async (req, res) => {
  try {
    const farmerId = req.params.id
    const updatedFarmer = req.body
    const savedFarmer = await Farmer.findByIdAndUpdate(farmerId, updatedFarmer)
    res.json(savedFarmer)
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
})

router.patch('/:id', async (req, res) => {
  try {
      //This is the payload being sent over
      const updatedFarmer = req.body
      const farmer = await Farmer.findByIdAndUpdate(req.params.id, updatedFarmer, {new: true})
      // farmer.farmerName = updatedFarmer.farmerName
      // farmer.bio = updatedFarmer.bio
      //Save the user object
      const saved = await farmer.save()
      //Send the updated user
      res.json(saved)
  } catch (err) {
      res.send(err)
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const farmerId = req.params.id
    await Farmer.findByIdAndRemove(FarmerId)
    res.json({
      msg: 'Successfully Deleted'
    })
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
})

module.exports = router