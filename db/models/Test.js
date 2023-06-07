const Sequelize = require("sequelize");
const db = require("../db");

const Test = db.define("test", {
  jam: {
    type: Sequelize.STRING,
    unique: true,
  },

  name: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
});

module.exports = Test;
