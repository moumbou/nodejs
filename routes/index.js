const express = require("express");
const route = express.Router();

route.use("/", require("./users.routes"));
route.use("/", require("./admin.routes"));

module.exports = route;
