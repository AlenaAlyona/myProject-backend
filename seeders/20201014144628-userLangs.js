"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert(
      "userLangs",
      [
        {
          userId: 1,
          languageId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          languageId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          languageId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          languageId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          languageId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          languageId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 4,
          languageId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 4,
          languageId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 4,
          languageId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 5,
          languageId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 5,
          languageId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 6,
          languageId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 6,
          languageId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete("userLangs", null, {});
  },
};
