'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Povars', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      surname: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      about: {
        type: Sequelize.TEXT
      },
      phone: {
        type: Sequelize.STRING
      },
      experience: {
        type: Sequelize.INTEGER
      },
      servicePrice: {
        type: Sequelize.INTEGER
      },
      likes_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Likes",
          key: "id"
        }
      },
      avatar: {
        type: Sequelize.TEXT
      },
      cuisine_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Cuisines",
          key: "id"
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Povars');
  }
};
