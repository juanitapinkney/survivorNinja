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
var setup = require("./config/setup");
var User =require("./models").user;
var session = require("express-session");

// Sets up the Passport
// =============================================================

// passport.use(new Strategy({ 
//       usernameField: "userName"
//       pa
//      }, function(name, password, cb) {
//      	User.findOne({
//      		where: {
//      			userName: name
//      		}
//      	}).then(function(dbUser) {
//         res.json(dbUser);
//         console.log(user);
//         if (user) {
//           return cb(null, false);
//         } else{
//           return cb(null, false);
//         }
//         }).catch(function(err){
//           console.log("error");
//           return cb(err)
//         })
//     })); 

// passport.sequelizeUser(function(user, cb){
//   cb(null, user.id);

// });

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;


// Requiring our models for syncing
var db = require("./models");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Static directory
app.use(express.static("public"));

// // Setup Session
// app.use(({
//   setup:setup.secret,
//   proxy:true,
//   resave:false

// }));

// Routes
var path = require("path");

// Syncing our user models and then starting our Express app
// =============================================================
require("./routes/question-api-routes.js")(app);
require("./routes/user-api-routes.js")(app);
require("./routes/html-routes.js")(app);



// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});


