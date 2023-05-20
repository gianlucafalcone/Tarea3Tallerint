'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  transaction.init({
    type: DataTypes.INTEGER,
    sourceBank: DataTypes.INTEGER,
    sourceAccount: DataTypes.INTEGER,
    destinationBank: DataTypes.INTEGER,
    destinationAccount: DataTypes.INTEGER,
    amount: DataTypes.INTEGER,
    publishTime: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'transaction',
  });
  return transaction;
};