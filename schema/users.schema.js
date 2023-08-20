const { default: mongoose } = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
});

const user = mongoose.model("User", userSchema);
module.exports = user;
