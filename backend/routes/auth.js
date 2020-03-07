const express = require('express');
const router = require('express').Router();
const User = require('../models/user.model');
const bcrypt = require('bcrypt');

module.exports = function (passport) {
    router.post('/add', function (req, res) {
        const username = req.body.username;
        const password = req.body.password;
        const email = req.body.email;

        User.findOne({ username: username }, function (err, doc) {
            if (err) { res.status(500).send('An error occurred') }
            else {
                if (doc) {
                    res.status(500).send('User already exists')
                }
                else {
                    bcrypt.hash(password, 10, function (err, hash) {
                        const newUser = new User({
                            username: username,
                            password: hash,
                            email: email
                        });
                        if (err) {
                            console.log(err);
                        }
                        newUser.save()
                            .then(() => res.json('New user added'))
                            .catch(err => res.status(400).json('Error: ' + err));
                    });
                }
            }
        })
    });
    router.post('/login', passport.authenticate('local',{
        failureRedirect:'/',
        succeessRedirect:'/home',

    }), function(req, res){
        res.send('HI')
    })
    return router;
}