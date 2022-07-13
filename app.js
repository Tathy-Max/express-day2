//importing express
const express = require("express");
//initializing express
const app = express();
//calling express.json method to read and return json files
app.use(express.json());

//creating routes
const clientsRouter = require("./routes/clients.routes");
app.use("/clients", clientsRouter);

const adressessRouter = require("./routes/adresses.routes");
app.use("/adresses", adressessRouter);

//creating CRUD

app.post("/create", () => {});

//server port listening
app.listen(4000, () => {
  console.log("server running at port 4000");
});
