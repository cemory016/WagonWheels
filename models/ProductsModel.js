const mongoose = require('mongoose')
const schemas = require('../db/schemas/ProductsSchema')

const ProductsModel = mongoose.model('ProductsModel', schemas.ProductsSchema)

module.exports = ProductsModel