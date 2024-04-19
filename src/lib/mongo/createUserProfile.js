import { connectDB } from "./connectDB";
import { User } from "../models/User";
export async function createUserProfileIfNotExists({
  clerkId,
  email,
  imageUrl,
  firstName,
  lastName,
  username,
  credentials = [],
}) {
  await connectDB();
  // TODO User.updateOne() with upsert option
  const existingUser = await User.findOne({ clerkId });
  if (existingUser) {
    return;
  }
  const user = new User({
    clerkId: clerkId,
    email: email,
    username: username,
    photo: imageUrl,
    firstName: firstName,
    lastName: lastName,
    credentials: credentials,
  });
  await user.save();
}
