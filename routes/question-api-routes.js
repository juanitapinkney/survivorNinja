// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Todo model
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {
  // GET route for getting all of the questions
  app.get("/api/questions/", function(req, res) {
    db.Question.findAll({})
    .then(function(dbQuestion) {
      res.json(dbQuestion);
    });
  });

  // Get route for returning questions of a specific category
  app.get("/api/questions/category/:category", function(req, res) {
    db.Question.findAll({
      where: {
        category: req.params.category
      }
    })
    .then(function(dbQuestion) {
      res.json(dbQuestion);
    });
  });

  // Get rotue for retrieving a single Question
  app.get("/api/questions/:id", function(req, res) {
    db.Question.findOne({
      where: {
        id: req.params.id
      }
    })
    .then(function(dbQuestion) {
      res.json(dbQuestion);
    });
  });

  // Post route for saving a new post
  app.post("/api/questions", function(req, res) {
    console.log(req.body);
    db.Question.create({
      userName: req.body.userName,
      body: req.body.body,
      category: req.body.category
    })
    .then(function(dbQuestion) {
      res.json(dbQuestion);
    });
  });

  // DELETE route for deleting questions
  app.delete("/api/questions/:id", function(req, res) {
    db.Question.destroy({
      where: {
        id: req.params.id
      }
    })
    .then(function(dbQuestion) {
      res.json(dbQuestion);
    });
  });

  // PUT route for updating questions
  app.put("/api/questions", function(req, res) {
    db.Question.update(req.body,
      {
        where: {
          id: req.body.id
        }
      })
    .then(function(dbQuestion) {
      res.json(dbQuestion);
    });
  });
};
