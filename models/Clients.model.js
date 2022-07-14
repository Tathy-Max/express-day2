const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const clientsSchema = new Schema({
  name: { type: String, required: true },
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
