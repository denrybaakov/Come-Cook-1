'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Clients', [
      {
        name: 'Bob',
        surname: 'Bobov',
        email: 'bob@mail.ru',
        password: 123,
        about: 'about text',
        phone: '+7 123 456 78 90',
        avatar: 'https://cs8.pikabu.ru/avatars/1653/x1653645-563147212.png',
        cuisine_id: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Bib',
        surname: 'Bibov',
        email: 'bib@mail.ru',
        password: 123,
        about: 'about text',
        phone: '+7 123 456 78 90',
        avatar: 'https://cs8.pikabu.ru/avatars/2558/x2558408-896910339.png',
        cuisine_id: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Bub',
        surname: 'Bubov',
        email: 'bub@mail.ru',
        password: 123,
        about: 'about text',
        phone: '+7 123 456 78 90',
        avatar: 'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/37/37c9c9b3c2656b1f4e9522327df60d60d22127fe_full.jpg',
        cuisine_id: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Clients', null, {})
  }
};
