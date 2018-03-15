const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ProductsSchema = require('./ProductsSchema')

  const Farmer = new Schema({
    farmerName: String,
    farmerUserName: String,
    farmerEmail: String,
    farmerPassword: String,
    farmerImg: String,
    farmName: String,
    farmLocation: String,
    aboutTheFarm: String,
    products: [ ProductsSchema ]
  })
  
  module.exports = Farmer