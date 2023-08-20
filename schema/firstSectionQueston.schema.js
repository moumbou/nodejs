const mongoose = require("mongoose");

const firstSectionQuestionSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
  },
  details: String,
  answers: [
    {
      content: String,
      index: Number,
      detail: String,
    },
  ],
  category: {
    type: String,
    required: true,
  },
  factor: [Number],
  phase: Number,
});

const FirstSection = mongoose.model("firstSection", firstSectionQuestionSchema);
module.exports = FirstSection;
