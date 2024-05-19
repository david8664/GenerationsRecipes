import api from "@/lib/apiCalls";

const getPasswordResetTokenByToken = async (token: string) => {
  try {
    const passwordResetToken = await api.get("/auth/passwordResetToken", {
      searchType: "token",
      value: token,
    });
    return passwordResetToken;
  } catch (error) {
    return null;
  }
};

const getPasswordResetTokenByEmail = async (email: string) => {
  try {
    const passwordResetToken = api.get("/auth/passwordResetToken", {
      searchType: "email",
      value: email,
    });
    return passwordResetToken;
  } catch (error) {
    return null;
  }
};

export { getPasswordResetTokenByToken, getPasswordResetTokenByEmail };
