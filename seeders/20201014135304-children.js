"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert(
      "children",
      [
        {
          age: 7,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          age: 10,
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          age: 7,
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          age: 10,
          userId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          age: 12,
          userId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          age: 11,
          userId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          age: 12,
          userId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete("children", null, {});
  },
};
