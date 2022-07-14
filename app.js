//importing express
const express = require("express");
//initializing express
const app = express();
//calling express.json method to read and return json files
app.use(express.json());
//setting dotEnv
require("dotenv").config();
//setting DB
const connect = require("./config/db.config");
connect();

//creating routes
const clientsRouter = require("./routes/clients.routes");
app.use("/clients", clientsRouter);

const answersRouter = require("./routes/answers.routes");
app.use("/answers", answersRouter);

//server port listening
app.listen(Number(process.env.PORT), () => {
  console.log(`server up and running http://localhost:${process.env.PORT}`);
});
