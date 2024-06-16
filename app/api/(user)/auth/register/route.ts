import { NextResponse } from "next/server";
import { RegisterSchema } from "@/schemas";
import { db } from "@/lib/db";
import bcrypt from "bcryptjs";
import cloudinaryService from "@/Functions/utils/cloudinaryService";
import type { NextRequest } from "next/server";
import { generateVerificationToken } from "@/lib/tokens";
import sendVerificationEmail from "@/lib/email/sendVerificationEmail";

// Custom error class for validation errors
class ValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ValidationError";
  }
}

export const POST = async (req: NextRequest) => {
  try {
    const validatedFields = RegisterSchema.safeParse(await req.json());

    if (!validatedFields.success) {
      throw new ValidationError(
        "Please check the provided information and try again."
      );
    }

    const {
      fullName,
      nickname,
      email,
      password,
      city,
      neighborhood,
      street,
      phone,
      profilePicture,
    } = validatedFields.data;

    const nicknameExists = await db.user.findUnique({ where: { nickname } });
    if (nicknameExists)
      throw new ValidationError(
        "The nickname you've chosen is already in use. Please choose a different one."
      );

    const emailExists = await db.user.findUnique({ where: { email } });
    if (emailExists)
      throw new ValidationError(
        "The email address you've provided is already registered. Please use a different email address."
      );

    let uploadedProfilePicture = null;
    if (profilePicture) {
      uploadedProfilePicture = await cloudinaryService.uploadImage({
        photo: profilePicture,
        photoName: nickname,
        tags: ["profile"],
      });
    }

    const SALT_ROUNDS = Number(process.env.SALT_ROUNDS);
    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);
    const hashCity = city ? await bcrypt.hash(city, SALT_ROUNDS) : "";
    const hashNeighborhood = await bcrypt.hash(
      neighborhood as string,
      SALT_ROUNDS
    );
    const hashStreet = await bcrypt.hash(street as string, SALT_ROUNDS);
    const hashPhone = await bcrypt.hash(phone as string, SALT_ROUNDS);

    await db.user.create({
      data: {
        fullName,
        nickname,
        password: hashedPassword,
        email,
        city: hashCity,
        neighborhood: hashNeighborhood,
        street: hashStreet,
        phone: hashPhone,
        image: uploadedProfilePicture,
      },
    });
    const verificationToken = await generateVerificationToken(email);

    sendVerificationEmail(verificationToken.email, verificationToken.token);

    return NextResponse.json(
      {
        message:
          "Your account has been successfully created. Confirmation email sent!",
      },
      { status: 201 }
    );
  } catch (error) {
    if (error instanceof ValidationError) {
      return NextResponse.json({ message: error.message }, { status: 400 });
    }
    return NextResponse.json(
      { message: "An unexpected error occurred. Please try again later." },
      { status: 500 }
    );
  }
};
