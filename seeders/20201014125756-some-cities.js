"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert(
      "cities",
      [
        {
          name: "Amsterdam",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Utrecht",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Rotterdam",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Den Haag",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Tilburg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Groningen",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Eindhoven",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Almere",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Breda",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Nijmegen",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Enschede",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Haarlem",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("cities", null, {});
  },
};
