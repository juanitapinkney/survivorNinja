// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
var passport = require("passport");
var Strategy = require("passport-local").Strategy;
var User =require("./models").user;
var session = require("express-session");
var env = require('dotenv').load();

var bCrypt = require('bcrypt-nodejs');


// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;


// Requiring our models for syncing
var db = require("./models");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.engine('hbs', exphbs({index: '.index'}));
app.set("view engine", "handlebars");
app.set('views', './app/views')


// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// For Passport
 
app.use(session({ secret: 'keyboard cat',resave: true, saveUninitialized:true})); // session secret
app.use(passport.initialize()); 
app.use(passport.session()); // persistent login sessions

 
db.sequelize.sync().then(function() {
 
    console.log('Nice! Database looks fine')
 
 
}).catch(function(err) {
 
    console.log(err, "Something went wrong with the Database Update!")
 
});
 
 
app.listen(5000, function(err) {
 
    if (!err)
 
        console.log("Site is live");
         
    else console.log(err)
 
});

// Static directory
app.use(express.static("public"));

// Routes
var path = require("path");

// Syncing our user models and then starting our Express app
// =============================================================
var authRoute = require('./routes/auth-api-routes.js')(app, passport);
require("./routes/question-api-routes.js")(app);
require("./routes/user-api-routes.js")(app);
require("./routes/html-routes.js")(app);
require("./models");
require('./config/passport/passport.js')(passport, User);


// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});


