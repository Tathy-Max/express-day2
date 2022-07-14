const mongoose = require("mongoose");

async function connect() {
  try {
    const dbConnect = await mongoose.connect(process.env.MONGODB_URI);
    console.log("DB connected to:", dbConnect.connection.name); // quem e esse name?
  } catch (error) {
    console.error("DB connection error", error);
  }
}

module.exports = connect;
