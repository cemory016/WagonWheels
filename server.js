require("dotenv").config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const morgan = require('morgan')
const app = express();
const logger = require('morgan')
mongoose.Promise = global.Promise
mongoose.connect(process.env.MONGODB_URI);

const connection = mongoose.connection;
connection.on('connect', () => {
    console.log("mongoose connected Successfully")
})
connection.on('error', (err) => {
    console.log('mongoose default connection errot: ' + err);
})
app.use(logger('dev'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(`${__dirname}/client/build`))

const marketController = require('./controllers/marketController')
app.use('/api/markets', marketController)

const farmerController = require('./controllers/farmerController')
app.use('/api/farmer', farmerController)

const userController = require('./controllers/userController')
app.use('/api/user', userController)

const productController = require('./controllers/productController')
app.use('/api/farmer/:farmerId/product', productController)


app.get('/', (req, res) => {
    res.sendFile('${__dirname}/client/build/index.html')
})
app.get('/', (req, res) => {
    res.send('Hello World!')
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log('Magic Happeing on port' + PORT)
})  

module.exports = app