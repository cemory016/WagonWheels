const mongoose = require('mongoose')
const ProductsSchema = require('../db/schemas/ProductsSchema')

const ProductsModel = mongoose.model('ProductsModel', ProductsSchema)

module.exports = ProductsModel