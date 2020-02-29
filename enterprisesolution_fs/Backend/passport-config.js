const localStrat = require('passport-local').Strategy;
const bcrypt = require('bcrypt');

function initialize(passport, getUserByEmail){
    const authenticateUser = (username, password, done) => {
        const user = getUserByName(username)
        if (user == null) {
            return done(null, false, { message: 'User not found' })
        }

        try {
            if (await bcrypt.compare(password, user)) {
                return done(null, user)
            } else {
                return done(null, false, { message: 'Incorrect password' })
            }
        } catch (e) {
            return done(e)
        }
    }
    passport.use(new localStrat({ usernameField: 'username'}), authenticateUser);
    passport.serializeUser((user, done) => { })
    passport.deserializeUser((id, done) => { })
}

module.exports = initialize();