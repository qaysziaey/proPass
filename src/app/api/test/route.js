import { NextResponse } from "next/server";
import { connectDB } from "../../../lib/mongo/connectDB";
import { User } from "../../../lib/models/User";
import { auth, currentUser } from "@clerk/nextjs";

export async function GET() {
  const user = await currentUser();
  console.log(user);
  return NextResponse.json({ message: "Hello from Test" });
}

export async function POST(req) {
  try {
    const body = await req.json();

    await connectDB();
    const user = new User({
      clerkId: body.clerkId,
      email: body.email,
    });
    await user.save();
    return NextResponse.json({ msg: "ok" });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ msg: "Error" }, { status: 500 });
  }
}
