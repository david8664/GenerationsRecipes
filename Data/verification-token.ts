import { db } from "@/lib/db";

async function getVerificationTokenByEmail(email: string) {
  try {
    const verificationToken = await db.verificationToken.findFirst({
      where: { token: email },
    });

    return verificationToken;
  } catch (error) {
    return null;
  }
}
async function getVerificationTokenByToken(token: string) {
  try {
    const verificationToken = await db.verificationToken.findUnique({
      where: { token },
    });

    return verificationToken;
  } catch (error) {
    return null;
  }
}
export { getVerificationTokenByEmail, getVerificationTokenByToken };
