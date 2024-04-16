import { db } from "@/lib/db";
import { User } from "@prisma/client";
type UserModel = User;

const getUserById = async (id: string): Promise<UserModel | null> => {
  try {
    const user = await db.user.findUnique({
      where: {
        id,
      },
    });
    return user;
  } catch {
    return null;
  }
};

const getUserByNickname = async (
  nickname: string
): Promise<UserModel | null> => {
  try {
    const user = await db.user.findUnique({
      where: {
        nickname,
      },
    });
    return user;
  } catch {
    return null;
  }
};

const getUserByEmail = async (email: string): Promise<UserModel | null> => {
  try {
    const user = await db.user.findUnique({
      where: {
        email,
      },
    });
    return user;
  } catch {
    return null;
  }
};

//  const getAllUsersByRole = async (role: string) => {
//   try {
//      const users = await db.user.findMany({
//        where: {
//          role,
//        },
//      });
//      return users;
//   } catch {
//      return null;
//   }
//  };

const getAllUsersByCity = async (city: string): Promise<UserModel[] | null> => {
  try {
    const users = await db.user.findMany({
      where: {
        city,
      },
    });
    return users;
  } catch {
    return null;
  }
};

const getAllUsersByNeighborhood = async (
  neighborhood: string
): Promise<UserModel[] | null> => {
  try {
    const users = await db.user.findMany({
      where: {
        neighborhood,
      },
    });
    return users;
  } catch {
    return null;
  }
};

const getUserByStreet = async (street: string): Promise<UserModel | null> => {
  try {
    const user = await db.user.findUnique({
      where: {
        street,
      },
    });
    return user;
  } catch {
    return null;
  }
};

const getUserByPhone = async (phone: string): Promise<UserModel | null> => {
  try {
    const user = await db.user.findUnique({
      where: {
        phone,
      },
    });
    return user;
  } catch {
    return null;
  }
};

const getAllUsersByCreationDate = async (
  creationDate: string
): Promise<UserModel[] | null> => {
  try {
    const users = await db.user.findMany({
      where: {
        creationDate,
      },
    });
    return users;
  } catch {
    return null;
  }
};

const getAllUsersByLastLogin = async (
  lastLogin: string
): Promise<UserModel[] | null> => {
  try {
    const users = await db.user.findMany({
      where: {
        lastLogin,
      },
    });
    return users;
  } catch {
    return null;
  }
};

const getAllUsersByEmailVerified = async (
  emailVerified: string
): Promise<UserModel[] | null> => {
  try {
    const users = await db.user.findMany({
      where: {
        emailVerified,
      },
    });
    return users;
  } catch {
    return null;
  }
};

const getAllUsersByIsActive = async (
  isActive: boolean
): Promise<UserModel[] | null> => {
  try {
    const users = await db.user.findMany({
      where: {
        isActive,
      },
    });
    return users;
  } catch {
    return null;
  }
};

/**
 * Exported functions for fetching user data.
 * @namespace userFunctions
 */
const userModel = {
  /**
   * Fetches a single user by ID.
   * @function
   * @name getById
   * @param {string} id - The ID of the user.
   * @returns {Promise<UserModel | null>} A promise that resolves to the user or null.
   */
  getById: getUserById,

  /**
   * Fetches a single user by nickname.
   * @function
   * @name getByNickname
   * @param {string} nickname - The nickname of the user.
   * @returns {Promise<UserModel | null>} A promise that resolves to the user or null.
   */
  getByNickname: getUserByNickname,

  /**
   * Fetches a single user by email.
   * @function
   * @name getByEmail
   * @param {string} email - The email of the user.
   * @returns {Promise<UserModel | null>} A promise that resolves to the user or null.
   */
  getByEmail: getUserByEmail,

  /**
   * Fetches a single user by street.
   * @function
   * @name getByStreet
   * @param {string} street - The street of the user.
   * @returns {Promise<UserModel | null>} A promise that resolves to the user or null.
   */
  getByStreet: getUserByStreet,

  /**
   * Fetches a single user by phone.
   * @function
   * @name getByPhone
   * @param {string} phone - The phone number of the user.
   * @returns {Promise<UserModel | null>} A promise that resolves to the user or null.
   */
  getByPhone: getUserByPhone,

  //   /**
  //  * Fetches all users by role.
  //  * @function
  //  * @name getAllByRole
  //  * @param {string} role - The role of the users.
  //  * @returns {Promise<UserModel[] | null>} A promise that resolves to an array of users or null.
  //  */
  //   getAllByRole: getAllUsersByRole,

  /**
   * Fetches all users by city.
   * @function
   * @name getAllByCity
   * @param {string} city - The city of the users.
   * @returns {Promise<UserModel[] | null>} A promise that resolves to an array of users or null.
   */
  getAllByCity: getAllUsersByCity,

  /**
   * Fetches all users by neighborhood.
   * @function
   * @name getAllByNeighborhood
   * @param {string} neighborhood - The neighborhood of the users.
   * @returns {Promise<UserModel[] | null>} A promise that resolves to an array of users or null.
   */
  getAllByNeighborhood: getAllUsersByNeighborhood,

  /**
   * Fetches all users by creation date.
   * @function
   * @name getAllByCreationDate
   * @param {string} creationDate - The creation date of the users.
   * @returns {Promise<UserModel[] | null>} A promise that resolves to an array of users or null.
   */
  getAllByCreationDate: getAllUsersByCreationDate,

  /**
   * Fetches all users by last login.
   * @function
   * @name getAllByLastLogin
   * @param {string} lastLogin - The last login date of the users.
   * @returns {Promise<UserModel[] | null>} A promise that resolves to an array of users or null.
   */
  getAllByLastLogin: getAllUsersByLastLogin,

  /**
   * Fetches all users by email verification status.
   * @function
   * @name getAllByEmailVerified
   * @param {boolean} emailVerified - The email verification status of the users.
   * @returns {Promise<UserModel[] | null>} A promise that resolves to an array of users or null.
   */
  getAllByEmailVerified: getAllUsersByEmailVerified,

  /**
   * Fetches all users by active status.
   * @function
   * @name getAllByIsActive
   * @param {boolean} isActive - The active status of the users.
   * @returns {Promise<UserModel[] | null>} A promise that resolves to an array of users or null.
   */
  getAllByIsActive: getAllUsersByIsActive,
};
export default userModel;
