'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Likes extends Model {
    static associate({ Povar }) {
      this.hasMany(Povar, { foreignKey: 'likes_id' })
    }
  }
  Likes.init({
    like: DataTypes.INTEGER,
    dislike: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Likes',
  });
  return Likes;
};
