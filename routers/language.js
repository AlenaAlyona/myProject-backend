const { Router } = require("express");
const Lang = require("../models").language;
const User = require("../models").user;
const Child = require("../models").child;
const authMiddleware = require("../auth/middleware");

const router = new Router();

router.get("/", async (req, res, next) => {
  try {
    const langs = await Lang.findAll();
    res.json(langs);
  } catch (e) {
    next(e);
  }
});

router.get("/:languageId/users", async (req, res) => {
  const languageId = req.params.languageId;
  console.log("LANG ID", languageId);
  if (isNaN(parseInt(languageId))) {
    return res.status(400).send({ message: "Language id is not a number" });
  }

  const usersWithLang = await User.findAll({
    include: [
      {
        model: Lang,
        where: { id: languageId },
      },
      {
        model: Child,
      },
    ],
  });

  return res.json(usersWithLang).status(201);
});

module.exports = router;
