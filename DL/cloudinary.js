import { v2 as cloudinary } from "cloudinary";
const connectDb = async () => {
  try {
    cloudinary.config({
      cloud_name: process.env.cloud_name,
      api_key: process.env.api_key,
      api_secret: process.env.api_secret,
    });
    console.log("Connected successfully to cloudinary");
  } catch (err) {
    console.log("cloudinary Error:", err.message);
  }
};

export default connectDb;
