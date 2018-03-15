const mongoose = require('mongoose')
const Schema = mongoose.Schema


const User = new Schema({
  userName: String,
  userEmail: String,
  userPassword: String,
  userImg: String,
  userLocation: String,
  userFamilySize: Number,
  userFaveFarmers: String,
  userFaveProducts: String,
})

module.exports = User