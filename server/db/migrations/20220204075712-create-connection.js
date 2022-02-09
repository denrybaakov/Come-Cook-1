'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Connections', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      povar_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Povars",
          key: "id"
        }
      },
      client_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Clients",
          key: "id"
        }
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
    await queryInterface.dropTable('Connections');
  }
};
