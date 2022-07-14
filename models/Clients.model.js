const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// const {Schema, model} = require("mongoose"); ???

const clientsSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    maxLength: 64,
    minLength: 2,
  },
  email: { type: String, required: true },

  answers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Answers",
    },
  ],
});

const ClientsModel = mongoose.model("Clients", clientsSchema);
module.exports = ClientsModel;
