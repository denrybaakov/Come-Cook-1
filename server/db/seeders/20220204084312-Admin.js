'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Admins', [{
      name: 'Anton',
      email: 'nagibatel3000@mail.ru',
      password:123,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface, Sequelize) {
   await queryInterface.bulkDelete('Admins', null, {})
  }
};
