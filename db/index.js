const db = require("./db");

const Test = require("./models/Test");

//associations could go here!

module.exports = {
  db,
  models: {
    Test,
  },
};
