const express = require("express");
const Router = express.Router();

Router.use(require("./api_finding_xyz"));
Router.use(require("./api_finding_bc"));
Router.use(require("./api_line_msg"));

module.exports = Router;