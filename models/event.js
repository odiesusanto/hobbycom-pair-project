'use strict';
module.exports = (sequelize, DataTypes) => {
  var Event = sequelize.define('Event', {
    event_name: DataTypes.STRING,
    quota: DataTypes.INTEGER,
    schedule: DataTypes.DATE,
    attendance: DataTypes.INTEGER,
    HobbyId: DataTypes.INTEGER
  }, {});

  Event.hook('afterValidate', (user,options) => {
    const nodemailer = require('nodemailer');

    var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
          user: 'wisnugautama666@gmail.com',
          pass: 'venomous35'
    }
  });

    const mailOptions = {
    from: 'HobbyCom', // sender address
    to: `fajartc02@gmail.com`, // list of receivers
    subject: 'Confirm your attendance', // Subject line
    html: '<a href="http://localhost:3000/">Confirm Attendance</a><br><br> Thank you for your interest in this event. Please click the link below to confirm your attendance. We look forward to having you there!' // plain text body
  };

  transporter.sendMail(mailOptions, function (err, info) {
    if(err)
      console.log(err)
    else
      console.log(info);
  });

  })
  Event.associate = function(models) {
    // associations can be defined here
    Event.belongsTo(models.Hobby);
    // Event.belongsTo(models.Community);
  };
  return Event;
};