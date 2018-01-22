module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("user", {
  id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    
    },

    userName: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    userPassword: {
      type: DataTypes.STRING,
      allowNull: false,
    },


    userCity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    userState: {
      type: DataTypes.STRING,
      allowNull: false
    },

    avatar: {
      type: DataTypes.STRING,
      allowNull: true
    },

    score: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
});

  return User;

};