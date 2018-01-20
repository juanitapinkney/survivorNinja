module.exports = function(sequelize, DataTypes) {
  var Question = sequelize.define("Question", {
    username: DataTypes.STRING,
    city:DataTypes.STRING
    states:DataTypes.STRING
	    allowNull: true,
	    defaultValue: null,
    avatar:DataTypes.STRING
  });

  return Question;
};