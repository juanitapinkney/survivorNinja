module.exports = function(sequelize, DataTypes) {
  var Question = sequelize.define("Question", {

    username: {
	     type: DataTypes.STRING,
	     allowNull: false,
    },

    city: {
		type: DataTypes.STRING,
		allowNull: false,
    },

    state: {
    	type: DataTypes.STRING,
    	allowNull: false,
    },

    avatar: {
    	type: DataTypes.STRING,
    	allowNull: false
    }
});

  return Question;
};