'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Client extends Model {

    static associate({ Order, Cuisines, Connection }) {
      this.hasMany(Order, { foreignKey: "client_id" });
      this.belongsToMany(Cuisines, { through: 'Connection', foreignKey: "cuisine_id" });
    }
  }
  Client.init({
    name: DataTypes.STRING,
    surname: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    about: DataTypes.TEXT,
    phone: DataTypes.STRING,
    avatar: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'Client',
  });
  return Client;
};
