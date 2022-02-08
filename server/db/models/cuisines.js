'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cuisines extends Model {
    static associate({ Client, Povar }) {
      this.hasMany(Client, { foreignKey: 'cuisine_id' });
      this.hasMany(Povar, { foreignKey: 'cuisine_id' });
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
