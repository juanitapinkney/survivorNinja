
var authController = require("../controller/authcontroller.js");

module.exports = function(app, passport) {
	console.log(passport);
 
    app.get('/signup', authController.signup);
 
 
    app.get('/signin', authController.signin);
 
 
    app.post('/signup', passport.authenticate('local-signup', {
            successRedirect: '/Game',
 
            failureRedirect: '/signup'
        }))

    app.get('/Game',authController.Game);
 
};
