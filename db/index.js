const db = require("./db");

const Test = require("./models/Test");
// const Song = require('./models/Song');

//associations could go here!

// User.hasMany(Song);
// Song.belongsTo(User);

module.exports = {
  db,
  models: {
    Test,
  },
};
