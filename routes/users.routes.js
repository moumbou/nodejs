const express = require("express");
const { addResult, getUsers } = require("../services/users.service");
const route = express.Router();

route.post("/add/result", async (req, res) => {
  const { err, msg } = await addResult(req.body);
  if (err) return res.status(500).send(msg);
  res.status(200).send(msg);
});

route.get("/get/users", async (_req, res) => {
  const { err, msg } = await getUsers();
  if (err) return res.status(500).send(msg);
  res.status(200).send(msg);
});

module.exports = route;
