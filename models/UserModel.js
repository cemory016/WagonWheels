const mongoose = require('mongoose')
const User = require('../db/schemas/UserSchema')

const UserModel = mongoose.model('UserModel', User)

module.exports = UserModel