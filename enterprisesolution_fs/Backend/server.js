const dotenv = require("dotenv").config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const passport = require('passport');
const initializePassport = require('../passport-config');
initializePassport(
    passport, 
    usename => User.find(user => User.username === usename) 
);

const app = express();
const port = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json());
app.use(flash())
app.use(express.urlencoded( { extended: false }))

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true});
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB connection established");
})

//routers
//could use this in the create login first
const usersRouter = require('./routes/users');
app.use('/login', usersRouter)

app.listen(port, () => {
    console.log(`Server is running on port: ${ port }`);
});