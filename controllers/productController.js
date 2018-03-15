const express = require('express')
const Product = require('../models/ProductsModel')
const router = express.Router({ mergeParams: true })

router.get('/farmer/:id/product', (req, res) => {
  Product.find().then((product) => {
    res.send(product)
  })
})

router.post('/', (req, res) => {
  const newProduct = new Product({
    name: req.body.name
  })

  newProduct.save().then(() => {
    res.redirect('/api/farmer/product')
  })
})

router.get('/:id', (req, res) => {
  Product.findById(req.params.id).then((product) => {
    res.send(product)
  }).catch((err) => {
    res.status(500)
    res.send(err)
  })
})

module.exports = router