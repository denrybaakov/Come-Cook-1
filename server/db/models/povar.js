'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Povar extends Model {

    static associate({ Order, Cuisines, Likes, Connection }) {
      this.belongsToMany(Cuisines, { through: 'Connection', foreignKey: 'cuisine_id' });// поменять на повар айди
      this.hasMany(Order, { foreignKey: 'povar_id' });
      this.belongsTo(Likes, { foreignKey: 'likes_id' });
    }
  }
  Povar.init({
    name: DataTypes.STRING,
    surname: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    about: DataTypes.TEXT,
    phone: DataTypes.STRING,
    experience: DataTypes.INTEGER,
    servicePrice: DataTypes.INTEGER,
    likes_id: DataTypes.INTEGER,
    avatar: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'Povar',
  });
  return Povar;
};
