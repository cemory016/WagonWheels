const mongoose = require('mongoose')
const Schema = mongoose.Schema


const ProductsSchema = new Schema({
  ProductName: String,
  ProductImg: String,
  Description: String,
  ProductQuanity: Number,
  ProductRemaining: Number,
})

module.exports = ProductsSchema