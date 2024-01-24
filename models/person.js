import mongoose from "mongoose";

const Person = mongoose.Schema({
  name: String,
  mail: String,
  age: Number,
});

export default mongoose.model("persons", Person);
