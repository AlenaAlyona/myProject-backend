"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class user_lang extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      user_lang.belongsTo(models.user);
      user_lang.belongsTo(models.language);
    }
  }
  user_lang.init(
    {
      userId: DataTypes.INTEGER,
      langId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "user_lang",
    }
  );
  return user_lang;
};
