'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

  //   await queryInterface.bulkInsert('Orders', [
  //     {
  //     date: '27 - 11 - 2022',
  //     address: 'ул. Климашкина д.10 кв.64',
  //     title: 'Ужин для тёти из Барселоны',
  //     text: 'Кухя на выбор повара',
  //     numOfPeople: 12,
  //     price: 50000,
  //     status_id: 2,
  //     povar_id: 1,
  //     client_id: 1,
  //     createdAt: new Date(),
  //     updatedAt: new Date(),
  //   },
  //   {
  //     date: '28 - 12 - 2022',
  //     address: 'улица Берзарина, 21',
  //     title: 'Ужин для тёти из Сианя',
  //     text: 'Кухя на выбор повара',
  //     numOfPeople: 10,
  //     price: 500000,
  //     status_id: 3,
  //     povar_id: 2,
  //     client_id: 2,
  //     createdAt: new Date(),
  //     updatedAt: new Date(),
  //   },
  //   {
  //     date: '29 - 11 - 2023',
  //     address: 'улица маршала Тухачевского, 28',
  //     title: 'Ужин для тёти из Амстердама',
  //     text: 'Кухя на выбор повара',
  //     numOfPeople: 22,
  //     price: 30040,
  //     status_id: 1,
  //     povar_id: 3,
  //     client_id: 3,
  //     createdAt: new Date(),
  //     updatedAt: new Date(),
  //   },
  //   {
  //     date: '30 - 12 - 2023',
  //     address: 'улица Орджоникидзе, 11с1',
  //     title: 'Ужин для тёти из Андорры',
  //     text: 'Кухя на выбор повара',
  //     numOfPeople: 15,
  //     price: 65000,
  //     status_id: 2,
  //     povar_id: 1,
  //     client_id: 2,
  //     createdAt: new Date(),
  //     updatedAt: new Date(),
  //   },
  //   {
  //     date: '31 - 12 - 2023',
  //     address: '1-я Дубровская улица, 13',
  //     title: 'Ужин для тёти из Кейптауна',
  //     text: 'Кухя на выбор повара',
  //     numOfPeople: 20,
  //     price: 20000,
  //     status_id: 3,
  //     povar_id: 3,
  //     client_id: 1,
  //     createdAt: new Date(),
  //     updatedAt: new Date(),
  //   }
  // ], {})
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
