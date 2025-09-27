const express = require("express");
const app = express();

// route mặc định
app.get("/", (req, res) => {
  res.json({ message: "Welcome to contact book application." });
});

module.exports = app;
