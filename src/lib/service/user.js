import { User } from "../../lib/models/User";
import { connectDB } from "../../lib/mongo/connectDB";

export async function getUserByClerkId(clerkId) {
  await connectDB();
  return await User.findOne({ clerkId });
}
