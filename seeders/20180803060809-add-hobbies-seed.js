'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Hobbies', [
      {
        hobby_name: "Rowing boats",
        category: "Sports"
      }, {
        hobby_name: "Cosplay",
        category: "Anime"
      }, {
        hobby_name: "Mac forum",
        category: "Technology"
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Hobbies', null, {});
  }
};
