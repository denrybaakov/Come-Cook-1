'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate({ Client, Povar, Status }) {
      this.belongsTo(Client, { foreignKey: "client_id" });
      this.belongsTo(Povar, { foreignKey: "povar_id" });
      this.hasMany(Status, { foreignKey: "status_id" });
    }
  }
  Order.init({
    date: DataTypes.STRING,
    address: DataTypes.TEXT,
    title: DataTypes.STRING,
    text: DataTypes.TEXT,
    numOfPeople: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    status_id: DataTypes.INTEGER,
    povar_id: DataTypes.INTEGER,
    client_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};
