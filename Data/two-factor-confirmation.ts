import api from "@/lib/apiCalls";

const getTwoFactorConfirmationByUserId = async (userId: string) => {
  try {
    const twoFactorConfirmation = await api.get("/auth/twoFactorConfirmation", {
      userId,
    });
    return twoFactorConfirmation;
  } catch (error) {
    return null;
  }
};
export { getTwoFactorConfirmationByUserId };
