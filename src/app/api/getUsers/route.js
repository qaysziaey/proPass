import { connectDB } from "../../../lib/mongo/connectDB";
import { User } from "../../../lib/models/User";
import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";

// Get all Users
// export async function GET() {
//   try {
//     await connectDB();
//     const users = await User.find();
//     return NextResponse.json({ users }, { status: 200 });
//   } catch (err) {
//     return NextResponse.json({ msg: "Error while fetching Users." });
//   }
// }

export async function GET() {
  const { userId } = auth();

  if (!userId) {
    return NextResponse.json({ msg: "Unauthorized" });
  }

  return NextResponse.json({ userId }, { status: 200 });
}

export async function POST() {
  try {
    // Connect to the database
    await connectDB();
    const { userId } = auth();

    // Get the user data from the request body
    const userData = userId;

    // Save the user to the database
    const newUser = new User(userData);
    await newUser.save();

    // Return success response
    return NextResponse.json(
      { msg: "User added successfully" },
      { status: 200 },
    );
  } catch (err) {
    // Return error response if something goes wrong
    return NextResponse.json({ msg: "Error while adding user." });
  }
}
