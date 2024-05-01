import { connectDB } from "../../../lib/mongo/connectDB";
import { Credential } from "../../../lib/models/Credential";
import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
// Get all credentials
export async function GET() {
  try {
    const { userId: clerkId } = auth();
    await connectDB();
    const credentials = await Credential.find({ clerkId });
    return NextResponse.json({ credentials }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ msg: "Error while fetching credentials" });
  }
}
