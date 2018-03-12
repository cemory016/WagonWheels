const mongoose = require('mongoose')
const UserSchema = require('../db/schemas/UserSchema')

const UserModel = mongoose.model('UserModel', UserSchema)

module.exports = UserModel