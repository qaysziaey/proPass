import { User } from "../../lib/models/User";
import { connectDB } from "../../lib/mongo/connectDB";

export async function getUserByClerkId(clerkId) {
  await connectDB();
  return await User.findOne({ clerkId });
}

export async function getUserList() {
  try {
    await connectDB();
    // Call the list method from clerkClient.users
    // const userList = await clerkClient.users.list();
    const users = await User.find();
    // Return the list of users
    // return userList;
    return users;
  } catch (error) {
    // Handle errors if any
    console.error("Error fetching user list:", error);
    throw error; // Re-throw the error to handle it in the caller
  }
}
