const mongoose = require('mongoose')
const Schema = mongoose.Schema
const FarmerSchema = require('./FarmerSchema')

const MarketSchema = new Schema({
    MarketName: String,
    MarketImg: String,
    MarketLocation: String,
    AboutTheMarket: String,
    MarketFarmers: [ FarmerSchema ]
})

module.exports = MarketSchema