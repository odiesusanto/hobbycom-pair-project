'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.changeColumn('Events', 'attendance', {type: Sequelize.INTEGER, defaultValue: 0})
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.changeColumn('Events', 'attendance', {type: Sequelize.INTEGER});
  }
};
