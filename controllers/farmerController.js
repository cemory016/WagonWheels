const express = require('express')
const Farmer = require('../models/FarmerModel')
const router = express.Router({ mergeParams: true })

router.get('/', (req, res) => {
  Farmer.find().then((Farmer) => {
    res.json(farmer)
    console.log(farmer)
  }).catch(err => {
    console.log(err)
    res.json("caught error")
  })
})

router.get('/:farmerId', (req, res) => {
  const farmerId= req.params.farmerId
  Farmer.findById(farmerId)
  .then((farmer) => {
    //changed from send to json
    res.json(farmer)
  }).catch((err) => {
    res.status(500)
    res.send(err)
  })
})

router.post('/', (req, res) => {
  const newFarmer = new Farmer({
    farmerUserName: req.body.farmerUserName,
    farmerImg: req.body.farmerImg,
    farmName: req.body.farmName,
    farmLocation: req.body.farmLocation,
    about: req.body.about,

  })

  newFarmer.save().then(() => {
    res.redirect('/api/farmer')
  })
})

router.get('/:farmerId', (req, res) => {
  Farmer.findById(req.params.id).then((farmer) => {
    res.json(farmer)
  }).catch((err) => {
    res.status(500)
    res.json(err)
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
    const FarmerId = req.params.id
    const updatedFarmer = req.body
    const savedFarmer = await User.findByIdAndUpdate(FarmerId, updatedUser)
    res.json(savedFarmer)
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
})
router.delete('/:id', async (req, res) => {
  try {
    const FarmerId = req.params.id
    await User.findByIdAndRemove(FarmerId)
    res.json({
      msg: 'Successfully Deleted'
    })
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
})

module.exports = router
