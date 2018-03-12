const express = require('express')
const User = require('../models/UserModel')
const router = express.Router()

router.get('/', (req, res) => {
  User.find().then((users) => {
    res.send(users)
  })
})

router.post('/', (req, res) => {
  const newUser = new User({
    name: req.body.name
  })

  newUser.save().then(() => {
    res.redirect('/api/user')
  })
})

router.get('/:id', (req, res) => {
  User.findById(req.params.id).then((user) => {
    res.send(user)
  }).catch((err) => {
    res.status(500)
    res.send(err)
  })
})

module.exports = router
