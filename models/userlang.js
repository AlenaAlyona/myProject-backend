"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class userLang extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      userLang.belongsTo(models.user);
      userLang.belongsTo(models.language);
    }
  }
  userLang.init(
    {
      userId: DataTypes.INTEGER,
      languageId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "userLang",
    }
  );
  return userLang;
};
