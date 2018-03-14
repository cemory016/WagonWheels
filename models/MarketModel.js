const mongoose = require('mongoose')
const MarketSchema = require('../db/schemas/MarketSchema')


const MarketModel = mongoose.model('MarketModel', MarketSchema)

module.exports = MarketModel