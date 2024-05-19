import connectToCloudinary from "@/lib/connectToCloudinary";
import { v2 as cloudinary } from "cloudinary";

// Define the types for the parameters of your functions
interface UploadImageParams {
  photo: string; // Assuming 'photo' is a file path or URL
  photoName: string;
  tags: string[];
}

interface DeleteImageParams {
  publicId: string;
}

const cloudinaryService = {
  uploadImage: async ({
    photo,
    photoName,
    tags,
  }: UploadImageParams): Promise<string> => {
    try {
      await connectToCloudinary();
      const imageData = await cloudinary.uploader.upload(photo, {
        folder: `${process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_FOLDER}/Profiles`,
        public_id: photoName,
        resource_type: "image",
        tags: tags,
      });
      return imageData.secure_url;
    } catch (error) {
      throw error;
    }
  },

  deleteImage: async ({ publicId }: DeleteImageParams): Promise<void> => {
    try {
      await cloudinary.uploader.destroy(publicId);
    } catch (error) {
      throw error;
    }
  },
};

export default cloudinaryService;
