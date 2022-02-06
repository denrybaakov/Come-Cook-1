'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Povar extends Model {

    static associate({ Order, Cuisines, Likes }) {
      this.hasMany(Cuisines, { foreignKey: 'cusine_id' });
      this.hasMany(Order, { foreignKey: 'povar_id' });
      this.hasMany(Likes, { foreignKey: 'likes_id' });
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
    cuisine_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Povar',
  });
  return Povar;
};
