const { default: mongoose } = require("mongoose");

const phasesSchema = new mongoose.Schema({
  name: String,
  number: {
    type: Number,
    unique: true,
  },
});

const phases = mongoose.model("Phase", phasesSchema);
module.exports = phases;
