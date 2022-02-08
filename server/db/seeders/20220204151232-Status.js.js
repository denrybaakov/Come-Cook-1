'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Statuses', [{
      name: 'Повар не найден',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Активен',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Заказ выполнен',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ], {})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
