const express = require("express");
const router = express.Router();
const AnswersModel = require("../models/Answers.model");
const ClientsModel = require("../models/Clients.model");

//create

router.post("/create-answers/:idClient", async (req, res) => {
  const { idClient } = req.params;
  try {
    const newAnswer = await AnswersModel.create({
      ...req.body,
      clients: idClient,
    });
    await ClientsModel.findByIdAndUpdate(idClient, {
      $push: { answers: newAnswer._id },
    });

    return res.status(201).json(newAnswer);
  } catch (error) {
    return res.status(500).json({ msg: error });
  }
});

// //read - all

// router.get("/all-clients", async (req, res) => {
//   try {
//     const allClients = await ClientsModel.find();

//     return res.status(200).json(allClients);
//   } catch (error) {
//     return res.status(500).json({ msg: error });
//   }
// });

// //read details

// router.get("/:id", async (req, res) => {
//   try {
//     const { id } = req.params;

//     const client = await ClientsModel.findById(id).populate("answers");

//     return res.status(200).json(client);
//   } catch (error) {
//     return res.status(500).json({ msg: error });
//   }
// });

// //edit

// router.put("/edit-client/:id", async (req, res) => {
//   try {
//     const { id } = req.params;

//     const clientEdited = await ClientsModel.findByIdAndUpdate(
//       id,
//       { ...req.body },
//       { new: true }
//     );

//     return res.status(200).json(clientEdited);
//   } catch (error) {
//     return res.status(500).json({ msg: error });
//   }
// });

// //delete

// router.delete("/delete/:id", async (req, res) => {
//   try {
//     const { id } = req.params;

//     const clientDeleted = await ClientsModel.findByIdAndDelete(id);

//     return res.status(200).json(clientDeleted);
//   } catch (error) {
//     return res.status(500).json({ msg: error });
//   }
// });

module.exports = router;
