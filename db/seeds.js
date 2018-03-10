require("dotenv").config();
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI);

// const FarmerModel = FarmerSchema.FarmerModel;
// const ProductsModel = ProductsSchema.ProductsModel;

const connection = mongoose.connection;
connection.on('error', function (err) {
    console.log(err);
});
connection.once('open', function () {
    console.log("Connected to MongoDB!");
});


const FarmerModel = require('../models/FarmerModel')
const ProductsModel = require('../models/ProductsModel')

const BillyBob = new Farmer({
    FarmerName: "Billy Bob",
    FarmerUserName: "Billy_Bob's_Beans",
    FarmerImg: "https://sites.google.com/site/praisethebillybobgod22/home/Funny-Cool-Beans-Design.png",
    FarmName: "Cool Beans",
    FarmLocation: "Atlanta, Ga",
    AboutTheFarm: "At Billy Bob's Beans...we love beans....grren beans, pork beans, potato beans, beannie babies, pole beans, skinny beans,fat beans, all types of beans,",
    Products: [ ProductsSchema ]
})

const Beans = new Products({
    ProductName: "bean",
    ProductImg: String,
    Description: "Green Bean",
    ProductQuanity: 15,
    ProductRemaining: 15,
})


// First we remove all users,
// then we save our new user
Farmer.remove({})
    .then(() => BillyBob.save())
    .then(() => console.log('Successful Save'))
    .then(() => mongoose.connection.close())