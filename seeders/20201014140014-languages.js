"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert(
      "languages",
      [
        {
          lang: "English",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          lang: "Dutch",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          lang: "Italian",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          lang: "Russian",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          lang: "Chinese",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          lang: "Spanish",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          lang: "German",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          lang: "French",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete("languages", null, {});
  },
};
