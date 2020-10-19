const { Router } = require("express");
const Lang = require("../models").language;
const UserLang = require("../models").userLang;
const User = require("../models").user;
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

  if (isNaN(parseInt(languageId))) {
    return res.status(400).send({ message: "Language id is not a number" });
  }

  const usersWithLang = await UserLang.findAll({
    include: User,
    iclude: Lang,
    where: { languageId },
  });

  return res.json(usersWithLang).status(201);
});

module.exports = router;
