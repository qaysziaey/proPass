"use server";

import User from "../modals/user.modal";
import connectDB from "../../lib/mongo/connectDB";

export async function createUser(user) {
  try {
    await connectDB();
    const newUser = await User.create(user); 
    return JSON.parse(JSON.stringify(newUser));
  } catch (error) {
    console.log(error);
    return null;
  }
}
