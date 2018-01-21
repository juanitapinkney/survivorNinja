module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {

  id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    
    }

    userName: {
      type: Sequelize.STRING,
      allowNull: false,
    },

    userCity: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },

    userState: {
      type: Sequelize.STRING,
      allowNull: false
    }

    avatar: {
      type: Sequelize.STRING,
      allowNull: false
    }

    score: {
      type: Sequelize.INTEGER
      allowNull: false
      defaultValue: 0,
    }
});

  User.sync({force: true}).then(() => {
  // Table created
  return User.create({
    userName: "",
    userCity: "",
    userState: "",
    avatar: "",
    score:"",

  })

});

};

