const express = require("express");
const morgan = require("morgan");
const app = express();
module.exports = app;

app.use(morgan("dev"));
app.use(express.json());

// app.use("/auth", require("./auth"));
app.use("/api", require("./api"));

app.use("/", (req, res, next) => {
  res.send("<p>How did you end up here?</p>");
});

app.listen(8000, () => {
  console.log("listening on port 8000");
});
