'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {


    await queryInterface.bulkInsert('Povars', [
      {
        avatar: 'https://blog.novanet.no/content/images/2017/02/Letscook-1.jpg',
        name: 'Povar',
        surname: 'Povarov',
        email: 'pov1@mail.ru',
        password: 123,
        about: 'about text',
        experience: 2,
        servicePrice: 5000,
        phone: '+7 123 456 78 90',
        cuisine_id: null,
        likes_id: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        avatar: 'https://pbs.twimg.com/media/Dls1suYX4AAkunz.jpg',
        name: 'Povar2',
        surname: 'Povarov2',
        email: 'pov2@mail.ru',
        password: 123,
        about: 'about text',
        experience: 22,
        servicePrice: 50300,
        phone: '+7 123 456 78 90',
        cuisine_id: null,
        likes_id: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        avatar: 'https://sun9-53.userapi.com/c846220/v846220673/9cec4/o4713fuJbAE.jpg',
        name: 'Povar3',
        surname: 'Povarov3',
        email: 'pov3@mail.ru',
        password: 123,
        about: 'about text',
        experience: 5,
        servicePrice: 1000,
        phone: '+7 123 456 78 90',
        cuisine_id: null,
        likes_id: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});

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
