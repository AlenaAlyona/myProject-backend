const bcrypt = require("bcrypt");
const { Router } = require("express");
const { toJWT } = require("../auth/jwt");
const auth = require("../auth/middleware");
const User = require("../models/").user;
const UserLang = require("../models/").userLang;
const { SALT_ROUNDS } = require("../config/constants");
const Child = require("../models").child;

const router = new Router();

router.post("/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .send({ message: "Please provide both email and password" });
    }

    const user = await User.findOne({
      where: { email },
      include: {
        model: Child,
      },
    });
    console.log("USER DATS", user.dataValues);
    if (!user || !bcrypt.compareSync(password, user.password)) {
      return res.status(400).send({
        message: "User with that email not found or password incorrect",
      });
    }

    delete user.dataValues["password"];
    const token = toJWT({ userId: user.id });
    return res.status(200).send({ token, ...user.dataValues });
  } catch (error) {
    console.log(error);
    return res.status(400).send({ message: "Something went wrong, sorry" });
  }
});

router.post("/signup", async (req, res) => {
  try {
    const {
      email,
      password,
      passwordConfirmation,
      firstName,
      lastName,
      cityId,
      languageId,
      bio,
      age,
    } = req.body;
    if (
      !email ||
      !password ||
      !passwordConfirmation ||
      !firstName ||
      !lastName ||
      !cityId ||
      !languageId ||
      !bio ||
      !age
    ) {
      return res
        .status(400)
        .send({ message: "Please provide all the information" });
    } else if (password.length < 6) {
      return res
        .status(400)
        .send({ message: "Password must contain at least 6 characters" });
    } else if (password !== passwordConfirmation) {
      return res
        .status(400)
        .send({ message: "Password and password confirmation don't match" });
    }

    const newUser = await User.create({
      email,
      password: bcrypt.hashSync(password, SALT_ROUNDS),
      firstName,
      lastName,
      cityId,
      bio,
    });

    delete newUser.dataValues["password"];

    const children = await Promise.all(
      age.map(async (a) => {
        await Child.create({
          age: parseInt(a),
          userId: newUser.id,
        });
      })
    );

    const languages = await Promise.all(
      languageId.map(async (l) => {
        await UserLang.create({
          languageId: parseInt(l),
          userId: newUser.id,
        });
      })
    );

    res.status(201).json({
      ...newUser.dataValues,
      children: {
        ...children.dataValues,
      },
      userLangs: {
        ...languages.dataValues,
      },
    });
  } catch (error) {
    if (error.name === "SequelizeUniqueConstraintError") {
      return res
        .status(400)
        .send({ message: "There is an existing account with this email" });
    }

    return res.status(400).send({ message: error.message });
  }
});

router.get("/me", auth, async (req, res) => {
  const user = await User.findOne({
    where: { id: req.user.id },
    include: [Child],
  });

  delete req.user.dataValues["password"];
  res.status(200).send({ ...req.user.dataValues });
});

module.exports = router;
