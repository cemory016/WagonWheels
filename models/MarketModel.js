const mongoose = require('mongoose')
const Market = require('../db/schemas/MarketSchema')


const MarketModel = mongoose.model('MarketModel', Market)

module.exports = MarketModel