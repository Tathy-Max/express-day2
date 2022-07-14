//importing express
const express = require("express");
//importing express' Router function
const router = require("express").Router();
//importing data.js
// const data = require("../data");
//importing uuid
// const { v4: uuidv4 } = require("uuid");

//router functions
//create
router.post("/create-client", (req, res) => {
  data.push({ ...req.body, id: uuidv4() });
  return res
    .status(201)
    .json({ message: "client was added successfully", array: data });
});

//read
router.get("/read", (req, res) => {
  return res.status(200).json(data);
});

//creating an id
router.get("/details/:id", (req, res) => {
  const { id } = req.params;

  const document = data.filter((currentDocument) => currentDocument.id === id);

  return res.status(200).json(document[0]);
});

//edit
router.put("/edit/:id", (req, res) => {
  const { id } = req.params;

  data.forEach((currentDocument, i) => {
    if (currentDocument.id === id) {
      data[i] = { ...req.body, id: currentDocument.id };
    }
  });

  const newDocument = data.filter(
    (currentDocument) => currentDocument.id === id
  );

  return res.status(200).json(newDocument[0]);
});

//delete
router.delete("/delete/:id", (req, res) => {
  const { id } = req.params;

  const document = data.filter((currentDocument) => currentDocument.id === id);

  const index = data.indexOf(document[0]);

  data.splice(index, 1);

  return res.status(200).json(data);
});

module.exports = router;
