'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('Events', [
     {
       event_name: "Drag",
       quota: 4,
       schedule: new Date(),
       HobbyId: 3
   }, {
    event_name: "Dressup Anime",
    quota: 8,
    schedule: new Date(),
    HobbyId: 6
   }, {
    event_name: "Ngobar",
    quota: 20,
    schedule: new Date(),
    HobbyId: 7
   }
  ])
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('Events', null, {});
  }
};
