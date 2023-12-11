import { NextResponse } from "next/server";
import cloudDB from "../../../../DL/cloudinary";
import { v2 as cloudinary } from "cloudinary";

export async function GET() {
  try {
    cloudDB();
    cloudinary.uploader.upload(
      "https://cdn.pixabay.com/photo/2017/09/22/19/48/tomato-2776824_1280.jpg",
      { public_id: "olympic_flag" },
      function (error, result) {
        console.log(error, result);
      }
    );
    NextResponse.json({ get: "create" });
  } catch (error) {
    console.log(error || error.message);
  }
}
