const { default: mongoose } = require("mongoose");

const resultSchema = new mongoose.Schema({
  username: String,
  email: String,
  businessname: String,
  path: String,
  answers: [
    {
      factor: Number,
      question: String,
      index: Number,
      value: Number,
    },
  ],
  factors: [
    {
      factor: String,
      value: Number,
    },
  ],
});

const result = mongoose.model("Result", resultSchema);
module.exports = result;
