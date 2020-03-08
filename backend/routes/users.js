const router = require('express').Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
let User = require('../models/user.model');


//POST
router.route('/add').post((req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;

    bcrypt.hash(password, 10, function (err, hash) {
        const newUser = new User({ username, password: hash, email });
        if (err) {
            console.log(err);
        }
        newUser.save()
            .then(() => res.json('New user added'))
            .catch(err => res.status(400).json('Error: ' + err));
    });
});

router.route('/login').post((req, res) => {
    User.findOne({ username: req.body.username }, function (err, record) {
        if (err) {
            console.log('Error: ' + err);
        }
        if (record) {
            var valid = bcrypt.compare(req.body.password, User.password);
            if (valid) {
                res.json('Correct password!');
                const loggedUser = {name: req.body.username, password: req.body.username}
                const accessToken = jwt.sign(loggedUser, process.env.ACCESS_TOKEN_SECRET)
                return (res.json({ accessToken: accessToken }))
            } else {
                res.json('Incorrect password');
                return null;
            }
        } else {
            res.status(401).json('User does not exist');
            return null;
        }
    });
});

//GET
router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;