const { default: mongoose } = require("mongoose");

const stagesSchema = new mongoose.Schema({
  name: String,
  number: {
    type: Number,
    unique: true,
  },
  phase: Number,
});

const stages = mongoose.model("Stage", stagesSchema);
module.exports = stages;
