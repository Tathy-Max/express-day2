//importing express
const express = require("express");
//importing express' Router function
const router = require("express").Router();
//importing data.js
const data = require("../data");
//importing uuid
const { v4: uuidv4 } = require("uuid");

//router functions
router.post("/create-client", (req, res) => {
  data.push({ ...req.body, id: uuidv4() });
  return res
    .status(201)
    .json({ message: "client was added successfully", array: data });
});

router.get("/read", (req, res) => {
  return res.status(200).json(data);
});

module.exports = router;
