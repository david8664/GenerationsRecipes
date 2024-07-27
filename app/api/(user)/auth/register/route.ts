import { NextResponse } from "next/server";
import { RegisterSchema } from "@/schemas";
import { db } from "@/lib/db";
import bcrypt from "bcryptjs";
import cloudinaryService from "@/Functions/utils/cloudinaryService";
import type { NextRequest } from "next/server";
import { generateVerificationToken } from "@/lib/tokens";
import sendVerificationEmail from "@/lib/email/sendVerificationEmail";

export const POST = async (req: NextRequest) => {
  try {
    const validatedFields = RegisterSchema.safeParse(await req.json());

    if (!validatedFields.success) {
      throw { message: "Please check the provided information and try again." };
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
      throw {
        message:
          "The nickname you've chosen is already in use. Please choose a different one.",
      };

    const emailExists = await db.user.findUnique({ where: { email } });
    if (emailExists)
      throw {
        message:
          "The email address you've provided is already registered. Please use a different email address.",
      };

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
    const hashCity = await bcrypt.hash(city || "", SALT_ROUNDS);
    const hashNeighborhood = await bcrypt.hash(neighborhood || "", SALT_ROUNDS);
    const hashStreet = await bcrypt.hash(street || "", SALT_ROUNDS);
    const hashPhone = await bcrypt.hash(phone || "", SALT_ROUNDS);

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
        role: "USER"
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
  } catch (error: { message: string } | any) {
    if (error?.message) {
      return NextResponse.json({ message: error.message }, { status: 400 });
    }

    return NextResponse.json(
      { message: "An unexpected error occurred. Please try again later." },
      { status: 500 }
    );
  }
};
