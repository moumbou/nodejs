const { default: mongoose } = require("mongoose");

const questionSchema = new mongoose.Schema({
  question: String,
  explanation: String,
  phase: Number,
  path: [String],
  faqs: String,
  answerExplanationRage: [String],
  "Explanation Item Mark 0-20 (Poor)": String,
  "Explanation Item Mark 20-40 (Below Average)": String,
  "Explanation Item Mark 40-60 (Average)": String,
  "Explanation Item Mark 60-80 (Above Average)": String,
  "Explanation Item Mark 80-100 (Excellent)": String,
  stage: Number,
  factor: Number,
  index: Number,
  ItemPurpose: String,
});

const question = mongoose.model("Question", questionSchema);
module.exports = question;
