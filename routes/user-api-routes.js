var db = require("../models");

module.exports = function(app) {

  app.post("/api/index", function(req, res) {
    db.User.create({
      userName: req.body.userName,
      userCity: req.body.city,
      userState: req.body.state,
      avatar: req.body.avatar
      })
      .then(function(dbUser) {
        res.json(dbUser);
        })
      });

  app.put("/api/game", function(req, res) {
    db.User.update(req.body,
      {
        where: {
        avatar: req.body.avatar
        }
      })
    .then(function(dbUser) {
      res.json(dbUser);
    });
  });
};
