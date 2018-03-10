require("dotenv").config();
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI);
const FarmerModel = FarmerSchema.FarmerModel;
const ProductsModel = ProductsSchema.ProductsModel;

const connection = mongoose.connection;
connection.on('error', function (err) {
    console.log(err);
});
connection.once('open', function () {
    console.log("Connected to MongoDB!");
});


const Farmer = require('../models/FarmerModel')
const Products = require('../models/ProductsModel')

const FarmerSchema = new Schema({
    FarmerName: String,
    FarmerUserName: String,
    FarmerImg: String,
    FarmName: String,
    FarmLocation: String,
    AboutTheFarm: String,
    Products: [ ProductsSchema ]
  })