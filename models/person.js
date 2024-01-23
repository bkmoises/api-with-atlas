const mongoose = require("mongoose");

const Person = mongoose.Schema({
  name: String,
  maiL: String,
  age: Number,
});

module.exports = mongoose.model("persons", Person);
