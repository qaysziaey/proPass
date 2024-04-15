import { connectDB } from "./connectDB";
import { User } from "../models/User";
export async function createUserProfileIfNotExists({ clerkId, email }) {
  await connectDB();
  // TODO User.updateOne() with upsert option
  const existingUser = await User.findOne({ clerkId });
  if (existingUser) {
    return;
  }
  const user = new User({
    clerkId: clerkId,
    email: email,
  });
  await user.save();
}
