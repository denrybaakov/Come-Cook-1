'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cuisines extends Model {
    static associate({ Client, Povar }) {
      this.belongsTo(Client, { foreignKey: 'cuisine_id' });
      this.belongsTo(Povar, { foreignKey: 'cuisine_id' });
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
