// This controller has routes to get all users,
// create a new user, and get one user

// Refer back to the soda app and gift tracker for more in-depth express review

const express = require('express')
const User = require('../models/User')
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
