const mongoose = require('mongoose')
const Schema = mongoose.Schema


const UserSchema = new Schema({
  UserName: String,
  UserEmail: String,
  UserPassword: String,
  UserImg: String,
  UserLocation: String,
  UserFamilySize: Number,
  UserFaveFarmers: String,
  UserFaveProducts: String,
})

module.exports = UserSchema