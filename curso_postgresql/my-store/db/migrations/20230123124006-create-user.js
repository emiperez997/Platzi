'use strict';

// Se importa los modelos y se utilizan a medida que los cree
const { UserSchema, USER_TABLE } = require('../models/user.model');


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
		await queryInterface.createTable(USER_TABLE, UserSchema);
  },

  async down (queryInterface, Sequelize) {
		// rollback
		await queryInterface.drop(USER_TABLE);
  }
};
