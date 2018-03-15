const mongoose = require('mongoose')
const Schema = mongoose.Schema
const FarmerSchema = require('./FarmerSchema')

const Market = new Schema({
    marketName: String,
    marketImg: String,
    marketLocation: String,
    aboutTheMarket: String,
    marketFarmers: [ FarmerSchema ]
})

module.exports = Market