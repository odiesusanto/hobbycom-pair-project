'use strict';
const bcrypt = require('bcrypt');
module.exports = (sequelize, DataTypes) => {
  var Op = sequelize.Op
  var User = sequelize.define('User', {
    first_name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: { args: true, msg: `Cannot leave "First Name" field empty` }
      }
    },
    last_name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: { args: true, msg: `Cannot leave "Last Name" field empty` }
      }
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        is: {
          args: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
          msg: `Email format is incorrect!`
        },
        isUnique: function (value, next) {
          User.findOne(
            {
              where: {
                email: value, id: {
                  [Op.ne]: this.id
                }
              }
            })
            .then(input => {
              if (input !== null) {
                return next(`Email already exist!`);
              } else {
                return next();
              }
            })
            .catch(err => {
              return next(`Error message:`, err);
            })
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
    role: DataTypes.STRING
  }, {});

  User.beforeCreate(function (user, option) {
    const saltRound = 8;
    bcrypt.genSalt(saltRound, function (err, salt) {
      bcrypt.hash(user.password, salt, function (err, hash) {
        user.salt = salt;
        user.password = hash;
        user.save();
      })
    })
  });

  User.associate = function (models) {
    // associations can be defined here
    User.hasMany(models.Community);
    User.belongsToMany(models.Hobby, { through: models.Community });
  };
  return User;
};