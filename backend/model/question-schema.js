// const mongoose = require("mongoose");

// const questionSchema = new mongoose.Schema({
//     question: String,
//     options: [String],
//     answer: String,
// });

// const Question = mongoose.model('Question', questionSchema);

// module.exports = Question;

const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  question: { type: String, required: true },
  options: { type: [String], required: true },
  answer: { type: String, required: true },
  difficulty: { type: String, default: "medium" },
  level: { type: Number, default: 1 },
});

const Question = mongoose.model("Question", questionSchema);

module.exports = Question;