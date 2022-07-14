const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const answersSchema = new Schema({
  answers: {
    question1: { type: String, required: true, enum: ["A", "B", "C"] },
    question2: { type: String, required: true, enum: ["A", "B", "C"] },
    question3: { type: String, required: true, enum: ["A", "B", "C"] },
    question4: { type: String, required: true, enum: ["A", "B", "C"] },
    question5: { type: String, required: true, enum: ["A", "B", "C"] },
    question6: { type: String, required: true, enum: ["A", "B", "C"] },
    question7: { type: String, required: true, enum: ["A", "B", "C"] },
  },

  result: { type: String },

  clients: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Clients",
  },
});

const AnswersModel = mongoose.model("Answers", answersSchema);
module.exports = AnswersModel;
