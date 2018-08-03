'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('Users', [{
     first_name: "Wisnu",
     last_name: "Gautama",
     email: "wisnu@mail.com",
     password: "1234",
     role: "admin"
   }, {
    first_name: "Odie",
    last_name: "Susanto",
    email: "odie@mail.com",
    password: "1234",
    role: "admin"
   }, {
    first_name: "Andre",
    last_name: "Sudi",
    email: "andre@mail.com",
    password: "abcd",
    role: "user"
   }, {
    first_name: "Fajar",
    last_name: "TC",
    email: "fajar@mail.com",
    password: "abcd",
    role: "user"
   }
   ], {});
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('Users', null, {});
  }
};
