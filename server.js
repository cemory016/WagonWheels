require("dotenv").config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
mongoose.connect(process.env.MONGODB_URI);

const connection = mongoose.connection;
connection.on('connect', ()=>{
    console.log("mongoose connected Successfully")
})
connection.on('error', (err) =>{
    console.log('mongoose default connection errot: ' + err);
})
app.use(bodyParser.json());
app.use(express.static(`${__dirname}/client/build`))
app.get('/*', (req, res) => {
    res.sendFile(`${__dirname}/client/build/index.html`)
  })
app.get('/', (req, res) =>{
    res.send('Hello World!')
})

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log('Magic Happeing on port' + PORT)
})