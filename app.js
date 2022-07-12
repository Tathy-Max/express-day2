const express = require("express");
const app = express();

app.use(express.json());

app.post("/create", () => {});

app.listen(4000, () => {
  console.log("servidor rodando na porta 4000");
});
