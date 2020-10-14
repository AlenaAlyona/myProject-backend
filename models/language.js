"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class language extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      language.belongsToMany(models.user, {
        through: "userLangs",
        foreignKey: "langId",
      });
    }
  }
  language.init(
    {
      lang: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "language",
    }
  );
  return language;
};
