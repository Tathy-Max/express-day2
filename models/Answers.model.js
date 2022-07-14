const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const answersSchema = new Schema({
  answers: [
  question1: { type: String, required: true },
  question2: { type: String, required: true },
  question3: { type: String, required: true },
  question4: { type: String, required: true },
  question5: { type: String, required: true },
  question6: { type: String, required: true },
  question7: { type: String, required: true },
  result: { type: String }]

  clients: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Clients",
  },
});

const AnswersModel = mongoose.model("Answers", answersSchema);
module.exports = AnswersModel;
