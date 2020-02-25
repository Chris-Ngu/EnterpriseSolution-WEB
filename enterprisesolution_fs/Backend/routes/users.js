const router = require('express').Router();
const bcrypt = require('bcrypt');
let User = require('../models/user.model');

//POST
router.route('/').post((req, res) => {
    const username = req.body.username;
    password = req.body.password;

    bcrypt.hash(password, 10, function(err,hash){
        password = hash;
        const newUser = new User({ username, password});
        if (err){
            console.log(err);
        }

        newUser.save()
        .then(() => res.json('New user added'))
        .catch(err => res.status(400).json('Error: ' + err));
    });

});

/*

bcrypt.compare('somePassword', hash, function(err, res) {
  if(res) {
   // Passwords match
  } else {
   // Passwords don't match
  } 
});

*/

//GET
router.route('/').get((req, res) => {
    User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
    });

module.exports = router;