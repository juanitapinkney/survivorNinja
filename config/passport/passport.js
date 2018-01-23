
//load bcrypt
var bCrypt = require('bcrypt-nodejs');
 
 
module.exports = function(passport, user) {
 
 
    var User = user;
 
    var LocalStrategy = require('passport-local').Strategy;
 
 
    passport.use('local-signup', new LocalStrategy(
 
        {
 
            usernameField: 'name',
 
            passwordField: 'password',
 
            passReqToCallback: true // allows us to pass back the entire request to the callback
 
        },
 
 
 
        function(req, email, password, done) {
 
            var generateHash = function(password) {
 
                return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
 
            };
 
 
 
            User.findOne({
                where: {
                    name: username,
                    password: userPassword
                }
            }).then(function(user) {
 
                if (user)
 
                {
 
                    return done(null, false, {
                        message: 'That name is already taken'
                    });
 
                } else
 
                {
 
                    var userPassword = generateHash(password);
 
                    var userInfo =
 
                        {
                            name: req.body.name,
 
                            password: userPassword,
 
                            city: req.body.city,
 
                            state: req.body.state
 
                        };
 
                    User.create(data).then(function(newUser, created) {
 
                        if (!newUser) {
 
                            return done(null, false);
 
                        }
 
                        if (newUser) {
 
                            return done(null, newUser);
 
                        }
 
                    });
 
                }
 
            });
 
        }
 
    ));
 
}