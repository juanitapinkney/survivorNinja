module.exports = function(sequelize, DataTypes) {
  var Question = sequelize.define("Question", {

    id: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    quiz: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    answer: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    avatar: {
      type: DataTypes.STRING,
      allowNull: false
    }

    score: {
      type: DataTypes.INTEGER
      allowNull: false
    }
});

  return Question;
};