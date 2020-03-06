const dotenv = require("dotenv").config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');
const passportLocal = require('passport-local');

const app = express();
const port = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json());
app.use(session({
    secret: 'GenerateSecretHere',
    saveUninitialized: false,
    resave: false
}))

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true});
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB connection established");
});

//routers
//could use this in the create login first
const adminRouter = require('./routes/users');
const auth = require('./routes/auth')(passport);

app.use('/admin', adminRouter);
app.use('/auth', auth);

app.listen(port, () => {
    console.log(`Server is running on port: ${ port }`);
});