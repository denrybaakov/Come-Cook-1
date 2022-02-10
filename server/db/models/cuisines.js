'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cuisines extends Model {
    static associate({ Client, Povar, Connection }) {
      this.belongsToMany(Client, { through: 'Connection', foreignKey: 'client_id' });
      this.belongsToMany(Povar, { through: 'Connection', foreignKey: 'povar_id' }); //поменять на кузин айди
    }
  }
  Cuisines.init({
    name: DataTypes.STRING,
    img: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Cuisines',
  });
  return Cuisines;
};
