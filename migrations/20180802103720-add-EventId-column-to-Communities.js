'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.addColumn('Communities', 'EventId', {type: Sequelize.INTEGER});
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.removeColumn('Communities', {})
  }
};
