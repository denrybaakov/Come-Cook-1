'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cuisines extends Model {
    static associate({ Client, Povar, Connection }) {
      this.belongsToMany(Povar, { through: 'Connection', foreignKey: 'cuisine_id' });
      this.belongsToMany(Client, { through: 'Connection', foreignKey: 'cuisine_id' });
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
