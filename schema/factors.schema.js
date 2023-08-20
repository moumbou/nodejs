const { default: mongoose } = require("mongoose");

const factorsSchema = new mongoose.Schema({
  name: String,
  number: {
    type: Number,
    unique: true,
  },
  phase: Number,
});

const factors = mongoose.model("Factor", factorsSchema);
module.exports = factors;
