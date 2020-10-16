const { Router } = require("express");
const auth = require("../auth/middleware");
const City = require("../models").city;

const router = new Router();

router.get("/", async (req, res, next) => {
  try {
    const cities = await City.findAll();
    res.json(cities);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
