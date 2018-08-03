'use strict';
module.exports = (sequelize, DataTypes) => {
  var Community = sequelize.define('Community', {
    UserId: DataTypes.INTEGER,
    HobbyId: DataTypes.INTEGER, 
    EventId: DataTypes.INTEGER,
    joinStatus: DataTypes.BOOLEAN
  }, {});
  Community.associate = function(models) {
    // associations can be defined here
    Community.belongsTo(models.User);
    Community.belongsTo(models.Hobby);
    // Community.hasMany(models.Event);

  };
  return Community;
};