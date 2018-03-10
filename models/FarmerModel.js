const mongoose = require('mongoose')
const schemas = require('../db/schemas/FarmerSchema')

const FarmerModel = mongoose.model('FarmerModel', schemas.FarmerSchema)

module.exports = FarmerModel