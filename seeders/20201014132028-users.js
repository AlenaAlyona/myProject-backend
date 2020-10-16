"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          email: "b@gmail.com",
          password: "1234567",
          cityId: 1,
          firstName: "Bella",
          lastName: "Esposito",
          bio:
            "Hi! One of our languages at home is Italian, so we'd be happy to hang out with other kids and their parents who also speak Italian",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: "e@e.com",
          password: "999eee",
          cityId: 2,
          firstName: "Eleonora",
          lastName: "Ricci",
          bio:
            "Ciao! We're eager to make new friends who speak Italian, Dutch or English.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: "g@g.com",
          password: "ggg555",
          cityId: 3,
          firstName: "Giovanni",
          lastName: "Bruno",
          bio:
            "Hi! Are there any other Italian parents living in Utrecht? We want our son to speak Italian more and I think it'd be great if we can find a friend who also speaks Italian",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: "a@a.com",
          password: "aaa111",
          cityId: 4,
          firstName: "Elena",
          lastName: "Ivanova",
          bio:
            "Hi guys! We speak 2 languages at home: Dutch and Russian and our kid also learns English. We'll be happy to meet new friends!",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: "k@k.com",
          password: "888kkk",
          cityId: 5,
          firstName: "Ksenia",
          lastName: "Belikova",
          bio:
            "Hello! We moved to the Netherlands 3 years ago but it seems our daughter is starting to forget Russian. I thought it'd be nice if we could find friends who also speak Russian so she can practice it.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: "l@l.com",
          password: "lll777",
          cityId: 5,
          firstName: "Liza",
          lastName: "Petrova",
          bio:
            "Hi guys! My boy is 12y.o. and he speaks Dutch and Russian. We'd be glad to meet new friends!",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
