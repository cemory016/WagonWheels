const mongoose = require('mongoose')
const Farmer = require('../db/schemas/FarmerSchema')


const FarmerModel = mongoose.model('FarmerModel', Farmer)

module.exports = FarmerModel