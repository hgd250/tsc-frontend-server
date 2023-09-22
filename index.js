const express = require("express");
const path = require("path");

require("dotenv").config();

const app = express();

const BOND_PORT = 8080;

app.use(express.static(path.join(__dirname, "static", "dist")));

app.get("/hello", async (req, res) => {
  res.send("hello world");
});

app.listen(BOND_PORT, (error) => {
  console.log(`Listening on ` + BOND_PORT);
});
