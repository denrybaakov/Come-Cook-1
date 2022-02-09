'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Connection extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Connection.init({
    povar_id: DataTypes.INTEGER,
    client_id: DataTypes.INTEGER,
    cuisine_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Connection',
  });
  return Connection;
};