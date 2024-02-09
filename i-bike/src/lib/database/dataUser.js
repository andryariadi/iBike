import { connectToDB } from ".";
import User from "./userSchema";

export const getUsers = async () => {
  try {
    connectToDB();

    const users = await User.find();
    return users;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to get users!");
  }
};

export const getUserById = async (id) => {
  try {
    connectToDB();

    const user = await User.findById(id);
    return user;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to get detail user!");
  }
};
