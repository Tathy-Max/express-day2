const mongoose = require("mongoose");

async function connect() {
  try {
    const dbConnection = await mongoose.connect(process.env.MONGODB_URI);
    console.log("DB connected to:", dbConnection.connection.name);
  } catch (error) {
    console.error("DB connection error", error);
  }
}

module.exports = connect;
