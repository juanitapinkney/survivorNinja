module.exports = function(sequelize, DataTypes) {
  var Question = sequelize.define("Question", {

    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    
    },

    quiz: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    answer: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }

  });

  return Question;

};