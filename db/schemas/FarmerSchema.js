const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ProductsSchema = require('./ProductsSchema')

  const FarmerSchema = new Schema({
    FarmerName: String,
    FarmerUserName: String,
    FarmerEmail: String,
    FarmerPassword: String,
    FarmerImg: String,
    FarmName: String,
    FarmLocation: String,
    AboutTheFarm: String,
    Products: [ ProductsSchema ]
  })
  
  module.exports = FarmerSchema