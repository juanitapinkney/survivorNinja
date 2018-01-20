// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;


// Requiring our models for syncing
var db = require("./models");

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Static directory
app.use(express.static("public"));

// Routes
// =============================================================
require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});




// var mysql = require("mysql");
// var inquirer = require("inquirer");

// // create the connection information for the sql database
// var connection = mysql.createConnection({
//   host: "localhost",
//   port: 3306,

// // Your username
//   user: "root",

// // Your password
//   password: null,
//   database: "survivorNinja_DB"
// });

// // connect to the mysql server and sql database
// connection.connect(function(err) {
//   if (err) throw err;
// // run the start function after the connection is made to prompt the user
//   start();
// });
