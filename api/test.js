const router = require("express").Router();
const {
  models: { Test },
} = require("../db");
module.exports = router;

router.get("/", async (req, res, next) => {
  const test = await Test.findAll();
  res.json(test);
});

router.post("/", async (req, res, next) => {
  try {
    const t = await Test.create(req.body);
    res.json(t);
  } catch (error) {
    next(error);
  }
});
