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
            return;
        }
        if (record) {
            bcrypt.compare(req.body.password, record.password, function (err, result) {
                if (err) {
                    console.log('Error: ' + err);
                    return;
                } else{
                    if (result == true){
                        console.log('Correct password!')
                        const loggedUser = {name: record.username, password: req.body.password}
                        const accessToken = jwt.sign(loggedUser, process.env.ACCESS_TOKEN_SECRET)
                        res.send(accessToken);
                        return;
                    } else if (result == false){
                        res.status(401).jsonjson('Incorrect Password')
                        return;
                    }
                }
            })
        } else {
            res.status(401).json('User does not exist');
            return;
        }
    });
});
router.get('/getUser', authenticateToken, (req, res) =>{
    return res.send(req.user);
})

function authenticateToken(req, res, next){
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null) return res.sendStatus(401)

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next()
    })
}

router.get('/', authenticateToken, (req, res) =>{
    User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err))
});

module.exports = router;