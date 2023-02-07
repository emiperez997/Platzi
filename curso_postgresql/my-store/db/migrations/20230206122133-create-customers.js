'use strict';

const { CustomerSchema, CUSTOMER_TABLE } = require('../models/customer.model');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(CUSTOMER_TABLE, CustomerSchema);
  },

  async down(queryInterface, Sequelize) {
    // Rollback
    await queryInterface.drop(CUSTOMER_TABLE);
  },
};
