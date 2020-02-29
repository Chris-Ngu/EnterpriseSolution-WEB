const dotenv = require("dotenv").config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const flash = require('express-flash');
const flash = require('express-session');

const passport = require('passport');
const initializePassport = require('../Backend/passport-config');
initializePassport(
    passport, 
    usename => User.find(user => User.username === usename) 
);

const app = express();
const port = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded( { extended: false }));
app.use(flash());
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUnitialized: false,
}));
app.use(passport.initialize());
app.use(passport.session());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true});
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB connection established");
})

//Concrete routers
app.post()

//experimental routers
//could use this in the create login first
const usersRouter = require('./routes/users');
app.use('/login', usersRouter)

app.listen(port, () => {
    console.log(`Server is running on port: ${ port }`);
});