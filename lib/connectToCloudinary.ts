// Import the Cloudinary SDK
import { v2 as cloudinary } from "cloudinary";

// Define the Cloudinary configuration options
interface CloudinaryConfig {
  cloud_name: string;
  api_key: string;
  api_secret: string;
  secure: boolean;
}

// Function to connect to Cloudinary
const connectToCloudinary = (): void => {
  try {
    // Validate environment variables
    const cloudName = process.env.CLOUDINARY_CLOUD_NAME;
    const apiKey = process.env.CLOUDINARY_API_KEY;
    const apiSecret = process.env.CLOUDINARY_API_SECRET;

    if (!cloudName || !apiKey || !apiSecret) {
      throw new Error(
        "Cloudinary configuration is incomplete. Please check your environment variables."
      );
    }

    // Configure the Cloudinary SDK
    const config: CloudinaryConfig = {
      cloud_name: cloudName,
      api_key: apiKey,
      api_secret: apiSecret,
      secure: true,
    };

    cloudinary.config(config);
  } catch (err: any) {
    throw err.message;
  }
};
export default connectToCloudinary;
