module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("user", {

<<<<<<< HEAD
    name: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    avatar: DataTypes.TEXT,
    score: DataTypes.INTEGER

  });
  return User;
};

//   User.sync({force: true}).then(() => {
//   // Table created
//   return user.create({
//     userName: "",
//     userCity: "",
//     userState: "",
//     avatar: "",
//     score:"",

//   })
=======
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
>>>>>>> e2f1a7ba28524f8a90f04f76812d4fe2218d8e50

// });

