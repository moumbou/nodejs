const { authenticate } = require("../middleware/authentication");
const {
  addQuestion,
  getQuestions,
  addFirstSectionQuestion,
  getFirstSectionQuestion,
  addFactors,
  addPhases,
  getFactors,
  getPhases,
  updateFactor,
  deleteFactor,
  updateFirstSectionQuestion,
  deleteFirstSectionQuestion,
  updatePhase,
  deletePhase,
  updateQuestion,
  deleteQuestion,
  getStage,
  addStage,
  updateStage,
  deleteStage,
  addQuestions,
  addFirstSectionQuestions,
  addPhasesData,
  addStages,
  addFactorsData,
  addResult,
} = require("../services/questions.service");
const { getResultByUsers, getMaxSteps } = require("../services/users.service");

const route = require("express").Router();

route.get("/get/results", authenticate, async (_req, res) => {
  const { err, msg, response, status } = await getResultByUsers();
  res.status(status).send({ msg, response });
});

route.post("/login", async (req, res) => {
  const secretKey = process.env.SECRET_KEY;
  if (req.body.key !== secretKey) return res.status(401).send("unauth");
  res.status(200).send(secretKey);
});

route.get("/get/maxSteps", authenticate, async (_req, res) => {
  const { err, msg } = await getMaxSteps();
  if (err) return res.status(500).send(msg);
  res.status(200).send({ max: msg });
});

route.post("/add/question", authenticate, async (req, res) => {
  const { err, message, result } = await addQuestion(req.body);
  if (err) res.status(500).send(message);
  res.status(200).send(result);
});

route.post("/add/question/firstsection", authenticate, async (req, res) => {
  const { err, message, result } = await addFirstSectionQuestion(req.body);
  if (err) return res.status(500).send(message);
  res.status(200).send(result);
});

route.get("/get/firstsection", async (_req, res) => {
  const { err, message, result } = await getFirstSectionQuestion();
  if (err) return res.status(500).send(message);
  res.status(200).send(result);
});

route.patch("/update/question/firstsection/:id", async (req, res) => {
  const { id } = req.params;
  const { err, message, result } = await updateFirstSectionQuestion(
    req.body,
    id
  );
  res.status(err ? 500 : 200).send({ message, result });
});

route.delete("/delete/question/firstsection/:id", async (req, res) => {
  const { id } = req.params;
  const { err, message, result } = await deleteFirstSectionQuestion(id);
  res.status(err ? 500 : 200).send({ message, result });
});

route.get("/get/questions", async (_req, res) => {
  const { err, message, result } = await getQuestions();
  if (err) return res.status(500).send(message);
  res.status(200).send(result);
});

route.patch("/update/question/:id", async (req, res) => {
  const { id } = req.params;
  const { err, message, result } = await updateQuestion(req.body, id);
  res.status(err ? 500 : 200).send({ message, result });
});

route.delete("/delete/question/:id", async (req, res) => {
  const { id } = req.params;
  const { err, message, result } = await deleteQuestion(id);
  res.status(err ? 500 : 200).send({ message, result });
});

route.post("/add/factors", async (req, res) => {
  const { err, message, result } = await addFactors(req.body);
  if (err) return res.status(500).send({ message, result });
  res.status(200).send({ message, result });
});

route.post("/add/factorsdata", async (req, res) => {
  const { status, msg, response } = await addFactorsData(req.body);
  res.status(status).send({ msg, response });
});

route.patch("/update/factor/:id", async (req, res) => {
  const { id } = req.params;
  const { err, message, result } = await updateFactor(req.body, id);
  res.status(err ? 500 : 200).send({ message, result });
});

route.delete("/delete/factor/:id", async (req, res) => {
  const { id } = req.params;
  const { err, message, result } = await deleteFactor(id);
  res.status(err ? 500 : 200).send({ message, result });
});

route.post("/add/phases", async (req, res) => {
  const { err, message, result } = await addPhases(req.body);
  if (err) return res.status(500).send({ message, result });
  res.status(200).send({ message, result });
});

route.post("/add/phasesdata", async (req, res) => {
  const { status, msg, response } = await addPhasesData(req.body);
  res.status(status).send({ msg, response });
});

route.patch("/update/phase/:id", async (req, res) => {
  const { id } = req.params;
  const { err, message, result } = await updatePhase(req.body, id);
  res.status(err ? 500 : 200).send({ message, result });
});

route.delete("/delete/phase/:id", async (req, res) => {
  const { id } = req.params;
  const { err, message, result } = await deletePhase(id);
  res.status(err ? 500 : 200).send({ message, result });
});

route.get("/get/factors", async (_req, res) => {
  const { err, message, result } = await getFactors();
  if (err) return res.status(500).send({ message, result });
  res.status(200).send({ message, result });
});

route.get("/get/phases", async (_req, res) => {
  const { err, message, result } = await getPhases();
  if (err) return res.status(500).send({ message, result });
  res.status(200).send({ message, result });
});

route.get("/stages/get", async (_req, res) => {
  const { err, message, result } = await getStage();
  res.status(err ? 500 : 200).send({ message, result });
});

route.post("/stages/add", async (req, res) => {
  const { err, message, result } = await addStage(req.body);
  res.status(err ? 500 : 200).send({ message, result });
});

route.post("/add/stagesdata", async (req, res) => {
  const { response, status, msg } = await addStages(req.body);
  res.status(status).send({ msg, response });
});

route.patch("/stages/update/:id", async (req, res) => {
  const { id } = req.params;
  const { err, message, result } = await updateStage(req.body, id);
  res.status(err ? 500 : 200).send({ message, result });
});

route.delete("/stages/delete/:id", async (req, res) => {
  const { id } = req.params;
  const { err, message, result } = await deleteStage(id);
  res.status(err ? 500 : 200).send({ message, result });
});

route.post("/add/questions", async (req, res) => {
  const { msg, result, status } = await addQuestions(req.body.data);
  res.status(status).send({ msg, response: result });
});

route.post("/add/firstquestions", async (req, res) => {
  const { msg, result, status } = await addFirstSectionQuestions(req.body);
  res.status(status).send({ msg, response: result });
});

route.post("/add/result/data", async (req, res) => {
  const { msg, status } = await addResult(req.body);
  res.status(status).send({ msg });
});

module.exports = route;
