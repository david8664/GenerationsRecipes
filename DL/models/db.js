const mongoose = require("mongoose"),
  MONGO_URL = process.env.MONGO_URL;

const connect = async () => {
  try {
    await mongoose.connect(MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connection success, State:", mongoose.connection.readyState);
  } catch (err) {
    console.log("Mongo Error:", err.message);
  }
};

module.exports = { connect };
