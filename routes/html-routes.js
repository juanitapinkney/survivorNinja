// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");
var router = require ("express").Router();
var User = require("../models").user;
var passport = require("passport");

// Routes
// =============================================================
// Each of the below routes just handles the HTML page that the user gets sent to.

module.exports = function(app) {
app.get("/", function(req, res){
  if(req.user){
     // user is logged in
   }else{
    res.render("index", {user: req.user
     // user is not logged in
   })
   }
})
  
// index route loads view.html
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

app.get("/Game", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/Game.html"));
  });

  // index route loads index.html
app.get("/index", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

};
