module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {


    userName: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    userPassword: {
      type: DataTypes.STRING,
      allowNull: false,
    },


    userCity: {
      type: DataTypes.STRING,
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
}, {
  timestamps: false
});

  return User;

};