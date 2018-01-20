module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {

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

  return User;
};