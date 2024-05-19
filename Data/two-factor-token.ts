import api from "@/lib/apiCalls";

const getTwoFactorTokenByToken = async (token: string) => {
  try {
    const twoFactorToken = await api.get("/auth/twoFactorToken", {
      searchType: "token",
      value: token,
    });
    return twoFactorToken;
  } catch (error) {
    return null;
  }
};

const getTwoFactorTokenByEmail = async (email: string) => {
  try {
    const twoFactorToken = await api.get("/auth/twoFactorToken", {
      searchType: "email",
      value: email,
    });
    return twoFactorToken;
  } catch (error) {
    return null;
  }
};

export { getTwoFactorTokenByToken, getTwoFactorTokenByEmail };
