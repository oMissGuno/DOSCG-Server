const express = require("express");
const Router = express.Router();

Router.get("/find/xyz", (req, res) => {
  const x = 3 - (2 * (1 - 1)) // a(0)=a(1) - (2(n-1))
  const y = 5 - (2 * (2 - 1)) // a(1)=a(2) - (2(n-1))
  const z = 23 + (2 * (6 - 1)) // a(6)=a(5) + (2(n-1))
  const str = x + "," + y + "," + z
  res.json(str)
});

module.exports = Router;