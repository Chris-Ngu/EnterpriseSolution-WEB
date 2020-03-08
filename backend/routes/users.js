const router = require('express').Router();
const bcrypt = require('bcrypt');
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
                //generate JWT HERE
                res.json('Correct password!');
            } else {
                res.json('Incorrect password');
            }
        } else {
            res.json('User does not exist');
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