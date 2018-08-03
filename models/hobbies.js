'use strict';
module.exports = (sequelize, DataTypes) => {
  var Hobby = sequelize.define('Hobby', {
    hobby_name: DataTypes.STRING,
    category: DataTypes.STRING
  }, {});
  Hobby.associate = function(models) {
    // associations can be defined here
    Hobby.hasMany(models.Community);
    Hobby.hasMany(models.Event);
    Hobby.belongsToMany(models.User, {through: models.Community});
  };
  return Hobby;
};