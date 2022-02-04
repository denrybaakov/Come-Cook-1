'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Client extends Model {

    static associate({ Order, Cuisine}) {
      this.hasMany(Order, {foreignKey: "client_id"});
      this.hasMany(Cuisine, {foreignKey: "cuisine_id"});
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
    cuisine_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Client',
  });
  return Client;
};
