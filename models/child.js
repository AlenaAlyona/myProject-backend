"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class child extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      child.belongsTo(models.user);
    }
  }
  child.init(
    {
      age: {
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: "child",
    }
  );
  return child;
};
