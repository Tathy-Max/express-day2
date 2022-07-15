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

//read - all

router.get("/all-answers", async (req, res) => {
  try {
    const allAnswers = await AnswersModel.find();

    return res.status(200).json(allAnswers);
  } catch (error) {
    return res.status(500).json({ msg: error });
  }
});

//read details

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const answerDetail = await AnswersModel.findById(id).populate("clients");

    return res.status(200).json(answerDetail);
  } catch (error) {
    return res.status(500).json({ msg: error });
  }
});

//edit

router.put("/edit-answer/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const answerEdited = await AnswersModel.findByIdAndUpdate(
      id,
      { ...req.body },
      { new: true }
    );

    return res.status(200).json(answerEdited);
  } catch (error) {
    return res.status(500).json({ msg: error });
  }
});

//delete

router.delete("/delete-answer/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const answerDeleted = await AnswersModel.findByIdAndDelete(id);
    await ClientsModel.findByIdAndUpdate(answerDeleted.client, {
      $pull: { answers: answerDeleted._id },
    });

    return res.status(200).json(answerDeleted);
  } catch (error) {
    return res.status(500).json({ msg: error });
  }
});

module.exports = router;
