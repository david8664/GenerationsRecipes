import api from "@/lib/apiCalls";
import { db } from "@/lib/db";

async function getVerificationTokenByEmail(email: string) {
  try {
    const verificationToken = await api.get("/auth/verificationToken", {
      searchType: "email",
      value: email,
    });

    return verificationToken;
  } catch (error) {
    return null;
  }
}
async function getVerificationTokenByToken(token: string) {
  try {
    const verificationToken = await api.get("/auth/verificationToken", {
      searchType: "token",
      value: token,
    });

    return verificationToken;
  } catch (error) {
    return null;
  }
}
export { getVerificationTokenByEmail, getVerificationTokenByToken };
