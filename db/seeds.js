require("dotenv").config();
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI);

const UserModel = require('../models/UserModel')
const ProductsModel = require('../models/ProductsModel')
const FarmerModel = require('../models/FarmerModel')
const MarketModel = require('../models/MarketModel')

const connection = mongoose.connection;
connection.on('error', function (err) {
    console.log(err);
});
connection.once('open', function () {
    console.log("Connected to MongoDB!");
});


const Amber = new UserModel({
    UserName: "Amber",
    UserEmail: "amber@gmail.com",
    UserPassword: "amber",
    UserLocation: "Atlanta",
    UserFamilySize: "3",
})
const Sal = new UserModel({
    UserName: "Sal",
    UserEmail: "sal@gmail.com",
    UserPassword: "sal",
    UserLocation: "Decatur",
    UserFamilySize: "5",
})
const Mark = new UserModel({
    UserName: "Mark",
    UserEmail: "mark@gmail.com",
    UserPassword: "mark",
    UserLocation: "Atlanta",
    UserFamilySize: "1",
})
const GreenBeans = new ProductsModel({
    ProductName: "Green bean",
    ProductImg: String,
    Description: "Green Bean",
    ProductQuanity: 15,
    ProductRemaining: 15,
})
const PoleBeans = new ProductsModel({
    ProductName: "Pole bean",
    ProductImg: String,
    Description: "Pole Bean. great for stew.",
    ProductQuanity: 20,
    ProductRemaining: 20,
})
const Tomato = new ProductsModel({
    ProductName: "Tomato",
    ProductImg: String,
    Description: "Beef Steak Tomato. dark red and meaty. one of my faves.",
    ProductQuanity: 25,
    ProductRemaining: 25,
})
const BillyBob = new FarmerModel({
    FarmerName: "Billy Bob",
    FarmerUserName: "Billy_Bob's_Beans",
    FarmerEmail: "billybob@beans.com",
    FarmerPassword: "billybob",
    FarmerImg: "https://sites.google.com/site/praisethebillybobgod22/home/Funny-Cool-Beans-Design.png",
    FarmName: "Cool Beans",
    FarmLocation: "Atlanta, Ga",
    AboutTheFarm: "At Billy Bob's Beans...we love beans....grren beans, pork beans, potato beans, beannie babies, pole beans, skinny beans,fat beans, all types of beans,",
    Products: [GreenBeans, PoleBeans]
})
const SallySue = new FarmerModel({
    FarmerName: "Sally Sue",
    FarmerUserName: "Sallys_Salads",
    FarmerEmail: "sallysue@salad.com",
    FarmerPassword: "sallysue",
    FarmerImg: "https://sites.google.com/site/praisethebillybobgod22/home/Funny-Cool-Beans-Design.png",
    FarmName: "Cool Beans",
    FarmLocation: "Atlanta, Ga",
    AboutTheFarm: "At Billy Bob's Beans...we love beans....grren beans, pork beans, potato beans, beannie babies, pole beans, skinny beans,fat beans, all types of beans,",
    Products: [Tomato]
})
const DecaturMarket = new MarketModel({
    MarketName: "Downtown Decatur",
    MarketImg: "https://cfmatl.org/wp-content/uploads/2016/01/Decatur-Farmers-Market.jpg",
    MarketLocation: "Decatur, Ga 30030",
    AboutTheMarket: "Decatur where its greatrer! We are open from 9am - 2pm ever Saturday",
    MarketFarmers: [BillyBob, SallySue]
})
const CollegeParkMarket = new MarketModel({
    MarketName: "College Park",
    MarketImg: "Image of College Park Goes Here",
    MarketLocation: "College Park",
    AboutTheMarket: "College Park Bubba Sparks! We are open from 9am - 2pm ever Sunday",
    MarketFarmers: [BillyBob, SallySue]
})

// First we remove all users,
// then we save our new user
MarketModel.remove({})
    .then(() => DecaturMarket.save())
    .then(() => BillyBob.save())
    .then(() => SallySue.save())
    .then(() => Amber.save())
    .then(() => Sal.save())
    .then(() => Mark.save())
    .then(() => console.log('Successful Save'))
    .then(() => mongoose.connection.close())