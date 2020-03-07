const localStrategy = require('passport-local').Strategy;
const User = require('./models/user.model');
const bcrypt = require('bcrypt');

module.exports = function(passport){
    passport.serializeUser(function(user,done){
        done(null, user)
    })
    passport.deserializeUser(function(user,done){
        done(null, user)
    })

    passport.use(new localStrategy(function(username, password, done){
        User.findOne({ username:username}, function(err, doc){
            if (err){
                done(err);
            } else{
                //if found a person with a matching username
                if (doc){
                    const valid = false;
                    bcrypt.compare(password, User.password, function(err, result){
                        valid = result;
                    });
                    if (valid){
                        done(null,{
                            username: doc.username,
                            password: doc.password
                        })
                    }
                    else{
                        done(null,false)
                    }
                } else{
                    done(null, false)
                }
            }
        })
    }))
}