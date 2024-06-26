export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import { connectDB } from "../../../lib/mongo/connectDB";
import { User } from "../../../lib/models/User";
import { currentUser } from "@clerk/nextjs";
import { createUserProfileIfNotExists } from "../../../lib/mongo/createUserProfile";

export async function GET() {
  try {
    const user = await currentUser();
    if (!user) {
      return NextResponse.json({ msg: "user not logged in" }, { status: 401 });
    }
    await connectDB();
    // TODO: make sure to use primary address only!

    await createUserProfileIfNotExists({
      clerkId: user.id,
      email: user.emailAddresses[0].emailAddress,
      username: user.username,
      imageUrl: user.imageUrl,
      firstName: user.firstName,
      lastName: user.lastName,
    });

    console.log(user.username);

    const profile = await User.findOne({ clerkId: user.id });
    console.log("profile", profile);
    return NextResponse.json({ userData: profile }, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ msg: "error" }, { status: 500 });
  }
}
