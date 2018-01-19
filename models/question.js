module.exports = function(sequelize, DataTypes) {
  var Question = sequelize.define("Question", {
    username: DataTypes.STRING,
    city:DataTypes.STRING
    state:DataTypes.STRING
    avatar:DataTypes.STRING
  });

  return Question;
};