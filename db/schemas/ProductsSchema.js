const mongoose = require('mongoose')
const Schema = mongoose.Schema


const ProductsSchema = new Schema({
  productName: String,
  productImg: String,
  description: String,
  productQuanity: Number,
  productRemaining: Number,
})

module.exports = ProductsSchema