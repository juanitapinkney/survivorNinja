module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("user", {

//     name: DataTypes.STRING,
//     city: DataTypes.STRING,
//     state: DataTypes.STRING,
//     avatar: DataTypes.TEXT,
//     score: DataTypes.INTEGER

//   });
//   return User;
// };

//   User.sync({force: true}).then(() => {
//   // Table created
//   return user.create({
//     userName: "",
//     userCity: "",
//     userState: "",
//     avatar: "",
//     score:"",

//   })

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