module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {

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

// });

