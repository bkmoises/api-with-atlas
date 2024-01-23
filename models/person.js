const mongoose = require("mongoose");

const Person = mongoose.Schema({
  name: String,
  mail: String,
  age: Number,
});

module.exports = mongoose.model("persons", Person);
