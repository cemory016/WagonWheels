const express = require('express')
const User = require('../models/UserModel')
const router = express.Router({ mergeParams: true })

router.get('/', (req, res) => {
  User.find().then((user) => {
    res.json(user)
    console.log(user)
  }).catch(err => {
    console.log(err)
    res.json("caught error")
  })
})

router.get('/:userId', (req, res) => {
  const userId = req.params.userId
  User.findById(userId)
    .then((user) => {
      //changed from save to json
      res.json(user)
    }).catch((err) => {
      res.status(500)
      res.send(err)
    })
})

router.post('/', async (req, res) => {
  try {
    const newUser = req.body
    const savedUser = await User.create(newUser)
    res.json(savedUser)
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
})

router.put('/:id', async (req, res) => {
  try {
    const UserId = req.params.id
    const updatedUser = req.body
    const savedUser = await User.findByIdAndUpdate(UserId, updatedUser)
    res.json(savedUser)
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
})
router.delete('/:id', async (req, res) => {
  try {
    const UserId = req.params.id
    await User.findByIdAndRemove(UserId)
    res.json({
      msg: 'Successfully Deleted'
    })
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
})

module.exports = router