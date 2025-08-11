import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  name: String,
  age: Number,
  city: String
});

const student = mongoose.model("Students", studentSchema);

export default student;
