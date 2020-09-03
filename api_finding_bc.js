const express = require("express");
const Router = express.Router();

Router.post("/find/bc", (req, res) => {
    var a = req.body.a
    var b = 23 - a
    var c = -21 - a
    var str = "B = " + b + ", C = " + c
    res.json(str)
});

module.exports = Router;