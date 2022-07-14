//importing express
const express = require("express");
//importing express' Router function
const router = require("express").Router();
//importing ClientsModel
const ClientsModel = require("../models/Clients.model");

//router functions

//create

router.post("/create-clients", async (req, res) => {
  try {
    const newClient = await ClientsModel.create(req.body);

    return res.status(201).json(newClient);
  } catch (error) {
    return res.status(500).json({ msg: error });
  }
});

//read - all

router.get("/all-clients", async (req, res) => {
  try {
    const allClients = await ClientsModel.find();

    return res.status(200).json(allClients);
  } catch (error) {
    return res.status(500).json({ msg: error });
  }
});

//read details

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const client = await ClientsModel.findById(id).populate("answers");

    return res.status(200).json(client);
  } catch (error) {
    return res.status(500).json({ msg: error });
  }
});

//edit

router.put("/edit-client/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const clientEdited = await ClientsModel.findByIdAndUpdate(
      id,
      { ...req.body },
      { new: true }
    );

    return res.status(200).json(clientEdited);
  } catch (error) {
    return res.status(500).json({ msg: error });
  }
});

//delete

router.delete("/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const clientDeleted = await ClientsModel.findByIdAndDelete(id);

    return res.status(200).json(clientDeleted);
  } catch (error) {
    return res.status(500).json({ msg: error });
  }
});

module.exports = router;

//importing data.js
// const data = require("../data");
//importing uuid
// const { v4: uuidv4 } = require("uuid");
