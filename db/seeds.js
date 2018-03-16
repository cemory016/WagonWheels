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
    userName: "Amber",
    userEmail: "amber@gmail.com",
    userPassword: "amber",
    userLocation: "Atlanta",
    userFamilySize: "3",
})
const Sal = new UserModel({
    userName: "Sal",
    userEmail: "sal@gmail.com",
    userPassword: "sal",
    userLocation: "Decatur",
    userFamilySize: "5",
})
const Mark = new UserModel({
    userName: "Mark",
    userEmail: "mark@gmail.com",
    userPassword: "mark",
    userLocation: "Atlanta",
    userFamilySize: "1",
})
const GreenBeans = new ProductsModel({
    productName: "Green bean",
    productImg: String,
    description: "Green Bean",
    productQuanity: 15,
    productRemaining: 15,
})
const PoleBeans = new ProductsModel({
    productName: "Pole bean",
    productImg: String,
    description: "Pole Bean. great for stew.",
    productQuanity: 20,
    productRemaining: 20,
})
const Tomato = new ProductsModel({
    productName: "Tomato",
    productImg: String,
    description: "Beef Steak Tomato. dark red and meaty. one of my faves.",
    productQuanity: 25,
    productRemaining: 25,
})
const BillyBob = new FarmerModel({
    farmerName: "Billy Bob",
    farmerUserName: "Billy_Bob's_Beans",
    farmerEmail: "billybob@beans.com",
    farmerPassword: "billybob",
    farmerImg: "../Img/agence-producteurs-locaux-damien-kuhn-113763-unsplash.jpg",
    farmName: "Cool Beans",
    farmLocation: "Atlanta, Ga",
    aboutTheFarm: "At Billy Bob's Beans...we love beans....grren beans, pork beans, potato beans, beannie babies, pole beans, skinny beans,fat beans, all types of beans,",
    products: [GreenBeans, PoleBeans]
})
const SallySue = new FarmerModel({
    farmerName: "Sally Sue",
    farmerUserName: "Sallys_Salads",
    farmerEmail: "sallysue@salad.com",
    farmerPassword: "sallysue",
    farmerImg: "../Img/annie-spratt-215755-unsplash.jpg",
    farmName: "Cool Beans",
    farmLocation: "Atlanta, Ga",
    aboutTheFarm: "At Billy Bob's Beans...we love beans....grren beans, pork beans, potato beans, beannie babies, pole beans, skinny beans,fat beans, all types of beans,",
    products: [Tomato]
})
const DecaturMarket = new MarketModel({
    marketName: "Downtown Decatur",
    marketImg: "https://cfmatl.org/wp-content/uploads/2016/01/Decatur-Farmers-Market.jpg",
    marketLocation: "Decatur, Ga 30030",
    aboutTheMarket: "Decatur where its greatrer! We are open from 9am - 2pm ever Saturday",
    marketFarmers: [BillyBob, SallySue]
})
const CollegeParkMarket = new MarketModel({
    marketName: "College Park",
    marketImg: "../Img/2I1A4480__2_.0.jpg",
    marketLocation: "College Park",
    aboutTheMarket: "College Park Bubba Sparks! We are open from 9am - 2pm ever Sunday",
    marketFarmers: [BillyBob, SallySue]
})

// First we remove all users,
// then we save our new user
UserModel.remove({})
    .then(() => Amber.save())
    .then(() => Sal.save())
    .then(() => Mark.save())
ProductsModel.remove({})
    .then(() => GreenBeans.save())
    .then(() => PoleBeans.save())
    .then(() => Tomato.save())
FarmerModel.remove({})
    .then(() => BillyBob.save())
    .then(() => SallySue.save())
MarketModel.remove({})
    .then(() => DecaturMarket.save())
    .then(() => CollegeParkMarket.save())

    .then(() => console.log('Successful Save'))
    .then(() => mongoose.connection.close())