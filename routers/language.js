const { Router } = require("express");
const Lang = require("../models").language;

const router = new Router();

router.get("/", async (req, res, next) => {
  try {
    const langs = await Lang.findAll();
    res.json(langs);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
