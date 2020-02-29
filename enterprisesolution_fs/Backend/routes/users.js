let User = require('../models/user.model');

const router = require('express').Router();
const bcrypt = require('bcrypt');

//POST
router.route('/').post((req, res) => {
    const username = req.body.username;
    //changed from const to string since model doesn't wanna play nice
    password = req.body.password;
    try { 
        crypt.hash(password, 10, function(err,hash){
        password = hash;
        const newUser = new User({ username, password});
        if (err){
            console.log(err);
        }
        newUser.save()
        .then(() => res.json('New user added'))
        .catch(err => res.status(400).json('Error: ' + err));
    });
        res.redirect('/login')
    } catch {
        res.redirect('/')
    } 
});

router.route('/login').post((req, res) => {
    const user = User.find(user => user.username = req.body.user)

    if (user == null) {
        return res.status(400).send('No user exists')
    } try {
        if (bcrypt.compare(req.body.password, user.password)) {
            res.send('Logged in')
        } else{
            res.send('Wrong password')
        }
    } catch {
        res.status(500).send()
    }
})
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