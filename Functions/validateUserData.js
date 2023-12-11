const validateUserData = (data) => {
  if (
    data?.email &&
    !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/.test(data?.email)
  )
    throw { msg: "Invalid email", code: 401 };

  if (data?.password?.length === 0 && typeof data?.password !== "string")
    throw { msg: "Invalid password", code: 401 };

  if (data?.fullName && !/^[A-Za-z\s]+$/.test(data?.fullName))
    throw { msg: "Invalid name", code: 401 };

  if (
    data?.phoneNumber &&
    typeof data?.phoneNumber !== "number" &&
    Number.isNaN(data?.phoneNumber)
  )
    throw { msg: "Invalid phone number", code: 401 };

  if (data?.address && typeof data?.address !== "string")
    throw { msg: "Invalid address", code: 401 };

  return true;
};

export default validateUserData;
