import mongoose from "mongoose";
const MONGO_URL = process.env.MONGO_URL;

const connectDb = async () => {
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

export default connectDb;
