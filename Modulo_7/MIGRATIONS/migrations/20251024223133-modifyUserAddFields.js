'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    // Agregar nuevas columnas a la tabla 'users'
    // Columna 'birthdate' de tipo DATE
    await queryInterface.addColumn('users', 'birthdate', {
      type: Sequelize.DATE,
      allowNull: true,
    });
    // Columna 'phoneNumber' de tipo STRING
    await queryInterface.addColumn('users', 'phoneNumber', {
      type: Sequelize.STRING,
      allowNull: true,
    });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.removeColumn('users', 'birthdate');
    await queryInterface.removeColumn('users', 'phoneNumber');
  }
};
