const mongoose = require('mongoose')
const FarmerSchema = require('../db/schemas/FarmerSchema')


const FarmerModel = mongoose.model('FarmerModel', FarmerSchema)

module.exports = FarmerModel