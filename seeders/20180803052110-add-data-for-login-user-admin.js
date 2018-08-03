'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('Users', [{
     first_name: "Wisnu",
     last_name: "Gautama",
     email: "wisnu@mail.com",
     password: "$2b$08$sC3xPzzTAjtxDRB1CKNt7.OffWgcLZS1pyMwWxH3v6zpiVb0Gm9j.",
     role: "admin"
   }, {
    first_name: "Odie",
    last_name: "Susanto",
    email: "odie@mail.com",
    password: "$2b$08$sC3xPzzTAjtxDRB1CKNt7.OffWgcLZS1pyMwWxH3v6zpiVb0Gm9j.",
    role: "admin"
   }, {
    first_name: "Andre",
    last_name: "Sudi",
    email: "andre@mail.com",
    password: "$2b$08$sC3xPzzTAjtxDRB1CKNt7.OffWgcLZS1pyMwWxH3v6zpiVb0Gm9j.",
    role: "user"
   }, {
    first_name: "Fajar",
    last_name: "TC",
    email: "fajar@mail.com",
    password: "$2b$08$sC3xPzzTAjtxDRB1CKNt7.OffWgcLZS1pyMwWxH3v6zpiVb0Gm9j.",
    role: "user"
   }
   ], {});
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('Users', null, {});
  }
};
